// JavaScript for Kutuhala Club Website

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');
  
    hamburger.addEventListener('click', function () {
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('toggle');
    });
  
    // Close the menu when a link is clicked
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', function () {
        navMenu.classList.remove('active');
        hamburger.classList.remove('toggle');
      });
    });
  
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });
  