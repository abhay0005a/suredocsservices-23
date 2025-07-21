import { useEffect } from 'react';
import { useLocation } from 'wouter';

// Custom hook for automatic SEO optimization
export const useSEOOptimizer = () => {
  const [location] = useLocation();

  useEffect(() => {
    // Automatic internal linking for SEO
    const addInternalLinks = () => {
      const content = document.querySelector('main') || document.body;
      if (!content) return;

      // Define keyword-to-URL mappings for automatic linking
      const linkMappings = {
        'birth certificate': '/services#birth-certificate',
        'driving license': '/services#driving-license', 
        'passport services': '/services#passport',
        'property mutation': '/services#property-mutation',
        'ITR filing': '/services#itr-filing',
        'GST registration': '/services#gst-registration',
        'document services': '/services',
        'Delhi NCR': '/about#service-area',
        'MCD services': '/services#municipal',
        'NDMC services': '/services#municipal',
        'contact us': '/contact'
      };

      // Walk through text nodes and add internal links
      const walker = document.createTreeWalker(
        content,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode: (node) => {
            const parent = node.parentElement;
            if (!parent) return NodeFilter.FILTER_REJECT;
            
            // Skip if already inside a link or script
            if (parent.tagName === 'A' || parent.tagName === 'SCRIPT') {
              return NodeFilter.FILTER_REJECT;
            }
            
            return NodeFilter.FILTER_ACCEPT;
          }
        }
      );

      const textNodes: Text[] = [];
      let node;
      while (node = walker.nextNode()) {
        textNodes.push(node as Text);
      }

      textNodes.forEach(textNode => {
        let text = textNode.textContent || '';
        let hasChanges = false;

        Object.entries(linkMappings).forEach(([keyword, url]) => {
          const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
          if (regex.test(text) && !text.includes(`href="${url}"`)) {
            text = text.replace(regex, `<a href="${url}" class="text-blue-600 hover:text-blue-800 underline">${keyword}</a>`);
            hasChanges = true;
          }
        });

        if (hasChanges) {
          const wrapper = document.createElement('span');
          wrapper.innerHTML = text;
          textNode.parentNode?.replaceChild(wrapper, textNode);
        }
      });
    };

    // Add semantic HTML5 structure
    const enhanceSemanticStructure = () => {
      const main = document.querySelector('main');
      if (!main) {
        // Wrap main content in semantic tags
        const content = document.querySelector('#root > div > div:not(nav):not(header)');
        if (content && !content.closest('main')) {
          const mainElement = document.createElement('main');
          mainElement.setAttribute('role', 'main');
          mainElement.setAttribute('aria-label', 'Main content');
          content.parentNode?.insertBefore(mainElement, content);
          mainElement.appendChild(content);
        }
      }

      // Add semantic sections
      const sections = document.querySelectorAll('div[class*="section"]');
      sections.forEach(section => {
        if (section.tagName !== 'SECTION') {
          const semanticSection = document.createElement('section');
          semanticSection.className = section.className;
          semanticSection.innerHTML = section.innerHTML;
          section.parentNode?.replaceChild(semanticSection, section);
        }
      });
    };

    // Optimize images for SEO
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        // Add missing alt attributes
        if (!img.alt) {
          const src = img.src;
          if (src.includes('birth-certificate')) {
            img.alt = 'Birth certificate service in Delhi NCR';
          } else if (src.includes('driving-license')) {
            img.alt = 'Driving license service in Delhi NCR';
          } else if (src.includes('passport')) {
            img.alt = 'Passport service in Delhi NCR';
          } else {
            img.alt = 'Professional document service in Delhi NCR';
          }
        }

        // Add loading optimization
        if (!img.loading) {
          img.loading = 'lazy';
        }

        // Add image schema
        if (!img.hasAttribute('itemProp')) {
          img.setAttribute('itemProp', 'image');
        }
      });
    };

    // Add page-specific keywords density optimization
    const optimizeKeywordDensity = () => {
      const pageKeywords = {
        '/': ['document services', 'Delhi NCR', 'birth certificate', 'driving license'],
        '/services': ['services', 'birth certificate', 'driving license', 'passport', 'property mutation', 'ITR filing'],
        '/about': ['about us', 'team', 'experience', 'professional', 'experts'],
        '/contact': ['contact', 'WhatsApp', 'phone', 'address', 'get in touch']
      };

      const currentKeywords = pageKeywords[location as keyof typeof pageKeywords] || [];
      
      // Check keyword density and suggest optimizations
      const textContent = document.body.textContent || '';
      const wordCount = textContent.split(/\s+/).length;

      currentKeywords.forEach(keyword => {
        const keywordRegex = new RegExp(keyword, 'gi');
        const keywordCount = (textContent.match(keywordRegex) || []).length;
        const density = (keywordCount / wordCount) * 100;

        // Log keyword density for SEO analysis
        console.log(`Keyword "${keyword}" density: ${density.toFixed(2)}%`);
        
        // Optimal density is 1-3%
        if (density < 1) {
          console.log(`Consider adding more "${keyword}" mentions`);
        } else if (density > 3) {
          console.log(`"${keyword}" might be over-optimized`);
        }
      });
    };

    // Execute optimizations with delay to ensure DOM is ready
    setTimeout(() => {
      addInternalLinks();
      enhanceSemanticStructure();
      optimizeImages();
      optimizeKeywordDensity();
    }, 1000);

  }, [location]);

  // Return utility functions
  return {
    addStructuredData: (schema: object) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    },
    
    updateMetaTag: (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    },

    trackSEOEvent: (event: string, data: any) => {
      console.log(`SEO Event: ${event}`, data);
      
      // Store SEO events for analysis
      const seoEvents = JSON.parse(localStorage.getItem('seoEvents') || '[]');
      seoEvents.push({
        event,
        data,
        page: location,
        timestamp: Date.now()
      });
      localStorage.setItem('seoEvents', JSON.stringify(seoEvents));
    }
  };
};