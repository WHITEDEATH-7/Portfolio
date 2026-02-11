// Animations JavaScript file for the portfolio

// Initialize scroll-based animations
function initScrollAnimations() {
    // Create an Intersection Observer to trigger animations when elements come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the animate class to trigger the animation
                entry.target.classList.add('animate');
                
                // Stop observing this element after animation is triggered
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
        '.slide-in, .fade-in, .scale-up, .hero, .timeline-item, .project-card, .about-content'
    );

    animatedElements.forEach(element => {
        // Add animation classes if not already present
        if (!element.classList.contains('slide-in') && 
            !element.classList.contains('fade-in') && 
            !element.classList.contains('scale-up')) {
            element.classList.add('slide-in');
        }
        observer.observe(element);
    });
}

// Initialize header scroll effect
function initHeaderScrollEffect() {
    const header = document.querySelector('.header');
    if (!header) return;

    let ticking = false;

    function updateHeaderStyle() {
        const scrollPosition = window.scrollY;
        
        // Adjust header appearance based on scroll position
        if (scrollPosition > 10) {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            header.style.backdropFilter = 'blur(0)';
        }
        
        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateHeaderStyle);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestTick);
}

// Initialize image loading animations
function initImageLoading() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        // Add loading class initially
        img.classList.add('image-loading');
        
        // When image loads, add loaded class
        img.addEventListener('load', function() {
            this.classList.remove('image-loading');
            this.classList.add('image-loaded');
        });
        
        // Also handle error case
        img.addEventListener('error', function() {
            this.classList.remove('image-loading');
            // Optionally show a fallback image or text
        });
    });
}

// Initialize all animations when the DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    initHeaderScrollEffect();
    initImageLoading();
    
    // Add any other animation initialization here
    console.log('Animations initialized');
});

// Handle page load animations
window.addEventListener('load', function() {
    // Trigger animations for elements that should animate on page load
    const loadAnimatedElements = document.querySelectorAll('.hero');
    loadAnimatedElements.forEach(el => {
        setTimeout(() => {
            el.classList.add('animate');
        }, 300); // Small delay for page rendering
    });
});

// Add resize handler to re-initialize animations if needed
window.addEventListener('resize', function() {
    // Potentially re-initialize observers if screen size changes significantly
    // This is optional and depends on specific needs
});