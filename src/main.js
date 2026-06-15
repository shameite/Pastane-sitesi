import './styles/global.css';
import './styles/components.css';
import { renderSiteInfo, renderProducts, renderGallery, renderTestimonials } from './scripts/renderData.js';
import { initLightbox } from './scripts/lightbox.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Render Dynamic Data
  renderSiteInfo();
  renderProducts();
  renderGallery();
  renderTestimonials();

  // 2. Init Lightbox
  initLightbox();

  // 3. Scroll Progress Bar
  const scrollProgress = document.getElementById('scroll-progress');
  
  // 4. Sticky Navbar & Back to Top
  const header = document.getElementById('header');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    // Scroll Progress
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    if(scrollProgress) scrollProgress.style.width = progress + '%';

    // Sticky Header
    if (scrollTop > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Back to Top Visibility
    if (scrollTop > 500) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  // Back to Top click
  if(backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 5. Scroll Reveal Animation
  // Delay the reveal check slightly to allow DOM to populate from JSON
  setTimeout(() => {
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      const elementVisible = 100;

      reveals.forEach(reveal => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger on load
  }, 100);

  // 6. Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('.nav');

  if(mobileMenuBtn && nav) {
    mobileMenuBtn.addEventListener('click', () => {
      if (nav.style.display === 'block') {
        nav.style.display = 'none';
      } else {
        nav.style.display = 'block';
        nav.style.position = 'absolute';
        nav.style.top = '100%';
        nav.style.left = '0';
        nav.style.width = '100%';
        nav.style.backgroundColor = '#fff';
        nav.style.padding = '20px';
        nav.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
          link.style.color = '#333';
          link.style.display = 'block';
          link.style.marginBottom = '15px';
        });
      }
    });
  }
});
