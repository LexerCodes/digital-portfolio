/* ═══════════════════════════════════════════════════════
   PORTFOLIO — main.js
   Reads content from data.js and renders every page.
   You do NOT need to edit this file.
   ═══════════════════════════════════════════════════════ */


// ── NAV ─────────────────────────────────────────────────────────────────────

function buildNav() {
  const firstName = PORTFOLIO.personal.name.split(' ')[0];
  const links = [
    { href: 'index.html',        label: 'About'        },
    { href: 'academics.html',    label: 'Academics'    },
    { href: 'achievements.html', label: 'Achievements' },
    { href: 'projects.html',     label: 'Projects'     },
    { href: 'community.html',    label: 'Community'    },
    { href: 'reflection.html',   label: 'Reflection'   },
    { href: 'contact.html',      label: 'Contact'      }
  ];
  const linkHtml = links.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('');
  const drawerHtml = links.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('');

  return `
    <div class="nav-inner">
      <a href="index.html" class="nav-logo">${firstName}</a>
      <ul class="nav-links">${linkHtml}</ul>
      <button class="nav-hamburger" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div class="nav-drawer">
      <ul class="nav-drawer-links">${drawerHtml}</ul>
    </div>
  `;
}


// ── FOOTER ──────────────────────────────────────────────────────────────────

function buildFooter() {
  const { name } = PORTFOLIO.personal;
  const { year, liveUrl } = PORTFOLIO.settings;
  const liveLink = liveUrl
    ? ` · <a href="${liveUrl}" target="_blank" rel="noopener">Live site ↗</a>`
    : '';
  return `
    <div class="footer-inner">
      <p class="footer-name">${name}</p>
      <p class="footer-note">Class 10 Portfolio · ${year}${liveLink}</p>
    </div>
  `;
}


// ── ABOUT PAGE ──────────────────────────────────────────────────────────────

function renderAbout() {
  const p = PORTFOLIO.personal;

  const photo = p.photo
    ? `<img src="${p.photo}" alt="${p.name}" class="hero-photo" />`
    : `<div class="hero-photo-placeholder">
         <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke-width="1.5">
           <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
           <circle cx="12" cy="7" r="4"/>
         </svg>
         <span>Add your photo</span>
       </div>`;

  const values = p.values.map(v => `
    <div class="card fade-up">
      <p class="card-eyebrow">Value</p>
      <p class="card-title">${v.title}</p>
      <p class="card-body">${v.description}</p>
    </div>`).join('');

  const pills = p.interests.map(i => `<span class="pill">${i}</span>`).join('');
  const strengths = p.strengths.map(s => `<li>${s}</li>`).join('');
  const workOn    = p.workingOn.map(s => `<li>${s}</li>`).join('');
  const shortGoals = p.goals.short.map(g => `<li>${g}</li>`).join('');
  const longGoals  = p.goals.long.map(g => `<li>${g}</li>`).join('');

  return `
    <section class="hero">
      <div class="hero-text">
        <p class="hero-eyebrow fade-up">Student Portfolio</p>
        <h1 class="hero-name fade-up">${p.name}</h1>
        <p class="hero-role fade-up">${p.class} &middot; ${p.school} &middot; ${p.city}</p>
        <p class="hero-intro fade-up">${p.intro}</p>
        <div class="pill-row fade-up">${pills}</div>
      </div>
      <div class="hero-media fade-up">${photo}</div>
    </section>

    <section class="section fade-up">
      <p class="section-label">Details</p>
      <div class="info-row">
        <div class="info-item">
          <p class="info-label">Date of birth</p>
          <p class="info-value">${p.dob}</p>
        </div>
        <div class="info-item">
          <p class="info-label">School</p>
          <p class="info-value">${p.school}</p>
        </div>
        <div class="info-item">
          <p class="info-label">Class</p>
          <p class="info-value">${p.class}</p>
        </div>
      </div>
    </section>

    <section class="section">
      <p class="section-label fade-up">Core values</p>
      <div class="card-grid">${values}</div>
    </section>

    <section class="section fade-up">
      <p class="section-label">Strengths &amp; growth areas</p>
      <div class="card-grid">
        <div class="card">
          <p class="card-eyebrow">Strengths</p>
          <ul class="tag-list">${strengths}</ul>
        </div>
        <div class="card">
          <p class="card-eyebrow">Working on</p>
          <ul class="tag-list working">${workOn}</ul>
        </div>
      </div>
    </section>

    <section class="section">
      <p class="section-label fade-up">Future goals</p>
      <div class="goals-grid fade-up">
        <div class="goal-card goal-short">
          <p class="goal-type">Short-term</p>
          <ul class="goal-list">${shortGoals}</ul>
        </div>
        <div class="goal-card goal-long">
          <p class="goal-type">Long-term</p>
          <ul class="goal-list">${longGoals}</ul>
        </div>
      </div>
    </section>

    <section class="section fade-up">
      <div class="quote-block">
        <blockquote class="quote-text">&ldquo;${p.quote.text}&rdquo;</blockquote>
        <p class="quote-author">&mdash; ${p.quote.author}</p>
      </div>
    </section>
  `;
}


