import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
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
    <footer 
      className="bg-black backdrop-blur-md py-12 px-4 sm:px-8 mt-0" // Added mt-0 to ensure no top margin
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}
    >
      <style>
        {`
          @keyframes footerGlow {
            0% { box-shadow: 0 0 5px rgba(180, 18, 27, 0.28); }
            50% { box-shadow: 0 0 20px rgba(180, 18, 27, 0.55); }
            100% { box-shadow: 0 0 5px rgba(180, 18, 27, 0.28); }
          }
          .footer-glow-hover:hover {
            animation: footerGlow 1.5s ease-in-out infinite;
          }
        `}
      </style>
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          {/* Name and Title */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#b4121b] to-red-500 text-4xl md:text-5xl font-extrabold tracking-tight">
              SUKANTH R
            </h3>
            <p className="text-white/70 text-sm md:text-base mt-2">Fresh Graduate in B.Tech Information Technology</p>
          </motion.div>
          
          {/* Navigation Links */}
          <motion.nav
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    className="text-white/80 text-sm md:text-base cursor-pointer transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Social Icons */}
          <motion.div
            className="flex space-x-4 md:space-x-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href="https://www.linkedin.com/in/sukanth-r-24638a259"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-red-600/20 hover:bg-red-600/30 text-red-300 rounded-full border border-red-600/30 transition-all footer-glow-hover w-12 h-12 flex items-center justify-center"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiLinkedin className="text-xl" />
            </motion.a>
            
            <motion.a
              href="https://wa.me/919360515345"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-red-600/20 hover:bg-red-600/30 text-red-300 rounded-full border border-red-600/30 transition-all footer-glow-hover w-12 h-12 flex items-center justify-center"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp className="text-xl" />
            </motion.a>
            
            <motion.a
              href="https://github.com/Sukanth-R"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-red-600/20 hover:bg-red-600/30 text-red-300 rounded-full border border-red-600/30 transition-all footer-glow-hover w-12 h-12 flex items-center justify-center"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiGithub className="text-xl" />
            </motion.a>
          </motion.div>
          
          {/* Copyright */}
          <motion.p
            className="text-white/60 text-xs md:text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            © {new Date().getFullYear()} Sukanth R. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;