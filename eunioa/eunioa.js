let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

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

// Function to change slides every second
function changeSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // Move to the next slide
    showSlide(currentIndex);
}

// Show the first slide
showSlide(currentIndex);

// Change slides every second (1000 ms)
setInterval(changeSlide, 1000);

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
