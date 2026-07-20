(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:1,name:`포코 아기곰 뜨개 손인형`,price:24e3,category:`인형/패브릭`,image:`https://images.unsplash.com/photo-1559251606-c623743a6d76?w=600&auto=format&fit=crop&q=60`,description:`포코 마스코트를 모티브로 한 오가닉 뜨개 손인형입니다. 보들보들한 100% 면사로 한 땀 한 땀 정성을 담아 떠서 아이들이 만지기에도 안전하고, 침실 머리맡 인테리어 소품으로도 훌륭합니다.`,comment:`🐾 내 모습을 똑 닮아 더 정이 가는 인형이야! 포근하게 꼭 안아주면 기분이 좋아질 거야.`},{id:2,name:`포코네 도자기 머그잔`,price:18e3,category:`주방/식기`,image:`https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=60`,description:`물레를 돌려 직접 빚어낸 따뜻한 흙빛 머그잔입니다. 컵 한쪽에 귀여운 포코 얼굴이 조각되어 있으며, 따뜻한 우유나 드립 커피를 마시기에 넉넉한 350ml 용량으로 제작되었습니다.`,comment:`🐾 내가 매일 아침 따뜻한 핫초코를 마실 때 쓰는 컵이야! 입술에 닿는 느낌이 참 보드라워.`},{id:3,name:`숲속 향 소이 캔들 (Poco Forest)`,price:15e3,category:`향료/캔들`,image:`https://images.unsplash.com/photo-1603006905003-be475563bc59?w=600&auto=format&fit=crop&q=60`,description:`100% 천연 소이 왁스와 시더우드, 편백 에센셜 오일을 블렌딩하여 숲속 깊은 그늘을 산책하는 느낌을 줍니다. 나무 심지가 타들어 갈 때 나는 '타닥타닥' 모닥불 소리가 비 오는 날 감성을 자극합니다.`,comment:`🐾 눈을 감으면 내가 사는 포코 숲이 눈앞에 펼쳐질 거야. 조용히 빗소리와 함께 켜보길 추천해!`},{id:4,name:`체크무늬 핸드메이드 에코백`,price:22e3,category:`패브릭/가방`,image:`https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=60`,description:`도톰한 리넨 코튼 원단에 베이지 톤의 잔잔한 체크무늬가 들어간 에코백입니다. 넉넉한 수납공간과 튼튼한 이중 봉제로 매일매일 가볍게 들고 다니기 적합하며, 포코 자수 패치가 귀여운 포인트가 되어줍니다.`,comment:`🐾 내 도토리와 스케치북을 몽땅 넣어도 아주 튼튼해! 소풍 갈 때 꼭 챙겨가길 바라.`},{id:5,name:`포코 손자수 뜨개 파우치`,price:14e3,category:`패브릭/소품`,image:`https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600&auto=format&fit=crop&q=60`,description:`에어팟이나 립밤, 손거울 같은 작은 소지품들을 귀엽고 안전하게 보관할 수 있는 미니 뜨개 파우치입니다. 우드 단추로 여닫을 수 있어 클래식하고 소박한 멋이 살아있습니다.`,comment:`🐾 조그마한 가방이지만 생각보다 중요한 것들이 쏙쏙 잘 들어가. 내 자수 얼굴을 보며 기분 좋게 다녀와!`},{id:6,name:`포코 원목 핸드폰 거치대`,price:19e3,category:`원목/데스크`,image:`https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=600&auto=format&fit=crop&q=60`,description:`천연 오크 원목을 정성껏 샌딩하고 천연 오일로 마감하여 나무 본연의 나이테와 질감이 살아있는 휴대폰/패드 거치대입니다. 아래쪽에 포코 발자국 불도장이 앙증맞게 찍혀있습니다.`,comment:`🐾 이 원목 거치대에 폰을 두고 내 최애 음악을 틀어봐. 숲속 통나무집에 있는 기분이 들 거야.`},{id:7,name:`동화 속 일러스트 양장 노트`,price:12e3,category:`문구/지류`,image:`https://images.unsplash.com/photo-1517842645767-c639042777db?w=600&auto=format&fit=crop&q=60`,description:`빈티지한 미색 크라프트 내지와 포코 숲의 일러스트가 표지로 들어간 하드커버 양장 노트입니다. 180도로 시원하게 펴져 일기를 쓰거나 스케치를 하기 편리합니다.`,comment:`🐾 너의 소소하지만 소중한 오늘 이야기를 적어봐. 내 손일러스트 엽서도 사은품으로 끼워 줄게!`},{id:8,name:`포코 손뜨개 꽃 키링`,price:9500,category:`악세서리/소품`,image:`https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&auto=format&fit=crop&q=60`,description:`파스텔 톤의 실로 짠 작은 꽃들과 포코 모양의 미니 인형이 함께 달린 솜씨 좋은 키링입니다. 백팩 지퍼, 자동차 키, 지갑 등에 달아 일상에 따뜻한 활기를 불어넣을 수 있습니다.`,comment:`🐾 너와 함께 매일 모험을 떠날 준비가 되었어! 네 가방에 대롱대롱 매달려 항상 곁에 있을게.`}],t=[{id:1,image:`https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&auto=format&fit=crop&q=60`,likes:342,comments:24,caption:`포코 숲속 공방의 아침 ☀️ 햇살이 잘 드는 창가에서 오늘도 정성껏 바느질을 시작해요. #포코숲 #핸드메이드 #일상`,link:`https://www.instagram.com/instagram/`},{id:2,image:`https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&auto=format&fit=crop&q=60`,likes:512,comments:42,caption:`보들보들한 털실들이 가득 들어왔어요 🧶 이번 주말에는 포코 뜨개 키링을 더 많이 뜰 수 있겠어요! 기대해 주세요. #손뜨개 #키링 #신상스포`,link:`https://www.instagram.com/instagram/`},{id:3,image:`https://images.unsplash.com/photo-1456428746267-a1756408f782?w=600&auto=format&fit=crop&q=60`,likes:289,comments:18,caption:`오늘 탄생한 아기 도자기 머그들 ☕️ 뜨끈뜨끈한 가마 속에서 건강하게 구워져 나왔어요! 조만간 숍에서 만나요 🐾 #도자기머그 #물레질 #수제머그`,link:`https://www.instagram.com/instagram/`},{id:4,image:`https://images.unsplash.com/photo-1490312278390-ab6414f81c81?w=600&auto=format&fit=crop&q=60`,likes:420,comments:31,caption:`포코가 숲으로 소풍을 다녀왔어요 🧺 날씨가 좋아 햇볕을 쬐며 도토리와 체크 에코백 사진을 찍었답니다. 찰칵! 📸 #피크닉 #감성사진 #포코에코백`,link:`https://www.instagram.com/instagram/`},{id:5,image:`https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=600&auto=format&fit=crop&q=60`,likes:315,comments:15,caption:`포코 캔들을 태울 때 나는 은은한 숲 향 🌲 지치고 피곤한 목요일 저녁, 포코네 소이 캔들과 함께 힐링 시간을 가져보는 건 어떨까요? #소이캔들 #ASMR #힐링`,link:`https://www.instagram.com/instagram/`},{id:6,image:`https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&auto=format&fit=crop&q=60`,likes:673,comments:88,caption:`짜잔! 숲속 공방에 놓을 예쁜 엽서들과 일러스트 노트 인쇄 감리를 마치고 왔어요. 귀여운 스티커 팩도 준비 중이랍니다 🐾 #다꾸 #다이어리꾸미기 #일러스트`,link:`https://www.instagram.com/instagram/`}],n=document.getElementById(`product-grid`),r=document.getElementById(`instagram-marquee`),i=document.getElementById(`detail-modal`),a=document.getElementById(`modal-content`),o=document.getElementById(`modal-close`),s=document.getElementById(`contact-form`),c=document.getElementById(`category-filters`),l=`all`;function u(){let e=document.querySelectorAll(`.reveal`),t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add(`active`)})},{threshold:.1,rootMargin:`0px 0px -50px 0px`});e.forEach(e=>t.observe(e))}function d(){n&&(n.innerHTML=(l===`all`?e:e.filter(e=>e.category===l)).map((e,t)=>{let n=``;return t%4==1&&(n=`reveal-delay-1`),t%4==2&&(n=`reveal-delay-2`),t%4==3&&(n=`reveal-delay-3`),`
      <div class="group bg-white rounded-3xl overflow-hidden border border-shop-sub/60 hover:shadow-soft transition-all duration-500 cursor-pointer flex flex-col justify-between transform hover:-translate-y-2 reveal active ${n}" data-id="${e.id}">
        <div class="relative overflow-hidden aspect-square">
          <img src="${e.image}" alt="${e.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
          <div class="absolute inset-0 bg-shop-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <span class="absolute top-4 left-4 glass text-shop-text text-[10px] font-bold px-3 py-1.5 rounded-full z-10">
            ${e.category}
          </span>
        </div>
        <div class="p-6 pb-2 space-y-2 relative bg-white">
          <h3 class="font-serif font-bold text-shop-secondary group-hover:text-shop-primary transition-colors text-lg line-clamp-1">
            ${e.name}
          </h3>
          <p class="text-xs text-shop-text/50 line-clamp-2 min-h-[32px] leading-relaxed font-light">
            ${e.description}
          </p>
        </div>
        <div class="p-6 pt-4 bg-white">
          <div class="flex items-center justify-between pt-4 border-t border-shop-sub/50">
            <span class="text-shop-text font-bold text-base">
              ${e.price.toLocaleString()}원
            </span>
            <span class="w-8 h-8 rounded-full bg-shop-sub flex items-center justify-center text-shop-secondary group-hover:bg-shop-primary group-hover:text-white transition-colors duration-300">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </span>
          </div>
        </div>
      </div>
    `}).join(``),n.querySelectorAll(`[data-id]`).forEach(e=>{e.addEventListener(`click`,()=>{p(parseInt(e.getAttribute(`data-id`),10))})}))}if(c){let e=c.querySelectorAll(`.filter-btn`);e.forEach(t=>{t.addEventListener(`click`,t=>{e.forEach(e=>{e.classList.remove(`active`,`bg-shop-secondary`,`text-white`,`shadow-soft`),e.classList.add(`bg-white`,`border`,`border-shop-sub/80`,`text-shop-text/70`)});let r=t.currentTarget;r.classList.remove(`bg-white`,`border`,`border-shop-sub/80`,`text-shop-text/70`),r.classList.add(`active`,`bg-shop-secondary`,`text-white`,`shadow-soft`),l=r.getAttribute(`data-filter`),n.style.opacity=0,setTimeout(()=>{d(),n.style.opacity=1},300)})})}function f(){r&&(r.innerHTML=[...t,...t].map(e=>`
    <a href="${e.link}" target="_blank" class="group relative block w-64 h-64 mx-3 rounded-[2rem] overflow-hidden flex-shrink-0 bg-shop-sub/30 shadow-sm hover:shadow-soft transition-all duration-300 transform hover:-translate-y-2">
      <img src="${e.image}" alt="instagram feed" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
      <div class="absolute inset-0 bg-gradient-to-t from-shop-text/80 via-shop-text/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
        <p class="text-xs line-clamp-2 mb-3 font-light leading-relaxed">
          ${e.caption}
        </p>
        <div class="flex gap-4 text-xs font-semibold">
          <span class="flex items-center gap-1.5">
            <svg class="w-4 h-4 text-shop-rose fill-current" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            ${e.likes}
          </span>
          <span class="flex items-center gap-1.5">
            <svg class="w-4 h-4 fill-none stroke-current" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            ${e.comments}
          </span>
        </div>
      </div>
    </a>
  `).join(``))}function p(t){let n=e.find(e=>e.id===t);if(!n||!i||!a)return;a.innerHTML=`
    <div class="w-full md:w-1/2 relative h-[300px] md:h-[550px] bg-shop-sub/20">
      <img src="${n.image}" alt="${n.name}" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-shop-text/30 to-transparent"></div>
    </div>
    <div class="w-full md:w-1/2 p-8 md:p-12 flex flex-col h-full bg-white md:h-[550px] overflow-y-auto">
      <div class="space-y-6 flex-1">
        <div class="inline-block px-3 py-1 bg-shop-sub text-shop-secondary font-bold text-xs rounded-full">
          ${n.category}
        </div>
        <div>
          <h3 class="font-serif font-bold text-3xl text-shop-secondary mb-3 leading-tight">
            ${n.name}
          </h3>
          <span class="text-2xl font-bold text-shop-primary block mb-6">
            ${n.price.toLocaleString()}원
          </span>
        </div>
        <p class="text-sm text-shop-text/80 leading-relaxed font-light whitespace-pre-line">
          ${n.description}
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
          "${n.comment}"
        </p>
      </div>
    </div>
  `,i.classList.remove(`pointer-events-none`,`opacity-0`),i.classList.add(`opacity-100`);let r=i.firstElementChild;r.classList.remove(`scale-95`,`translate-y-4`),r.classList.add(`scale-100`,`translate-y-0`),document.body.style.overflow=`hidden`}function m(){if(!i)return;i.classList.add(`pointer-events-none`,`opacity-0`),i.classList.remove(`opacity-100`);let e=i.firstElementChild;e.classList.remove(`scale-100`,`translate-y-0`),e.classList.add(`scale-95`,`translate-y-4`),document.body.style.overflow=``}o&&o.addEventListener(`click`,m),i&&i.addEventListener(`click`,e=>{e.target===i&&m()}),window.addEventListener(`keydown`,e=>{e.key===`Escape`&&m()}),s&&s.addEventListener(`submit`,e=>{e.preventDefault(),document.getElementById(`name`).value;let t=document.createElement(`div`);t.className=`fixed inset-0 z-50 flex items-center justify-center bg-shop-text/40 backdrop-blur-sm p-4 transition-all duration-500 opacity-0`,t.innerHTML=`
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
    `,document.body.appendChild(t),setTimeout(()=>{t.classList.remove(`opacity-0`),t.classList.add(`opacity-100`),t.firstElementChild.classList.remove(`scale-95`,`translate-y-4`),t.firstElementChild.classList.add(`scale-100`,`translate-y-0`)},10),t.querySelector(`#alert-confirm`).addEventListener(`click`,()=>{t.firstElementChild.classList.remove(`scale-100`,`translate-y-0`),t.firstElementChild.classList.add(`scale-95`,`translate-y-4`),t.classList.remove(`opacity-100`),t.classList.add(`opacity-0`),setTimeout(()=>t.remove(),500),s.reset()})}),document.addEventListener(`DOMContentLoaded`,()=>{n.style.transition=`opacity 0.3s ease-in-out`,d(),f(),u()});