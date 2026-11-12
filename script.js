/* ============ ICONS (inline SVG, walang kailangang i-download) ============ */
const I = (d) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;

const ICONS = {
  home:    I('<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/>'),
  user:    I('<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/>'),
  trophy:  I('<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M7 6H4v2a3 3 0 0 0 3 3M17 6h3v2a3 3 0 0 1-3 3"/>'),
  family:  I('<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c0-3.5 3-6 6-6s6 2.5 6 6M15 14.5c3 0 6 1.5 6 5.5"/>'),
  code:    I('<path d="M8 6l-6 6 6 6M16 6l6 6-6 6M14 4l-4 16"/>'),
  laptop:  I('<rect x="4" y="5" width="16" height="11" rx="2"/><path d="M2 20h20"/>'),
  heart:   I('<path d="M12 21s-8-5.5-8-11a4.5 4.5 0 0 1 8-2.5A4.5 4.5 0 0 1 20 10c0 5.5-8 11-8 11z"/>'),
  arrow:   I('<path d="M5 12h14M13 6l6 6-6 6"/>'),
  star:    I('<path d="M12 3l2.8 5.8 6.2.9-4.5 4.4 1 6.2L12 17.3l-5.5 3 1-6.2L3 9.7l6.2-.9z"/>'),
  globe:   I('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>'),
  palette: I('<path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 1.5-2s0-2 1.5-2h2a4 4 0 0 0 4-4c0-5-4-10-9-10z"/><circle cx="8" cy="10" r="1"/><circle cx="12" cy="7" r="1"/><circle cx="16" cy="10" r="1"/>'),
  gear:    I('<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>'),
  pencil:  I('<path d="M4 20l4-1 11-11-3-3L5 16z"/>'),
  play:    I('<path d="M7 4l13 8-13 8z"/>'),
  chef:    I('<path d="M7 14a4 4 0 1 1 2-7 4 4 0 0 1 6 0 4 4 0 1 1 2 7v6H7z"/>'),
  broom:   I('<path d="M14 3l7 7M13 8l-9 9 3 3 9-9M6 15l3 3"/>'),
  bulb:    I('<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3 11c1 1 1 2 1 3h4c0-1 0-2 1-3a6 6 0 0 0-3-11z"/>'),
  target:  I('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1"/>'),
  chat:    I('<path d="M4 5h16v11H9l-5 4z"/>'),
  clock:   I('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
  cap:     I('<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 3 9 3 12 0v-5"/>'),
  cake:    I('<path d="M4 20h16v-7H4zM4 16c3 2 5-2 8 0s5-2 8 0M12 9V6M12 3v1"/>'),
  book:    I('<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5"/>'),
  fb:      I('<path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z"/>'),
  ig:      I('<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/>'),
  github:  I('<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-1-2.6c3.1-.3 6.4-1.5 6.4-7a5.4 5.4 0 0 0-1.5-3.7 5 5 0 0 0-.1-3.7s-1.2-.4-3.9 1.4a13.4 13.4 0 0 0-7 0C6.2 2.8 5 3.2 5 3.2a5 5 0 0 0-.1 3.7 5.4 5.4 0 0 0-1.5 3.7c0 5.4 3.3 6.6 6.4 7a3.4 3.4 0 0 0-1 2.6V22"/>'),
};

/* ============ MGA PAGE (dito mo babaguhin ang tabs) ============ */
const PAGES = [
  { id: "home",         label: "Home",                 icon: "home" },
  { id: "personal",     label: "Personal Information", icon: "user" },
  { id: "achievements", label: "Achievements",         icon: "trophy" },
  { id: "family",       label: "Family / Friends",     icon: "family" },
];

/* ============ 1. NAVBAR ============ */
function renderNavbar() {
  document.getElementById("navbar").innerHTML = `
    <div class="logo"><span class="logo-icon">${ICONS.code}</span>Patricia<span class="dot">.</span></div>
    <ul>${PAGES.map(p => `
      <li><a href="#${p.id}" data-page="${p.id}">
        <span class="ico">${ICONS[p.icon]}</span>${p.label}</a></li>`).join("")}
    </ul>`;
}

/* ============ 2. PAGE SWITCHER (walang reload, walang scroll) ============ */
function showPage() {
  const id = PAGES.some(p => p.id === location.hash.slice(1)) ? location.hash.slice(1) : "home";

  document.querySelectorAll(".page").forEach(s => s.classList.toggle("active", s.id === id));
  document.querySelectorAll("nav a").forEach(a => a.classList.toggle("active", a.dataset.page === id));
}

/* ============ 3. DECORATIONS (wave + dots) ============ */
function renderDecor() {
  document.body.insertAdjacentHTML("beforeend", `
    <svg class="wave" viewBox="0 0 1440 120" preserveAspectRatio="none">
      <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#7a1fff" stop-opacity=".55"/>
        <stop offset="1" stop-color="#07020f" stop-opacity="0"/>
      </linearGradient></defs>
      <path d="M0 80 C240 20 480 120 720 70 C960 20 1200 110 1440 40 L1440 120 L0 120Z" fill="url(#g)"/>
      <path d="M0 80 C240 20 480 120 720 70 C960 20 1200 110 1440 40" fill="none" stroke="#a43bff" stroke-width="2"/>
    </svg>
    <div class="dots dots-tl"></div><div class="dots dots-br"></div>`);
}

/* ============ 4. ICONS SA LOOB NG PAGE (data-icon="name") ============ */
function fillIcons() {
  document.querySelectorAll("[data-icon]").forEach(el => {
    el.insertAdjacentHTML("afterbegin", `<span class="ico">${ICONS[el.dataset.icon] || ""}</span>`);
  });
}

/* ============ 5. TYPING EFFECT ============ */
function typeEffect(el, words, speed = 110, del = 60, pause = 1400) {
  if (!el) return;
  let w = 0, c = 0, deleting = false;
  (function tick() {
    c += deleting ? -1 : 1;
    el.textContent = words[w].slice(0, c);
    let delay = deleting ? del : speed;
    if (!deleting && c === words[w].length) { deleting = true; delay = pause; }
    else if (deleting && c === 0) { deleting = false; w = (w + 1) % words.length; delay = 400; }
    setTimeout(tick, delay);
  })();
}

/* ============ 6. TEXT KAPAG WALA PANG PICTURE ============ */
function setupImageFallbacks() {
  document.querySelectorAll("img[data-fallback]").forEach(img => {
    const swap = () => {
      const s = document.createElement("span");
      s.className = "placeholder";
      s.textContent = img.dataset.fallback;
      img.replaceWith(s);
    };
    if (img.complete && img.naturalWidth === 0) swap();
    else img.addEventListener("error", swap);
  });
}

/* ============ 7. LIGHTBOX (i-click ang picture para lumaki) ============ */
function setupLightbox() {
  const box = document.createElement("div");
  box.className = "lightbox";
  box.innerHTML = `<img alt=""><button aria-label="Close">&times;</button>`;
  document.body.appendChild(box);
  const big = box.querySelector("img");
  const close = () => box.classList.remove("open");

  document.addEventListener("click", e => {
    const img = e.target.closest("img[data-zoom]");
    if (!img) return;
    big.src = img.src;
    box.classList.add("open");
  });
  box.addEventListener("click", close);
  document.addEventListener("keydown", e => e.key === "Escape" && close());
}

/* ============ 8. ARROW KEYS ← → PARA LUMIPAT NG PAGE ============ */
function setupKeyboardNav() {
  document.addEventListener("keydown", e => {
    if (document.querySelector(".lightbox.open")) return;
    const current = PAGES.findIndex(p => p.id === (location.hash.slice(1) || "home"));
    if (current === -1) return;
    if (e.key === "ArrowRight" && current < PAGES.length - 1) location.hash = PAGES[current + 1].id;
    if (e.key === "ArrowLeft" && current > 0) location.hash = PAGES[current - 1].id;
  });
}

/* ============ START ============ */
document.addEventListener("DOMContentLoaded", () => {
  renderNavbar();
  renderDecor();
  fillIcons();
  setupImageFallbacks();
  setupLightbox();
  setupKeyboardNav();
  showPage();
  window.addEventListener("hashchange", showPage);
  typeEffect(document.getElementById("typed"), ["coding", "designing", "learning", "creating"]);
});
