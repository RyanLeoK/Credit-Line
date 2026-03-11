// script.js
// Enhanced JavaScript functionality for animations, intersection observer, and interactive elements

(function() {
    // Smooth scrolling effect for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Intersection Observer for lazy loading images
    const images = document.querySelectorAll('img[data-src]');
    const imgObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const imgObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.onload = () => img.classList.add('fade');
                obs.unobserve(img);
            }
        });
    }, imgObserverOptions);

    images.forEach(image => {
        imgObserver.observe(image);
    });

    // Interactive elements
    const buttons = document.querySelectorAll('.interactive-button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('active');
            button.textContent = button.classList.contains('active') ? 'Active' : 'Inactive';
        });
    });
})();