// ── ACADEMICS PAGE ──────────────────────────────────────────────────────────

function renderAcademics() {
  const a = PORTFOLIO.academics;

  function buildPeriod(data) {
    const cards = data.subjects.map(s => `
      <div class="subject-card fade-up">
        <p class="subject-name">${s.subject}</p>
        <p class="subject-desc">${s.description}</p>
      </div>`).join('');

    return `
      <div class="academic-block fade-up">
        <div class="academic-header">
          <p class="academic-period">${data.period}</p>
          <p class="academic-highlight">${data.highlight}</p>
        </div>
        <div class="subject-grid">${cards}</div>
      </div>`;
  }

  return `
    <div class="page-header fade-up">
      <p class="page-eyebrow">Academics</p>
      <h1 class="page-title">Academic Journey</h1>
      <p class="page-subtitle">A subject-by-subject account of how my thinking has grown across school.</p>
    </div>
    ${buildPeriod(a.class5to7)}
    ${buildPeriod(a.class8to9)}
    ${buildPeriod(a.class10)}
  `;
}


// ── CERTIFICATE SLIDER ───────────────────────────────────────────────────────

const _certState = {};

function certSlide(id, dir) {
  const slider = document.getElementById(id);
  if (!slider) return;
  const track  = slider.querySelector('.cert-track');
  const slides = slider.querySelectorAll('.cert-slide');
  // dots live in .cert-section (parent), not inside the slider div itself
  const dots   = slider.closest('.cert-section').querySelectorAll('.cert-dot');
  _certState[id] = ((_certState[id] || 0) + dir + slides.length) % slides.length;
  track.style.transform = `translateX(-${_certState[id] * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === _certState[id]));
}

function certGoTo(id, idx) {
  const slider = document.getElementById(id);
  if (!slider) return;
  const track = slider.querySelector('.cert-track');
  const dots  = slider.closest('.cert-section').querySelectorAll('.cert-dot');
  _certState[id] = idx;
  track.style.transform = `translateX(-${idx * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === idx));
}

function certAbsUrl(path) {
  if (path.startsWith('http')) return path;
  const base = (PORTFOLIO.settings.liveUrl || '').replace(/\/$/, '');
  return base ? base + '/' + path : window.location.origin + '/' + path;
}

function buildCertSlider(certs, sliderId) {
  if (!certs || certs.length === 0) return '';

  const slides = certs.map(cert => {
    const isImage = /\.(jpe?g|png|gif|webp)$/i.test(cert);
    const isVideo = /\.(mp4|webm|mov|ogg)$/i.test(cert);
    if (isImage) {
      return `<div class="cert-slide">
        <img src="${cert}" alt="Certificate" class="cert-img" />
        <a href="${cert}" class="cert-open-link" target="_blank" rel="noopener">Open in new tab ↗</a>
      </div>`;
    }
    if (isVideo) {
      return `<div class="cert-slide">
        <video src="${cert}" class="cert-video" controls playsinline></video>
      </div>`;
    }
    // Fallback for PDFs that haven't been converted yet
    return `<div class="cert-slide cert-slide--pdf">
      <p class="cert-pdf-note">Convert this PDF to PNG for inline preview.</p>
      <a href="${cert}" class="cert-open-link" target="_blank" rel="noopener">Open in new tab ↗</a>
    </div>`;
  }).join('');

  const multiple = certs.length > 1;
  const arrows = multiple ? `
    <button class="cert-arrow cert-prev" onclick="certSlide('${sliderId}', -1)" aria-label="Previous">&#8592;</button>
    <button class="cert-arrow cert-next" onclick="certSlide('${sliderId}',  1)" aria-label="Next">&#8594;</button>` : '';
  const dots = multiple ? `
    <div class="cert-dots">
      ${certs.map((_, i) => `<button class="cert-dot${i === 0 ? ' active' : ''}" onclick="certGoTo('${sliderId}', ${i})" aria-label="Go to certificate ${i + 1}"></button>`).join('')}
    </div>` : '';

  return `
    <div class="cert-section">
      <p class="cert-label">${multiple ? `Certificates (${certs.length})` : 'Certificate'}</p>
      <div class="cert-slider" id="${sliderId}">
        <div class="cert-track">${slides}</div>
        ${arrows}
      </div>
      ${dots}
    </div>`;
}

// ── ACHIEVEMENTS PAGE ────────────────────────────────────────────────────────

