import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Azure AI Engineer Associate",
      issuer: "Microsoft",
      date: "November 2024",
      certificateLink: "https://learn.microsoft.com/api/credentials/share/en-us/SukanthR-9567/A9354BD9505C2A8C?sharingId=C464AABD25BC353",
      image: "https://ai-market.jp/wp-content/uploads/2024/04/6-1200x675.jpg"
    },
   
  ];

  return (
    <section 
      id="certifications" 
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
        `}
      </style>
      <div className="container mx-auto max-w-7xl">
        <motion.h2 
          className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-pink-500 text-4xl md:text-6xl font-extrabold text-center mb-20 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Certifications
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/20 hover:border-violet-500/50 glow-hover overflow-hidden transition-all duration-500 backdrop-blur-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 10px 30px rgba(139, 92, 246, 0.2)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-pink-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              <div className="h-56 overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-6 relative">
                <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400 text-xl font-bold mb-3">
                  {cert.title}
                </h3>
                <p className="text-white/80 text-sm mb-3">{cert.issuer}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="px-3 py-1.5 bg-white/10 rounded-full text-white/80 text-xs backdrop-blur-sm">
                    {cert.date}
                  </span>
                  <motion.a
                    href={cert.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gradient-to-r from-violet-500/30 to-pink-500/30 text-white rounded-lg text-sm flex items-center gap-2 hover:from-violet-500/40 hover:to-pink-500/40 transition-all glow-hover"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <FiExternalLink size={16} /> View Certificate
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;