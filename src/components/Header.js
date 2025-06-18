import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Certifications', to: 'certifications' },
    { name: 'Achievements', to: 'achievements' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black bg-opacity-50 backdrop-blur-sm' : 'bg-transparent'
      } animate-[fade-in-down_0.5s_ease-out]`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-end items-center">
          {/* Desktop Navigation - on the right */}
          <nav className="hidden md:block my-3">
            <ul className="flex space-x-[60px]">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    activeClass="text-gray-800 font-semibold"
                    to={link.to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    className="text-white text-lg cursor-pointer transition-colors duration-200 hover:text-pink-500"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation with animation - Height adjusted */}
        <nav
          className={`md:hidden bg-black bg-opacity-50 rounded-lg backdrop-blur-sm transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-[500px] opacity-100 mt-3 py-2' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <ul className="flex flex-col space-y-3 px-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  activeClass="text-blue-300 font-semibold"
                  to={link.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  className="text-white cursor-pointer transition-colors duration-200 py-1 block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;