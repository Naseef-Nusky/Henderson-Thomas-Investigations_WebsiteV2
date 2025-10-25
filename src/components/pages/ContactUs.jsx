// src/pages/ContactPage.jsx
import React from "react";
import ContactFormSection from '../ContactBottom';
import SEO from '../SEO';

const ContactPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Henderson Thomas Investigations",
    "description": "Contact Henderson Thomas Investigations for professional private detective services. Get a free confidential consultation for corporate investigations, covert surveillance, fraud investigation, and more.",
    "url": "https://hendersonthomasinvestigations.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Henderson Thomas Investigations",
      "telephone": "07826 416466",
      "email": "private@hendersonthomasinvestigations.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1st Floor, 238 Kensington High St",
        "addressLocality": "London",
        "postalCode": "W8 6SN",
        "addressCountry": "GB"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "07826 416466",
        "contactType": "customer service",
        "availableLanguage": "English",
        "areaServed": "GB",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      }
    }
  };

  return (
    <>
      <SEO 
        title="Contact Us - Free Confidential Consultation | Henderson Thomas Investigations"
        description="Contact Henderson Thomas Investigations for professional private detective services. Get a free confidential consultation for corporate investigations, covert surveillance, fraud investigation, missing persons, and background checks."
        keywords="contact private detective London, free consultation private investigator, confidential investigation services, corporate investigation contact, fraud investigation consultation"
        url="/contact"
        structuredData={structuredData}
      />
      <div className="bg-gray-50 pt-16 md:pt-20 pb-24">
      {/* Page Header */}
      <section className="relative h-80">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/contactPagebg.jpg" 
            alt="Contact Us Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center py-16 px-8 text-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-8">
                Contact Us
            </h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                 Get in touch with Henderson Thomas Investigations.  
              Our team is ready to provide you with discreet, professional,  
              and reliable assistance — tailored to your case.
            </p>
          </div>
        </div>
      </section>


      <ContactFormSection />

    </div>
    </>
  );
};

export default ContactPage;
