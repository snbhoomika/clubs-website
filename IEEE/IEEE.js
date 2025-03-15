// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
  });
  
  // Animation on Scroll
  const sections = document.querySelectorAll('.about, .eligibility, .events');
  
  const options = {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const revealOnScroll = new IntersectionObserver(function(entries, revealOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        revealOnScroll.unobserve(entry.target);
    });
  }, options);
  
  sections.forEach(section => {
    revealOnScroll.observe(section);
  });
  
  // Image Hover Effect
  const images = document.querySelectorAll('.image-container img');
  let currentIndex = 0;
  
  function showImage(index) {
    images.forEach((image, i) => {
        image.style.opacity = i === index ? 1 : 0;
    });
  }
  
  images.forEach((image, index) => {
    image.addEventListener('mouseover', () => {
        currentIndex = index;
        showImage(currentIndex);
    });
  });
  
  showImage(currentIndex);
  
  // Burger Menu Toggle
  const burger = document.querySelector('.hamburger-icon');  // Assuming your burger icon has this class
  const navLinks = document.querySelector('.menu-items');    // Assuming your nav links have this class
  
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
  