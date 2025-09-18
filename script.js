// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    const open = nav.style.display === 'block';
    nav.style.display = open ? '' : 'block';
  });
}

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme');
if (saved === 'light') root.classList.add('light');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    root.classList.toggle('light');
    const mode = root.classList.contains('light') ? 'light' : 'dark';
    localStorage.setItem('theme', mode);
    themeToggle.setAttribute('aria-pressed', mode === 'dark' ? 'false' : 'true');
  });
}

// Load Notes list (static files under /notes/*.md)
(async function loadNotes(){
  try {
    // If you add posts, list them here:
    const posts = [
      // {title:"First note", file:"/notes/first-note.md", date:"2025-09-18"}
    ];
    const ul = document.getElementById('notes-list');
    if (!ul) return;
    if (posts.length === 0) {
      ul.innerHTML = '<li class="muted">No notes yet—add markdown files in <code>/notes</code> and reference them in <code>script.js</code>.</li>';
      return;
    }
    posts.forEach(p => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${p.file}" target="_blank" rel="noopener">${p.title}</a> <span class="muted">— ${p.date}</span>`;
      ul.appendChild(li);
    });
  } catch(e){}
})();
