const nav = document.querySelector('.nav');
const navigasiBar = document.querySelector('.navigasi_bar');
const logo = document.querySelector('.logo');
const home = document.querySelector('#home');
const about = document.querySelector('#about');
const skills = document.querySelector('#skills');
const experience = document.querySelector('#experience');
const contact = document.querySelector('#contact');


const navigateToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigationLinks = document.querySelectorAll('nav a');

  navigationLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default anchor tag behavior (jumping to top)
      const href = event.target.getAttribute('href');
      if (href.startsWith('#')) { // Check if link targets a section
        const sectionId = href.slice(1); // Extract section ID from href
        navigateToSection(sectionId);
      }
    });
  });