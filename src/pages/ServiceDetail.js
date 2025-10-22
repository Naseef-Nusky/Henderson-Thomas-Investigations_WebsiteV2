import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ServiceDetail = () => {
  const { id } = useParams();
  
  const services = [
    {
      id: 1,
      title: 'Covert Surveillance',
      desc: 'Our expert private investigators carry out discreet surveillance to capture photo and video evidence you can rely on. Whether it\'s for legal, personal, or corporate matters, we provide clear, professional results with complete confidentiality.',
      img: '/covert.jpg',
      icon: '👁️',
      stats: '24/7 Monitoring',
      features: [
        'Discrete Operations',
        'Video Evidence',
        'Real-time Updates',
        'Professional Documentation',
        'Legal Compliance',
        'Confidential Reporting'
      ],
      process: [
        'Initial consultation and case assessment',
        'Strategic planning and risk evaluation',
        'Deployment of surveillance team',
        'Evidence collection and documentation',
        'Comprehensive reporting and analysis',
        'Follow-up support and legal assistance'
      ],
      benefits: [
        'Clear photographic and video evidence',
        'Detailed activity reports',
        'Legal admissibility',
        'Complete confidentiality',
        'Professional presentation',
        'Expert witness support'
      ]
    },
    {
      id: 2,
      title: 'Missing Person Investigation',
      desc: 'Every 90 seconds someone goes missing in the UK. Our team uses advanced tracing methods, intelligence databases, and global contacts to locate individuals quickly and effectively — giving you answers and peace of mind.',
      img: '/missing.jpg',
      icon: '🔍',
      stats: '90% Success Rate',
      features: [
        'Global Network',
        'Advanced Tracing',
        'Quick Results',
        'Database Searches',
        'Social Media Analysis',
        'Family Support'
      ],
      process: [
        'Comprehensive case intake and assessment',
        'Database and intelligence searches',
        'Social media and digital footprint analysis',
        'Field investigation and interviews',
        'Collaboration with authorities',
        'Family updates and support'
      ],
      benefits: [
        'High success rate',
        'Rapid response time',
        'Comprehensive search methods',
        'Family support throughout',
        'Professional documentation',
        'Legal compliance'
      ]
    },
    {
      id: 3,
      title: 'Fraud Investigation',
      desc: 'Fraud costs UK victims billions each year. We specialise in exposing scams, financial deception, and identity theft, gathering evidence you can act on. Protect yourself with fast, discreet support from our experienced fraud investigators.',
      img: '/fraud.jpg',
      icon: '🛡️',
      stats: '£2B+ Recovered',
      features: [
        'Financial Analysis',
        'Evidence Gathering',
        'Legal Support',
        'Identity Verification',
        'Asset Recovery',
        'Expert Testimony'
      ],
      process: [
        'Fraud assessment and documentation',
        'Financial analysis and tracing',
        'Evidence collection and verification',
        'Legal case preparation',
        'Asset recovery assistance',
        'Court support and testimony'
      ],
      benefits: [
        'Significant recovery rates',
        'Comprehensive evidence',
        'Legal expertise',
        'Asset recovery support',
        'Expert witness services',
        'Confidential investigation'
      ]
    },
    {
      id: 4,
      title: 'Personal Investigations',
      desc: 'From background checks and online dating enquiries to infidelity and family matters, our detectives handle sensitive cases with care and discretion. We uncover the truth so you can make informed decisions with confidence.',
      img: '/personal.jpg',
      icon: '💼',
      stats: '100% Confidential',
      features: [
        'Background Checks',
        'Family Matters',
        'Discrete Service',
        'Online Investigations',
        'Relationship Verification',
        'Personal Security'
      ],
      process: [
        'Confidential consultation',
        'Case planning and strategy',
        'Discrete investigation',
        'Evidence gathering',
        'Comprehensive reporting',
        'Ongoing support'
      ],
      benefits: [
        'Complete confidentiality',
        'Sensitive handling',
        'Professional discretion',
        'Comprehensive reports',
        'Personal support',
        'Legal compliance'
      ]
    },
    {
      id: 5,
      title: 'Background Checking Services',
      desc: 'We provide thorough background checks for employment, finance, and personal matters. With discreet and accurate verification, our investigators deliver the facts you need to protect your interests and make smart choices.',
      img: '/background.jpg',
      icon: '📋',
      stats: '20+ Years Experience',
      features: [
        'Employment Checks',
        'Financial Verification',
        'Comprehensive Reports',
        'Identity Verification',
        'Criminal Records',
        'Reference Checks'
      ],
      process: [
        'Service selection and consultation',
        'Document verification',
        'Database searches',
        'Reference interviews',
        'Report compilation',
        'Delivery and follow-up'
      ],
      benefits: [
        'Thorough verification',
        'Fast turnaround',
        'Comprehensive coverage',
        'Professional presentation',
        'Legal compliance',
        'Ongoing support'
      ]
    }
  ];

  const service = services.find(s => s.id === parseInt(id));

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">The requested service could not be found.</p>
          <Link to="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16">
        <div className="absolute inset-0 z-0">
          <img
            src={service.img}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-indigo-900/80"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-block mb-6">
              <span className="text-6xl">{service.icon}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-mont tracking-tight">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100 leading-relaxed">
              {service.desc}
            </p>
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="text-white font-semibold text-lg">
                {service.stats}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-mont tracking-tight">
                What We Offer
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive investigation services tailored to your specific needs
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.features.map((feature, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-mont tracking-tight">
                Our Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A systematic approach to delivering results
              </p>
            </div>
            <div className="space-y-8">
              {service.process.map((step, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-lg text-gray-700 leading-relaxed">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-mont tracking-tight">
                Why Choose Us
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Professional expertise you can trust
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-mont tracking-tight">
              Ready to Get Started?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-blue-100 leading-relaxed">
              Contact us today for a confidential consultation about your investigation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Contact Us Today
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                to="/our-services" 
                className="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
