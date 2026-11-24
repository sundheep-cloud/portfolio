// ==========================================================================
// SUNDHEEP S - MASTER APPLICATION CONTROLLER
// Interactive UI, Category Filters, Lightbox Modals & Real Form Handler
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  renderHeroMetrics();
  renderAboutSection();
  renderSkillsSection();
  renderProjectsSection();
  renderCreativesSection();
  renderAiSection();
  renderCertificationsSection();
  renderEducationSection();
  initContactForm();
  initModals();
  initScrollEffects();

  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

// --------------------------------------------------------------------------
// NAVIGATION & SCROLLSPY
// --------------------------------------------------------------------------
function initNavigation() {
  const navbar = document.getElementById('main-navbar');
  const mobileToggle = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const closeDrawerBtn = document.getElementById('close-drawer-btn');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  // Sticky Navbar Blur on Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('nav-glass', 'py-4');
      navbar.classList.remove('py-6');
    } else {
      navbar.classList.remove('nav-glass', 'py-4');
      navbar.classList.add('py-6');
    }
    updateScrollSpy();
  });

  // Mobile Drawer Toggle
  function openDrawer() {
    mobileDrawer.classList.add('open');
    drawerBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    mobileDrawer.classList.remove('open');
    drawerBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElem.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Scrollspy logic
  function updateScrollSpy() {
    const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'creatives', 'ai-tech', 'certifications', 'education', 'contact'];
    const scrollPos = window.scrollY + 120;

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('text-accent', 'border-accent');
              link.classList.remove('text-muted');
            } else {
              link.classList.remove('text-accent', 'border-accent');
              link.classList.add('text-muted');
            }
          });
        }
      }
    });
  }
}

// --------------------------------------------------------------------------
// HERO SECTION METRICS
// --------------------------------------------------------------------------
function renderHeroMetrics() {
  const container = document.getElementById('hero-metrics-container');
  if (!container || !PORTFOLIO_DATA.profile.metrics) return;

  container.innerHTML = PORTFOLIO_DATA.profile.metrics.map(m => `
    <div class="floating-metric-card flex flex-col justify-between">
      <span class="text-xs uppercase tracking-wider text-muted font-mono font-medium">${m.label}</span>
      <div class="flex items-baseline gap-2 mt-1">
        <span class="text-2xl lg:text-3xl font-extrabold text-secondary font-heading">${m.value}</span>
        <span class="text-xs text-accent font-medium">${m.trend}</span>
      </div>
    </div>
  `).join('');
}

// --------------------------------------------------------------------------
// ABOUT ME SECTION
// --------------------------------------------------------------------------
function renderAboutSection() {
  const pillarsContainer = document.getElementById('about-pillars-container');
  if (!pillarsContainer || !PORTFOLIO_DATA.about.pillars) return;

  pillarsContainer.innerHTML = PORTFOLIO_DATA.about.pillars.map(p => `
    <div class="surface-card-interactive p-8 rounded-2xl flex flex-col justify-between h-full">
      <div>
        <div class="w-12 h-12 rounded-xl bg-surface-2 border border-border flex items-center justify-center text-accent mb-6">
          <i data-lucide="${p.icon}" class="w-6 h-6"></i>
        </div>
        <span class="text-xs font-mono uppercase tracking-widest text-accent font-semibold">${p.subtitle}</span>
        <h3 class="text-xl font-heading font-bold text-secondary mt-1 mb-3">${p.title}</h3>
        <p class="text-sm text-muted-light leading-relaxed mb-6">${p.description}</p>
      </div>
      <ul class="space-y-2.5 pt-4 border-t border-border">
        ${p.points.map(pt => `
          <li class="flex items-start gap-2.5 text-xs text-muted-light">
            <i data-lucide="check" class="w-4 h-4 text-accent shrink-0 mt-0.5"></i>
            <span>${pt}</span>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}

// --------------------------------------------------------------------------
// SKILLS & EXPERTISE (INTERACTIVE FILTER TABS)
// --------------------------------------------------------------------------
let currentSkillCategory = 'all';

function renderSkillsSection() {
  const tabsContainer = document.getElementById('skill-tabs-container');
  const itemsContainer = document.getElementById('skills-grid-container');
  if (!tabsContainer || !itemsContainer) return;

  // Render Tabs
  tabsContainer.innerHTML = PORTFOLIO_DATA.skills.categories.map(c => `
    <button class="tab-pill ${c.id === currentSkillCategory ? 'active' : ''}" data-cat="${c.id}">
      ${c.label}
    </button>
  `).join('');

  // Tab Click Listeners
  tabsContainer.querySelectorAll('.tab-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      currentSkillCategory = btn.getAttribute('data-cat');
      tabsContainer.querySelectorAll('.tab-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderSkillItems();
    });
  });

  renderSkillItems();
}

