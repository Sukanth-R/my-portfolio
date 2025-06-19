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
          @keyframes glow {
            0% { box-shadow: 0 0 5px rgba(139, 92, 246, 0.3); }
            50% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.5); }
            100% { box-shadow: 0 0 5px rgba(139, 92, 246, 0.3); }
          }
          .glow-hover:hover {
            animation: glow 1.5s ease-in-out infinite;
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
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-pink-500 text-4xl md:text-5xl font-extrabold tracking-tight">
              SUKANTH R
            </h3>
            <p className="text-white/70 text-sm md:text-base mt-2">Full Stack Developer</p>
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
                    activeClass="text-violet-300 font-semibold"
                    to={link.to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    className="text-white/80 text-sm md:text-base cursor-pointer transition-colors duration-300 hover:text-violet-300"
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
              className="p-3 bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 rounded-full border border-blue-600/30 transition-all glow-hover w-12 h-12 flex items-center justify-center"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiLinkedin className="text-xl" />
            </motion.a>
            
            <motion.a
              href="https://wa.me/919360515345"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-green-600/20 hover:bg-green-600/30 text-green-300 rounded-full border border-green-600/30 transition-all glow-hover w-12 h-12 flex items-center justify-center"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp className="text-xl" />
            </motion.a>
            
            <motion.a
              href="https://github.com/Sukanth-R"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 rounded-full border border-purple-600/30 transition-all glow-hover w-12 h-12 flex items-center justify-center"
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