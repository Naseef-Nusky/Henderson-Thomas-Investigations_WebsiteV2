import React from 'react';

const OurServices = () => {
  const services = [
    {
      title: "Surveillance",
      description: "Professional surveillance services for individuals and businesses. We provide discreet monitoring and detailed reporting.",
      icon: "👁️"
    },
    {
      title: "Background Checks",
      description: "Comprehensive background investigations including employment history, criminal records, and personal references.",
      icon: "🔍"
    },
    {
      title: "Infidelity Investigations",
      description: "Discrete investigations to help you understand the truth about your relationship with complete confidentiality.",
      icon: "💔"
    },
    {
      title: "Missing Persons",
      description: "Professional assistance in locating missing persons, including skip tracing and family reunification services.",
      icon: "👤"
    },
    {
      title: "Corporate Investigations",
      description: "Business investigations including fraud detection, employee misconduct, and due diligence investigations.",
      icon: "🏢"
    },
    {
      title: "Insurance Investigations",
      description: "Thorough investigations for insurance claims including accident reconstruction and fraud detection.",
      icon: "📋"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight font-mont tracking-tight">
              Our Services
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100 leading-relaxed">
              Professional investigation services tailored to your specific needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Investigation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of professional investigation services to meet your specific requirements
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4 text-center">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we work to deliver professional investigation results
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Initial Consultation</h3>
              <p className="text-gray-600 text-sm">
                We discuss your needs and provide a detailed plan
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Investigation</h3>
              <p className="text-gray-600 text-sm">
                Professional investigation conducted with discretion
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Evidence Gathering</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive evidence collection and documentation
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Detailed Report</h3>
              <p className="text-gray-600 text-sm">
                Professional report with findings and recommendations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Professional Investigation Services?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for a confidential consultation about your investigation needs
          </p>
          <a 
            href="/contact" 
            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-300 inline-block"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default OurServices;
