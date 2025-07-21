import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { trackEngagement, trackServiceInterest, trackConversion } from '@/lib/analytics';

// Core Web Vitals tracking
const trackWebVitals = () => {
  // Performance metrics tracking
  if ('PerformanceObserver' in window) {
    // Track Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.startTime);
      // Send to analytics service if needed
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // Track Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
      console.log('CLS:', clsValue);
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Track First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log('FID:', (entry as any).processingStart - entry.startTime);
      }
    });
    fidObserver.observe({ entryTypes: ['first-input'] });
  }
};

// SEO monitoring
const trackSEOMetrics = () => {
  // Track page structure for SEO
  const checkSEOElements = () => {
    const hasH1 = document.querySelector('h1') !== null;
    const hasMetaDescription = document.querySelector('meta[name="description"]') !== null;
    const hasTitle = document.title.length > 0;
    const hasCanonical = document.querySelector('link[rel="canonical"]') !== null;
    
    console.log('SEO Check:', {
      hasH1,
      hasMetaDescription,
      hasTitle,
      hasCanonical,
      titleLength: document.title.length
    });
  };

  // Check after DOM is loaded
  setTimeout(checkSEOElements, 1000);
};

// User engagement tracking
const trackUserEngagement = () => {
  let startTime = Date.now();
  let scrollDepth = 0;
  
  // Track scroll depth
  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const currentScrollDepth = Math.round((scrollTop + windowHeight) / documentHeight * 100);
    
    if (currentScrollDepth > scrollDepth) {
      scrollDepth = currentScrollDepth;
    }
  };

  // Track time on page
  const trackTimeOnPage = () => {
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    console.log('Page metrics:', {
      timeSpent: `${timeSpent}s`,
      maxScrollDepth: `${scrollDepth}%`
    });

    // Send engagement data to Google Analytics
    trackEngagement('page_engagement', {
      timeSpent: timeSpent * 1000, // Convert to milliseconds
      scrollDepth: scrollDepth
    });
  };

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('beforeunload', trackTimeOnPage);

  return () => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('beforeunload', trackTimeOnPage);
  };
};

const Analytics = () => {
  const [location] = useLocation();

  useEffect(() => {
    // Track page views
    console.log('Page view:', location);
    
    // Initialize tracking
    trackWebVitals();
    trackSEOMetrics();
    const cleanup = trackUserEngagement();

    // Track page-specific events
    const trackPageSpecificEvents = () => {
      if (location === '/') {
        console.log('Homepage viewed');
      } else if (location === '/services') {
        console.log('Services page viewed');
        // Track service category interactions
        const serviceButtons = document.querySelectorAll('[data-service-category]');
        serviceButtons.forEach(button => {
          button.addEventListener('click', (e) => {
            const category = (e.target as HTMLElement).getAttribute('data-service-category');
            console.log('Service category clicked:', category);
          });
        });
      } else if (location === '/contact') {
        console.log('Contact page viewed');
        // Track contact form interactions
        const whatsappButtons = document.querySelectorAll('[data-whatsapp]');
        whatsappButtons.forEach(button => {
          button.addEventListener('click', () => {
            console.log('WhatsApp contact initiated');
          });
        });
      }
    };

    setTimeout(trackPageSpecificEvents, 500);

    return cleanup;
  }, [location]);

  return null; // This component doesn't render anything
};

export default Analytics;