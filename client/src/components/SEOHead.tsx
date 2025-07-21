import { useEffect } from "react";
import { useLocation } from "wouter";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

const SEOHead = ({ title, description, keywords, canonical }: SEOHeadProps) => {
  const [location] = useLocation();
  
  const defaultTitle = "SureDocs - Professional Document Services in Delhi NCR";
  const defaultDescription = "Complete document services in Delhi NCR - Birth certificates, driving licenses, passports, property mutation, ITR filing, GST registration. MCD/NDMC specialists.";
  const defaultKeywords = "document services Delhi NCR, birth certificate, driving license, passport services, property mutation, ITR filing, GST registration, MCD services, NDMC services";
  
  const pageTitle = title ? `${title} | SureDocs` : defaultTitle;
  const pageDescription = description || defaultDescription;
  const pageKeywords = keywords || defaultKeywords;
  const pageCanonical = canonical || `https://suredocs.replit.app${location}`;

  useEffect(() => {
    // Update document title
    document.title = pageTitle;
    
    // Update meta tags
    const metaTags = [
      { name: "description", content: pageDescription },
      { name: "keywords", content: pageKeywords },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:url", content: pageCanonical },
      { name: "twitter:title", content: pageTitle },
      { name: "twitter:description", content: pageDescription }
    ];

    metaTags.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement("meta");
        if (name) meta.name = name;
        if (property) meta.setAttribute("property", property);
        document.head.appendChild(meta);
      }
      
      meta.content = content;
    });

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = pageCanonical;
    
  }, [pageTitle, pageDescription, pageKeywords, pageCanonical]);

  return null;
};

export default SEOHead;