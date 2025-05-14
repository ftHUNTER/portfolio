'use client';
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigationLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <header style={{ backgroundColor: '#FFFFFF' }} className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-7xl shadow-lg z-50 rounded-[30px]">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div style={{ color: '#31473A' }} className="text-2xl font-bold">REDA CHMOUK</div>
          
          {/* Desktop Navigation */}
          <ul className="hidden lg:flex justify-center space-x-8 flex-1 mx-4">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  style={{ color: '#31473A' }}
                  className="font-medium transition-colors hover:text-[#7C8363]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-4">
            {/* Get in Touch Button - Hidden on mobile */}
            <a 
              href="#contact" 
              style={{ 
                backgroundColor: '#31473A',
                color: '#FFFFFF'
              }}
              className="hidden lg:inline-block px-6 py-2 font-medium rounded-full hover:bg-[#7C8363] transition-colors"
            >
              Get in Touch
            </a>

            {/* Hamburger Menu Button - Only visible on mobile */}
            <button 
              style={{ color: '#31473A' }}
              className="lg:hidden focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation - Slide Menu */}
        {isMenuOpen && (
          <div 
            style={{ backgroundColor: '#FFFFFF' }}
            className="
              lg:hidden fixed top-[72px] right-4 h-auto max-h-[80vh] w-72 shadow-xl 
              rounded-[25px] overflow-hidden backdrop-blur-sm
              animate-slideIn
            "
          >
            <ul className="flex flex-col py-4">
              {navigationLinks.map((link) => (
                <li key={link.href} style={{ borderColor: 'rgba(124, 131, 99, 0.2)' }} className="border-b last:border-none">
                  <a 
                    href={link.href} 
                    style={{ color: '#31473A' }}
                    className="hover:text-[#7C8363] hover:bg-[#7C8363]/10 transition-all font-medium block px-6 py-3"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              {/* Get in Touch Button in mobile menu */}
              <li className="px-6 py-4">
                <a 
                  href="#contact"
                  style={{ 
                    backgroundColor: '#31473A',
                    color: '#FFFFFF'
                  }}
                  className="block w-full text-center px-6 py-2 font-medium rounded-full hover:bg-[#7C8363] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 