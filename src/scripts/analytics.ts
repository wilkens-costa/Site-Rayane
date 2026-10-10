// Envia ao GA4 um evento "whatsapp_click" a cada clique num link de WhatsApp da Dra.,
// com a origem do clique (atributo data-cta) para saber quais botões convertem.
import { site } from '../data/site';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

document.addEventListener('click', (event) => {
  const target = event.target instanceof Element ? event.target : null;
  const link = target?.closest<HTMLAnchorElement>('a[href*="wa.me/"]');
  if (!link || !link.href.includes(site.whatsapp)) return;

  window.gtag?.('event', 'whatsapp_click', {
    cta_location: link.dataset.cta ?? 'sem-rotulo',
    page_path: location.pathname,
  });
});
