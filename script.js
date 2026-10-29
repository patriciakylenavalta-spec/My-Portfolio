// Clock
const clock = document.getElementById('clock');
const tick = () => clock.textContent = new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
tick(); setInterval(tick, 30000);

// Typing effect
const words = ['coding', 'websites', 'clean design', 'learning'];
const typed = document.getElementById('typed');
let w = 0, c = 0, del = false;
(function type() {
  const word = words[w];
  typed.textContent = word.slice(0, c);
  if (!del && c === word.length) { del = true; return setTimeout(type, 1400); }
  if (del && c === 0) { del = false; w = (w + 1) % words.length; }
  c += del ? -1 : 1;
  setTimeout(type, del ? 50 : 110);
})();

// ===== Tabs =====
const labels = {
  home: 'Home', about: 'About Me', education: 'Educational Attainment',
  certifications: 'Certifications', family: 'Family'
};
const tabsEl = document.getElementById('tabs');
let openTabs = ['home'];
let current = 'home';

function render() {
  tabsEl.innerHTML = '';
  openTabs.forEach(id => {
    const t = document.createElement('div');
    t.className = 'tab' + (id === current ? ' active' : '');
    t.innerHTML = `<span>${labels[id]}</span>` + (id !== 'home' ? '<span class="x">×</span>' : '');
    t.onclick = e => e.target.classList.contains('x') ? closeTab(id) : activate(id);
    tabsEl.appendChild(t);
  });
  document.querySelectorAll('.page').forEach(p => p.classList.toggle('active', p.id === current));
  document.querySelectorAll('.menu button').forEach(b => b.classList.toggle('on', b.dataset.open === current));
}
function activate(id) { current = id; render(); }
function openTab(id) { if (!openTabs.includes(id)) openTabs.push(id); activate(id); }
function closeTab(id) {
  const i = openTabs.indexOf(id);
  openTabs = openTabs.filter(t => t !== id);
  if (current === id) current = openTabs[Math.max(0, i - 1)];
  render();
}
document.querySelectorAll('[data-open]').forEach(b => b.addEventListener('click', () => openTab(b.dataset.open)));
render();

// ===== Image slots =====
// Click an empty slot to pick an image for a quick preview.
// (For a permanent image, save the file in the images/ folder with the name used in index.html.)
const picker = document.getElementById('picker');
const lightbox = document.getElementById('lightbox');
let targetSlot = null;

document.addEventListener('click', e => {
  const slot = e.target.closest('.slot');
  if (!slot) return;
  const img = slot.querySelector('img');
  if (img) {
    if (slot.classList.contains('zoom')) {
      lightbox.querySelector('img').src = img.src;
      lightbox.classList.add('open');
    }
    return;
  }
  targetSlot = slot;
  picker.value = '';
  picker.click();
});

picker.addEventListener('change', () => {
  const file = picker.files[0];
  if (!file || !targetSlot) return;
  const img = document.createElement('img');
  img.src = URL.createObjectURL(file);
  img.alt = '';
  targetSlot.prepend(img);
});

lightbox.addEventListener('click', () => lightbox.classList.remove('open'));
addEventListener('keydown', e => { if (e.key === 'Escape') lightbox.classList.remove('open'); });

// ===== Tilting ID card =====
const card = document.getElementById('card');
const stage = card.parentElement;
stage.addEventListener('pointermove', e => {
  const r = card.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width - .5;
  const y = (e.clientY - r.top) / r.height - .5;
  card.style.transform = `rotateY(${x * 20}deg) rotateX(${-y * 20}deg)`;
});
stage.addEventListener('pointerleave', () => card.style.transform = '');

// ===== Aurora orbs drift with the mouse + cursor ring =====
const orbs = document.querySelectorAll('.orb');
const cursor = document.getElementById('cursor');
addEventListener('pointermove', e => {
  const x = e.clientX / innerWidth - .5, y = e.clientY / innerHeight - .5;
  orbs.forEach((o, i) => o.style.transform = `translate(${x * (i + 1) * 28}px, ${y * (i + 1) * 28}px)`);
  cursor.style.opacity = 1;
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  cursor.classList.toggle('big', !!e.target.closest('button, a, .tab, .edu, .cert, .member, .slot'));
});
document.addEventListener('pointerleave', () => cursor.style.opacity = 0);