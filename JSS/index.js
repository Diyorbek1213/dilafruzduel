const nav = document.querySelector('.nav-wrap');
const toggle = document.querySelector('.nav-toggle');
const yearNode = document.querySelector('#year');

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('menu-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}
