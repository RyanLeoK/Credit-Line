// script.js

// Enhanced JavaScript functionality for animations, intersection observer, and interactive elements

// Example: Smooth scrolling effect for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example: Intersection Observer for lazy loading images
const images = document.querySelectorAll('img[data-src]');
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.onload = () => img.classList.add('fade');
            observer.unobserve(img);
        }
    });
}, options);

images.forEach(image => {
    observer.observe(image);
});

// Example: Interactive elements
const buttons = document.querySelectorAll('.interactive-button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
        button.textContent = button.classList.contains('active') ? 'Active' : 'Inactive';
    });
});