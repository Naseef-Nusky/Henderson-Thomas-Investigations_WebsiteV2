import React from 'react';
import { Link } from 'react-router-dom';

const ServicesGrid = () => {
  const services = [
    {
      id: 1,
      title: 'Covert Surveillance',
      description: 'Our expert private investigators carry out discreet surveillance to capture photo and video evidence you can rely on. Whether it\'s for legal, personal, or corporate matters, we provide clear, professional results with complete confidentiality.',
      image: '/covert.jpg',
      link: '/service/covert'
    },
    {
      id: 2,
      title: 'Missing Person Investigation',
      description: 'Every 90 seconds someone goes missing in the UK. Our team uses advanced tracing methods, intelligence databases, and global contacts to locate individuals quickly and effectively — giving you answers and peace of mind.',
      image: '/missing.jpg',
      link: '/service/missing'
    },
    {
      id: 3,
      title: 'Fraud Investigation',
      description: 'Fraud costs UK victims billions each year. We specialise in exposing scams, financial deception, and identity theft, gathering evidence you can act on. Protect yourself with fast, discreet support from our experienced fraud investigators.',
      image: '/fraud.jpg',
      link: '/service/fraud'
    },
    {
      id: 4,
      title: 'Personal Investigations',
      description: 'From background checks and online dating enquiries to infidelity and family matters, our detectives handle sensitive cases with care and discretion. We uncover the truth so you can make informed decisions with confidence.',
      image: '/personal.jpg',
      link: '/service/personal'
    },
    {
      id: 5,
      title: 'Background Checking Services',
      description: 'We provide thorough background checks for employment, finance, and personal matters. With discreet and accurate verification, our investigators deliver the facts you need to protect your interests and make smart choices.',
      image: '/background.jpg',
      link: '/service/background'
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Header - Full Width */}
      <section className="relative mb-16 h-80">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/servicesPagebg.jpg" 
            alt="Our Services Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center py-16 px-8 text-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-8">
              Our Services
            </h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Professional investigation services tailored to your specific needs. 
              Our experienced team delivers reliable results with complete discretion.
            </p>
          </div>
        </div>
      </section>

      {/* Services Content */}
      <div className="pb-24">
        <div className="container mx-auto px-6">

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              to={service.link}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 block"
            >
              {/* Service Image */}
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Service Content */}
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0047b2] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 flex-grow">
                  {service.description}
                </p>
                
                {/* Read More Button */}
                <div className="mt-auto">
                  <Link 
                    to={service.link}
                    className="inline-flex items-center bg-[#0047b2] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                  >
                    <span>Read More</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </Link>
          ))}
        </div>

       
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;
