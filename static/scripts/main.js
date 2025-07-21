// Google Analytics Integration
function initGA() {
    if (typeof gtag !== 'undefined') {
        console.log('Google Analytics initialized with ID: G-Z7HVXERLP6');
        
        // Track page view
        gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href
        });
        
        // Track Core Web Vitals
        trackCoreWebVitals();
    }
}

// Core Web Vitals Tracking
function trackCoreWebVitals() {
    // LCP (Largest Contentful Paint)
    new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
            console.log('LCP:', entry.startTime);
            gtag('event', 'web_vitals', {
                name: 'LCP',
                value: Math.round(entry.startTime),
                event_category: 'Web Vitals'
            });
        }
    }).observe({type: 'largest-contentful-paint', buffered: true});

    // CLS (Cumulative Layout Shift)
    new PerformanceObserver((entryList) => {
        let clsValue = 0;
        for (const entry of entryList.getEntries()) {
            if (!entry.hadRecentInput) {
                clsValue += entry.value;
            }
        }
        console.log('CLS:', clsValue);
        gtag('event', 'web_vitals', {
            name: 'CLS',
            value: Math.round(clsValue * 1000),
            event_category: 'Web Vitals'
        });
    }).observe({type: 'layout-shift', buffered: true});

    // FID (First Input Delay)
    new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
            console.log('FID:', entry.processingStart - entry.startTime);
            gtag('event', 'web_vitals', {
                name: 'FID',
                value: Math.round(entry.processingStart - entry.startTime),
                event_category: 'Web Vitals'
            });
        }
    }).observe({type: 'first-input', buffered: true});
}

// WhatsApp Integration
function openWhatsApp(service) {
    const phoneNumber = '919205253438';
    let message = 'Hi! I need help with document services.';
    
    if (service && service !== 'general' && service !== 'floating button') {
        message = `Hi! I'm interested in ${service}. Can you help me?`;
    }
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Track WhatsApp conversion
    if (typeof gtag !== 'undefined') {
        gtag('event', 'conversion', {
            send_to: 'G-Z7HVXERLP6',
            event_category: 'WhatsApp',
            event_label: service || 'general',
            transport_type: 'beacon'
        });
        
        gtag('event', 'contact', {
            method: 'WhatsApp',
            event_category: 'Lead Generation',
            event_label: service || 'general'
        });
    }
    
    window.open(whatsappUrl, '_blank');
}

// Contact Form Handler
function handleContactForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const service = formData.get('service');
    const message = formData.get('message');
    
    const serviceNames = {
        'government': 'Government Documents',
        'vehicle': 'Vehicle Services',
        'property': 'Property Services',
        'tax': 'Tax & Business'
    };
    
    const serviceName = serviceNames[service] || service;
    const whatsappMessage = `Hi! My name is ${name}. I'm interested in ${serviceName}. My phone: ${phone}. Message: ${message}`;
    
    // Track form submission
    if (typeof gtag !== 'undefined') {
        gtag('event', 'form_submit', {
            form_name: 'contact_form',
            event_category: 'Lead Generation',
            event_label: serviceName
        });
    }
    
    openWhatsApp(`${serviceName} - ${name}`);
}

// Smooth Scrolling for Navigation
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update active nav link
                updateActiveNavLink(this.getAttribute('href'));
            }
        });
    });
}

// Update Active Navigation Link
function updateActiveNavLink(activeHref) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === activeHref) {
            link.classList.add('active');
        }
    });
}

// Animated Counter for Stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const observerOptions = {
        threshold: 0.7
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const increment = target / 50;
                let current = 0;

                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        counter.textContent = Math.ceil(current);
                        setTimeout(updateCounter, 40);
                    } else {
                        counter.textContent = target;
                    }
                };

                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
}

// Mobile Menu Toggle
function setupMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            toggle.classList.toggle('active');
        });
    }
}

// Scroll-based Navigation Highlighting
function setupScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        threshold: 0.7
    });

    sections.forEach(section => observer.observe(section));
}

// Service Card Hover Effects
function setupServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Page Load Performance Tracking
function trackPagePerformance() {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const navigation = performance.getEntriesByType('navigation')[0];
            const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
            
            console.log('Page Load Time:', loadTime);
            
            if (typeof gtag !== 'undefined') {
                gtag('event', 'page_load_time', {
                    value: Math.round(loadTime),
                    event_category: 'Performance'
                });
            }
        }, 0);
    });
}

// SEO Optimization Functions
function optimizeSEO() {
    // Dynamic title based on time
    const hour = new Date().getHours();
    const titleElement = document.querySelector('title');
    
    if (titleElement && !titleElement.textContent.includes('🏢')) {
        let timePrefix = '';
        if (hour >= 9 && hour < 17) {
            timePrefix = '🏢 Office Hours: ';
        } else if (hour >= 17 && hour < 21) {
            timePrefix = '🌆 Evening Service: ';
        } else {
            timePrefix = '📞 24/7 Support: ';
        }
        titleElement.textContent = timePrefix + titleElement.textContent;
    }
    
    // Enhanced meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && !metaDesc.content.includes('📞 Call now')) {
        metaDesc.content += ' 📞 Call now: +91-92052-53438 or WhatsApp for instant quotes!';
    }
}

// Initialize Everything
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Google Analytics
    initGA();
    
    // Setup form handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Setup smooth scrolling
    setupSmoothScroll();
    
    // Setup mobile menu
    setupMobileMenu();
    
    // Setup scroll spy
    setupScrollSpy();
    
    // Setup service cards
    setupServiceCards();
    
    // Animate counters
    animateCounters();
    
    // Track performance
    trackPagePerformance();
    
    // Optimize SEO
    optimizeSEO();
    
    // Track homepage view
    if (typeof gtag !== 'undefined') {
        gtag('event', 'page_view', {
            page_title: 'Homepage',
            event_category: 'Engagement'
        });
    }
    
    console.log('SureDocs website loaded successfully');
});

// Service Worker Registration for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}