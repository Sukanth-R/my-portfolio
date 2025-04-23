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
    {name:'Certifications' , to:'certificates'},
    { name: 'Achievements', to: 'achievements' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#fffcdd] bg-opacity-50 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-end items-center"> {/* Changed to justify-end */}

          {/* Desktop Navigation - now on the right */}
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
                    className="text-black text-lg cursor-pointer transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-black focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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

        {/* Mobile Navigation with dark blue background */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 bg-[#fffcdd] bg-opacity-50 rounded-lg p-4 backdrop-blur-sm">
            <ul className="flex flex-col space-y-8">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    activeClass="text-blue-300 font-semibold"
                    to={link.to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400 hover:from-pink-500 hover:to-violet-500 cursor-pointer transition-colors duration-200 py-2 px-4 rounded hover:bg-blue-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;