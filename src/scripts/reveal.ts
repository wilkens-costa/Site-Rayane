// Animação de entrada das seções (substitui o GSAP/ScrollTrigger).
// Os elementos com [data-reveal] só ficam ocultos via CSS quando o <html> tem a classe .js,
// então o conteúdo continua visível se este script falhar.
const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        el.classList.add('is-visible');
        observer.unobserve(el);
        // Ao fim da entrada, devolve o elemento ao CSS normal (ex.: efeitos de hover)
        window.setTimeout(() => {
          el.removeAttribute('data-reveal');
          el.classList.remove('is-visible');
        }, 1600);
      }
    },
    // equivale ao "start: top 80%" do ScrollTrigger
    { rootMargin: '0px 0px -20% 0px' },
  );
  elements.forEach((el) => observer.observe(el));
} else {
  elements.forEach((el) => el.classList.add('is-visible'));
}
