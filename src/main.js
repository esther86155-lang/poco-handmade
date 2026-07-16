import { products } from './data/products.js';
import { instagramFeed } from './data/instagram.js';

// DOM Elements
const productGrid = document.getElementById('product-grid');
const instagramGrid = document.getElementById('instagram-grid');
const detailModal = document.getElementById('detail-modal');
const modalContent = document.getElementById('modal-content');
const modalClose = document.getElementById('modal-close');
const contactForm = document.getElementById('contact-form');

// 1. Render Products
function renderProducts() {
  if (!productGrid) return;
  productGrid.innerHTML = products.map(product => `
    <div class="group bg-white rounded-2xl overflow-hidden border border-shop-sub/60 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between" data-id="${product.id}">
      <div>
        <!-- Image container -->
        <div class="relative overflow-hidden aspect-square bg-shop-sub/40">
          <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
          <span class="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-shop-secondary text-[10px] font-semibold px-2 py-1 rounded-full border border-shop-sub/50">
            ${product.category}
          </span>
        </div>
        <!-- Body info -->
        <div class="p-5 space-y-2">
          <h3 class="font-serif-cozy font-bold text-shop-secondary group-hover:text-shop-primary transition-colors text-base line-clamp-1">
            ${product.name}
          </h3>
          <p class="text-xs text-shop-text/60 line-clamp-2 min-h-[32px] leading-relaxed font-light">
            ${product.description}
          </p>
        </div>
      </div>
      <div class="p-5 pt-0">
        <div class="flex items-center justify-between pt-3 border-t border-shop-sub/40">
          <span class="text-shop-primary font-bold text-sm">
            ${product.price.toLocaleString()}원
          </span>
          <span class="text-[10px] text-shop-text/50 flex items-center gap-0.5 font-medium">
            🐾 상세 보기
          </span>
        </div>
      </div>
    </div>
  `).join('');

  // Add click event listeners
  const productCards = productGrid.querySelectorAll('[data-id]');
  productCards.forEach(card => {
    card.addEventListener('click', () => {
      const id = parseInt(card.getAttribute('data-id'), 10);
      openModal(id);
    });
  });
}

// 2. Render Instagram Feed
function renderInstagram() {
  if (!instagramGrid) return;
  instagramGrid.innerHTML = instagramFeed.map(feed => `
    <a href="${feed.link}" target="_blank" class="group relative block aspect-square rounded-2xl overflow-hidden bg-shop-sub/50 border border-shop-sub/40 shadow-sm">
      <img src="${feed.image}" alt="instagram feed" class="w-full h-full object-cover" loading="lazy" />
      <!-- Hover Overlay -->
      <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white text-sm font-medium">
        <span class="flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <!-- Heart Icon -->
          <svg class="w-5 h-5 fill-current text-shop-rose" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          ${feed.likes}
        </span>
        <span class="flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
          <!-- Comment Icon -->
          <svg class="w-5 h-5 fill-none stroke-current" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
          </svg>
          ${feed.comments}
        </span>
      </div>
    </a>
  `).join('');
}

// 3. Open Detail Modal
function openModal(id) {
  const product = products.find(p => p.id === id);
  if (!product || !detailModal || !modalContent) return;

  modalContent.innerHTML = `
    <!-- Modal Left: Product Image -->
    <div class="w-full md:w-1/2 aspect-square md:aspect-auto md:h-[480px] bg-shop-sub/40 relative">
      <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover" />
      <span class="absolute top-4 left-4 bg-shop-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
        ${product.category}
      </span>
    </div>
    <!-- Modal Right: Product Details & Poco's Comment -->
    <div class="w-full md:w-1/2 p-8 flex flex-col justify-between md:h-[480px] overflow-y-auto bg-shop-bg">
      <div class="space-y-4">
        <div>
          <h3 class="font-serif-cozy font-bold text-2xl text-shop-secondary mb-1">
            ${product.name}
          </h3>
          <span class="text-xl font-bold text-shop-primary">
            ${product.price.toLocaleString()}원
          </span>
        </div>
        <div class="w-8 h-0.5 bg-shop-primary/30 rounded-full"></div>
        <p class="text-sm text-shop-text/80 leading-relaxed font-light">
          ${product.description}
        </p>
      </div>

      <!-- Poco's Recommended Comment Box -->
      <div class="mt-6 p-4 rounded-2xl bg-shop-sub border border-shop-sub/80 space-y-2">
        <div class="flex items-center gap-1.5">
          <span class="text-xs font-bold text-shop-secondary flex items-center gap-1">
            🐾 포코의 추천 한 줄 평
          </span>
        </div>
        <p class="text-xs text-shop-text/90 italic font-serif-cozy leading-relaxed">
          "${product.comment}"
        </p>
      </div>
    </div>
  `;

  // Show modal with animation
  detailModal.classList.remove('pointer-events-none', 'opacity-0');
  detailModal.classList.add('opacity-100');
  detailModal.firstElementChild.classList.remove('scale-95');
  detailModal.firstElementChild.classList.add('scale-100');
  document.body.style.overflow = 'hidden'; // Lock background scroll
}

