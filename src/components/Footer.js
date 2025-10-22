import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 text-gray-800 py-12 mb-20 md:mb-0">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 text-left">
            <div className="mb-4 flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="Henderson Thomas Investigations Logo" 
                className="h-12 w-auto"
              />
            </div>
             <p className="text-gray-600 mb-4 leading-relaxed text-left">
              UK's top-rated private detective agency specializing in corporate investigations, 
              covert surveillance, and discreet investigative services. We provide professional, 
              confidential solutions for all your investigation needs.
            </p>
            <div className="flex items-center space-x-4 text-left">
              <div className="flex items-center">
                <span className="mr-2">📞</span>
                <span className="font-semibold">07826 416466</span>
              </div>
              <div className="flex items-center">
                 <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                 <span className="text-sm text-gray-600">AVAILABLE 24/7</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-4 text-blue-600 text-left">Our Services</h3>
            <ul className="space-y-2 text-gray-700 text-left">
              <li className="hover:text-blue-600 transition-colors duration-300 cursor-pointer text-left">Corporate Investigation</li>
              <li className="hover:text-blue-600 transition-colors duration-300 cursor-pointer text-left">Covert Surveillance</li>
              <li className="hover:text-blue-600 transition-colors duration-300 cursor-pointer text-left">Spouse Investigation</li>
              <li className="hover:text-blue-600 transition-colors duration-300 cursor-pointer text-left">Background Checks</li>
              <li className="hover:text-blue-600 transition-colors duration-300 cursor-pointer text-left">Asset Tracing</li>
              <li className="hover:text-blue-600 transition-colors duration-300 cursor-pointer text-left">Fraud Investigation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-4 text-blue-600 text-left">Contact Us</h3>
            <div className="space-y-3 text-gray-700 text-left">
              <div className="flex items-start text-left">
                <span className="mr-3 mt-1">📍</span>
                <div className="text-left">
                  <p className="font-semibold text-left">HENDERSON THOMAS INVESTIGATIONS</p>
                  <p className="text-left">1st Floor, 238 Kensington High St,</p>
                  <p className="text-left">London W8 6SN</p>
                </div>
              </div>
              <div className="flex items-center text-left">
                <span className="mr-3">📧</span>
                <span className="text-left">private@hendersonthomasinvestigations.com</span>
              </div>
              <div className="flex items-center text-left">
                <span className="mr-3">📞</span>
                <span className="text-left">07826 416466</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <div className="text-gray-500 text-sm">© Copyright 2025 | All Rights Reserved</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
