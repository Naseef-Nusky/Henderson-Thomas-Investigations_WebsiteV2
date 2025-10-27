import { useEffect } from 'react';

const SEO = ({ title, description, keywords, url, structuredData }) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update or create meta tags
    const updateMetaTag = (name, content) => {
      if (!content) return;
      
      let tag = document.querySelector(`meta[name="${name}"]`) || 
                document.querySelector(`meta[property="${name}"]`);
      
      if (!tag) {
        tag = document.createElement('meta');
        if (name.startsWith('og:') || name.startsWith('twitter:')) {
          tag.setAttribute('property', name);
        } else {
          tag.setAttribute('name', name);
        }
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // Update description
    if (description) {
      updateMetaTag('description', description);
    }

    // Update keywords
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    // Update Open Graph tags
    if (url) {
      updateMetaTag('og:url', `${window.location.origin}${url}`);
    }
    if (title) {
      updateMetaTag('og:title', title);
    }
    if (description) {
      updateMetaTag('og:description', description);
    }

    // Update Twitter Card tags
    if (title) {
      updateMetaTag('twitter:title', title);
    }
    if (description) {
      updateMetaTag('twitter:description', description);
    }
  }, [title, description, keywords, url]);

  // Add structured data as a script tag
  useEffect(() => {
    if (!structuredData) return;

    const scriptId = 'structured-data';
    let script = document.getElementById(scriptId);
    
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.body.appendChild(script);
    }

    script.textContent = JSON.stringify(structuredData);
  }, [structuredData]);

  return null;
};

export default SEO;
