import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
      isMobile
        ? 'bg-white py-3 shadow-md border-b border-gray-200'
        : (isScrolled ? 'bg-white/95 backdrop-blur-xl py-3 shadow-2xl' : 'bg-white/90 backdrop-blur-md py-4')
    }`}>
      <div className="container mx-auto px-3 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="logo group flex items-center">
          <img 
            src="/logo.png" 
            alt="Henderson Thomas Investigations Logo" 
            className="h-10 w-auto transition-all duration-300 group-hover:scale-105"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
          >
            HOME
          </Link>
          <Link 
            to="/our-services" 
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
          >
            OUR SERVICES
          </Link>
          <Link 
            to="/blogs" 
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
          >
            BLOGS
          </Link>
          <Link 
            to="/about" 
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
          >
            ABOUT
          </Link>
          <Link 
            to="/contact" 
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
          >
            CONTACT
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Contact Information - Desktop */}
        <div className="text-right text-gray-800 hidden md:block">
          <div className="px-2 py-1">
            <div className="text-xs font-medium text-gray-500 mb-1">Call 100% Confidential</div>
            <a href="tel:07826416466" className="inline-flex items-center justify-end text-lg font-bold text-gray-900 transition-colors duration-300 hover:text-blue-600">
              <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              07826 416466
            </a>
            <div className="flex items-center justify-end mt-1">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-xs text-green-600 font-medium">Available 24/7</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <Link 
              to="/" 
              className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
            <Link 
              to="/our-services" 
              className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              OUR SERVICES
            </Link>
            <Link 
              to="/blogs" 
              className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              BLOGS
            </Link>
            <Link 
              to="/about" 
              className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link 
              to="/contact" 
              className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </Link>
            <div className="pt-4 border-t border-gray-200">
              <div className="text-sm font-medium text-gray-500 mb-2">Call 100% Confidential</div>
              <a 
                href="tel:07826416466" 
                className="inline-flex items-center text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300"
              >
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                07826 416466
              </a>
              <div className="flex items-center mt-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm text-green-600 font-medium">Available 24/7</span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
