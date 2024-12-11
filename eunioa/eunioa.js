let currentIndex = 0;
const slides = document.querySelectorAll('.slider .slide');

// Function to show a slide with a fade-in effect
function showSlide(index) {
    // Hide all slides
    slides.forEach((slide) => {
        slide.style.display = 'none';
        slide.style.opacity = '0';
    });

    // Show the current slide with fade-in effect
    slides[index].style.display = 'block';
    setTimeout(() => {
        slides[index].style.opacity = '1';
    }, 50);  // Wait for display to be set before applying opacity
}

// Function to change slides every 5 seconds (5000 ms)
function changeSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // Move to the next slide
    showSlide(currentIndex);
}

// Show the first slide
showSlide(currentIndex);

// Change slides every 5 seconds (5000 ms)
setInterval(changeSlide, 5000);

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Image Hover Effect
const images = document.querySelectorAll('.image-container img');

function showImage(index) {
    images.forEach((image, i) => {
        image.style.opacity = i === index ? '1' : '0';
    });
}

images.forEach((image, index) => {
    image.addEventListener('mouseover', () => {
        currentIndex = index;
        showImage(currentIndex);
    });
});

// Show the first image initially
showImage(currentIndex);

// Smooth scrolling for navigation
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Slide navigation buttons (Next and Prev)
let currentSlide = 0;

function slideTo(index) {
    const totalSlides = document.querySelectorAll('.slider .slide').length;
    currentSlide = (index + totalSlides) % totalSlides; // Wrap around
    const slidesContainer = document.querySelector('.slider');
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Next and Previous button functionality
document.querySelector('.prev').addEventListener('click', () => slideTo(currentSlide - 1));
document.querySelector('.next').addEventListener('click', () => slideTo(currentSlide + 1));

// Auto-slide functionality (change slide every 5 seconds)
setInterval(() => slideTo(currentSlide + 1), 5000);
