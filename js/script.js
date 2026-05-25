/**
 * View Lodge - Vanilla JavaScript Interactivity Module
 */
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    
    // Smooth scroll event / sticky navigation handling
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Optional: Dynamic Active Navigation State Highlight on Scroll
    const sections = document.querySelectorAll('section, header, footer');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 150)) {
                currentSectionId = section.getAttribute('id') || '';
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            const hrefAttr = link.getAttribute('href');
            if (hrefAttr === `#${currentSectionId}` || (currentSectionId === '' && hrefAttr === '#')) {
                link.classList.add('active');
            }
        });
    });
});
