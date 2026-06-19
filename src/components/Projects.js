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
          <h2 style="font-size: 1.75rem; font-weight: bold; margin-bottom: 1.5rem; background: linear-gradient(to right, #b4121b, #b4121b); -webkit-background-clip: text; color:#b4121b;">
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
          <h2 style="font-size: 1.75rem; font-weight: bold; margin-bottom: 1.5rem; background: linear-gradient(to right, #b4121b, #b4121b); -webkit-background-clip: text; color:#b4121b;">
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
    {
      id: 3,
      title: "Simple Calculator",
      image: "https://t4.ftcdn.net/jpg/11/29/36/71/360_F_1129367146_3y83JadI7GXQQtfEQAXFYZFqe2juWZlz.jpg",
      description: "A simple calculator that performs arithmetic operation.",
      technologies: ["HTML","CSS","JavaScript","Bootstrap"],
      gitLink: "https://github.com/Sukanth-R/calculator.git",
      hostedLink: "https://sukanth-r.github.io/calculator/",
      date: "June 2023",
      detailsContent: `
        <div style="padding: 2rem; color: white;">
          <h2 style="font-size: 1.75rem; font-weight: bold; margin-bottom: 1.5rem; background: linear-gradient(to right, #b4121b, #b4121b); -webkit-background-clip: text; color:#b4121b;">
            Simple Calculator Details
          </h2>
          <div style="display: grid; gap: 1.5rem;">
            <div style="background: rgba(255, 255, 255, 0.05); padding: 1.5rem; border-radius: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1);">
              <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 0.75rem; color: white;">Project Overview</h3>
              <p style="color: rgba(255, 255, 255, 0.85); margin-bottom: 0.75rem; font-size: 0.95rem;">
                A simple calculator designed using html,css,javascript and bootstrap to perform arithmetic operation.
              </p>
              <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 0.75rem; color: white;">Key Features</h3>
              <ul style="color: rgba(255, 255, 255, 0.85); padding-left: 1.25rem; list-style-type: disc; font-size: 0.95rem;">
                <li style="margin-bottom: 0.5rem;">The site is designed to provide a simple calculation</li>
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
    setSelectedId(id);
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
          @keyframes projectsGlow {
            0% { box-shadow: 0 0 5px rgba(180, 18, 27, 0.28); }
            50% { box-shadow: 0 0 20px rgba(180, 18, 27, 0.58); }
            100% { box-shadow: 0 0 5px rgba(180, 18, 27, 0.28); }
          }
          .projects-glow-hover:hover {
            animation: projectsGlow 1.5s ease-in-out infinite;
          }
        `}
      </style>
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-transparent bg-clip-text bg-[#b4121b] text-4xl md:text-6xl font-extrabold text-center mb-20 tracking-tight">
          My Projects
        </h2>
        
        {/* Mobile View */}
        {isMobileView && (
          <div className="md:hidden space-y-6">
            {projects.map((project) => (
                <motion.div 
                key={project.id}
                  className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/20 hover:border-red-800/50 projects-glow-hover overflow-hidden transition-all duration-500"
                  style={{ perspective: '1200px', minHeight: 'clamp(280px, 70vw, 420px)' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-800/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                  <motion.div
                      className="relative w-full h-full"
                    style={{ transformStyle: 'preserve-3d' }}
                    animate={{ rotateY: selectedId === project.id ? 180 : 0 }}
                    transition={{ duration: 0.65, ease: 'easeInOut' }}
                  >
                    <div
                        className="flex"
                        style={{ backfaceVisibility: 'hidden', minHeight: 'clamp(280px, 70vw, 420px)' }}
                      onClick={() => handleCardClick(project.id)}
                    >
                          <div className="w-1/2 h-48">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 p-2"
                        />
                      </div>
                    
                          <div className="w-1/2 p-4 flex flex-col justify-between relative">
                        <div>
                              <h3 className="text-transparent bg-clip-text bg-[#b4121b] text-sm font-bold mb-2">
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
                      
                            <div className="flex gap-2">
                          <motion.a 
                            href={project.gitLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                              className="flex-1 py-2 px-3 bg-gradient-to-r from-red-500/30 to-red-800/30 text-white rounded-lg text-xs flex items-center justify-center gap-1.5 hover:from-red-500/40 hover:to-red-800/40"
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
                            className="flex-1 py-2 px-3 bg-gradient-to-r from-red-500/30 to-red-800/30 text-white rounded-lg text-xs flex items-center justify-center gap-1.5 hover:from-red-500/40 hover:to-red-800/40"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FiExternalLink size={12} /> Live
                          </motion.a>
                        </div>
                      </div>
                    </div>

                    <div
                      className="absolute inset-0 p-3 sm:p-4 md:p-5 overflow-auto"
                      style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                    >
                      <div className="flex justify-end mb-3 sm:mb-4">
                        <motion.button
                          onClick={() => setSelectedId(null)}
                          className="px-4 py-2 bg-white/10 rounded-lg text-white text-sm flex items-center gap-1.5 backdrop-blur-sm projects-glow-hover"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiX size={14} /> Close
                        </motion.button>
                      </div>
                      <div dangerouslySetInnerHTML={{ __html: project.detailsContent }} />
                    </div>
                  </motion.div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Desktop View */}
        {!isMobileView && (
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div 
                key={project.id}
                className="relative h-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/20 hover:border-red-800/50 projects-glow-hover overflow-hidden transition-all duration-500 flex flex-col"
                whileHover={{ y: -8, boxShadow: '0 10px 30px rgba(180, 18, 27, 0.35)' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ perspective: '1200px', minHeight: 'clamp(420px, 55vw, 560px)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-800/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                <motion.div
                  className="relative w-full h-full min-h-[520px]"
                  style={{ transformStyle: 'preserve-3d' }}
                  animate={{ rotateY: selectedId === project.id ? 180 : 0 }}
                  transition={{ duration: 0.65, ease: 'easeInOut' }}
                >
                  <div
                    className="absolute inset-0 flex flex-col"
                    style={{ backfaceVisibility: 'hidden', height: '100%' }}
                  >
                    <div className="h-56 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    
                    <div className="p-4 sm:p-5 md:p-6 relative flex flex-col flex-1 min-h-0">
                      <h3 className="text-transparent bg-clip-text bg-[#b4121b] text-lg sm:text-xl font-bold mb-3">
                        {project.title}
                      </h3>
                      <p className="text-white/80 text-sm mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                        {project.technologies.map((tech, index) => (
                          <motion.span 
                            key={index}
                            className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-[11px] sm:text-xs backdrop-blur-sm"
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                      <div className="mt-auto flex gap-3 sm:gap-4 mb-3 sm:mb-4 flex-col sm:flex-row">
                        <motion.a 
                          href={project.gitLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-full py-3 bg-gradient-to-r from-red-500/30 to-red-800/30 text-white rounded-lg text-sm flex items-center justify-center gap-2 hover:from-red-500/40 hover:to-red-800/40 transition-all"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <FiGithub size={16} /> Code
                        </motion.a>
                        <motion.a 
                          href={project.hostedLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-full py-3 bg-gradient-to-r from-red-500/30 to-red-800/30 text-white rounded-lg text-sm flex items-center justify-center gap-2 hover:from-red-500/40 hover:to-red-800/40 transition-all"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <FiExternalLink size={16} /> Live
                        </motion.a>
                      </div>
                      <motion.button
                        onClick={() => handleCardClick(project.id)}
                        className="w-full py-3 bg-gradient-to-r from-red-500/30 to-red-800/30 text-white rounded-lg text-sm flex items-center justify-center gap-2 hover:from-red-500/40 hover:to-red-800/40 transition-all projects-glow-hover"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <FiInfo size={16} /> View Details
                      </motion.button>
                    </div>
                  </div>

                  <div
                    className="absolute inset-0 flex flex-col justify-between p-4 sm:p-5 md:p-6"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', overflow: 'auto' }}
                  >
                    <div className="flex justify-end">
                      <motion.button
                        onClick={() => setSelectedId(null)}
                        className="px-4 py-2 bg-white/10 rounded-lg text-white text-sm flex items-center gap-1.5 backdrop-blur-sm projects-glow-hover"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiX size={14} /> Close
                      </motion.button>
                    </div>
                    <div className="flex-1 overflow-auto min-h-0" dangerouslySetInnerHTML={{ __html: project.detailsContent }} />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;