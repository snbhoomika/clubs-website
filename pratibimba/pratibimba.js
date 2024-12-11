// Smooth scroll to sections
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').replace('#', '');
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
          window.scrollTo({
              top: targetElement.offsetTop - 80, // Adjust for fixed header
              behavior: 'smooth'
          });
      }
  });
});

// Add animations to gallery items on scroll
const galleryItems = document.querySelectorAll('.gallery-item');

const observer = new IntersectionObserver(
  entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animate');
          }
      });
  },
  { threshold: 0.3 }
);

galleryItems.forEach(item => observer.observe(item));

// Hero Section animation on load
window.addEventListener('load', () => {
  const hero = document.querySelector('.hero');
  hero.classList.add('fade-in');
});
// Smooth scrolling for navigation
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    currentSlide = (index + totalSlides) % totalSlides; // Wrap around
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

document.querySelector('.prev').addEventListener('click', () => showSlide(currentSlide - 1));
document.querySelector('.next').addEventListener('click', () => showSlide(currentSlide + 1));

// Auto-slide functionality
setInterval(() => showSlide(currentSlide + 1), 5000);
