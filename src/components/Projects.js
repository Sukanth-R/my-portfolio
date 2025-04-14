import React, { useState } from 'react';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Full-featured e-commerce platform with secure checkout.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      gitLink: "#",
      hostedLink: "#",
      detailsContent: `
        <div style="padding: 2rem; color: white;">
          <h2 style="font-size: 2rem; font-weight: bold; margin-bottom: 1.5rem; background: linear-gradient(to right, #a78bfa, #ec4899); -webkit-background-clip: text; color: transparent;">
            E-Commerce Platform
          </h2>
          <div style="display: grid; gap: 2rem;">
            <div style="background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px); padding: 1.5rem; border-radius: 0.5rem; border: 1px solid rgba(255, 255, 255, 0.1);">
              <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem; color: white;">Project Overview</h3>
              <p style="color: rgba(255, 255, 255, 0.8); margin-bottom: 1rem;">
                Complete e-commerce solution with product catalog, shopping cart, and secure checkout.
              </p>
              <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem; color: white;">Key Features</h3>
              <ul style="color: rgba(255, 255, 255, 0.8); padding-left: 1.25rem; list-style-type: disc;">
                <li style="margin-bottom: 0.5rem;">Product catalog with filters</li>
                <li style="margin-bottom: 0.5rem;">Shopping cart functionality</li>
                <li style="margin-bottom: 0.5rem;">Stripe payment integration</li>
              </ul>
            </div>
            <div style="background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px); padding: 1.5rem; border-radius: 0.5rem; border: 1px solid rgba(255, 255, 255, 0.1);">
              <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem; color: white;">Technologies</h3>
              <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
                <span style="padding: 0.25rem 0.75rem; background: rgba(255, 255, 255, 0.1); border-radius: 9999px; font-size: 0.875rem; color: white;">React</span>
                <span style="padding: 0.25rem 0.75rem; background: rgba(255, 255, 255, 0.1); border-radius: 9999px; font-size: 0.875rem; color: white;">Node.js</span>
                <span style="padding: 0.25rem 0.75rem; background: rgba(255, 255, 255, 0.1); border-radius: 9999px; font-size: 0.875rem; color: white;">MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      `
    },
    // Add more projects as needed
  ];

  const openDetails = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 bg-black bg-opacity-10 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400 text-4xl md:text-5xl font-bold text-center mb-16">
          My Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
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
                
                <div className="flex flex-wrap gap-2 mb-4">
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
                
                <div className="flex space-x-4 mb-4">
                  <motion.a 
                    href={project.gitLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors flex items-center"
                    whileHover={{ x: 2 }}
                  >
                    <FiGithub className="mr-1" /> Code
                  </motion.a>
                  <motion.a 
                    href={project.hostedLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors flex items-center"
                    whileHover={{ x: 2 }}
                  >
                    <FiExternalLink className="mr-1" /> Live
                  </motion.a>
                </div>
                
                <motion.button
                  onClick={() => openDetails(project)}
                  className="w-full py-2 bg-gradient-to-r from-violet-500/20 to-pink-500/20 text-white rounded-lg hover:from-violet-500/30 hover:to-pink-500/30 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm"
                onClick={closeDetails}
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="fixed inset-0 mt-24 z-50 flex items-center justify-center p-4"
              >
                <div className="relative w-full max-w-4xl h-[80vh] bg-transparent rounded-xl overflow-hidden">
                  <motion.button
                    onClick={closeDetails}
                    className="absolute top-4 right-4 z-50 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiX className="text-white text-xl" />
                  </motion.button>
                  
                  <iframe
                    srcDoc={`
                      <!DOCTYPE html>
                      <html>
                        <head>
                          <style>
                            body {
                              margin: 0;
                              padding: 0;
                              background: transparent;
                              color: white;
                              font-family: -apple-system, BlinkMacSystemFont, sans-serif;
                              overflow-y: auto;
                            }
                            ::-webkit-scrollbar {
                              width: 8px;
                            }
                            ::-webkit-scrollbar-track {
                              background: transparent;
                            }
                            ::-webkit-scrollbar-thumb {
                              background: rgba(255, 255, 255, 0.2);
                              border-radius: 4px;
                            }
                          </style>
                        </head>
                        <body>
                          ${selectedProject.detailsContent}
                        </body>
                      </html>
                    `}
                    title={`${selectedProject.title} Details`}
                    className="w-full h-full border-none"
                    sandbox="allow-same-origin"
                  />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;