function renderSkillItems() {
  const container = document.getElementById('skills-grid-container');
  if (!container) return;

  const filtered = currentSkillCategory === 'all'
    ? PORTFOLIO_DATA.skills.items
    : PORTFOLIO_DATA.skills.items.filter(s => s.category === currentSkillCategory);

  container.innerHTML = filtered.map(s => `
    <div class="surface-card p-5 rounded-xl flex items-start gap-4 transition-all hover:border-accent/40 group">
      <div class="w-10 h-10 rounded-lg bg-surface-2 border border-border flex items-center justify-center text-accent shrink-0 group-hover:scale-105 transition-transform">
        <i data-lucide="${s.icon}" class="w-5 h-5"></i>
      </div>
      <div class="flex-1">
        <div class="flex items-center justify-between gap-2 mb-1">
          <h4 class="font-heading font-semibold text-secondary text-base group-hover:text-accent transition-colors">${s.name}</h4>
          <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-2 text-muted border border-border">${s.level}</span>
        </div>
        <p class="text-xs text-muted-light leading-relaxed">${s.desc}</p>
      </div>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

// --------------------------------------------------------------------------
// FEATURED PROJECTS SECTION
// --------------------------------------------------------------------------
function renderProjectsSection() {
  const container = document.getElementById('projects-grid-container');
  if (!container || !PORTFOLIO_DATA.projects) return;

  container.innerHTML = PORTFOLIO_DATA.projects.map((proj, idx) => {
    const isEven = idx % 2 === 1;
    return `
      <div class="surface-card-interactive rounded-2xl overflow-hidden border border-border p-6 lg:p-10 transition-all">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <!-- Text Details -->
          <div class="lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'} flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-3 mb-3">
                <span class="text-xs font-mono font-bold text-accent px-2.5 py-1 rounded bg-accent/10 border border-accent/25">
                  PROJECT ${proj.number}
                </span>
                <span class="text-xs font-mono text-muted uppercase tracking-wider">${proj.categoryBadge}</span>
              </div>
              <h3 class="text-2xl lg:text-3xl font-heading font-extrabold text-secondary mb-2">${proj.name}</h3>
              <p class="text-xs font-mono text-accent mb-4">${proj.tagline}</p>
              <p class="text-sm text-muted-light leading-relaxed mb-6">${proj.description}</p>
              
              <!-- Features / Services -->
              ${proj.servicesOffered ? `
                <div class="mb-6">
                  <span class="text-xs font-mono text-muted uppercase tracking-wider block mb-2 font-semibold">Services Offered:</span>
                  <div class="flex flex-wrap gap-2">
                    ${proj.servicesOffered.map(srv => `
                      <span class="text-xs px-2.5 py-1 rounded-md bg-surface-2 border border-border text-secondary">${srv}</span>
                    `).join('')}
                  </div>
                </div>
              ` : `
                <ul class="space-y-2 mb-6">
                  ${proj.features.map(f => `
                    <li class="flex items-start gap-2.5 text-xs text-muted-light">
                      <i data-lucide="check-circle" class="w-4 h-4 text-accent shrink-0 mt-0.5"></i>
                      <span>${f}</span>
                    </li>
                  `).join('')}
                </ul>
              `}

              <!-- Verified Tech Stack -->
              <div class="flex flex-wrap items-center gap-2 mb-8">
                ${proj.tech.map(t => `
                  <span class="text-xs font-mono px-2.5 py-0.5 rounded bg-surface-3 text-muted-light border border-border/80">${t}</span>
                `).join('')}
              </div>
            </div>

            <!-- CTA Actions -->
            <div class="flex flex-wrap items-center gap-4 pt-4 border-t border-border">
              <a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary">
                <span>View Live Website</span>
                <i data-lucide="external-link" class="w-4 h-4"></i>
              </a>
              <button class="btn-secondary view-project-modal-btn" data-proj-id="${proj.id}">
                <span>Project Case Study</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </button>
            </div>
          </div>

          <!-- Visual Showcase Preview -->
          <div class="lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}">
            <div class="relative group rounded-xl overflow-hidden border border-border bg-surface-2 shadow-2xl">
              <!-- Browser Mockup Header Bar -->
              <div class="h-9 bg-surface-3 border-b border-border px-4 flex items-center justify-between">
                <div class="flex items-center gap-1.5">
                  <div class="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div class="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div class="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                </div>
                <div class="text-[11px] font-mono text-muted truncate max-w-[200px]">
                  ${proj.liveUrl.replace('https://', '')}
                </div>
                <div class="w-8"></div>
              </div>

              <!-- Project Visual Image -->
              <div class="relative overflow-hidden aspect-[16/10] bg-surface-2 flex items-center justify-center p-4">
                <img src="${proj.image}" alt="${proj.name}" class="max-h-full max-w-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div class="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary text-xs py-2 px-4 shadow-xl">
                    <span>Visit Live Site</span>
                    <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// --------------------------------------------------------------------------
// CREATIVE PORTFOLIO (MASONRY GALLERY & MODAL)
// --------------------------------------------------------------------------
let currentCreativeFilter = 'all';

function renderCreativesSection() {
  const filterContainer = document.getElementById('creative-filter-container');
  const galleryContainer = document.getElementById('creative-gallery-container');
  if (!filterContainer || !galleryContainer) return;

  const categories = [
    { id: 'all', label: 'All Creatives' },
    { id: 'branding', label: 'Branding & Logos' },
    { id: 'ads', label: 'Ad Creatives' },
    { id: 'promo', label: 'Promotional Campaigns' }
  ];

  filterContainer.innerHTML = categories.map(c => `
    <button class="tab-pill ${c.id === currentCreativeFilter ? 'active' : ''}" data-filter="${c.id}">
      ${c.label}
    </button>
  `).join('');

  filterContainer.querySelectorAll('.tab-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      currentCreativeFilter = btn.getAttribute('data-filter');
      filterContainer.querySelectorAll('.tab-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCreativeItems();
    });
  });

  renderCreativeItems();
}

