document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.createElement("div");
    hamburger.classList.add("hamburger");
    hamburger.innerHTML = "☰";
    document.querySelector("header").appendChild(hamburger);

    const menu = document.querySelector(".menu");

    hamburger.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

    // Close menu when a link is clicked (for better UX on mobile)
    document.querySelectorAll(".menu a").forEach(link => {
        link.addEventListener("click", function () {
            menu.classList.remove("active");
        });
    });
});
