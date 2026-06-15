export function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.lightbox-close');

  if(!lightbox || !lightboxImg || !closeBtn) return;

  // Since gallery items are added dynamically, we use event delegation on the container
  const galleryContainer = document.getElementById('gallery-container');
  
  if(galleryContainer) {
    galleryContainer.addEventListener('click', (e) => {
      const trigger = e.target.closest('.gallery-item');
      if (trigger) {
        const img = trigger.querySelector('img.lightbox-trigger');
        if (img) {
          const fullSrc = img.getAttribute('data-full');
          if (fullSrc) {
            lightboxImg.src = fullSrc;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
          }
        }
      }
    });
  }

  // Close lightbox
  const closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    // Clear src after fade out to prevent visual jump
    setTimeout(() => {
      if(!lightbox.classList.contains('active')) {
        lightboxImg.src = '';
      }
    }, 300);
  };

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox) {
      closeLightbox();
    }
  });

  // Escape key support
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
}
