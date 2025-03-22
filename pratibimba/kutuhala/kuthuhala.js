/* JavaScript for Kutuhala Club Website */
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

  // Toggle hamburger icon animation
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('is-active');
  });

  // Add interactive animation to event cards
  const eventCards = document.querySelectorAll('.event');
  eventCards.forEach(card => {
    card.addEventListener('mouseover', function () {
      card.style.transform = 'scale(1.05)';
      card.style.transition = 'transform 0.3s ease';
    });
    card.addEventListener('mouseout', function () {
      card.style.transform = 'scale(1)';
    });
  });

  // Add glowing border effect to eligibility section
  const eligibilitySection = document.querySelector('#eligibility .container');
  eligibilitySection.style.position = 'relative';
  eligibilitySection.style.borderRadius = '15px';
  eligibilitySection.style.padding = '20px';
  eligibilitySection.style.overflow = 'hidden';
  eligibilitySection.style.background = 'linear-gradient(135deg, rgba(255, 0, 255, 0.2), rgba(0, 255, 255, 0.2))';

  const glowEffect = document.createElement('div');
  glowEffect.style.position = 'absolute';
  glowEffect.style.top = '0';
  glowEffect.style.left = '0';
  glowEffect.style.width = '100%';
  glowEffect.style.height = '100%';
  glowEffect.style.borderRadius = '15px';
  glowEffect.style.boxShadow = '0 0 20px 5px rgba(255, 0, 255, 0.8), 0 0 20px 5px rgba(0, 255, 255, 0.8)';
  glowEffect.style.zIndex = '-1';
  eligibilitySection.appendChild(glowEffect);
});
