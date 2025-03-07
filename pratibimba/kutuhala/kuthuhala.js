document.addEventListener("DOMContentLoaded", function () {
  function createFloatingElement(className) {
      const element = document.createElement("div");
      element.classList.add(className);
      element.style.left = Math.random() * 90 + "vw";
      element.style.top = Math.random() * 100 + "vh";
      document.body.appendChild(element);
  }

  function addFloatingElements() {
      for (let i = 0; i < 5; i++) {
          createFloatingElement("snake-ladder");
          createFloatingElement("puzzle-piece");
      }
  }

  addFloatingElements();

  document.addEventListener("scroll", function () {
      document.querySelectorAll(".snake-ladder, .puzzle-piece").forEach((el) => {
          let scrollY = window.scrollY;
          el.style.transform = `translateY(${scrollY * 0.1}px)`;
      });
  });
});
