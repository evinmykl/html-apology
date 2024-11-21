// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector(link.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Section Reveal Animation on Scroll
  const sections = document.querySelectorAll('.section');
  
  const revealSections = () => {
    const triggerBottom = window.innerHeight / 1.3; // Adjust trigger point
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) {
        section.classList.add('visible'); // Add "visible" class to make section appear
      }
    });
  };
  
  // Run the revealSections function on scroll and initially
  window.addEventListener('scroll', revealSections);
  revealSections(); // Run initially to reveal sections already in view
  
  // Interactive Button Ripple Effect
  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', (e) => {
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      ripple.style.left = `${e.clientX - button.offsetLeft}px`;
      ripple.style.top = `${e.clientY - button.offsetTop}px`;
      button.appendChild(ripple);
  
      // Remove ripple effect after animation ends
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
  
  // Change Navbar Background on Scroll
  const navbar = document.querySelector('nav');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = 'rgba(255, 0, 0, 0.8)'; // Solid red background
    } else {
      navbar.style.backgroundColor = 'transparent'; // Transparent when at the top
    }
  });
  