function renderCreativeItems() {
  const container = document.getElementById('creative-gallery-container');
  if (!container) return;

  const filtered = currentCreativeFilter === 'all'
    ? PORTFOLIO_DATA.creatives
    : PORTFOLIO_DATA.creatives.filter(c => c.category === currentCreativeFilter);

  container.innerHTML = filtered.map(item => `
    <div class="creative-card group" data-creative-id="${item.id}">
      <div class="aspect-square bg-surface-2 overflow-hidden flex items-center justify-center p-2">
        <img src="${item.image}" alt="${item.title}" class="max-h-full max-w-full object-contain" loading="lazy" />
      </div>
      <div class="creative-overlay">
        <span class="text-[11px] font-mono text-accent font-semibold tracking-wider uppercase">${item.categoryLabel}</span>
        <h4 class="font-heading font-bold text-secondary text-base leading-snug mt-1 mb-2">${item.title}</h4>
        <p class="text-xs text-muted-light line-clamp-2 mb-3">${item.summary}</p>
        <div class="flex items-center gap-2 text-accent text-xs font-semibold">
          <span>Click to Inspect Full Creative</span>
          <i data-lucide="maximize-2" class="w-3.5 h-3.5"></i>
        </div>
      </div>
    </div>
  `).join('');

  // Attach click listeners to open creative modal
  container.querySelectorAll('.creative-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-creative-id');
      const item = PORTFOLIO_DATA.creatives.find(c => c.id === id);
      if (item) openCreativeModal(item);
    });
  });

  if (window.lucide) window.lucide.createIcons();
}

// --------------------------------------------------------------------------
// AI-POWERED WEBSITE DEVELOPMENT SECTION
// --------------------------------------------------------------------------
function renderAiSection() {
  const toolsContainer = document.getElementById('ai-tools-container');
  const workflowContainer = document.getElementById('ai-workflow-container');
  if (!toolsContainer || !PORTFOLIO_DATA.aiDevelopment) return;

  toolsContainer.innerHTML = PORTFOLIO_DATA.aiDevelopment.tools.map(tool => `
    <div class="surface-card-interactive p-6 rounded-2xl flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-4">
          <div class="w-10 h-10 rounded-xl bg-surface-2 border border-border flex items-center justify-center text-accent">
            <i data-lucide="${tool.icon}" class="w-5 h-5"></i>
          </div>
          <span class="text-[11px] font-mono text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-full">
            ${tool.badge}
          </span>
        </div>
        <h4 class="text-lg font-heading font-bold text-secondary mb-1">${tool.name}</h4>
        <p class="text-xs font-mono text-muted mb-3">${tool.role}</p>
        <p class="text-xs text-muted-light leading-relaxed mb-4">${tool.description}</p>
      </div>
      <div class="pt-3 border-t border-border flex flex-wrap gap-1.5">
        ${tool.capabilities.map(cap => `
          <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-2 text-muted-light border border-border">${cap}</span>
        `).join('')}
      </div>
    </div>
  `).join('');

  if (workflowContainer) {
    workflowContainer.innerHTML = PORTFOLIO_DATA.aiDevelopment.workflowSteps.map(st => `
      <div class="surface-card p-5 rounded-xl flex items-start gap-4">
        <span class="text-2xl font-heading font-black text-accent/40 font-mono">${st.step}</span>
        <div>
          <h5 class="text-sm font-heading font-bold text-secondary mb-1">${st.title}</h5>
          <p class="text-xs text-muted-light leading-relaxed">${st.desc}</p>
        </div>
      </div>
    `).join('');
  }
}

// --------------------------------------------------------------------------
// CERTIFICATIONS SECTION
// --------------------------------------------------------------------------
function renderCertificationsSection() {
  const container = document.getElementById('certifications-grid-container');
  if (!container || !PORTFOLIO_DATA.certifications) return;

  container.innerHTML = PORTFOLIO_DATA.certifications.map(cert => `
    <div class="surface-card-interactive p-6 rounded-2xl flex flex-col justify-between group">
      <div>
        <div class="flex items-center justify-between gap-2 mb-4">
          <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-accent/10 text-accent border border-accent/20">
            ${cert.badge}
          </span>
          <span class="text-xs font-mono text-muted">${cert.date}</span>
        </div>
        <h4 class="text-lg font-heading font-bold text-secondary mb-1 group-hover:text-accent transition-colors">
          ${cert.title}
        </h4>
        <p class="text-xs font-mono text-muted-light mb-2">Issued by: <strong class="text-secondary font-medium">${cert.issuer}</strong></p>
        <p class="text-xs text-muted leading-relaxed mb-5">${cert.description}</p>
      </div>

      <div>
        <div class="flex flex-wrap gap-1.5 mb-5">
          ${cert.skills.map(sk => `
            <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-2 text-muted-light border border-border">${sk}</span>
          `).join('')}
        </div>
        
        <button class="btn-secondary w-full text-xs py-2.5 view-cert-modal-btn" data-cert-id="${cert.id}">
          <i data-lucide="eye" class="w-3.5 h-3.5"></i>
          <span>Verify & Preview Credential</span>
        </button>
      </div>
    </div>
  `).join('');

  // Modal Buttons
  container.querySelectorAll('.view-cert-modal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-cert-id');
      const cert = PORTFOLIO_DATA.certifications.find(c => c.id === id);
      if (cert) openCertModal(cert);
    });
  });
}

