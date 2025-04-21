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
    if (link.href && window.location.pathname.endsWith(link.getAttribute('href'))) {
        link.classList.add('active');
        if (link.parentElement.tagName === 'LI') {
            link.parentElement.classList.add('active');
        }
    }
});
