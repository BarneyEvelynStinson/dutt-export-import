// Mobile navigation toggle
const toggleBtn = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

toggleBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// (Optional) Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
    nav.classList.remove('open'); // close nav on mobile after click
  });
});
