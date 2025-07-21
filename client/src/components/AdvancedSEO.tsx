import { useEffect } from 'react';
import { useLocation } from 'wouter';

// Advanced SEO component for dynamic optimization
const AdvancedSEO = () => {
  const [location] = useLocation();

  useEffect(() => {
    // Dynamic breadcrumb schema
    const addBreadcrumbSchema = () => {
      const pathSegments = location.split('/').filter(Boolean);
      if (pathSegments.length === 0) return;

      const breadcrumbItems = [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://suredocs.replit.app/"
        }
      ];

      pathSegments.forEach((segment, index) => {
        const name = segment.charAt(0).toUpperCase() + segment.slice(1);
        const url = `https://suredocs.replit.app/${pathSegments.slice(0, index + 1).join('/')}`;
        
        breadcrumbItems.push({
          "@type": "ListItem",
          "position": index + 2,
          "name": name,
          "item": url
        });
      });

      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbItems
      };

      // Remove existing breadcrumb schema
      const existingBreadcrumb = document.querySelector('script[type="application/ld+json"][data-breadcrumb]');
      if (existingBreadcrumb) {
        existingBreadcrumb.remove();
      }

      // Add new breadcrumb schema
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-breadcrumb', 'true');
      script.textContent = JSON.stringify(breadcrumbSchema);
      document.head.appendChild(script);
    };

    // Add page-specific structured data
    const addPageSpecificSchema = () => {
      if (location === '/services') {
        // Services aggregation schema
        const servicesSchema = {
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Document Services Portfolio",
          "description": "Complete range of document services in Delhi NCR",
          "numberOfItems": 10,
          "itemListElement": [
            {
              "@type": "Service",
              "position": 1,
              "name": "Birth Certificate Service",
              "description": "Fast birth certificate processing in Delhi NCR",
              "provider": { "@type": "Organization", "name": "SureDocs" }
            },
            {
              "@type": "Service", 
              "position": 2,
              "name": "Driving License Service",
              "description": "Quick driving license processing",
              "provider": { "@type": "Organization", "name": "SureDocs" }
            },
            {
              "@type": "Service",
              "position": 3,
              "name": "Passport Service",
              "description": "Hassle-free passport application assistance",
              "provider": { "@type": "Organization", "name": "SureDocs" }
            }
          ]
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-services', 'true');
        script.textContent = JSON.stringify(servicesSchema);
        document.head.appendChild(script);
      }

      if (location === '/contact') {
        // Contact page schema
        const contactSchema = {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact SureDocs",
          "description": "Get in touch for professional document services in Delhi NCR",
          "mainEntity": {
            "@type": "LocalBusiness",
            "name": "SureDocs Services",
            "telephone": "+91-92052-53438",
            "contactType": "Customer Service"
          }
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-contact', 'true');
        script.textContent = JSON.stringify(contactSchema);
        document.head.appendChild(script);
      }
    };

    // Update page performance metrics
    const updatePageMetrics = () => {
      // Add loading time tracking
      const navigationTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationTiming) {
        const pageLoadTime = navigationTiming.loadEventEnd - navigationTiming.loadEventStart;
        const domContentLoaded = navigationTiming.domContentLoadedEventEnd - navigationTiming.domContentLoadedEventStart;
        
        // Store performance data for SEO monitoring
        localStorage.setItem('pagePerformance', JSON.stringify({
          path: location,
          loadTime: pageLoadTime,
          domContentLoaded: domContentLoaded,
          timestamp: Date.now()
        }));
      }
    };

    // Dynamic title optimization based on time
    const optimizeTitle = () => {
      const hour = new Date().getHours();
      const currentTitle = document.title;
      
      if (location === '/' && !currentTitle.includes('⚡')) {
        let timeBasedPrefix = '';
        if (hour >= 9 && hour < 17) {
          timeBasedPrefix = '🏢 Office Hours: ';
        } else if (hour >= 17 && hour < 21) {
          timeBasedPrefix = '🌆 Evening Service: ';
        } else {
          timeBasedPrefix = '📞 24/7 Support: ';
        }
        
        if (!currentTitle.includes(timeBasedPrefix)) {
          document.title = timeBasedPrefix + currentTitle;
        }
      }
    };

    // Enhanced meta descriptions with call-to-action
    const enhanceMetaDescription = () => {
      const metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement;
      if (metaDesc && location === '/') {
        const enhancedDesc = metaDesc.content + ' 📞 Call now: +91-92052-53438 or WhatsApp for instant quotes!';
        if (!metaDesc.content.includes('Call now')) {
          metaDesc.content = enhancedDesc;
        }
      }
    };

    // Execute optimizations
    addBreadcrumbSchema();
    addPageSpecificSchema();
    updatePageMetrics();
    optimizeTitle();
    enhanceMetaDescription();

    // Cleanup function
    return () => {
      // Remove page-specific schemas when leaving page
      const pageSpecificSchemas = document.querySelectorAll('script[data-services], script[data-contact]');
      pageSpecificSchemas.forEach(script => script.remove());
    };

  }, [location]);

  // Add click tracking for SEO insights
  useEffect(() => {
    const trackClicks = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      
      // Track WhatsApp clicks for conversion
      if (target.closest('[data-whatsapp]') || target.closest('a[href*="wa.me"]')) {
        console.log('WhatsApp conversion tracked');
        
        // Update conversion data for SEO analysis
        const conversions = JSON.parse(localStorage.getItem('conversions') || '[]');
        conversions.push({
          type: 'whatsapp',
          page: location,
          timestamp: Date.now()
        });
        localStorage.setItem('conversions', JSON.stringify(conversions));
      }

      // Track service clicks
      if (target.closest('[data-service]')) {
        const serviceName = target.closest('[data-service]')?.getAttribute('data-service');
        console.log('Service clicked:', serviceName);
        
        const serviceClicks = JSON.parse(localStorage.getItem('serviceClicks') || '[]');
        serviceClicks.push({
          service: serviceName,
          page: location,
          timestamp: Date.now()
        });
        localStorage.setItem('serviceClicks', JSON.stringify(serviceClicks));
      }
    };

    document.addEventListener('click', trackClicks);
    return () => document.removeEventListener('click', trackClicks);
  }, [location]);

  return null;
};

export default AdvancedSEO;