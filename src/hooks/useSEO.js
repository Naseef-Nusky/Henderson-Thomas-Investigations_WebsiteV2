import { useEffect } from 'react';

const useSEO = ({ title, description, keywords, image, url }) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update meta description
    if (description) {
      updateMetaTag('name', 'description', description);
    }

    // Update meta keywords
    if (keywords) {
      updateMetaTag('name', 'keywords', keywords);
    }

    // Update Open Graph tags
    if (title) {
      updateMetaTag('property', 'og:title', title);
    }
    if (description) {
      updateMetaTag('property', 'og:description', description);
    }
    if (image) {
      updateMetaTag('property', 'og:image', image);
    }
    if (url) {
      updateMetaTag('property', 'og:url', url);
    }

    // Update Twitter Card tags
    if (title) {
      updateMetaTag('property', 'twitter:title', title);
    }
    if (description) {
      updateMetaTag('property', 'twitter:description', description);
    }
    if (image) {
      updateMetaTag('property', 'twitter:image', image);
    }

  }, [title, description, keywords, image, url]);
};

const updateMetaTag = (attribute, value, content) => {
  let element = document.querySelector(`meta[${attribute}="${value}"]`);
  
  if (element) {
    element.setAttribute('content', content);
  } else {
    element = document.createElement('meta');
    element.setAttribute(attribute, value);
    element.setAttribute('content', content);
    document.head.appendChild(element);
  }
};

export default useSEO;


const useSEO = ({ title, description, keywords, image, url }) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update meta description
    if (description) {
      updateMetaTag('name', 'description', description);
    }

    // Update meta keywords
    if (keywords) {
      updateMetaTag('name', 'keywords', keywords);
    }

    // Update Open Graph tags
    if (title) {
      updateMetaTag('property', 'og:title', title);
    }
    if (description) {
      updateMetaTag('property', 'og:description', description);
    }
    if (image) {
      updateMetaTag('property', 'og:image', image);
    }
    if (url) {
      updateMetaTag('property', 'og:url', url);
    }

    // Update Twitter Card tags
    if (title) {
      updateMetaTag('property', 'twitter:title', title);
    }
    if (description) {
      updateMetaTag('property', 'twitter:description', description);
    }
    if (image) {
      updateMetaTag('property', 'twitter:image', image);
    }

  }, [title, description, keywords, image, url]);
};

const updateMetaTag = (attribute, value, content) => {
  let element = document.querySelector(`meta[${attribute}="${value}"]`);
  
  if (element) {
    element.setAttribute('content', content);
  } else {
    element = document.createElement('meta');
    element.setAttribute(attribute, value);
    element.setAttribute('content', content);
    document.head.appendChild(element);
  }
};

export default useSEO;
