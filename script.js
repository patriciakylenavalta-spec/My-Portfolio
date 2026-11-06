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

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Active nav link on scroll =====
const links = document.querySelectorAll('#menu a');
const sections = [...links].map(a => document.querySelector(a.getAttribute('href')));
const spy = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      links.forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id));
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
sections.forEach(s => spy.observe(s));

// ===== Scroll reveal =====
const revealEls = document.querySelectorAll('.stat, .info, .card, .about-photo, .title');
revealEls.forEach(el => el.classList.add('reveal'));
const rev = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); rev.unobserve(e.target); } });
}, { threshold: .12 });
revealEls.forEach(el => rev.observe(el));

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
