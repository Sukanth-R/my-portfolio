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
      title: "VR Platform",
      image: "https://cdn.thewirecutter.com/wp-content/media/2024/10/vrheadsets-2048px-08406.jpg",
      description: "Full-featured VR platform for my department.",
      technologies: ["3DVista","Insta360"],
      gitLink: "https://github.com/Sukanth-R/vrdeploy.git",
      hostedLink: "https://kongu.edu/itpark360/",
      date: "June 2023",
      detailsContent: `
        <div style="padding: 2rem; color: white;">
          <h2 style="font-size: 1.75rem; font-weight: bold; margin-bottom: 1.5rem; background: linear-gradient(to right, #a78bfa, #ec4899); -webkit-background-clip: text; color: transparent;">
            VR Platform Details
          </h2>
          <div style="display: grid; gap: 1.5rem;">
            <div style="background: rgba(255, 255, 255, 0.05); padding: 1.5rem; border-radius: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1);">
              <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 0.75rem; color: white;">Project Overview</h3>
              <p style="color: rgba(255, 255, 255, 0.85); margin-bottom: 0.75rem; font-size: 0.95rem;">
                A comprehensive VR platform featuring department structure and its resourses.
              </p>
              <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 0.75rem; color: white;">Key Features</h3>
              <ul style="color: rgba(255, 255, 255, 0.85); padding-left: 1.25rem; list-style-type: disc; font-size: 0.95rem;">
                <li style="margin-bottom: 0.5rem;">The site is designed to provide an interactive, panoramic walkthrough of the IT Park.</li>
                <li style="margin-bottom: 0.5rem;">Essential areas—like conference halls, workspaces, amenities—are marked with interactive hotspots or info points</li>
                <li style="margin-bottom: 0.5rem;">A clean, minimal loading screen eases users into the virtual tour</li>
              </ul>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 2,
      title: "E-Platform for AUTOMAX",
      image: "https://www.shutterstock.com/image-vector/concept-web-design-website-page-260nw-1939082209.jpg",
      description: "E-platform for a company called AUTOMAX,which is a light production company.",
      technologies: ["Reactjs","Tailwind CSS","Nodejs","Expressjs","Mongodb"],
      gitLink: "https://github.com/Sukanth-R/automax.git",
      hostedLink: "https://astraautomax.in",
      date: "June 2023",
      detailsContent: `
        <div style="padding: 2rem; color: white;">
          <h2 style="font-size: 1.75rem; font-weight: bold; margin-bottom: 1.5rem; background: linear-gradient(to right, #a78bfa, #ec4899); -webkit-background-clip: text; color: transparent;">
            E-Platform Details
          </h2>
          <div style="display: grid; gap: 1.5rem;">
            <div style="background: rgba(255, 255, 255, 0.05); padding: 1.5rem; border-radius: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1);">
              <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 0.75rem; color: white;">Project Overview</h3>
              <p style="color: rgba(255, 255, 255, 0.85); margin-bottom: 0.75rem; font-size: 0.95rem;">
                A comprehensive E-platform for AUTOMAX featuring their products and their services.
              </p>
              <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 0.75rem; color: white;">Key Features</h3>
              <ul style="color: rgba(255, 255, 255, 0.85); padding-left: 1.25rem; list-style-type: disc; font-size: 0.95rem;">
                <li style="margin-bottom: 0.5rem;">Dynamic website,allowing admin to change the content in the webpage</li>
                <li style="margin-bottom: 0.5rem;">Smooth communication between customers and the admin</li>
                <li style="margin-bottom: 0.5rem;">A clean, minimal loading screen eases users</li>
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
    <section 
      id="projects" 
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
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-pink-500 text-4xl md:text-6xl font-extrabold text-center mb-20 tracking-tight">
          My Projects
        </h2>
        
        {/* Mobile View */}
        {isMobileView && (
          <div className="md:hidden space-y-6">
            {projects.map((project) => (
              <React.Fragment key={project.id}>
                <motion.div 
                  className="relative flex bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/20 hover:border-violet-500/50 glow-hover overflow-hidden transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => handleCardClick(project.id)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-pink-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="w-1/2 h-48">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 p-2"
                    />
                  </div>
                  
                  <div className="w-1/2 p-4 flex flex-col justify-between relative">
                    <div>
                      <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400 text-sm font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-white/80 text-xs mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.technologies.map((tech, index) => (
                          <motion.span 
                            key={index}
                            className="px-2 py-1 bg-white/10 rounded-full text-white/80 text-[10px] backdrop-blur-sm"
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <motion.a 
                        href={project.gitLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 py-2 px-3 bg-gradient-to-r from-violet-500/30 to-pink-500/30 text-white rounded-lg text-xs flex items-center justify-center gap-1.5 hover:from-violet-500/40 hover:to-pink-500/40"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiGithub size={12} /> Code
                      </motion.a>
                      <motion.a 
                        href={project.hostedLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 py-2 px-3 bg-gradient-to-r from-violet-500/30 to-pink-500/30 text-white rounded-lg text-xs flex items-center justify-center gap-1.5 hover:from-violet-500/40 hover:to-pink-500/40"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiExternalLink size={12} /> Live
                      </motion.a>
                    </div>
                  </div>
                </motion.div>

                {/* Mobile Details Panel */}
                {selectedId === project.id && (
                  <motion.div
                    className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/20 overflow-hidden backdrop-blur-md"
                    initial={{ opacity: 0, height: 0, y: 20 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: 20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="p-4 flex justify-end">
                      <motion.button
                        onClick={() => setSelectedId(null)}
                        className="px-4 py-2 bg-white/10 rounded-lg text-white text-sm flex items-center gap-1.5 backdrop-blur-sm glow-hover"
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
                  className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/20 hover:border-violet-500/50 glow-hover overflow-hidden transition-all duration-500"
                  whileHover={{ y: -8, boxShadow: '0 10px 30px rgba(139, 92, 246, 0.2)' }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-pink-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="h-56 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  <div className="p-6 relative">
                    <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400 text-xl font-bold mb-3">
                      {project.title}
                    </h3>
                    <p className="text-white/80 text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, index) => (
                        <motion.span 
                          key={index}
                          className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-xs backdrop-blur-sm"
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
                        className="w-full py-3 bg-gradient-to-r from-violet-500/30 to-pink-500/30 text-white rounded-lg text-sm flex items-center justify-center gap-2 hover:from-violet-500/40 hover:to-pink-500/40 transition-all"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <FiGithub size={16} /> Code
                      </motion.a>
                      <motion.a 
                        href={project.hostedLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full py-3 bg-gradient-to-r from-violet-500/30 to-pink-500/30 text-white rounded-lg text-sm flex items-center justify-center gap-2 hover:from-violet-500/40 hover:to-pink-500/40 transition-all"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <FiExternalLink size={16} /> Live
                      </motion.a>
                    </div>
                    <motion.button
                      onClick={() => handleCardClick(project.id)}
                      className="w-full py-3 bg-gradient-to-r from-violet-500/30 to-pink-500/30 text-white rounded-lg text-sm flex items-center justify-center gap-2 hover:from-violet-500/40 hover:to-pink-500/40 transition-all glow-hover"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <FiInfo size={16} /> View Details
                    </motion.button>
                  </div>
                </motion.div>

                {/* Desktop Details Panel */}
                {selectedId === project.id && (
                  <motion.div
                    className="mt-4 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/20 overflow-hidden backdrop-blur-md"
                    initial={{ opacity: 0, height: 0, y: 20 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: 20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="p-4 flex justify-end">
                      <motion.button
                        onClick={() => setSelectedId(null)}
                        className="px-4 py-2 bg-white/10 rounded-lg text-white text-sm flex items-center gap-1.5 backdrop-blur-sm glow-hover"
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