// Gera as imagens-mestre tratadas (duotone, recortes, tratamento quente) em src/assets/img/
// e a imagem de compartilhamento em public/og/. O Astro gera AVIF/WebP em várias larguras
// a partir delas no build. Parâmetros: docs/SISTEMA.md, seção 6.
// Uso (na raiz do projeto): node scripts/imagens.mjs
// Só precisa rodar de novo se uma foto de origem mudar.
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const img = (n) => path.join(raiz, 'src/assets/img', n);
const origem = (n) => path.join(raiz, n);
const MESTRE = { quality: 90, smartSubsample: true };

// Origens que não ficam em src/assets/img (marca do cartão e formatura)
const ASSETS = 'assets-fonte';

const VINHO_900 = [0x2a, 0x09, 0x12];
const CHAMP = [0xb8, 0x98, 0x60];
const LUZ = [0xf7, 0xe9, 0xdf];

/** Cinza → normalize 1–99% → nitidez → gama → curva em S → mapa de cores (2 ou 3 paradas) */
async function mapaDeTons(arquivo, crop, largura, paradas, { gama, peso, nitidez }) {
  const { data, info } = await sharp(origem(arquivo))
    .extract(crop)
    .resize({ width: Math.min(largura, crop.width) })
    .grayscale()
    .normalise({ lower: 1, upper: 99 })
    .sharpen({ sigma: nitidez })
    .raw()
    .toBuffer({ resolveWithObject: true });
  const out = Buffer.alloc(info.width * info.height * 3);
  for (let i = 0, j = 0; i < data.length; i += info.channels, j += 3) {
    let t = Math.pow(data[i] / 255, gama);
    t = t * t * (3 - 2 * t) * peso + t * (1 - peso);
    let a = paradas[0];
    let b = paradas[1];
    let u = t;
    if (paradas.length === 3) {
      [a, b, u] = t < 0.55 ? [paradas[0], paradas[1], t / 0.55] : [paradas[1], paradas[2], (t - 0.55) / 0.45];
    }
    for (let c = 0; c < 3; c++) out[j + c] = Math.round(a[c] + (b[c] - a[c]) * u);
  }
  return sharp(out, { raw: { width: info.width, height: info.height, channels: 3 } });
}

/** Tratamento quente: saturação menor + champagne em soft-light */
async function aquecer(buf, { sat = 0.85, alpha = 0.15 } = {}) {
  const { width, height } = await sharp(buf).metadata();
  return sharp(buf)
    .modulate({ saturation: sat })
    .composite([
      { input: { create: { width, height, channels: 4, background: { r: CHAMP[0], g: CHAMP[1], b: CHAMP[2], alpha } } }, blend: 'soft-light' },
    ]);
}

async function recorte(arquivo, crop, nome, { quente, nitidez } = {}) {
  let buf = await sharp(origem(arquivo)).extract(crop).toBuffer();
  if (nitidez) buf = await sharp(buf).sharpen({ sigma: nitidez }).toBuffer();
  const s = quente ? await aquecer(buf, quente === true ? {} : quente) : sharp(buf);
  await s.webp(MESTRE).toFile(img(nome));
  console.log(nome, `${crop.width}×${crop.height}`);
}

/** Pinta um PNG branco com alfa (marca do cartão) numa cor sólida */
async function pintar(arquivo, largura, cor) {
  const masc = await sharp(origem(arquivo)).resize({ width: largura }).png().toBuffer();
  const { width, height } = await sharp(masc).metadata();
  return sharp({ create: { width, height, channels: 4, background: cor } })
    .composite([{ input: masc, blend: 'dest-in' }])
    .png()
    .toBuffer();
}

const consulta = 'src/assets/img/galeria-consulta.webp'; // 1200×1800

// HOME — A escuta: duotone vinho-900 → rosé claro. Desktop na largura total da foto; celular em 4:5
const duo = { gama: 1.18, peso: 0.6, nitidez: 0.6 };
await (await mapaDeTons(consulta, { left: 0, top: 60, width: 1200, height: 1120 }, 1200, [VINHO_900, LUZ], duo))
  .webp(MESTRE)
  .toFile(img('escuta-duo.webp'));
