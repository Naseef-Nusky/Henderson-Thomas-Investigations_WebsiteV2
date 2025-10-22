import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ServicesSlider from '../components/sections/ServicesSlider';
import FAQAccordion from '../components/sections/FAQAccordion';
import ContactSection from '../components/sections/ContactSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <AboutSection />
      <ServicesSlider />
      <FAQAccordion />
      <ContactSection />
    </div>
  );
};

export default Home;
