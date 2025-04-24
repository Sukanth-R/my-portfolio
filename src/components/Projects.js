import React, { useState, useEffect } from 'react';
import { FiGithub, FiExternalLink, FiX, FiInfo } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Full-featured e-commerce platform with secure checkout.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      gitLink: "#",
      hostedLink: "#",
      date: "June 2023",
      detailsContent: `
        <div style="padding: 2rem; color: white;">
          <h2 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem; background: linear-gradient(to right, #a78bfa, #ec4899); -webkit-background-clip: text; color: transparent;">
            E-Commerce Platform Details
          </h2>
          <div style="display: grid; gap: 1rem;">
            <div style="background: rgba(255, 255, 255, 0.05); padding: 1rem; border-radius: 0.5rem; border: 1px solid rgba(255, 255, 255, 0.1);">
              <h3 style="font-size: 1.1rem; font-weight: 600; margin-bottom: 0.5rem; color: white;">Project Overview</h3>
              <p style="color: rgba(255, 255, 255, 0.8); margin-bottom: 0.5rem; font-size: 0.9rem;">
                Complete e-commerce solution with product catalog, shopping cart, and secure checkout.
              </p>
              <h3 style="font-size: 1.1rem; font-weight: 600; margin-bottom: 0.5rem; color: white;">Key Features</h3>
              <ul style="color: rgba(255, 255, 255, 0.8); padding-left: 1rem; list-style-type: disc; font-size: 0.9rem;">
                <li style="margin-bottom: 0.25rem;">Product catalog with filters</li>
                <li style="margin-bottom: 0.25rem;">Shopping cart functionality</li>
                <li style="margin-bottom: 0.25rem;">Stripe payment integration</li>
              </ul>
            </div>
          </div>
        </div>
      `
    },
    // Add more projects as needed
  ];


  const handleCardClick = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 bg-black">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400 text-4xl md:text-5xl font-bold text-center mb-16">
          My Projects
        </h2>
        
        {/* Mobile View (unchanged from your original) */}
        {isMobileView && (
          <div className="md:hidden space-y-4">
            {projects.map((project) => (
              <React.Fragment key={project.id}>
                <motion.div 
                  className="flex bg-white/5 rounded-xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => handleCardClick(project.id)}
                >
                  <div className="w-2/3 h-42">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-contain ps-2"
                    />
                  </div>
                  
                  <div className="w-2/3 ps-4 p-2 flex flex-col justify-between">
                    <div>
                      <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400 text-[12px] font-bold mb-1">
                        {project.title}
                      </h3>
                      <p className="text-white/80 text-[11px] mb-1">{project.description}</p>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {project.technologies.map((tech, index) => (
                          <span 
                            key={index}
                            className="px-1 py-0.5 bg-white/5 rounded-full text-white/80 text-[10px]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <motion.a 
                        href={project.gitLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 py-2 px-3 bg-gradient-to-r from-violet-500/20 to-pink-500/20 text-white rounded-lg text-sm flex items-center justify-center gap-1"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiGithub size={14} /> Code
                      </motion.a>
                      <motion.a 
                        href={project.hostedLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 py-2 px-3 bg-gradient-to-r from-violet-500/20 to-pink-500/20 text-white rounded-lg text-sm flex items-center justify-center gap-1"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiExternalLink size={14} /> Live
                      </motion.a>
                    </div>
                  </div>
                </motion.div>

                {/* Mobile Details Panel - appears below the project card */}
                {selectedId === project.id && (
                  <motion.div
                    className="bg-black rounded-xl border border-white/10 overflow-hidden"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-1 flex justify-end">
                      <motion.button
                        onClick={() => setSelectedId(null)}
                        className="px-4 py-3 bg-white/10 rounded-lg text-white text-sm flex items-center gap-1"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiX size={14} /> Close
                      </motion.button>
                    </div>
                    <div 
                      dangerouslySetInnerHTML={{ __html: project.detailsContent }}
                    />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        )}

        {/* Desktop View */}
        {!isMobileView && (
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id}>
                <motion.div 
                  className="bg-white/5 rounded-xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400 text-2xl font-bold mb-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-white/80 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, index) => (
                        <motion.span 
                          key={index}
                          className="px-3 py-1 bg-white/5 rounded-full text-white/80 text-xs"
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      <motion.a 
                        href={project.gitLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full py-3 bg-gradient-to-r from-violet-500/20 to-pink-500/20 text-white rounded-lg hover:from-violet-500/30 hover:to-pink-500/30 transition-all flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FiGithub size={16} /> Code
                      </motion.a>
                      <motion.a 
                        href={project.hostedLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full py-3 bg-gradient-to-r from-violet-500/20 to-pink-500/20 text-white rounded-lg hover:from-violet-500/30 hover:to-pink-500/30 transition-all flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FiExternalLink size={16} /> Live
                      </motion.a>
                    </div>

                    <motion.button
                      onClick={() => handleCardClick(project.id)}
                      className="w-full mt-4 py-3 bg-gradient-to-r from-violet-500/20 to-pink-500/20 text-white rounded-lg hover:from-violet-500/30 hover:to-pink-500/30 transition-all flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FiInfo size={16} /> View Details
                    </motion.button>
                  </div>
                </motion.div>

                {/* Desktop Details Panel - appears below the project card */}
                {selectedId === project.id && (
                  <motion.div
                    className="mt-4 bg-black rounded-xl border border-white/10 overflow-hidden"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-3 flex justify-end">
                      <motion.button
                        onClick={() => setSelectedId(null)}
                        className="px-4 py-3 bg-white/10 rounded-lg text-white text-sm flex items-center gap-1"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiX size={14} /> Close
                      </motion.button>
                    </div>
                    <div 
                      dangerouslySetInnerHTML={{ __html: project.detailsContent }}
                    />
                    
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;