// --------------------------------------------------------------------------
// EDUCATION SECTION
// --------------------------------------------------------------------------
function renderEducationSection() {
  const container = document.getElementById('education-timeline-container');
  if (!container || !PORTFOLIO_DATA.education) return;

  container.innerHTML = PORTFOLIO_DATA.education.map(edu => `
    <div class="surface-card p-6 lg:p-8 rounded-2xl border border-border relative">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
        <h4 class="text-xl font-heading font-bold text-secondary">${edu.degree}</h4>
        <span class="text-xs font-mono px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 w-fit">
          ${edu.score}
        </span>
      </div>
      <p class="text-sm font-semibold text-accent mb-1">${edu.specialization}</p>
      <p class="text-xs font-mono text-muted mb-4">${edu.institution} | ${edu.location} (${edu.year})</p>
      <ul class="space-y-1.5 pt-4 border-t border-border">
        ${edu.highlights.map(h => `
          <li class="flex items-start gap-2.5 text-xs text-muted-light">
            <i data-lucide="check" class="w-3.5 h-3.5 text-accent shrink-0 mt-0.5"></i>
            <span>${h}</span>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}

// --------------------------------------------------------------------------
// MODAL LIGHTBOX SYSTEM
// --------------------------------------------------------------------------
function initModals() {
  const modal = document.getElementById('universal-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }

  // Attach Case Study click listener
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.view-project-modal-btn');
    if (btn) {
      const id = btn.getAttribute('data-proj-id');
      const proj = PORTFOLIO_DATA.projects.find(p => p.id === id);
      if (proj) openProjectModal(proj);
    }
  });
}

