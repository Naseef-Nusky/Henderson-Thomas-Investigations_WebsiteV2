// src/pages/ContactPage.jsx
import React from "react";
import ContactFormSection from '../ContactBottom';
import SEO from '../SEO';

const ContactPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Henderson Thomas Investigations",
    "description": "Get in touch with Henderson Thomas Investigations for professional, confidential investigation services. Our team is ready to provide discreet assistance tailored to your case.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Henderson Thomas Investigations",
      "url": "https://hendersonthomasinvestigations.com",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "07826 416466",
          "contactType": "customer service",
          "availableLanguage": "English",
          "areaServed": "GB"
        },
        {
          "@type": "ContactPoint",
          "email": "private@hendersonthomasinvestigations.com",
          "contactType": "customer service",
          "availableLanguage": "English"
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1st Floor, 238 Kensington High St",
        "addressLocality": "London",
        "postalCode": "W8 6SN",
        "addressCountry": "GB"
      },
      "openingHours": "Mo-Su 00:00-23:59",
      "description": "Professional private investigation services available 24/7"
    }
  };

  return (
    <div className="bg-gray-50 pt-16 md:pt-20 pb-24">
      <SEO 
        title="Contact Us - Get Free Consultation | Henderson Thomas Investigations"
        description="Contact Henderson Thomas Investigations for professional, confidential investigation services. Get free consultation and discreet assistance tailored to your case. Available 24/7."
        keywords="contact Henderson Thomas Investigations, private detective contact, investigation consultation, free consultation, private investigator London, investigation services contact"
        url="/contact"
        structuredData={structuredData}
      />
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
  );
};

export default ContactPage;
