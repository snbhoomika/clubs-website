



// Get the tab buttons and content containers
const technicalTab = document.getElementById('technical-tab');
const nonTechnicalTab = document.getElementById('non-technical-tab');
const technicalContent = document.getElementById('technical-content');
const nonTechnicalContent = document.getElementById('non-technical-content');

// Select the menu icon and navigation links
const menuIcon = document.getElementById('menuIcon');
const navLinks = document.getElementById('navLinks');

// Add event listener to toggle the navigation menu
menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
