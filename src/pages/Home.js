import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ServicesSlider from '../components/sections/ServicesSlider';
import ContactSection from '../components/sections/ContactSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <AboutSection />
      <ServicesSlider />
      <ContactSection />
    </div>
  );
};

export default Home;
