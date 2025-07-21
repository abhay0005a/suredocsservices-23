import { useEffect, useRef } from 'react';
import { useLocation } from 'wouter';
import { trackPageView } from '../lib/analytics';

export const useAnalytics = () => {
  const [location] = useLocation();
  const prevLocationRef = useRef<string>(location);
  
  useEffect(() => {
    if (location !== prevLocationRef.current) {
      // Get page title for tracking
      const getPageTitle = (path: string) => {
        switch (path) {
          case '/':
            return 'Home - SureDocs Document Services Delhi NCR';
          case '/services':
            return 'Services - Complete Document Solutions Delhi NCR';
          case '/about':
            return 'About Us - Professional Document Experts Delhi NCR';
          case '/contact':
            return 'Contact - Get in Touch for Document Services';
          default:
            return document.title;
        }
      };

      const pageTitle = getPageTitle(location);
      trackPageView(location, pageTitle);
      prevLocationRef.current = location;
    }
  }, [location]);
};