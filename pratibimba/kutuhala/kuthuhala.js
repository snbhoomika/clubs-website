document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");

    hamburger.addEventListener("click", function () {
        menu.classList.toggle("active");
        hamburger.innerHTML = menu.classList.contains("active")
            ? '<i class="fas fa-times"></i>'
            : '<i class="fas fa-bars"></i>';
    });

    // Close menu when a link is clicked (for better UX on mobile)
    document.querySelectorAll(".menu a").forEach(link => {
        link.addEventListener("click", function () {
            menu.classList.remove("active");
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
});
