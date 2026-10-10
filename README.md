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

```
src/
├── assets/img/        Fotos-mestre; o Astro gera AVIF/WebP em várias larguras no build
├── components/
│   ├── Icon.astro     Ícones SVG embutidos no build (Solar, MDI)
│   ├── Header / BottomNav / Footer
│   ├── home/          Seções da página inicial
│   └── sobre/         Seções da página Sobre
├── data/              Dados únicos: telefone, endereço, CRO, FAQ
├── lib/whatsapp.ts    Links do WhatsApp com mensagem por contexto
├── layouts/           Layout base (head, SEO, Open Graph, GA4)
├── pages/             index, sobre, 404
├── scripts/           Animação de entrada, eventos do GA4, menu ativo
└── styles/            global.css + CSS compartilhado por página
public/                favicon, robots.txt, imagem de compartilhamento
```

- Telefone, endereço e CRO ficam só em `src/data/site.ts`.
- Todo link de WhatsApp usa `waLink()` e tem `data-cta`, que vira o evento `whatsapp_click` no GA4.

## Deploy

Vercel (projeto `draluziarayane`), configurado em `vercel.json`: build do Astro, saída em `dist/`,
URLs sem `.html` (`/sobre.html` redireciona para `/sobre`) e cache longo para `/_astro/*`.
Push no `main` publica em produção; outras branches geram preview.