function renderAchievements() {
  const a = PORTFOLIO.achievements;
  const categories = [
    { key: 'cultural',  label: 'Cultural',  color: 'purple' },
    { key: 'technical', label: 'Technical', color: 'blue'   },
    { key: 'sports',    label: 'Sports',    color: 'green'  },
    { key: 'literary',  label: 'Literary',  color: 'amber'  },
    { key: 'academics', label: 'Academic',  color: 'navy'   }
  ];

  const sections = categories.map(cat => {
    const items = a[cat.key];
    if (!items || items.length === 0) return '';

    const cards = items.map((item, idx) => {
      const sliderId = `cert-${cat.key}-${idx}`;
      // support both  certificates: []  and legacy  certificate: "..."
      const certs = Array.isArray(item.certificates)
        ? item.certificates
        : (item.certificate ? [item.certificate] : []);

      return `
        <div class="achievement-card fade-up">
          <div class="achievement-body">
            <div class="achievement-top">
              <div>
                <span class="achievement-badge badge-${cat.color}">${cat.label}</span>
                <h3 class="achievement-title">${item.title}</h3>
              </div>
              ${item.position ? `<span class="achievement-position">${item.position}</span>` : ''}
            </div>
            <p class="achievement-desc">${item.description}</p>
            <div class="achievement-meta">
              <span class="achievement-org">${item.organiser}</span>
              <span class="achievement-yr">${item.year}</span>
            </div>
          </div>
          ${buildCertSlider(certs, sliderId)}
        </div>`;
    }).join('');

    return `
      <section class="section">
        <p class="section-label fade-up">${cat.label}</p>
        <div class="achievement-list">${cards}</div>
      </section>`;
  }).join('');

  return `
    <div class="page-header fade-up">
      <p class="page-eyebrow">Co-Scholastic</p>
      <h1 class="page-title">Achievements</h1>
      <p class="page-subtitle">Sports, cultural, literary, and technical accomplishments beyond the classroom.</p>
    </div>
    ${sections}
  `;
}


// ── PROJECTS PAGE ────────────────────────────────────────────────────────────

function renderProjects() {
  const cards = PORTFOLIO.projects.map(p => {
    const imgHtml = p.image
      ? `<img src="${p.image}" alt="${p.title}" class="project-image" />`
      : `<div class="project-image-placeholder">
           <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke-width="1.5">
             <rect x="3" y="3" width="18" height="18" rx="2"/>
             <path d="M3 9h18M9 21V9"/>
           </svg>
         </div>`;

    const skills = p.skills.map(s => `<span class="skill-pill">${s}</span>`).join('');
    const link   = p.link
      ? `<a href="${p.link}" class="project-link" target="_blank" rel="noopener">View project ↗</a>`
      : '';

    return `
      <div class="project-card fade-up">
        ${imgHtml}
        <div class="project-body">
          <div class="project-header">
            <h3 class="project-title">${p.title}</h3>
            <span class="project-year">${p.year}</span>
          </div>
          <div class="project-fields">
            <div class="project-field">
              <p class="field-label">Objective</p>
              <p class="field-value">${p.objective}</p>
            </div>
            <div class="project-field">
              <p class="field-label">My role</p>
              <p class="field-value">${p.role}</p>
            </div>
            <div class="project-field">
              <p class="field-label">Outcome</p>
              <p class="field-value">${p.outcome}</p>
            </div>
          </div>
          <div class="project-footer">
            <div class="skill-pills">${skills}</div>
            ${link}
          </div>
        </div>
      </div>`;
  }).join('');

  return `
    <div class="page-header fade-up">
      <p class="page-eyebrow">Portfolio</p>
      <h1 class="page-title">Projects</h1>
      <p class="page-subtitle">Work I've built — from concept to outcome.</p>
    </div>
    <div class="projects-list">${cards}</div>
  `;
}


// ── COMMUNITY PAGE ───────────────────────────────────────────────────────────

function renderCommunity() {
  const items = PORTFOLIO.community.map(c => `
    <div class="community-card fade-up">
      <div class="community-left">
        <p class="community-year">${c.year}</p>
        ${c.hours ? `<span class="community-hours">${c.hours}h</span>` : ''}
      </div>
      <div class="community-right">
        <h3 class="community-title">${c.title}</h3>
        <p class="community-org">${c.organisation}</p>
        <p class="community-desc">${c.description}</p>
      </div>
    </div>`).join('');

  return `
    <div class="page-header fade-up">
      <p class="page-eyebrow">Service</p>
      <h1 class="page-title">Community &amp; Social Responsibility</h1>
      <p class="page-subtitle">Giving back and creating impact beyond school.</p>
    </div>
    <div class="community-list">${items}</div>
  `;
}


// ── REFLECTION PAGE ──────────────────────────────────────────────────────────

