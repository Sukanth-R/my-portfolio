import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiLinkedin,
  FiGithub,
  FiInstagram
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-20 backdrop-blur-sm border-t border-white/10 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center">
          
          
          <div className="flex space-x-4 md:space-x-6">
            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/sukanth-r-24638a259"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 rounded-lg border border-blue-500/20 transition-all"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiLinkedin className="text-xl" />
            </motion.a>
            
            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/919360515345"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-green-500/10 hover:bg-green-500/20 text-green-300 rounded-lg border border-green-500/20 transition-all"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp className="text-xl" />
            </motion.a>
            
            {/* Instagram */}
            <motion.a
              href="https://www.instagram.com/sukanth_rgs"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-pink-500/10 hover:bg-pink-500/20 text-pink-300 rounded-lg border border-pink-500/20 transition-all"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiInstagram className="text-xl" />
            </motion.a>
            
            {/* GitHub */}
            <motion.a
              href="https://github.com/Sukanth-R"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 rounded-lg border border-purple-500/20 transition-all"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiGithub className="text-xl" />
            </motion.a>
            
          </div>
          
          <p className="text-white/60 text-sm mt-6 text-center">
            © {new Date().getFullYear()} Sukanth R. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;