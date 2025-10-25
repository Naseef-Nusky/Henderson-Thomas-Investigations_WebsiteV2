import React from 'react';
import useSEO from '../hooks/useSEO';

const SEO = ({ 
  title = "Henderson Thomas Investigations - Professional Private Detective Services London",
  description = "UK's top-rated private detective agency specializing in corporate investigations, covert surveillance, and discreet investigative services.",
  keywords = "private detective, private investigator, corporate investigations, covert surveillance, fraud investigation, missing persons, background checks, London, UK",
  image = "/logo.png",
  url = "",
  structuredData = null
}) => {
  const fullTitle = title.includes("Henderson Thomas Investigations") ? title : `${title} | Henderson Thomas Investigations`;
  const fullUrl = url ? `https://hendersonthomasinvestigations.com${url}` : "https://hendersonthomasinvestigations.com";
  const fullImage = image.startsWith('http') ? image : `https://hendersonthomasinvestigations.com${image}`;

  // Use the SEO hook
  useSEO({
    title: fullTitle,
    description,
    keywords,
    image: fullImage,
    url: fullUrl
  });

  // Add structured data to document head
  React.useEffect(() => {
    if (structuredData) {
      // Remove existing structured data
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        existingScript.remove();
      }

      // Add new structured data
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);

      // Cleanup function
      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }
  }, [structuredData]);

  return null; // This component doesn't render anything
};

export default SEO;
