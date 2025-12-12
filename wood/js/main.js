// ========================
// SMOOTH SCROLL & NAVIGATION
// ========================

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Update active nav link based on scroll position
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === current) {
                link.classList.add('active');
            }
        });
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scroll for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// ========================
// SECTION TRANSITION
// ========================

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// ========================
// SCROLL REVEAL ANIMATIONS
// ========================

const revealElements = () => {
    const elements = document.querySelectorAll('.scroll-animate');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);

// ========================
// FORM HANDLING
// ========================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const clientName = document.getElementById('clientName').value;
        const clientEmail = document.getElementById('clientEmail').value;
        const clientPhone = document.getElementById('clientPhone').value;
        const clientMessage = document.getElementById('clientMessage').value;
        
        // Create WhatsApp message with form data
        const whatsappMessage = `Hello, I'm ${clientName}. 
Email: ${clientEmail}
Phone: ${clientPhone}

Message: ${clientMessage}`;
        
        // Encode message for URL
        const encodedMessage = encodeURIComponent(whatsappMessage);
        
        // WhatsApp Business number
        const whatsappNumber = '919019302941';
        
        // Open WhatsApp with pre-filled message
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
        
        // Show notification
        showNotification('Opening WhatsApp...', 'success');
        
        // Reset form
        contactForm.reset();
    });
}

// ========================
// NOTIFICATION SYSTEM
// ========================

const showNotification = (message, type = 'info') => {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#25d366' : '#3498db'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        animation: slideInRight 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        z-index: 9999;
        max-width: 300px;
        font-weight: 500;
        letter-spacing: 0.5px;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 3000);
};

// ========================
// COUNTER ANIMATION
// ========================

const animateCounters = () => {
    const counters = document.querySelectorAll('.stat-item h3');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        let current = 0;
        const increment = target / 30;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + '+';
            }
        };
        
        // Trigger animation when element comes into view
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                updateCounter();
                observer.unobserve(entries[0].target);
            }
        }, { threshold: 0.5 });
        
        observer.observe(counter);
    });
};

document.addEventListener('DOMContentLoaded', animateCounters);

// ========================
// PARALLAX EFFECT (Subtle)
// ========================

window.addEventListener('scroll', () => {
    const parallaxElements = document.querySelectorAll('.image-placeholder-large, .image-placeholder-medium');
    
    parallaxElements.forEach(element => {
        const scrollPosition = window.scrollY;
        const elementOffset = element.getBoundingClientRect().top;
        
        if (elementOffset < window.innerHeight) {
            const parallaxValue = (window.innerHeight - elementOffset) * 0.05;
            element.style.transform = `translateY(${parallaxValue}px)`;
        }
    });
});

// ========================
// TEXT ANIMATION ON SCROLL
// ========================

const animateTextOnScroll = () => {
    const textElements = document.querySelectorAll('h2, h3, p');
    
    textElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < window.innerHeight - elementVisible && !element.classList.contains('animated')) {
            element.classList.add('animated');
            // Add subtle animation class if needed
        }
    });
};

window.addEventListener('scroll', animateTextOnScroll);
window.addEventListener('load', animateTextOnScroll);

// ========================
// PORTFOLIO LIGHTBOX (Optional)
// ========================

const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
    item.addEventListener('click', function() {
        const overlay = this.querySelector('.portfolio-overlay');
        const title = overlay.querySelector('h3').textContent;
        const category = overlay.querySelector('p').textContent;
        
        // You can add a lightbox modal here if needed
        // For now, just log the click
        console.log(`Clicked: ${title} - ${category}`);
    });
});

// ========================
// PAGE LOAD ANIMATION
// ========================

window.addEventListener('load', () => {
    // Add fade-in effect to page load
    document.body.style.opacity = '1';
});

// ========================
// KEYBOARD SHORTCUTS
// ========================

document.addEventListener('keydown', (e) => {
    // Home key
    if (e.code === 'Home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// ========================
// LAZY LOAD IMAGES (When you add real images)
// ========================

const lazyLoadImages = () => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
};

document.addEventListener('DOMContentLoaded', lazyLoadImages);

// ========================
// INTERSECTION OBSERVER FOR STAGGERED ANIMATIONS
// ========================

const staggeredAnimation = () => {
    const cards = document.querySelectorAll('.service-card, .portfolio-item');
    
    cards.forEach((card, index) => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                card.style.animation = `slideInUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.15}s both`;
                observer.unobserve(card);
            }
        }, { threshold: 0.1 });
        
        observer.observe(card);
    });
};

document.addEventListener('DOMContentLoaded', staggeredAnimation);

// ========================
// BACK TO TOP BUTTON
// ========================

const createBackToTopButton = () => {
    const backToTopButton = document.createElement('button');
    backToTopButton.id = 'backToTop';
    backToTopButton.innerHTML = '<i class="fas fa-chevron-up"></i>';
    backToTopButton.style.cssText = `
        position: fixed;
        bottom: -60px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #8b7355, #a0826d);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        box-shadow: 0 10px 30px rgba(139, 115, 85, 0.2);
        z-index: 999;
    `;
    
    document.body.appendChild(backToTopButton);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.bottom = '30px';
        } else {
            backToTopButton.style.bottom = '-60px';
        }
    });
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    backToTopButton.addEventListener('mouseover', () => {
        backToTopButton.style.transform = 'scale(1.1)';
        backToTopButton.style.boxShadow = '0 15px 40px rgba(139, 115, 85, 0.35)';
    });
    
    backToTopButton.addEventListener('mouseout', () => {
        backToTopButton.style.transform = 'scale(1)';
        backToTopButton.style.boxShadow = '0 10px 30px rgba(139, 115, 85, 0.2)';
    });
};

document.addEventListener('DOMContentLoaded', createBackToTopButton);

// ========================
// PRELOADER ANIMATION
// ========================

const hidePreloader = () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        preloader.style.pointerEvents = 'none';
    }
};

window.addEventListener('load', hidePreloader);

// ========================
// SERVICE WORKER (Optional - for PWA)
// ========================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment when you have a service worker file
        // navigator.serviceWorker.register('sw.js');
    });
}

// ========================
// PERFORMANCE MONITORING
// ========================

if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Page load time:', pageLoadTime, 'ms');
    });
}

// ========================
// INITIAL ANIMATION TRIGGER
// ========================

document.addEventListener('DOMContentLoaded', () => {
    // Trigger animations for elements with animation classes
    const animatedElements = document.querySelectorAll('[class*="fade-in"], [class*="slide-in"], [class*="scale-in"]');
    
    animatedElements.forEach((element, index) => {
        // Element animations are triggered by CSS
        // This ensures they're ready when needed
    });
});
