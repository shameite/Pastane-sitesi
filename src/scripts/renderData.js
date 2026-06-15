import siteInfo from '../data/site-info.json';
import products from '../data/products.json';
import gallery from '../data/gallery.json';
import testimonials from '../data/testimonials.json';

// Render Site Info
export function renderSiteInfo() {
  document.getElementById('brand-name-nav').innerText = siteInfo.name;
  document.getElementById('about-brand-name').innerText = siteInfo.name;
  document.getElementById('footer-brand-name').innerText = siteInfo.name;
  document.getElementById('copyright-name').innerText = siteInfo.name;

  document.getElementById('contact-address').innerHTML = siteInfo.address;
  document.getElementById('contact-hours').innerText = siteInfo.workingHours;

  const phoneEl = document.getElementById('contact-phone');
  const phoneLink = document.getElementById('contact-phone-link');
  if(phoneEl && phoneLink) {
    phoneEl.innerText = siteInfo.phone;
    phoneLink.href = `tel:${siteInfo.phone.replace(/\s+/g, '')}`;
  }

  const emailEl = document.getElementById('contact-email');
  const emailLink = document.getElementById('contact-email-link');
  if(emailEl && emailLink) {
    emailEl.innerText = siteInfo.email;
    emailLink.href = `mailto:${siteInfo.email}`;
  }

  const whatsappEl = document.getElementById('contact-whatsapp');
  const whatsappLink = document.getElementById('contact-whatsapp-link');
  const navWhatsapp = document.getElementById('nav-whatsapp-btn');
  const floatingWhatsapp = document.getElementById('floating-whatsapp');
  
  const waUrl = `https://wa.me/${siteInfo.whatsapp}`;

  if(whatsappEl && whatsappLink) {
    whatsappEl.innerText = siteInfo.phone;
    whatsappLink.href = waUrl;
  }
  if(navWhatsapp) navWhatsapp.href = waUrl;
  if(floatingWhatsapp) floatingWhatsapp.href = waUrl;
}

// Render Products
export function renderProducts() {
  const container = document.getElementById('products-container');
  if(!container) return;

  products.forEach((product, index) => {
    const delay = index * 100;
    const card = document.createElement('div');
    card.className = 'category-card reveal';
    card.style.transitionDelay = `${delay}ms`;

    card.innerHTML = `
      <div class="category-img">
        <img 
          src="${product.imageUrl}" 
          srcset="${product.imageSrcset}"
          sizes="(max-width: 768px) 100vw, 33vw"
          alt="${product.title}" 
          loading="lazy">
      </div>
      <div class="category-info">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

// Render Gallery
export function renderGallery() {
  const container = document.getElementById('gallery-container');
  if(!container) return;

  gallery.forEach((item, index) => {
    const delay = index * 100;
    const div = document.createElement('div');
    div.className = 'gallery-item reveal';
    div.style.transitionDelay = `${delay}ms`;

    div.innerHTML = `
      <img src="${item.thumbUrl}" alt="${item.alt}" loading="lazy" data-full="${item.fullUrl}" class="lightbox-trigger">
      <div class="gallery-overlay">
        <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
      </div>
    `;
    container.appendChild(div);
  });
}

// Render Testimonials
export function renderTestimonials() {
  const container = document.getElementById('testimonials-container');
  if(!container) return;

  testimonials.forEach((testimonial, index) => {
    const delay = index * 100;
    const card = document.createElement('div');
    card.className = 'testimonial-card reveal';
    card.style.transitionDelay = `${delay}ms`;

    let stars = '';
    for(let i=0; i<5; i++) {
      if(i < testimonial.rating) {
        stars += `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
      } else {
        stars += `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="18" height="18"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
      }
    }

    card.innerHTML = `
      <div class="testimonial-stars">${stars}</div>
      <p class="testimonial-comment">"${testimonial.comment}"</p>
      <h4 class="testimonial-name">- ${testimonial.name}</h4>
    `;
    container.appendChild(card);
  });
}
