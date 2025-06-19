import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail } from 'react-icons/fi';

const Contact = () => {
  return (
    <section 
      id="contact" 
      className="py-24 px-4 sm:px-8 bg-black min-h-screen"
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
          section#contact {
            margin-bottom: -1px; /* Ensure no gap between Contact and Footer */
          }
        `}
      </style>
      <div className="container mx-auto max-w-5xl">
        <motion.h2 
          className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-pink-500 text-4xl md:text-6xl font-extrabold text-center mb-16 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>
        
        <div className="flex justify-center">
          <motion.div
            className="space-y-8 w-full max-w-lg"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/20 p-8 hover:border-violet-500/50 glow-hover transition-all duration-500 backdrop-blur-md">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-pink-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400 text-xl md:text-2xl font-bold mb-6 relative">
                Direct Contact
              </h3>
              
              <div className="space-y-6 relative">
                <div className="flex items-center justify-between group">
                  <div className="flex items-center space-x-4 flex-1">
                    <div>
                      <p className="text-white/80 text-sm">Phone</p>
                      <a 
                        href="tel:+919360515345" 
                        className="text-white hover:text-violet-300 transition-colors text-lg md:text-xl font-semibold"
                      >
                        +91 93605 15345
                      </a>
                    </div>
                  </div>
                  <motion.a
                    href="tel:+919360515345"
                    className="p-3 bg-violet-500/20 w-12 h-12 hover:bg-violet-500/30 text-violet-300 rounded-full border border-violet-500/30 transition-all flex items-center justify-center group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiPhone className="text-xl" />
                  </motion.a>
                </div>
                
                <div className="flex items-center justify-between group">
                  <div className="flex items-center space-x-4 flex-1">
                    <div>
                      <p className="text-white/80 text-sm">Email</p>
                      <a 
                        href="mailto:sukanth0021@gmail.com" 
                        className="text-white hover:text-pink-300 transition-colors text-lg md:text-xl font-semibold"
                      >
                        sukanth0021@gmail.com
                      </a>
                    </div>
                  </div>
                  <motion.a
                    href="mailto:sukanth0021@gmail.com"
                    className="p-3 bg-pink-500/20 w-12 h-12 hover:bg-pink-500/30 text-pink-300 rounded-full border border-pink-500/30 transition-all flex items-center justify-center group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiMail className="text-xl" />
                  </motion.a>
                </div>
              </div>
            </div>
            
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/20 p-8 hover:border-violet-500/50 glow-hover transition-all duration-500 backdrop-blur-md">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-pink-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400 text-xl md:text-2xl font-bold mb-6 relative">
                Availability
              </h3>
              <p className="text-white/80 text-sm md:text-base leading-relaxed">
                I'm typically available Monday through Friday, 6 PM to 9 PM IST. 
                Feel free to call or message me anytime, and I'll respond as soon as possible.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;