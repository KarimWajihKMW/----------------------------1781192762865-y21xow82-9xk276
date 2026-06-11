const products = [
  { id: 'velocity-shoes', name: 'حذاء Velocity', category: 'أحذية', price: 1250, oldPrice: 1490, rating: 4.8, badge: 'الأكثر طلباً', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80', description: 'حذاء خفيف بتصميم رياضي مريح للمشاوير اليومية والتمارين السريعة.', material: 'نسيج مرن', stock: 18 },
  { id: 'noble-watch', name: 'ساعة Noble', category: 'إكسسوارات', price: 2900, oldPrice: 3350, rating: 4.9, badge: 'فاخر', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80', description: 'ساعة يد أنيقة بواجهة نظيفة وسوار جلد يناسب الهدايا والمناسبات.', material: 'ستانلس وجلد', stock: 9 },
  { id: 'aura-headphones', name: 'سماعة Aura', category: 'إلكترونيات', price: 1740, oldPrice: 2100, rating: 4.7, badge: 'صوت نقي', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80', description: 'سماعة رأس بعزل ضوضاء ولمسات ناعمة لتجربة استماع طويلة ومريحة.', material: 'ألمنيوم مبطن', stock: 14 },
  { id: 'linen-bag', name: 'حقيبة Linen', category: 'حقائب', price: 980, oldPrice: 1150, rating: 4.6, badge: 'عملي', image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=80', description: 'حقيبة يومية واسعة بجيوب منظمة وخامة مقاومة للاستخدام المتكرر.', material: 'كانفاس فاخر', stock: 21 },
  { id: 'ceramic-mug', name: 'مج سيراميك دافئ', category: 'منزل', price: 320, oldPrice: 420, rating: 4.5, badge: 'هدية', image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=900&q=80', description: 'مج أنيق بملمس ناعم يحافظ على دفء المشروبات ويضيف لمسة جميلة للمكتب.', material: 'سيراميك', stock: 35 },
  { id: 'desk-lamp', name: 'مصباح مكتب Halo', category: 'منزل', price: 1450, oldPrice: 1680, rating: 4.8, badge: 'إضاءة ذكية', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80', description: 'مصباح مكتبي بإضاءة دافئة وذراع مرن مناسب للقراءة والعمل.', material: 'معدن مطفي', stock: 12 },
  { id: 'minimal-sunglasses', name: 'نظارة شمسية Ray', category: 'إكسسوارات', price: 860, oldPrice: 990, rating: 4.4, badge: 'خفيفة', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80', description: 'نظارة شمسية بعدسات داكنة وإطار متين لإطلالة عصرية في النهار.', material: 'أسيتات', stock: 17 },
  { id: 'urban-jacket', name: 'جاكيت Urban', category: 'ملابس', price: 1890, oldPrice: 2350, rating: 4.7, badge: 'موسمي', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=80', description: 'جاكيت عملي بقصة أنيقة وخامة مناسبة للتنقلات والأجواء المتغيرة.', material: 'قطن معالج', stock: 11 },
  { id: 'leather-wallet', name: 'محفظة جلد Classic', category: 'إكسسوارات', price: 540, oldPrice: 650, rating: 4.6, badge: 'جلد طبيعي', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=80', description: 'محفظة صغيرة بتقسيم داخلي ذكي وخياطة قوية للاستخدام اليومي.', material: 'جلد طبيعي', stock: 28 },
  { id: 'smart-speaker', name: 'مكبر صوت Smart Cube', category: 'إلكترونيات', price: 2100, oldPrice: 2490, rating: 4.8, badge: 'لاسلكي', image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=900&q=80', description: 'مكبر صوت محمول بتصميم مكعب وصوت عميق مناسب للمنزل والرحلات.', material: 'شبك صوتي', stock: 8 },
  { id: 'running-bottle', name: 'زجاجة RunFlow', category: 'رياضة', price: 390, oldPrice: 480, rating: 4.5, badge: 'صحي', image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=80', description: 'زجاجة رياضية محكمة الغلق بسعة مناسبة للتمرين والعمل.', material: 'ستانلس', stock: 40 },
  { id: 'soft-hoodie', name: 'هودي Soft Cloud', category: 'ملابس', price: 1120, oldPrice: 1320, rating: 4.7, badge: 'ناعم', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=80', description: 'هودي ناعم بتفاصيل بسيطة وقصة مريحة للخروج أو المنزل.', material: 'قطن فليس', stock: 19 }
];

const state = { search: '', category: 'all', sort: 'featured', page: 1, pageSize: 6, cart: JSON.parse(localStorage.getItem('lumiere-cart') || '{}') };
const app = document.getElementById('app');
const navLinks = document.getElementById('navLinks');
const menuToggle = document.querySelector('.menu-toggle');
const cartCount = document.getElementById('cartCount');
const cursorOrb = document.querySelector('.cursor-orb');

function money(value) { return new Intl.NumberFormat('ar-EG', { style: 'currency', currency: 'EGP', maximumFractionDigits: 0 }).format(value); }
function saveCart() { localStorage.setItem('lumiere-cart', JSON.stringify(state.cart)); updateCartCount(); }
function updateCartCount() { cartCount.textContent = Object.values(state.cart).reduce((sum, qty) => sum + qty, 0); }
function showToast(message) { const toast = document.createElement('div'); toast.className = 'toast'; toast.textContent = message; document.body.appendChild(toast); requestAnimationFrame(() => toast.classList.add('show')); setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 300); }, 2100); }
function addToCart(id, qty = 1) { state.cart[id] = (state.cart[id] || 0) + qty; saveCart(); const product = products.find(item => item.id === id); showToast(`تمت إضافة ${product.name} إلى السلة`); }
function setQty(id, qty) { if (qty <= 0) delete state.cart[id]; else state.cart[id] = qty; saveCart(); renderCart(); }
function navigate(path) { window.history.pushState({}, '', path); state.page = 1; render(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
function mountTemplate(id) { const template = document.getElementById(id); app.innerHTML = ''; app.appendChild(template.content.cloneNode(true)); }

function productCard(product) {
  const old = product.oldPrice ? `<span class="old-price">${money(product.oldPrice)}</span>` : '';
  return `<article class="product-card reveal-up" data-card-id="${product.id}">
    <a class="product-image" href="/products/${product.id}" data-link aria-label="تفاصيل ${product.name}"><img src="${product.image}" alt="${product.name}" loading="lazy" /><span class="badge">${product.badge}</span></a>
    <div class="product-info"><div class="product-meta"><span>${product.category}</span><span>★ ${product.rating}</span></div><h3 class="product-title">${product.name}</h3><p class="product-description">${product.description}</p><div class="price-row"><span class="price">${money(product.price)}${old}</span></div><div class="card-actions"><button class="small-btn" data-add="${product.id}">إضافة للسلة</button><a class="small-btn secondary" href="/products/${product.id}" data-link>تفاصيل</a></div></div>
  </article>`;
}

function filteredProducts() {
  let list = products.filter(product => {
    const term = state.search.trim();
    const matchesSearch = !term || product.name.includes(term) || product.description.includes(term) || product.category.includes(term);
    const matchesCategory = state.category === 'all' || product.category === state.category;
    return matchesSearch && matchesCategory;
  });
  const sorters = { 'price-asc': (a,b)=>a.price-b.price, 'price-desc': (a,b)=>b.price-a.price, 'rating-desc': (a,b)=>b.rating-a.rating, 'name-asc': (a,b)=>a.name.localeCompare(b.name,'ar'), featured: (a,b)=>(b.oldPrice-b.price)-(a.oldPrice-a.price) };
  return list.sort(sorters[state.sort]);
}

function renderHome() { mountTemplate('homeTemplate'); document.getElementById('featuredProducts').innerHTML = products.slice(0, 6).map(productCard).join(''); }
function renderProducts() {
  mountTemplate('productsTemplate');
  const categories = ['all', ...new Set(products.map(product => product.category))];
  const categoryFilter = document.getElementById('categoryFilter');
  const searchInput = document.getElementById('searchInput');
  const sortSelect = document.getElementById('sortSelect');
  categoryFilter.innerHTML = categories.map(category => `<option value="${category}">${category === 'all' ? 'كل الفئات' : category}</option>`).join('');
  categoryFilter.value = state.category; searchInput.value = state.search; sortSelect.value = state.sort;
  searchInput.addEventListener('input', event => { state.search = event.target.value; state.page = 1; renderCatalogList(); });
  categoryFilter.addEventListener('change', event => { state.category = event.target.value; state.page = 1; renderCatalogList(); });
  sortSelect.addEventListener('change', event => { state.sort = event.target.value; state.page = 1; renderCatalogList(); });
  renderCatalogList();
}
function renderCatalogList() {
  const grid = document.getElementById('productsGrid'); const pagination = document.getElementById('pagination'); const resultCount = document.getElementById('resultCount');
  const list = filteredProducts(); const pages = Math.max(1, Math.ceil(list.length / state.pageSize)); state.page = Math.min(state.page, pages);
  const shown = list.slice((state.page - 1) * state.pageSize, (state.page - 1) * state.pageSize + state.pageSize);
  resultCount.textContent = list.length;
  grid.innerHTML = shown.length ? shown.map(productCard).join('') : '<div class="empty-state">لا توجد منتجات مطابقة للبحث الحالي.</div>';
  pagination.innerHTML = Array.from({ length: pages }, (_, index) => `<button class="${state.page === index + 1 ? 'active' : ''}" data-page="${index + 1}">${index + 1}</button>`).join('');
  pagination.querySelectorAll('[data-page]').forEach(button => button.addEventListener('click', () => { state.page = Number(button.dataset.page); renderCatalogList(); window.scrollTo({ top: 240, behavior: 'smooth' }); }));
  bindDynamicEvents(); observeReveals();
}
function renderDetail(id) {
  mountTemplate('detailTemplate'); const product = products.find(item => item.id === id) || products[0];
  document.getElementById('productDetail').innerHTML = `<div class="detail-image reveal-zoom"><img src="${product.image}" alt="${product.name}" /></div><div class="detail-copy reveal-up"><p class="eyebrow">${product.category}</p><h1>${product.name}</h1><p>${product.description} تم تصميم صفحة التفاصيل لإظهار الصورة الكبيرة والسعر والمواصفات المهمة قبل الشراء.</p><div class="detail-specs"><div><strong>${money(product.price)}</strong><span>السعر الحالي</span></div><div><strong>★ ${product.rating}</strong><span>تقييم العملاء</span></div><div><strong>${product.stock}</strong><span>قطعة متاحة</span></div></div><p><strong>الخامة:</strong> ${product.material}</p><div class="detail-actions"><button class="btn primary" data-add="${product.id}">إضافة للسلة</button><a class="btn ghost" href="/products" data-link>العودة للمنتجات</a></div></div>`;
}
function renderOffers() { mountTemplate('offersTemplate'); document.getElementById('offerWall').innerHTML = products.filter(product => product.oldPrice && product.oldPrice - product.price >= 300).slice(0, 6).map(productCard).join(''); }
function renderAbout() { mountTemplate('aboutTemplate'); }
function renderContact() { mountTemplate('contactTemplate'); document.getElementById('contactForm').addEventListener('submit', event => { event.preventDefault(); event.currentTarget.reset(); document.getElementById('formNote').textContent = 'تم تسجيل طلبك بنجاح، سنراجع تفاصيل المنتج أو السعر ونتواصل معك.'; }); }
function renderCart() {
  mountTemplate('cartTemplate'); const cartList = document.getElementById('cartList'); const cartSummary = document.getElementById('cartSummary');
  const entries = Object.entries(state.cart).map(([id, qty]) => ({ product: products.find(item => item.id === id), qty })).filter(item => item.product);
  const subtotal = entries.reduce((sum, item) => sum + item.product.price * item.qty, 0); const shipping = subtotal > 2500 || subtotal === 0 ? 0 : 120; const total = subtotal + shipping;
  cartList.innerHTML = entries.length ? entries.map(({ product, qty }) => `<article class="cart-item reveal-up"><img src="${product.image}" alt="${product.name}" /><div><h3>${product.name}</h3><p>${product.category} · ${money(product.price)}</p></div><div class="qty-control" aria-label="تعديل كمية ${product.name}"><button data-dec="${product.id}">−</button><strong>${qty}</strong><button data-inc="${product.id}">+</button><button class="small-btn secondary" data-remove="${product.id}">حذف</button></div></article>`).join('') : '<div class="empty-state">السلة فارغة حالياً. ابدأ بإضافة منتجات من الكتالوج.</div>';
  cartSummary.innerHTML = `<h3>ملخص الطلب</h3><div class="summary-row"><span>قيمة المنتجات</span><strong>${money(subtotal)}</strong></div><div class="summary-row"><span>الشحن</span><strong>${shipping ? money(shipping) : 'مجاني'}</strong></div><div class="summary-row summary-total"><span>الإجمالي</span><strong>${money(total)}</strong></div><p>الشحن مجاني للطلبات أكثر من ${money(2500)}.</p><a class="btn primary full" href="/contact" data-link>إرسال طلب الشراء</a>`;
  cartList.querySelectorAll('[data-inc]').forEach(button => button.addEventListener('click', () => setQty(button.dataset.inc, (state.cart[button.dataset.inc] || 0) + 1)));
  cartList.querySelectorAll('[data-dec]').forEach(button => button.addEventListener('click', () => setQty(button.dataset.dec, (state.cart[button.dataset.dec] || 0) - 1)));
  cartList.querySelectorAll('[data-remove]').forEach(button => button.addEventListener('click', () => setQty(button.dataset.remove, 0)));
}
function render() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('[data-link]').forEach(link => { const href = link.getAttribute('href'); link.classList.toggle('active', href === path || (href !== '/' && path.startsWith(href))); });
  if (path === '/') renderHome(); else if (path === '/products') renderProducts(); else if (path.startsWith('/products/')) renderDetail(path.split('/').pop()); else if (path === '/offers') renderOffers(); else if (path === '/about') renderAbout(); else if (path === '/contact') renderContact(); else if (path === '/cart') renderCart(); else renderHome();
  bindDynamicEvents(); observeReveals(); applyDepth();
}
function bindDynamicEvents() {
  document.querySelectorAll('[data-link]').forEach(link => { link.addEventListener('click', event => { const url = new URL(link.href); if (url.origin === window.location.origin) { event.preventDefault(); navigate(url.pathname); navLinks.classList.remove('open'); menuToggle?.setAttribute('aria-expanded', 'false'); } }); });
  document.querySelectorAll('[data-add]').forEach(button => button.addEventListener('click', () => addToCart(button.dataset.add)));
  document.querySelectorAll('.product-card').forEach(card => card.addEventListener('pointermove', event => { const rect = card.getBoundingClientRect(); card.style.setProperty('--mx', `${((event.clientX - rect.left) / rect.width) * 100}%`); card.style.setProperty('--my', `${((event.clientY - rect.top) / rect.height) * 100}%`); }));
}
function observeReveals() {
  const revealItems = document.querySelectorAll('.reveal-up:not(.watched), .reveal-zoom:not(.watched)');
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); } }), { threshold: 0.14 });
  revealItems.forEach((item, index) => { item.classList.add('watched'); item.style.transitionDelay = `${Math.min(index * 55, 360)}ms`; observer.observe(item); });
}
function applyDepth() {
  document.querySelectorAll('[data-depth]').forEach(panel => { const rect = panel.getBoundingClientRect(); const progress = (rect.top - window.innerHeight / 2) / window.innerHeight; const depth = Number(panel.dataset.depth || 0.1); panel.style.transform = `translate3d(0, ${progress * depth * -80}px, ${progress * depth * 120}px) rotateX(${progress * depth * 7}deg)`; });
}
menuToggle?.addEventListener('click', () => { const open = navLinks.classList.toggle('open'); menuToggle.setAttribute('aria-expanded', String(open)); });
window.addEventListener('popstate', render);
window.addEventListener('scroll', () => requestAnimationFrame(applyDepth), { passive: true });
window.addEventListener('pointermove', event => { if (!cursorOrb) return; cursorOrb.style.left = `${event.clientX}px`; cursorOrb.style.top = `${event.clientY}px`; });
document.addEventListener('pointerover', event => { if (event.target.closest('a, button, input, select, textarea')) cursorOrb?.classList.add('active'); });
document.addEventListener('pointerout', event => { if (event.target.closest('a, button, input, select, textarea')) cursorOrb?.classList.remove('active'); });
updateCartCount(); render();