// 4. Close Detail Modal
function closeModal() {
  if (!detailModal) return;
  detailModal.classList.add('pointer-events-none', 'opacity-0');
  detailModal.classList.remove('opacity-100');
  detailModal.firstElementChild.classList.remove('scale-100');
  detailModal.firstElementChild.classList.add('scale-95');
  document.body.style.overflow = ''; // Unlock background scroll
}

// Event Bindings
if (modalClose) {
  modalClose.addEventListener('click', closeModal);
}

if (detailModal) {
  detailModal.addEventListener('click', (e) => {
    if (e.target === detailModal) {
      closeModal();
    }
  });
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// 5. Contact Form Submission
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const pocoLetter = document.getElementById('poco-letter').value;

    // Custom Cozy Alert Modal
    const alertDiv = document.createElement('div');
    alertDiv.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 transition-all duration-300';
    alertDiv.innerHTML = `
      <div class="bg-shop-bg max-w-sm w-full p-8 rounded-3xl border border-shop-sub/40 shadow-2xl text-center space-y-6 transform scale-95 transition-transform duration-300">
        <!-- Delivery Mascot SVG -->
        <svg class="w-24 h-24 mx-auto drop-shadow-sm animate-bounce" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="50" cy="55" rx="20" ry="17" fill="#D2B48C" />
          <circle cx="35" cy="40" r="8" fill="#8B5A2B" />
          <circle cx="65" cy="40" r="8" fill="#8B5A2B" />
          <circle cx="35" cy="40" r="4" fill="#F3D1C9" />
          <circle cx="65" cy="40" r="4" fill="#F3D1C9" />
          <circle cx="45" cy="48" r="2" fill="#4A3E3D" />
          <circle cx="55" cy="48" r="2" fill="#4A3E3D" />
          <ellipse cx="50" cy="55" rx="6" ry="4" fill="#F5EFEB" />
          <!-- Postbag -->
          <rect x="38" y="62" width="24" height="15" rx="2" fill="#C88A75" />
          <polygon points="38,62 50,70 62,62" fill="#8B5A2B" />
        </svg>
        <div class="space-y-2">
          <h4 class="font-serif-cozy font-bold text-lg text-shop-secondary">편지가 잘 전달되었어!</h4>
          <p class="text-xs text-shop-text/80 leading-relaxed">
            안녕, ${name}! 남겨준 문의 내용은 포코가 도토리 가방에 잘 담아서 숲속 우체통에 넣어둘게. 조금만 기다려줘 🐾
          </p>
        </div>
        <button id="alert-confirm" class="w-full bg-shop-secondary text-white py-2.5 rounded-xl hover:bg-shop-primary transition-all text-xs font-semibold shadow-md">
          응, 고마워!
        </button>
      </div>
    `;

    document.body.appendChild(alertDiv);
    
    // Zoom alert content
    setTimeout(() => {
      alertDiv.firstElementChild.classList.remove('scale-95');
      alertDiv.firstElementChild.classList.add('scale-100');
    }, 50);

    const alertBtn = alertDiv.querySelector('#alert-confirm');
    alertBtn.addEventListener('click', () => {
      alertDiv.firstElementChild.classList.remove('scale-100');
      alertDiv.firstElementChild.classList.add('scale-95');
      alertDiv.classList.add('opacity-0');
      setTimeout(() => {
        alertDiv.remove();
      }, 300);
      contactForm.reset();
    });
  });
}

// Initialize Application
renderProducts();
renderInstagram();