function renderReflection() {
  const r = PORTFOLIO.reflection;

  const milestones = r.milestones.map(m => `
    <div class="milestone fade-up">
      <div class="milestone-year">${m.year}</div>
      <div class="milestone-content">
        <h3 class="milestone-title">${m.title}</h3>
        <p class="milestone-body">${m.body}</p>
      </div>
    </div>`).join('');

  const lessons = r.lessons.map(l => `
    <div class="lesson-card fade-up">
      <p class="lesson-title">${l.title}</p>
      <p class="lesson-body">${l.body}</p>
    </div>`).join('');

  return `
    <div class="page-header fade-up">
      <p class="page-eyebrow">Reflection</p>
      <h1 class="page-title">Personal Growth Journey</h1>
      <p class="page-intro-text">${r.intro}</p>
    </div>

    <section class="section">
      <p class="section-label fade-up">Key moments</p>
      <div class="milestones-list">${milestones}</div>
    </section>

    <section class="section">
      <p class="section-label fade-up">What I&rsquo;ve learned</p>
      <div class="lessons-grid">${lessons}</div>
    </section>
  `;
}


// ── CONTACT PAGE ─────────────────────────────────────────────────────────────

function renderContact() {
  const c = PORTFOLIO.contact;

  const socialLinks = c.social
    .filter(s => s.url)
    .map(s => `
      <a href="${s.url}" class="social-link" target="_blank" rel="noopener">
        <span class="social-platform">${s.platform}</span>
        <span class="social-handle">${s.handle}</span>
        <span class="social-arrow">↗</span>
      </a>`).join('');

  return `
    <div class="page-header fade-up">
      <p class="page-eyebrow">Contact</p>
      <h1 class="page-title">Get in Touch</h1>
      <p class="page-intro-text">${c.message}</p>
    </div>

    <div class="contact-grid">
      <div class="contact-info fade-up">
        <p class="section-label">Direct</p>
        <a href="mailto:${c.email}" class="email-link">${c.email}</a>
        ${socialLinks ? `<div class="social-list">${socialLinks}</div>` : ''}
      </div>

      <form class="contact-form fade-up" id="contact-form">
        <p class="section-label">Send a message</p>
        <div class="form-group">
          <label for="cf-name">Name</label>
          <input type="text" id="cf-name" name="name" placeholder="Your name" required />
        </div>
        <div class="form-group">
          <label for="cf-email">Email</label>
          <input type="email" id="cf-email" name="email" placeholder="your@email.com" required />
        </div>
        <div class="form-group">
          <label for="cf-msg">Message</label>
          <textarea id="cf-msg" name="message" rows="5" placeholder="What's on your mind?" required></textarea>
        </div>
        <button type="submit" class="btn-submit">Send message</button>
        <p class="form-note">Opens your email client — no server required.</p>
      </form>
    </div>
  `;
}

function setupContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name    = form.name.value.trim();
    const email   = form.email.value.trim();
    const message = form.message.value.trim();
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body    = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
    window.location.href = `mailto:${PORTFOLIO.contact.email}?subject=${subject}&body=${body}`;
  });
}


// ── SCROLL ANIMATIONS ────────────────────────────────────────────────────────

function setupScrollAnimations() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-up').forEach(el => io.observe(el));
}


// ── NAV: glass on scroll ─────────────────────────────────────────────────────

function setupNavScroll() {
  const nav = document.getElementById('nav-root');
  const onScroll = () => nav.classList.toggle('nav--scrolled', window.scrollY > 16);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load in case page is already scrolled
}


// ── NAV: mobile hamburger ────────────────────────────────────────────────────

function setupMobileMenu() {
  const btn = document.querySelector('.nav-hamburger');
  const nav = document.getElementById('nav-root');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('nav--open');
    btn.setAttribute('aria-expanded', String(open));
  });

  document.querySelectorAll('.nav-drawer-links a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('nav--open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
}


// ── NAV: highlight active link ───────────────────────────────────────────────

function highlightActiveNav() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-drawer-links a').forEach(a => {
    if (a.getAttribute('href') === current) a.classList.add('active');
  });
}


// ── INIT ─────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  const p = PORTFOLIO;

  // Page title
  document.title = p.settings.siteTitle;

  // Render shared layout
  document.getElementById('nav-root').innerHTML    = buildNav();
  document.getElementById('footer-root').innerHTML = buildFooter();

  // Render page content
  const page = document.documentElement.dataset.page;
  const render = {
    about:        renderAbout,
    academics:    renderAcademics,
    achievements: renderAchievements,
    projects:     renderProjects,
    community:    renderCommunity,
    reflection:   renderReflection,
    contact:      renderContact
  };

  if (render[page]) {
    document.getElementById('app').innerHTML = render[page]();
  }

  // Attach interactions
  setupScrollAnimations();
  setupNavScroll();
  highlightActiveNav();
  setupMobileMenu();
  setupContactForm();
});
