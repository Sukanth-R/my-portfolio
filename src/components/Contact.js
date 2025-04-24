import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="py-6 px-4 sm:px-6 bg-black min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <motion.h2 
          className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400 text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>
        
        <div className="flex justify-center">
          {/* Contact Information */}
          <motion.div
            className="space-y-6 w-full max-w-md"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white/5 rounded-xl border border-white/10 p-6 hover:border-white/20 transition-all duration-300">
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-pink-300 text-xl font-bold mb-4">
                Direct Contact
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 flex-1">
                    <div>
                      <p className="text-white/80 text-sm">Phone</p>
                      <a 
                        href="tel:+919360515345" 
                        className="text-white hover:text-violet-300 transition-colors text-lg font-medium"
                      >
                        +91 9360515345
                      </a>
                    </div>
                  </div>
                  <motion.a
                    href="tel:+919360515345"
                    className="p-3 bg-violet-500/10 w-20 hover:bg-violet-500/20 text-violet-300 rounded-lg border border-violet-500/20 transition-all flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiPhone className="text-lg" />
                  </motion.a>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 flex-1">
                    <div>
                      <p className="text-white/80 text-sm">Email</p>
                      <a 
                        href="mailto:sukanth0021@gmail.com" 
                        className="text-white hover:text-pink-300 transition-colors text-lg font-medium"
                      >
                        sukanth0021@gmail.com
                      </a>
                    </div>
                  </div>
                  <motion.a
                    href="mailto:sukanth0021@gmail.com"
                    className="p-3 bg-pink-500/10 w-20 hover:bg-pink-500/20 text-pink-300 rounded-lg border border-pink-500/20 transition-all flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiMail className="text-lg" />
                  </motion.a>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 rounded-xl border border-white/10 p-6">
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-pink-300 text-xl font-bold mb-4">
                Availability
              </h3>
              <p className="text-white/80">
                I'm typically available Monday through Friday, 6 PM to 9 PM. 
                Feel free to call or message me anytime, and I'll get back to you as soon as possible.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;