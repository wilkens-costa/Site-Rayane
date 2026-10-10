// Destaca na barra inferior (mobile) a seção que está na tela.
const sections = document.querySelectorAll<HTMLElement>('section[id]');
const items = document.querySelectorAll<HTMLAnchorElement>('.nav-bottom__item');

if (items.length > 0) {
  let ticking = false;

  const update = () => {
    let current = '';
    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 250) current = section.id;
    });
    items.forEach((item) => {
      const active = item.getAttribute('href') === `#${current}`;
      item.classList.toggle('is-active', active);
      if (active) item.setAttribute('aria-current', 'location');
      else item.removeAttribute('aria-current');
    });
    ticking = false;
  };

  window.addEventListener(
    'scroll',
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    },
    { passive: true },
  );
}
