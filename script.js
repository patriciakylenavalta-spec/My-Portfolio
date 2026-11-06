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

document.getElementById('year').textContent = new Date().getFullYear();

// ===== Page switching (no scrolling between sections) =====
const pages = document.querySelectorAll('.page');
const menuBtns = document.querySelectorAll('.menu button');
const ids = [...pages].map(p => p.id);

function show(id) {
  if (!ids.includes(id)) id = 'home';
  pages.forEach(p => p.classList.toggle('active', p.id === id));
  menuBtns.forEach(b => b.classList.toggle('on', b.dataset.open === id));
  history.replaceState(null, '', '#' + id);
}
document.querySelectorAll('[data-open]').forEach(b => b.addEventListener('click', () => show(b.dataset.open)));
show(location.hash.slice(1) || 'home');

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
