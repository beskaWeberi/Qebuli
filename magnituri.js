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
const lightboxMain = document.getElementById('lightboxImg');
const lightboxExtras = document.getElementById('lightboxExtras');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxBackdrop = document.getElementById('lightboxBackdrop');

function openLightbox(mainSrc, alt, extra1, extra2) {
  // Set initial main image
  lightboxMain.src = mainSrc;
  lightboxMain.alt = alt;

  lightboxExtras.innerHTML = '';

  // Combine the main photo and extra photos into a single array
  const allImages = [mainSrc, extra1, extra2].filter(Boolean);

  if (allImages.length > 0) {
    lightboxExtras.style.display = 'flex';
    
    allImages.forEach(imgSrc => {
      const img = document.createElement('img');
      img.src = imgSrc;
      img.className = 'lightbox__extra-img';
      
      // Highlight the thumbnail if it matches the currently viewed main image
      if (imgSrc === mainSrc) {
        img.classList.add('is-active');
      }

      img.addEventListener('click', () => {
        // Simple update: Change main image to clicked thumbnail source
        lightboxMain.src = imgSrc;
        
        // Remove active class from all thumbnails and apply to this one
        document.querySelectorAll('.lightbox__extra-img').forEach(el => {
          el.classList.remove('is-active');
        });
        img.classList.add('is-active');
      });

      lightboxExtras.appendChild(img);
    });
  } else {
    lightboxExtras.style.display = 'none';
  }

  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Hook up triggers from your grid
document.querySelectorAll('.product-card__img-wrap img').forEach(img => {
  img.addEventListener('click', () => {
    openLightbox(img.src, img.alt, img.dataset.extra1, img.dataset.extra2);
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