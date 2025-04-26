// Simple mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navClose = document.querySelector('.nav-close');
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-open');
});
if (navClose) {
    navClose.addEventListener('click', () => {
        navLinks.classList.remove('nav-open');
    });
}

// Set active nav link based on current URL
document.querySelectorAll('.nav-links a').forEach(link => {
    // Set flag when internal link is clicked
    if (link.href && link.href.includes(window.location.hostname)) {
        link.addEventListener('click', () => {
            localStorage.setItem('internalNavigation', 'true');
        });
    }
    
    if (link.href && window.location.pathname.endsWith(link.getAttribute('href'))) {
        link.classList.add('active');
        if (link.parentElement.tagName === 'LI') {
            link.parentElement.classList.add('active');
        }
    }
});

// Scroll to content on internal navigation
document.addEventListener('DOMContentLoaded', function() {
    // Check if this is navigation from an internal link
    if (localStorage.getItem('internalNavigation') === 'true') {
        // Clear the flag
        localStorage.removeItem('internalNavigation');
        
        // Scroll to the main content
        const mainContent = document.querySelector('main');
        if (mainContent) {
            setTimeout(() => {
                mainContent.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }
});
