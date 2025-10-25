import React from "react";
import SEO from '../SEO';
// import { Link } from "react-router-dom";
const AboutUs = () => {
  const image = "/background.jpg"; // Replace with your image path

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Henderson Thomas Investigations",
    "description": "Learn about Henderson Thomas Investigations, UK's top-rated private detective agency specializing in corporate investigations, covert surveillance, and discreet investigative services.",
    "url": "https://hendersonthomasinvestigations.com/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "Henderson Thomas Investigations",
      "description": "UK's top-rated private detective agency specializing in corporate investigations, covert surveillance, and discreet investigative services.",
      "url": "https://hendersonthomasinvestigations.com",
      "logo": "https://hendersonthomasinvestigations.com/logo.png",
      "telephone": "07826 416466",
      "email": "private@hendersonthomasinvestigations.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1st Floor, 238 Kensington High St",
        "addressLocality": "London",
        "postalCode": "W8 6SN",
        "addressCountry": "GB"
      },
      "foundingDate": "2020",
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
      "serviceType": [
        "Private Investigation",
        "Corporate Investigation",
        "Covert Surveillance",
        "Fraud Investigation",
        "Missing Persons",
        "Background Checks",
        "Personal Investigation"
      ]
    }
  };

  return (
    <>
      <SEO 
        title="About Us - Professional Private Detectives London | Henderson Thomas Investigations"
        description="Learn about Henderson Thomas Investigations, UK's top-rated private detective agency. Our experienced team provides professional, confidential investigative services including corporate investigations, covert surveillance, and fraud investigation."
        keywords="about private detective London, Henderson Thomas Investigations team, professional investigators UK, corporate investigation services, experienced private detectives"
        url="/about"
        structuredData={structuredData}
      />
      <div className="pt-16 md:pt-20">
      {/* Page Header - Full Width */}
      <section className="relative h-80">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/aboutPagebg.jpg" 
            alt="About Us Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center py-16 px-8 text-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-8">
             About Us
            </h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                Henderson Thomas Investigations specialises in a wide range of investigative services, delivering clear, reliable results with professionalism and discretion.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 pb-10">
            {/* Text Content */}
            
            <div className="md:w-1/2 text-center">
              <p className="text-gray-700 text-lg  leading-relaxed mb-4">
                Henderson Thomas Investigations specialises in a wide range of investigative services. Our dedicated team of skilled male and female investigators operates with professionalism and precision, ensuring your case is managed with the utmost care and discretion.
              </p>
              <p className="text-gray-700 text-lg  leading-relaxed mb-4">
                We focus on gathering robust and reliable evidence, enabling our clients to uncover the truth and make informed decisions with confidence. Whether your concern involves personal, corporate, or legal matters, our experts bring years of experience, advanced resources, and cutting-edge equipment to thoroughly investigate and resolve your case.
              </p>
              <p className="text-gray-800 text-lg font-semibold mb-6">
                Whatever the challenge, you can rely on Henderson Thomas Investigations for a comprehensive and effective solution.
              </p>
            </div>

            {/* Image */}
            <div className="md:w-1/2">
              <img
                src={image}
                alt="About Henderson Thomas Investigations"
                className="rounded-xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default AboutUs;
