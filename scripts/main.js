// Main JavaScript file for the portfolio

// Set current year in footer
document.addEventListener('DOMContentLoaded', function() {
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Mobile menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            const isHidden = mobileMenu.classList.contains('hidden');
            menuToggle.setAttribute('aria-expanded', !isHidden);
        });

        // Close menu when clicking on nav links
        const navLinks = document.querySelectorAll('.nav-item');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Account for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add active class to nav items based on scroll position
    const sections = document.querySelectorAll('section[id], #hero');
    const navItems = document.querySelectorAll('.nav-item');
    const fixedNavItems = document.querySelectorAll('.fixed-nav-item');

    function updateActiveNav() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id') || 'hero';
            }
        });

        // Update mobile/desktop menu items
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });

        // Update fixed menu items
        fixedNavItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });

        // Update current section indicator in header
        const currentSectionElement = document.getElementById('current-section');
        if (currentSectionElement) {
            let sectionName = '';
            switch(current) {
                case 'hero':
                    sectionName = 'Home';
                    break;
                case 'experience':
                    sectionName = 'Experience';
                    break;
                case 'projects':
                    sectionName = 'Projects';
                    break;
                case 'about':
                    sectionName = 'About';
                    break;
                default:
                    sectionName = 'Home';
            }
            currentSectionElement.textContent = sectionName;
        }
    }

    // Initial check
    updateActiveNav();
    
    // Check on scroll
    window.addEventListener('scroll', updateActiveNav);
});

// Utility function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to initialize animations
function initAnimations() {
    const animatedElements = document.querySelectorAll('.slide-in, .fade-in, .scale-up');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', initAnimations);

// Add external link icons to social links
document.addEventListener('DOMContentLoaded', function() {
    // Remove external link icons from social links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        // Remove any existing external icons
        const existingIcon = link.querySelector('img');
        if (existingIcon) {
            existingIcon.remove();
        }
    });
});