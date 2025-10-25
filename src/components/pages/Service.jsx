import React from "react";
import ServicesGrid from '../ServicesGrid.jsx';
import SEO from '../SEO';

const Services = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Private Investigation Services",
    "description": "Professional private investigation services including corporate investigations, covert surveillance, fraud investigation, missing persons, background checks, and personal investigation.",
    "url": "https://hendersonthomasinvestigations.com/our-services",
    "provider": {
      "@type": "Organization",
      "name": "Henderson Thomas Investigations",
      "url": "https://hendersonthomasinvestigations.com",
      "telephone": "07826 416466",
      "email": "private@hendersonthomasinvestigations.com"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "London"
      },
      {
        "@type": "Country",
        "name": "United Kingdom"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Investigation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Covert Surveillance",
            "description": "Discreet surveillance to capture photo and video evidence for legal, personal, or corporate matters."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Missing Person Investigation",
            "description": "Advanced tracing methods and intelligence databases to locate individuals quickly and effectively."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fraud Investigation",
            "description": "Specialized in exposing scams, financial deception, and identity theft with evidence gathering."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Personal Investigations",
            "description": "Background checks, online dating enquiries, infidelity, and family matters with care and discretion."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Background Checking Services",
            "description": "Thorough background checks for employment, finance, and personal matters with discreet verification."
          }
        }
      ]
    }
  };

  return (
    <>
      <SEO 
        title="Our Services - Professional Private Investigation Services London | Henderson Thomas Investigations"
        description="Professional private investigation services including corporate investigations, covert surveillance, fraud investigation, missing persons, background checks, and personal investigation. Expert team delivering reliable results with complete discretion."
        keywords="private investigation services London, corporate investigations UK, covert surveillance services, fraud investigation, missing persons investigation, background checks, personal investigation services"
        url="/our-services"
        structuredData={structuredData}
      />
      <section className="bg-gray-50 pt-16 md:pt-20">
        <ServicesGrid />
      </section>
    </>
  );
};

export default Services;