function openCreativeModal(item) {
  const modal = document.getElementById('universal-modal');
  const modalBody = document.getElementById('modal-body-content');
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div class="p-6 lg:p-8">
      <div class="flex items-center justify-between gap-3 mb-4">
        <span class="text-xs font-mono px-2.5 py-1 rounded bg-accent/10 text-accent border border-accent/20 uppercase font-semibold">
          ${item.categoryLabel}
        </span>
      </div>
      <h3 class="text-2xl font-heading font-extrabold text-secondary mb-3">${item.title}</h3>
      
      <div class="bg-surface-2 rounded-xl p-4 border border-border mb-6 flex items-center justify-center max-h-[500px] overflow-hidden">
        <img src="${item.image}" alt="${item.title}" class="max-h-[460px] max-w-full object-contain rounded" />
      </div>

      <div class="space-y-4">
        <div>
          <h5 class="text-xs font-mono uppercase tracking-wider text-muted font-semibold mb-1">Strategic Overview</h5>
          <p class="text-sm text-secondary leading-relaxed">${item.summary}</p>
        </div>
        <div>
          <h5 class="text-xs font-mono uppercase tracking-wider text-muted font-semibold mb-1">Campaign Strategy & Conversion Psychology</h5>
          <p class="text-xs text-muted-light leading-relaxed">${item.strategy}</p>
        </div>
        <div class="pt-3 border-t border-border flex flex-wrap gap-2">
          ${item.tags.map(t => `<span class="text-xs font-mono px-2.5 py-1 rounded bg-surface-2 text-muted-light border border-border">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
  if (window.lucide) window.lucide.createIcons();
}

function openCertModal(cert) {
  const modal = document.getElementById('universal-modal');
  const modalBody = document.getElementById('modal-body-content');
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div class="p-6 lg:p-8">
      <div class="flex items-center justify-between gap-3 mb-4">
        <span class="text-xs font-mono px-2.5 py-1 rounded bg-accent/10 text-accent border border-accent/20 uppercase font-semibold">
          ${cert.badge}
        </span>
        <span class="text-xs font-mono text-muted">${cert.date}</span>
      </div>
      <h3 class="text-2xl font-heading font-extrabold text-secondary mb-1">${cert.title}</h3>
      <p class="text-xs font-mono text-muted-light mb-6">Credential issued by: <strong class="text-secondary font-medium">${cert.issuer}</strong></p>

      <div class="bg-surface-2 rounded-xl p-4 border border-border mb-6 flex flex-col items-center justify-center min-h-[300px]">
        ${cert.fileType === 'image' ? `
          <img src="${cert.fileUrl}" alt="${cert.title}" class="max-h-[440px] max-w-full object-contain rounded shadow" />
        ` : `
          <div class="w-full h-[450px] rounded overflow-hidden border border-border bg-surface-3 flex flex-col items-center justify-center p-6 text-center">
            <i data-lucide="file-check" class="w-16 h-16 text-accent mb-4"></i>
            <h4 class="text-lg font-heading font-bold text-secondary mb-2">${cert.title}</h4>
            <p class="text-xs text-muted-light max-w-md mb-6">${cert.description}</p>
            <div class="flex flex-wrap gap-3">
              <a href="${cert.fileUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary text-xs py-2 px-4">
                <span>Open Original PDF</span>
                <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
              </a>
              <a href="${cert.fileUrl}" download class="btn-secondary text-xs py-2 px-4">
                <span>Download PDF File</span>
                <i data-lucide="download" class="w-3.5 h-3.5"></i>
              </a>
            </div>
          </div>
        `}
      </div>

      <div class="space-y-4">
        <div>
          <h5 class="text-xs font-mono uppercase tracking-wider text-muted font-semibold mb-1">Competencies Verified</h5>
          <div class="flex flex-wrap gap-2 mt-2">
            ${cert.skills.map(s => `<span class="text-xs font-mono px-2.5 py-1 rounded bg-surface-2 text-muted-light border border-border">${s}</span>`).join('')}
          </div>
        </div>
        <div class="pt-4 border-t border-border flex items-center justify-end">
          <a href="${cert.fileUrl}" target="_blank" class="btn-primary text-xs py-2 px-5">
            <span>View Full Document</span>
            <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
          </a>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
  if (window.lucide) window.lucide.createIcons();
}

function openProjectModal(proj) {
  const modal = document.getElementById('universal-modal');
  const modalBody = document.getElementById('modal-body-content');
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div class="p-6 lg:p-8">
      <div class="flex items-center justify-between gap-3 mb-3">
        <span class="text-xs font-mono px-2.5 py-1 rounded bg-accent/10 text-accent border border-accent/20 uppercase font-semibold">
          PROJECT ${proj.number} • ${proj.categoryBadge}
        </span>
      </div>
      <h3 class="text-2xl font-heading font-extrabold text-secondary mb-1">${proj.name}</h3>
      <p class="text-xs font-mono text-accent mb-6">${proj.tagline}</p>

      <div class="bg-surface-2 rounded-xl p-4 border border-border mb-6 flex items-center justify-center max-h-[380px]">
        <img src="${proj.image}" alt="${proj.name}" class="max-h-[340px] max-w-full object-contain rounded" />
      </div>

      <div class="space-y-4 mb-6">
        <div>
          <h5 class="text-xs font-mono uppercase tracking-wider text-muted font-semibold mb-1">Executive Summary</h5>
          <p class="text-sm text-secondary leading-relaxed">${proj.description}</p>
        </div>
        <div>
          <h5 class="text-xs font-mono uppercase tracking-wider text-muted font-semibold mb-2">Key Highlights & Architecture</h5>
          <ul class="space-y-2">
            ${proj.features.map(f => `
              <li class="flex items-start gap-2.5 text-xs text-muted-light">
                <i data-lucide="check-circle" class="w-4 h-4 text-accent shrink-0 mt-0.5"></i>
                <span>${f}</span>
              </li>
            `).join('')}
          </ul>
        </div>
        <div>
          <h5 class="text-xs font-mono uppercase tracking-wider text-muted font-semibold mb-2">Verified Technology Stack</h5>
          <div class="flex flex-wrap gap-2">
            ${proj.tech.map(t => `<span class="text-xs font-mono px-2.5 py-1 rounded bg-surface-2 text-muted-light border border-border">${t}</span>`).join('')}
          </div>
        </div>
      </div>

      <div class="pt-4 border-t border-border flex items-center justify-between">
        <span class="text-xs font-mono text-muted">Deployed on Vercel Global Edge</span>
        <a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary text-xs py-2 px-5">
          <span>Open Live Site</span>
          <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
        </a>
      </div>
    </div>
  `;

  modal.classList.add('active');
  if (window.lucide) window.lucide.createIcons();
}

// --------------------------------------------------------------------------
// CONTACT FORM VALIDATION & REAL DISPATCH
// --------------------------------------------------------------------------
function initContactForm() {
  const form = document.getElementById('contact-form');
  const statusMsg = document.getElementById('form-status-message');
  if (!form || !statusMsg) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const subject = document.getElementById('form-subject').value.trim();
    const message = document.getElementById('form-message').value.trim();

    // Validation
    if (!name || name.length < 2) {
      showFormStatus('Please enter your full name (at least 2 characters).', 'error');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      showFormStatus('Please enter a valid email address.', 'error');
      return;
    }
    if (!subject || subject.length < 3) {
      showFormStatus('Please enter a subject (at least 3 characters).', 'error');
      return;
    }
    if (!message || message.length < 10) {
      showFormStatus('Please enter your message (at least 10 characters).', 'error');
      return;
    }

    // Processing & Real Delivery Dispatch
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Preparing dispatch...</span>`;

    // Save locally
    const submissions = JSON.parse(localStorage.getItem('sundheep_inquiries') || '[]');
    submissions.push({
      name, email, subject, message,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('sundheep_inquiries', JSON.stringify(submissions));

    // Construct Mailto URI to launch native email client with actual payload
    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject} - from ${name}`);
    const mailtoBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}\n\n---\nSent via Sundheep S Portfolio Website`);
    const mailtoUrl = `mailto:sundheep006@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      
      showFormStatus(`Message recorded! Opening your email client to send directly to sundheep006@gmail.com...`, 'success');
      
      // Trigger actual email client dispatch
      window.location.href = mailtoUrl;

      // Reset form
      form.reset();
    }, 800);
  });

  function showFormStatus(text, type) {
    statusMsg.textContent = text;
    statusMsg.className = `text-xs font-mono p-3 rounded-lg border mt-3 block ${
      type === 'error'
        ? 'bg-red-500/10 border-red-500/30 text-red-400'
        : 'bg-accent/10 border-accent/30 text-accent'
    }`;
  }
}

// --------------------------------------------------------------------------
// SCROLL EFFECTS & REVEAL
// --------------------------------------------------------------------------
function initScrollEffects() {
  const backToTopBtn = document.getElementById('back-to-top-btn');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
        backToTopBtn.classList.add('opacity-100', 'pointer-events-auto');
      } else {
        backToTopBtn.classList.remove('opacity-100', 'pointer-events-auto');
        backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