await (await mapaDeTons(consulta, { left: 300, top: 150, width: 900, height: 1125 }, 900, [VINHO_900, LUZ], duo))
  .webp(MESTRE)
  .toFile(img('escuta-duo-mob.webp'));
console.log('escuta-duo.webp, escuta-duo-mob.webp');

// HOME (placa) e SOBRE (trajetória) — formatura: do capelo até abaixo das mãos, com alfa
await sharp(origem(`${ASSETS}/dra-formatura.webp`))
  .extract({ left: 0, top: 0, width: 900, height: 1150 })
  .webp({ quality: 90, alphaQuality: 95 })
  .toFile(img('formatura-placa.webp'));
console.log('formatura-placa.webp');

// HOME — Onde atendo: o consultório desfocado (luz quente, mármore, escultura de dente), sem a Dra.
await sharp(origem('src/assets/img/consultorio-blur.webp'))
  .extract({ left: 600, top: 0, width: 1000, height: 600 })
  .modulate({ brightness: 1.04, saturation: 0.92 })
  .webp(MESTRE)
  .toFile(img('onde-consultorio.webp'));
console.log('onde-consultorio.webp');

// SOBRE — abertura: a consulta conversada em cor (4:5 no tablet/desktop, 3:2 no celular)
const abre = { quente: { sat: 0.92, alpha: 0.1 } };
await recorte(consulta, { left: 120, top: 40, width: 1080, height: 1350 }, 'sobre-abre.webp', abre);
await recorte(consulta, { left: 90, top: 250, width: 1110, height: 740 }, 'sobre-abre-mob.webp', abre);
// SOBRE — galeria: crachá e detalhe do consultório com o tratamento quente
await recorte('src/assets/img/galeria-cracha.jpg', { left: 0, top: 260, width: 720, height: 760 }, 'sobre-cracha.webp', { quente: true });
await recorte('src/assets/img/galeria-consultorio.webp', { left: 1090, top: 0, width: 467, height: 360 }, 'sobre-sala.webp', {
  quente: true,
  nitidez: 0.6,
});
// SOBRE — bastidor: o retrato com a luz do fotopolimerizador em tritom vinho → champagne → rosé
await (await mapaDeTons('src/assets/img/galeria-retrato.webp', { left: 60, top: 160, width: 1140, height: 1425 }, 1140, [VINHO_900, CHAMP, LUZ], {
  gama: 1.1,
  peso: 0.55,
  nitidez: 0.5,
}))
  .webp(MESTRE)
  .toFile(img('sobre-bastidor.webp'));
console.log('sobre-bastidor.webp');

// Compartilhamento (og:image) 1200×630: vinho do cartão, marca à esquerda, a Dra. à direita
const W = 1200;
const H = 630;
const dra = await sharp(img('dra-luzia-hero.webp')).resize({ height: 610 }).png().toBuffer();
const draW = (await sharp(dra).metadata()).width ?? 0;
const gradiente = `<svg width="${W}" height="${H}"><defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#360c18" stop-opacity=".97"/><stop offset=".45" stop-color="#491023" stop-opacity=".9"/><stop offset=".8" stop-color="#491023" stop-opacity=".35"/><stop offset="1" stop-color="#491023" stop-opacity=".2"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/></svg>`;
const fundo = await sharp(img('consultorio-blur.webp'))
  .resize({ width: W, height: H, fit: 'cover' })
  .composite([{ input: Buffer.from(gradiente) }])
  .png()
  .toBuffer();
const lr = await pintar(`${ASSETS}/monograma-lr-script.png`, 150, '#E8D8A0');
const nome = await pintar(`${ASSETS}/nome-script.png`, 470, '#FFFFFF');
const cro = await pintar(`${ASSETS}/credito-cro.png`, 420, '#E8D8A0');
await sharp(fundo)
  .composite([
    { input: dra, left: W - draW + 30, top: H - 610 },
    { input: lr, left: 92, top: 128 },
    { input: nome, left: 80, top: 312 },
    { input: cro, left: 92, top: 430 },
  ])
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile(origem('public/og/dra-luzia-rayane-og.jpg'));
console.log('public/og/dra-luzia-rayane-og.jpg');
