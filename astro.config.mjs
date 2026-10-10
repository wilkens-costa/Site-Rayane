// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://draluziarayane.vercel.app',
  trailingSlash: 'never',
  // Gera /sobre.html; na Vercel, `cleanUrls` serve em /sobre e redireciona /sobre.html (308)
  build: { format: 'file' },
  // Mantém os espaços entre elementos como no HTML original (ex.: "Dra. Luzia" + "Rayane" no título)
  compressHTML: false,
  integrations: [sitemap()],
});
