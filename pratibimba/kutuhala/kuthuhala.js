const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

sections.forEach(section => {
    revealOnScroll.observe(section);
});
const images = document.querySelectorAll('.image-container img');
let currentIndex = 0;

// ... other JavaScript for animations, interactive elements, etc.