// Define the gtag function globally
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Initialize Google Analytics
export const initGA = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  if (!measurementId) {
    console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
    return;
  }

  // Add Google Analytics script to the head
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script1);

  // Initialize gtag
  const script2 = document.createElement('script');
  script2.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${measurementId}', {
      page_title: document.title,
      page_location: window.location.href,
      custom_map: {'custom_parameter_1': 'business_type'}
    });
    gtag('config', '${measurementId}', {
      custom_parameter_1: 'document_services'
    });
  `;
  document.head.appendChild(script2);

  console.log('Google Analytics initialized with ID:', measurementId);
};

// Track page views - useful for single-page applications
export const trackPageView = (url: string, title?: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (!measurementId) return;
  
  window.gtag('config', measurementId, {
    page_path: url,
    page_title: title || document.title,
    page_location: window.location.origin + url
  });

  // Track custom event for page view
  window.gtag('event', 'page_view', {
    page_title: title || document.title,
    page_location: window.location.origin + url,
    page_path: url
  });
};

// Track events with enhanced data
export const trackEvent = (
  action: string, 
  category?: string, 
  label?: string, 
  value?: number,
  customParameters?: Record<string, any>
) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', action, {
    event_category: category || 'engagement',
    event_label: label,
    value: value,
    custom_parameter_1: 'document_services',
    service_area: 'Delhi_NCR',
    business_type: 'document_services',
    ...customParameters
  });
};

// Track conversions (WhatsApp contacts)
export const trackConversion = (conversionType: string, service?: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'conversion', {
    event_category: 'lead_generation',
    event_label: conversionType,
    value: 1,
    service_type: service,
    contact_method: conversionType,
    business_area: 'Delhi_NCR'
  });

  // Track as a specific conversion event
  window.gtag('event', 'generate_lead', {
    currency: 'INR',
    value: conversionType === 'whatsapp' ? 50 : 25, // Estimated lead value
    event_category: 'conversion',
    method: conversionType,
    service_requested: service
  });
};

// Track user engagement
export const trackEngagement = (engagementType: string, data?: any) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', engagementType, {
    event_category: 'user_engagement',
    engagement_time_msec: data?.timeSpent || 0,
    scroll_depth: data?.scrollDepth || 0,
    page_location: window.location.href,
    custom_parameter_1: 'document_services'
  });
};

// Track service interest
export const trackServiceInterest = (serviceName: string, action: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'service_interest', {
    event_category: 'services',
    event_label: serviceName,
    action: action,
    service_type: serviceName,
    interaction_type: action,
    business_area: 'Delhi_NCR'
  });
};

// Enhanced ecommerce tracking for service inquiries
export const trackServiceInquiry = (serviceName: string, estimatedValue: number) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'begin_checkout', {
    currency: 'INR',
    value: estimatedValue,
    items: [{
      item_id: serviceName.toLowerCase().replace(/\s+/g, '_'),
      item_name: serviceName,
      item_category: 'document_service',
      quantity: 1,
      price: estimatedValue
    }]
  });
};