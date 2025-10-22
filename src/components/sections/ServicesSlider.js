import React, { useEffect, useState } from 'react';

const ServicesSlider = () => {
  const services = [
    {
      id: 1,
      title: 'Covert Surveillance',
      desc: 'Our expert private investigators carry out discreet surveillance to capture photo and video evidence you can rely on. Whether it\'s for legal, personal, or corporate matters, we provide clear, professional results with complete confidentiality.',
      img: '/covert.jpg',
      icon: '👁️',
      stats: '24/7 Monitoring'
    },
    {
      id: 2,
      title: 'Missing Person Investigation',
      desc: 'Every 90 seconds someone goes missing in the UK. Our team uses advanced tracing methods, intelligence databases, and global contacts to locate individuals quickly and effectively — giving you answers and peace of mind.',
      img: '/missing.jpg',
      icon: '🔍',
      stats: '90% Success Rate'
    },
    {
      id: 3,
      title: 'Fraud Investigation',
      desc: 'Fraud costs UK victims billions each year. We specialise in exposing scams, financial deception, and identity theft, gathering evidence you can act on. Protect yourself with fast, discreet support from our experienced fraud investigators.',
      img: '/fraud.jpg',
      icon: '🛡️',
      stats: '£2B+ Recovered'
    },
    {
      id: 4,
      title: 'Personal Investigations',
      desc: 'From background checks and online dating enquiries to infidelity and family matters, our detectives handle sensitive cases with care and discretion. We uncover the truth so you can make informed decisions with confidence.',
      img: '/personal.jpg',
      icon: '💼',
      stats: '100% Confidential'
    },
    {
      id: 5,
      title: 'Background Checking Services',
      desc: 'We provide thorough background checks for employment, finance, and personal matters. With discreet and accurate verification, our investigators deliver the facts you need to protect your interests and make smart choices.',
      img: '/background.jpg',
      icon: '📋',
      stats: '20+ Years Experience'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, services.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    setTimeout(() => setIsAutoPlaying(true), 6000);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
    setTimeout(() => setIsAutoPlaying(true), 6000);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 6000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-mont tracking-tight">
            Our Professional Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Confidential, professional, and tailored investigation services delivering clear, reliable results.
          </p>
        </div>

        {/* Main Slider */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Current Slide */}
            <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white">
              <div className="relative h-[500px] md:h-[600px]">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out"
                  style={{ backgroundImage: `url(${services[currentIndex].img})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-indigo-900/70"></div>
                </div>
                
                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full p-8 md:p-12 text-center">
                    <div className="max-w-4xl mx-auto">
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mont leading-tight">
                        {services[currentIndex].title}
                      </h3>
                      <p className="text-lg text-blue-100 leading-relaxed mb-8 max-w-3xl mx-auto">
                        {services[currentIndex].desc}
                      </p>
                      <a 
                        href="/our-services" 
                        className="inline-flex items-center bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                      >
                        Our Services
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm hover:bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 transition-all duration-300 hover:shadow-lg hover:scale-110 z-20"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm hover:bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 transition-all duration-300 hover:shadow-lg hover:scale-110 z-20"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-600 w-8' 
                    : 'bg-gray-300 w-3 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSlider;