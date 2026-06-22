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


 const lightbox = document.getElementById('lightbox');

    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxBackdrop = document.getElementById('lightboxBackdrop');
 
    document.querySelectorAll('.cert-card img').forEach(img => {
      img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });
 
    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
 
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxBackdrop.addEventListener('click', closeLightbox);
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeLightbox();
    });