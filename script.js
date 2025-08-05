// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    
    mobileMenuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        
        // Toggle icon
        const icon = this.querySelector('i');
        if (nav.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when clicking on a link
    const mobileNavLinks = document.querySelectorAll('.nav a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            const icon = mobileMenuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // Header scroll effect
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        // Add shadow when scrolled
        if (scrollTop > 50) {
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.menu-item, .payment-info, .contact-info');
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // WhatsApp button click tracking
    const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add a subtle animation when clicked
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // Add floating animation to decorative elements
    function addFloatingAnimation() {
        const floatingElements = document.querySelectorAll('.floating-sweets i, .decorative-hearts i');
        
        floatingElements.forEach((element, index) => {
            const randomDelay = Math.random() * 2;
            const randomDuration = 2 + Math.random() * 2;
            
            element.style.animationDelay = `${randomDelay}s`;
            element.style.animationDuration = `${randomDuration}s`;
        });
    }

    addFloatingAnimation();

    // Add hover effects to menu items
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click effect to buttons
    const buttons = document.querySelectorAll('.cta-button, .whatsapp-button');
    buttons.forEach(button => {
        button.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'scale(1)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const mascot = document.querySelector('.mascot-container');
        
        if (hero && mascot) {
            const rate = scrolled * -0.5;
            mascot.style.transform = `translateY(${rate}px)`;
        }
    });

    // Add sparkle effect on hover for hearts
    const hearts = document.querySelectorAll('.decorative-hearts i, .flavors-list i');
    hearts.forEach(heart => {
        heart.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.3) rotate(15deg)';
            this.style.color = '#e91e63';
        });
        
        heart.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
            this.style.color = '';
        });
    });

    // Loading animation for the page
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Animate elements in sequence
        const elementsToAnimate = [
            '.hero-title',
            '.hero-announcement',
            '.cta-button',
            '.mascot'
        ];
        
        elementsToAnimate.forEach((selector, index) => {
            const element = document.querySelector(selector);
            if (element) {
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    });

    // Add initial styles for loading animation
    const loadingElements = document.querySelectorAll('.hero-title, .hero-announcement, .cta-button, .mascot');
    loadingElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
    });
});

// Add CSS for mobile menu
const mobileMenuStyles = `
    @media (max-width: 768px) {
        .nav {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: white;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }
        
        .nav.active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }
        
        .nav ul {
            flex-direction: column;
            padding: 20px;
            gap: 15px;
        }
        
        .nav a {
            padding: 10px 0;
            border-bottom: 1px solid #f0f0f0;
        }
    }
`;

// Inject mobile menu styles
const styleSheet = document.createElement('style');
styleSheet.textContent = mobileMenuStyles;
document.head.appendChild(styleSheet);
