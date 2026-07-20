import './style.css';
import { products } from './data/products.js';
import { instagramFeed } from './data/instagram.js';

// DOM Elements
const productGrid = document.getElementById('product-grid');
const instagramMarquee = document.getElementById('instagram-marquee');
const detailModal = document.getElementById('detail-modal');
const modalContent = document.getElementById('modal-content');
const modalClose = document.getElementById('modal-close');
const contactForm = document.getElementById('contact-form');
const categoryFilters = document.getElementById('category-filters');

let currentCategory = 'all';

// 1. Scroll Reveal Animation (Intersection Observer)
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Optional: Stop observing after reveal if you only want it to animate once
        // observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });

  revealElements.forEach(el => observer.observe(el));
}

// 2. Render Products with Filtering
function renderProducts() {
  if (!productGrid) return;
  
  const filteredProducts = currentCategory === 'all' 
    ? products 
    : products.filter(p => p.category === currentCategory);

  productGrid.innerHTML = filteredProducts.map((product, index) => {
    // Add delay classes for staggered animation
    let delayClass = '';
    if (index % 4 === 1) delayClass = 'reveal-delay-1';
    if (index % 4 === 2) delayClass = 'reveal-delay-2';
    if (index % 4 === 3) delayClass = 'reveal-delay-3';

    return `
      <div class="group bg-white rounded-3xl overflow-hidden border border-shop-sub/60 hover:shadow-soft transition-all duration-500 cursor-pointer flex flex-col justify-between transform hover:-translate-y-2 reveal active ${delayClass}" data-id="${product.id}">
        <div class="relative overflow-hidden aspect-square">
          <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
          <div class="absolute inset-0 bg-shop-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <span class="absolute top-4 left-4 glass text-shop-text text-[10px] font-bold px-3 py-1.5 rounded-full z-10">
            ${product.category}
          </span>
        </div>
        <div class="p-6 pb-2 space-y-2 relative bg-white">
          <h3 class="font-serif font-bold text-shop-secondary group-hover:text-shop-primary transition-colors text-lg line-clamp-1">
            ${product.name}
          </h3>
          <p class="text-xs text-shop-text/50 line-clamp-2 min-h-[32px] leading-relaxed font-light">
            ${product.description}
          </p>
        </div>
        <div class="p-6 pt-4 bg-white">
          <div class="flex items-center justify-between pt-4 border-t border-shop-sub/50">
            <span class="text-shop-text font-bold text-base">
              ${product.price.toLocaleString()}원
            </span>
            <span class="w-8 h-8 rounded-full bg-shop-sub flex items-center justify-center text-shop-secondary group-hover:bg-shop-primary group-hover:text-white transition-colors duration-300">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Re-bind click events
  const productCards = productGrid.querySelectorAll('[data-id]');
  productCards.forEach(card => {
    card.addEventListener('click', () => {
      const id = parseInt(card.getAttribute('data-id'), 10);
      openModal(id);
    });
  });
}

// 3. Category Filter Logic
if (categoryFilters) {
  const buttons = categoryFilters.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Remove active from all
      buttons.forEach(b => {
        b.classList.remove('active', 'bg-shop-secondary', 'text-white', 'shadow-soft');
        b.classList.add('bg-white', 'border', 'border-shop-sub/80', 'text-shop-text/70');
      });
      // Add active to clicked
      const target = e.currentTarget;
      target.classList.remove('bg-white', 'border', 'border-shop-sub/80', 'text-shop-text/70');
      target.classList.add('active', 'bg-shop-secondary', 'text-white', 'shadow-soft');

      currentCategory = target.getAttribute('data-filter');
      
      // Add a fade out effect before re-rendering
      productGrid.style.opacity = 0;
      setTimeout(() => {
        renderProducts();
        productGrid.style.opacity = 1;
      }, 300);
    });
  });
}

// 4. Render Instagram Marquee Feed
function renderInstagram() {
  if (!instagramMarquee) return;
  
  // Double the feed for infinite smooth scrolling
  const feedItems = [...instagramFeed, ...instagramFeed];
  
  instagramMarquee.innerHTML = feedItems.map(feed => `
    <a href="${feed.link}" target="_blank" class="group relative block w-64 h-64 mx-3 rounded-[2rem] overflow-hidden flex-shrink-0 bg-shop-sub/30 shadow-sm hover:shadow-soft transition-all duration-300 transform hover:-translate-y-2">
      <img src="${feed.image}" alt="instagram feed" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
      <div class="absolute inset-0 bg-gradient-to-t from-shop-text/80 via-shop-text/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
        <p class="text-xs line-clamp-2 mb-3 font-light leading-relaxed">
          ${feed.caption}
        </p>
        <div class="flex gap-4 text-xs font-semibold">
          <span class="flex items-center gap-1.5">
            <svg class="w-4 h-4 text-shop-rose fill-current" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            ${feed.likes}
          </span>
          <span class="flex items-center gap-1.5">
            <svg class="w-4 h-4 fill-none stroke-current" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            ${feed.comments}
          </span>
        </div>
      </div>
    </a>
  `).join('');
}

// 5. Detail Modal
function openModal(id) {
  const product = products.find(p => p.id === id);
  if (!product || !detailModal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="w-full md:w-1/2 relative h-[300px] md:h-[550px] bg-shop-sub/20">
      <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-shop-text/30 to-transparent"></div>
    </div>
    <div class="w-full md:w-1/2 p-8 md:p-12 flex flex-col h-full bg-white md:h-[550px] overflow-y-auto">
      <div class="space-y-6 flex-1">
        <div class="inline-block px-3 py-1 bg-shop-sub text-shop-secondary font-bold text-xs rounded-full">
          ${product.category}
        </div>
        <div>
          <h3 class="font-serif font-bold text-3xl text-shop-secondary mb-3 leading-tight">
            ${product.name}
          </h3>
          <span class="text-2xl font-bold text-shop-primary block mb-6">
            ${product.price.toLocaleString()}원
          </span>
        </div>
        <p class="text-sm text-shop-text/80 leading-relaxed font-light whitespace-pre-line">
          ${product.description}
        </p>
      </div>

      <div class="mt-8 p-6 rounded-3xl bg-shop-rose/10 border border-shop-rose/30 relative">
        <svg class="absolute -top-3 -left-2 w-8 h-8 text-shop-primary rotate-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="50" cy="55" rx="35" ry="30" fill="currentColor" />
          <circle cx="25" cy="30" r="12" fill="currentColor" />
          <circle cx="75" cy="30" r="12" fill="currentColor" />
        </svg>
        <span class="block text-xs font-bold text-shop-primary mb-2 pl-6">포코의 코멘트 🐾</span>
        <p class="text-sm text-shop-text/90 italic font-serif leading-relaxed">
          "${product.comment}"
        </p>
      </div>
    </div>
  `;

  detailModal.classList.remove('pointer-events-none', 'opacity-0');
  detailModal.classList.add('opacity-100');
  const modalInner = detailModal.firstElementChild;
  modalInner.classList.remove('scale-95', 'translate-y-4');
  modalInner.classList.add('scale-100', 'translate-y-0');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (!detailModal) return;
  detailModal.classList.add('pointer-events-none', 'opacity-0');
  detailModal.classList.remove('opacity-100');
  const modalInner = detailModal.firstElementChild;
  modalInner.classList.remove('scale-100', 'translate-y-0');
  modalInner.classList.add('scale-95', 'translate-y-4');
  document.body.style.overflow = '';
}

if (modalClose) modalClose.addEventListener('click', closeModal);
if (detailModal) {
  detailModal.addEventListener('click', (e) => {
    if (e.target === detailModal) closeModal();
  });
}
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// 6. Contact Form Alert (Premium Modal)
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;

    const alertDiv = document.createElement('div');
    alertDiv.className = 'fixed inset-0 z-50 flex items-center justify-center bg-shop-text/40 backdrop-blur-sm p-4 transition-all duration-500 opacity-0';
    alertDiv.innerHTML = `
      <div class="bg-white max-w-sm w-full p-10 rounded-[2.5rem] shadow-2xl text-center space-y-6 transform scale-95 translate-y-4 transition-all duration-500 relative overflow-hidden border border-shop-sub">
        <div class="absolute -top-20 -right-20 w-40 h-40 bg-shop-gold/20 rounded-full blur-2xl"></div>
        <div class="relative z-10 space-y-4">
          <svg class="w-24 h-24 mx-auto drop-shadow-md animate-bounce" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="50" cy="55" rx="20" ry="17" fill="#D2B48C" />
            <circle cx="35" cy="40" r="8" fill="#8B5A2B" />
            <circle cx="65" cy="40" r="8" fill="#8B5A2B" />
            <circle cx="35" cy="40" r="4" fill="#F3D1C9" />
            <circle cx="65" cy="40" r="4" fill="#F3D1C9" />
            <circle cx="45" cy="48" r="2" fill="#4A3E3D" />
            <circle cx="55" cy="48" r="2" fill="#4A3E3D" />
            <ellipse cx="50" cy="55" rx="6" ry="4" fill="#F5EFEB" />
            <rect x="38" y="62" width="24" height="15" rx="2" fill="#C88A75" />
            <polygon points="38,62 50,70 62,62" fill="#FDFBF7" />
          </svg>
          <h4 class="font-serif font-bold text-2xl text-shop-secondary">전달 완료!</h4>
          <p class="text-sm text-shop-text/70 leading-relaxed font-light">
            안녕, \${name}!<br/>남겨준 편지는 포코가 도토리 가방에 잘 담아서 숲속 우체통에 넣어두었어 🧸
          </p>
        </div>
        <button id="alert-confirm" class="relative z-10 w-full bg-shop-secondary text-white py-3.5 rounded-2xl hover:bg-shop-primary transition-all text-sm font-bold shadow-soft">
          응 고마워!
        </button>
      </div>
    `;

    document.body.appendChild(alertDiv);
    
    // Animate In
    setTimeout(() => {
      alertDiv.classList.remove('opacity-0');
      alertDiv.classList.add('opacity-100');
      alertDiv.firstElementChild.classList.remove('scale-95', 'translate-y-4');
      alertDiv.firstElementChild.classList.add('scale-100', 'translate-y-0');
    }, 10);

    const alertBtn = alertDiv.querySelector('#alert-confirm');
    alertBtn.addEventListener('click', () => {
      alertDiv.firstElementChild.classList.remove('scale-100', 'translate-y-0');
      alertDiv.firstElementChild.classList.add('scale-95', 'translate-y-4');
      alertDiv.classList.remove('opacity-100');
      alertDiv.classList.add('opacity-0');
      setTimeout(() => alertDiv.remove(), 500);
      contactForm.reset();
    });
  });
}

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  productGrid.style.transition = 'opacity 0.3s ease-in-out';
  renderProducts();
  renderInstagram();
  initScrollReveal();
});
