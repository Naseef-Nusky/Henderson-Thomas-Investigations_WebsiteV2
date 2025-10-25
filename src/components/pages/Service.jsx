import React from "react";
import ServicesGrid from '../ServicesGrid.jsx';
import SEO from '../SEO';

const Services = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Private Investigation Services",
    "description": "Professional investigation services including covert surveillance, fraud investigation, missing persons, personal investigations, and background checks.",
    "provider": {
      "@type": "Organization",
      "name": "Henderson Thomas Investigations",
      "url": "https://hendersonthomasinvestigations.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1st Floor, 238 Kensington High St",
        "addressLocality": "London",
        "postalCode": "W8 6SN",
        "addressCountry": "GB"
      },
      "telephone": "07826 416466",
      "email": "private@hendersonthomasinvestigations.com"
    },
    "serviceType": "Private Investigation",
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Covert Surveillance",
        "description": "Discreet surveillance services for legal, personal, and corporate matters"
      },
      {
        "@type": "Offer", 
        "name": "Fraud Investigation",
        "description": "Professional fraud investigation and evidence gathering services"
      },
      {
        "@type": "Offer",
        "name": "Missing Persons Investigation", 
        "description": "Expert missing persons location and tracing services"
      },
      {
        "@type": "Offer",
        "name": "Personal Investigation",
        "description": "Confidential personal investigation services for sensitive matters"
      },
      {
        "@type": "Offer",
        "name": "Background Check Services",
        "description": "Comprehensive background verification and screening services"
      }
    ]
  };

  return (
    <section className="bg-gray-50 pt-16 md:pt-20">
      <SEO 
        title="Our Services - Professional Private Investigation Services | Henderson Thomas Investigations"
        description="Professional private investigation services including covert surveillance, fraud investigation, missing persons, personal investigations, and background checks. Expert investigators serving London and UK."
        keywords="private investigation services, covert surveillance, fraud investigation, missing persons, personal investigation, background checks, private detective London, investigation services UK"
        url="/our-services"
        structuredData={structuredData}
      />
      <ServicesGrid />
    </section>
  );
};

export default Services;
