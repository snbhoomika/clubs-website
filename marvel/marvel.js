let currentIndex = 0; // Index of the current slide
const slides = document.querySelectorAll('.slide'); // Get all slides

function showSlide(index) {
    // Hide all slides
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });

    // Show the current slide
    slides[index].style.display = 'block';
    slides[index].style.opacity = '1';
}

// Function to change slides every second
function changeSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // Move to the next slide
    showSlide(currentIndex);
}

// Show the first slide
showSlide(currentIndex);
<script>
        // JavaScript for toggling the menu
        document.querySelector('.hamburger-icon').addEventListener('click', function () {
            document.querySelector('.menu').classList.toggle('active');
        });
    </script>
