# Dra. Luzia Rayane — site institucional

Site da **Dra. Luzia Rayane**, cirurgiã-dentista em Fortaleza, CE (CRO-CE 16735).

Produção: https://draluziarayane.vercel.app

## Rodando localmente

```bash
npm install
npm run dev       # servidor de desenvolvimento
npm run build     # checagem de tipos + build de produção em dist/
npm run preview   # serve o build localmente
```

## Estrutura

Sistema visual "Bordô Atelier" (referência: `docs/SISTEMA.md`).

```
src/
├── assets/img/          Fotos-mestre; o Astro gera AVIF/WebP em várias larguras no build
├── components/
│   ├── SpriteSvg        Marca do cartão (LR e nome cursivos) + ícones, incluído uma vez no layout
│   ├── Monograma / NomeCursivo / Icone / Estrelas   Usos do sprite
│   ├── Header / Footer / BarraCta                    Cabeçalho, rodapé e o único CTA fixo do celular
│   ├── BotaoAgendar     Botão de agendamento (WhatsApp) com data-cta
│   ├── Placa            A plaquinha dourada do CTA final (grande na home, "mini" no Sobre)
│   ├── ImagemArte       <picture> com recorte por largura (direção de arte) via astro:assets
│   ├── home/            Uma seção por componente: Hero (+ Confianca), Prazer, Escuta, Tratamentos,
│   │                    PrimeiraConsulta (+ Faq), Depoimentos, OndeAtendo, CtaFinal
│   └── sobre/           Abertura, Filosofia, Trajetoria, Galeria, Oferta, CtaSobre
├── data/                Dados únicos: site (telefone, endereço, CRO, links), tratamentos, depoimentos, FAQ
├── lib/                 whatsapp.ts (links com mensagem por origem) e schema.ts (JSON-LD)
├── layouts/             Layout base (head, SEO, Open Graph, GA4, sprite, cabeçalho, rodapé, barra)
├── pages/               index, sobre, 404
├── scripts/             Revelação ao rolar e evento whatsapp_click do GA4
└── styles/global.css    Tokens, base, tipografia, botões e links (o CSS de cada seção fica no componente)
public/                  favicon, robots.txt, imagem de compartilhamento (og/)
scripts/imagens.mjs      Gera as imagens-mestre tratadas (duotone, recortes) e a og:image
```

- Telefone, endereço e CRO ficam só em `src/data/site.ts`.
- Todo link de WhatsApp usa `waLink()` (cada origem tem a sua mensagem) e tem `data-cta`,
  que vira o evento `whatsapp_click` no GA4.
- Imagens sempre via `astro:assets`; para refazer as tratadas: `node scripts/imagens.mjs`.
- JS só em scripts pequenos dos componentes (menu, cabeçalho, barra, mapa, revelação). Todo o
  conteúdo aparece sem JS e o movimento respeita `prefers-reduced-motion`.

## Deploy

Vercel (projeto `draluziarayane`), configurado em `vercel.json`: build do Astro, saída em `dist/`,
URLs sem `.html` (`/sobre.html` redireciona para `/sobre`) e cache longo para `/_astro/*`.
Push no `main` publica em produção; outras branches geram preview.
