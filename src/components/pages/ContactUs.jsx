// src/pages/ContactPage.jsx
import React from "react";
import ContactFormSection from '../ContactBottom';

const ContactPage = () => {
  return (
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
  );
};

export default ContactPage;
