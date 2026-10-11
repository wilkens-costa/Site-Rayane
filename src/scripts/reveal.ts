// Revelação suave ao rolar. Os elementos com [data-revela] só ficam ocultos via CSS quando o
// <html> tem a classe .js e o movimento é permitido, então o conteúdo continua visível sem JS.
// A classe .is-visivel fica no elemento (a plaquinha usa para o brilho atravessar uma vez).
const alvos = document.querySelectorAll<HTMLElement>('[data-revela]');

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entradas) => {
      for (const e of entradas) {
        if (!e.isIntersecting) continue;
        e.target.classList.add('is-visivel');
        io.unobserve(e.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );
  alvos.forEach((el) => io.observe(el));
} else {
  alvos.forEach((el) => el.classList.add('is-visivel'));
}
