let currentIndex = 0; // Index of the current slide
const slides = document.querySelectorAll('.slide'); // Get all slides

function showSlide(index) {
    // Hide all slides
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });

    // Show the current slide
    slides[index].style.display = 'block';
    slides[index].style.opacity = '0.1';
}

// Function to change slides every second
function changeSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // Move to the next slide
    showSlide(currentIndex);
}

// Show the first slide
showSlide(currentIndex);

// Change slides every second
setInterval(changeSlide, 1000); // Change slide every 1 second
