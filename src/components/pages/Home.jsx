import React from 'react';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import ServicesSlider from '../sections/ServicesSlider';
// eslint-disable-next-line
import FAQAccordion from '../sections/FAQAccordion';
import ContactSection from '../sections/ContactSection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <AboutSection />
      <ServicesSlider />
      {/* <FAQAccordion /> */}
      <ContactSection />
    </div>
  );
};

export default HomePage;
