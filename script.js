/* ============================================
   NEUROFORGE — Interactive Scripts
   Navbar, Mobile Menu, Smooth Scroll, Reveals
   ============================================ */

(function () {
  'use strict';

  // ——— STICKY NAVBAR ———
  const navbar = document.getElementById('navbar');
  const toggleNavbarBackground = () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', toggleNavbarBackground);


  // ——— MOBILE MENU TOGGLE ———
  const hamburger = document.getElementById('nav-hamburger');
  const navLinks = document.getElementById('nav-links');

  const toggleMobileMenu = () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
  };

  const closeMobileMenu = () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
  };

  hamburger.addEventListener('click', toggleMobileMenu);

  // Close nav on link click
  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', closeMobileMenu);
  });


  // ——— SMOOTH ANCHOR SCROLLING ———
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });


  // ——— CURSOR GLOW TRACKING ———
  window.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
  });


  // ——— SCROLL REVEAL ANIMATIONS ———
  const reveals = document.querySelectorAll('.reveal');

  const checkReveal = () => {
    const triggerPoint = window.innerHeight * 0.85;
    
    reveals.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < triggerPoint) {
        element.classList.add('revealed');
      } else {
        element.classList.remove('revealed');
      }
    });
  };

  window.addEventListener('scroll', checkReveal);
  window.addEventListener('load', checkReveal);

})();


// ——— FORM HANDLING ———
function handleSubmit() {
  const emailInput = document.getElementById("email");
  const feedbackMsg = document.getElementById("form-feedback");
  const emailValue = emailInput.value.trim();

  // Reset classes
  feedbackMsg.classList.remove('error', 'success');

  if (!emailValue.includes("@") || emailValue.length < 5) {
    feedbackMsg.innerText = "Please enter a valid email address";
    feedbackMsg.classList.add('error');
  } else {
    feedbackMsg.innerText = "Thanks! We'll reach out soon.";
    feedbackMsg.classList.add('success');
    emailInput.value = "";
  }
}
