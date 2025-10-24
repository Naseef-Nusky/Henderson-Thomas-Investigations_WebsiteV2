import React from 'react';
import LatestBlogSection from '../components/sections/LatestBlogSection';
import FAQAccordion from '../components/sections/FAQAccordion';
import ContactSection from '../components/sections/ContactSection';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight font-mont tracking-tight">
              About Us
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100 leading-relaxed">
              Professional investigators with over 20 years of experience
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Henderson Thomas Investigations was founded with a commitment to providing professional, 
                  confidential, and thorough investigation services. With over two decades of experience 
                  in the field, we have built a reputation for delivering results while maintaining the 
                  highest standards of discretion and professionalism.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our team consists of experienced investigators who understand the sensitive nature of 
                  private investigations. We approach each case with empathy, professionalism, and a 
                  commitment to finding the truth while protecting our clients' privacy and interests.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Whether you're dealing with personal matters, business concerns, or legal issues, 
                  we provide the expertise and discretion you need to make informed decisions.
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="text-center">
                  <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <img 
                      src="/logo.png" 
                      alt="Henderson Thomas Investigations" 
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Henderson Thomas Investigations
                  </h3>
                  <p className="text-gray-600">
                    Professional • Confidential • Reliable
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-2xl"></div>
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Confidentiality</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Your privacy is our top priority. All investigations are conducted with complete discretion and confidentiality.
                </p>
              </div>
            </div>
            
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-t-2xl"></div>
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Integrity</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  We conduct all investigations with honesty, integrity, and adherence to legal and ethical standards.
                </p>
              </div>
            </div>
            
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-t-2xl"></div>
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Excellence</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  We strive for excellence in every investigation, providing thorough, accurate, and actionable results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Experience
              </h2>
              <p className="text-xl text-gray-600">
                Decades of professional investigation experience
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-200">
                <div className="absolute top-4 right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 pr-16">Areas of Expertise</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-center group-hover:text-blue-600 transition-colors duration-300">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-medium">Surveillance Operations</span>
                  </li>
                  <li className="flex items-center group-hover:text-blue-600 transition-colors duration-300">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-medium">Background Investigations</span>
                  </li>
                  <li className="flex items-center group-hover:text-blue-600 transition-colors duration-300">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-medium">Corporate Investigations</span>
                  </li>
                  <li className="flex items-center group-hover:text-blue-600 transition-colors duration-300">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-medium">Missing Persons Cases</span>
                  </li>
                </ul>
              </div>
              
              <div className="group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200">
                <div className="absolute top-4 right-4 w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 pr-16">Why Choose Us</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-center group-hover:text-gray-600 transition-colors duration-300">
                    <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-medium">20+ Years Experience</span>
                  </li>
                  <li className="flex items-center group-hover:text-gray-600 transition-colors duration-300">
                    <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-medium">Licensed & Insured</span>
                  </li>
                  <li className="flex items-center group-hover:text-gray-600 transition-colors duration-300">
                    <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-medium">24/7 Availability</span>
                  </li>
                  <li className="flex items-center group-hover:text-gray-600 transition-colors duration-300">
                    <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-medium">Confidential Service</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Section */}
      <LatestBlogSection />
      
      {/* FAQ Section */}
      <FAQAccordion />
      
      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default About;
