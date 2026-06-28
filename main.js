// Highlight active nav link based on current page
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-links a');
  const current = window.location.pathname.split('/').pop() || 'index.html';

  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === current) link.classList.add('active');
  });
});
