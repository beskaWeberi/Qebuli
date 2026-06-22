const burgerBtn = document.getElementById('burgerBtn');
const menu = document.getElementById('siteMenu');

function toggleMenu(forceState) {
  const isOpen = forceState !== undefined
    ? forceState
    : !menu.classList.contains('active');

  menu.classList.toggle('active', isOpen);
  burgerBtn.classList.toggle('active', isOpen);
  burgerBtn.setAttribute('aria-expanded', String(isOpen));
  menu.setAttribute('aria-hidden', String(!isOpen));
  document.body.classList.toggle('menu-open', isOpen);
}

burgerBtn.addEventListener('click', () => toggleMenu());

menu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => toggleMenu(false));
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menu.classList.contains('active')) {
    toggleMenu(false);
  }
});