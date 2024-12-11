// Burger menu toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li'); // Optional: For closing the menu when a link is clicked

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active'); // Toggling class to show/hide the nav links
  burger.classList.toggle('toggle'); // Toggling a class on the burger to change its appearance (e.g., to an "X")
});

// Optional: Close the nav menu when a link is clicked
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('active');
    burger.classList.remove('toggle');
  });
});

// Reveal on scroll (Intersection Observer)
const sections = document.querySelectorAll('section'); // Selecting all sections you want to reveal
const revealOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal'); // Add the reveal class when section is in view
      observer.unobserve(entry.target); // Stop observing after revealing
    }
  });
}, {
  threshold: 0.2 // When 20% of the section is visible, start the reveal
});

sections.forEach(section => {
  revealOnScroll.observe(section); // Observing each section
});

// Image Carousel (Basic logic)
const images = document.querySelectorAll('.image-container img');
let currentIndex = 0;

function showImage(index) {
  images.forEach((img, i) => {
    img.style.display = (i === index) ? 'block' : 'none'; // Show the current image and hide others
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop back to the last image
  showImage(currentIndex);
}

// Initially show the first image
showImage(currentIndex);

// Optional: Automatic slide every 5 seconds (if you want it to auto-play)
setInterval(nextImage, 5000);

// You can add event listeners for navigation buttons (optional)
// Example: 
// document.querySelector('.next-button').addEventListener('click', nextImage);
// document.querySelector('.prev-button').addEventListener('click', prevImage);
