

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiX } from 'react-icons/fi';

const Achievements = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);
  const cardRefs = useRef({});

  React.useEffect(() => {
    const checkIfMobile = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const achievements = [
    {
      id: 1,
      title: "Azure AI Engineer Associate",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      description: "Microsoft certified AI Engineer with expertise in building AI solutions on Azure.",
      date: "June 2023"
    },
    {
      id: 2,
      title: "Open Source Contributor",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      description: "Recognized contributor to major open source projects with 50+ merged PRs.",
      date: "Ongoing"
    },
    {
      id: 3,
      title: "Tech Conference Speaker",
      image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      description: "Featured speaker at international developer conference on AI trends.",
      date: "October 2021"
    },
    {
      id: 4,
      title: "Best Research Paper Award",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      description: "Awarded for outstanding research in machine learning applications.",
      date: "May 2022"
    },
    {
      id: 5,
      title: "Hackathon Winner",
      image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      description: "First place in national AI hackathon with innovative solution.",
      date: "November 2022"
    },
    {
      id: 6,
      title: "Mentorship Program Lead",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      description: "Led a successful mentorship program for junior developers.",
      date: "2022-2023"
    },
    {
      id: 7,
      title: "Cloud Architect Certified",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      description: "Certified in designing and implementing cloud solutions.",
      date: "March 2023"
    },
    {
      id: 8,
      title: "Community Builder Award",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      description: "Recognized for building tech communities and organizing events.",
      date: "September 2022"
    },
    {
      id: 9,
      title: "Data Science Specialist",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      description: "Specialized in advanced data analysis and predictive modeling.",
      date: "July 2022"
    },
    {
      id: 10,
      title: "Innovation Challenge Finalist",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      description: "Reached finals in international innovation challenge.",
      date: "April 2023"
    }
  ];


  const handleCardClick = (id) => {
    setSelectedId(selectedId === id ? null : id);
    // Scroll to the clicked card
    setTimeout(() => {
      cardRefs.current[id]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }, 10);
  };

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 bg-black relative">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400 text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Achievements
        </motion.h2>
        
        {/* Mobile View - Images Only */}
        {isMobileView && (
          <div className="grid grid-cols-2 gap-4 md:hidden">
            {achievements.map((achievement) => (
              <React.Fragment key={achievement.id}>
                <motion.div
                  ref={el => cardRefs.current[achievement.id] = el}
                  className="relative aspect-square cursor-pointer"
                  onClick={() => handleCardClick(achievement.id)}
                  layoutId={`mobile-card-${achievement.id}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={achievement.image} 
                    alt={achievement.title}
                    className="w-full h-full object-cover bg-black/20 rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                    <h3 className="text-white text-sm font-medium truncate w-full px-1">
                      {achievement.title}
                    </h3>
                  </div>
                </motion.div>

                {/* Details panel that appears below the clicked card */}
                {selectedId === achievement.id && (
                  <motion.div
                    className="col-span-2"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    layoutId={`mobile-details-${achievement.id}`}
                  >
                    <div className="bg-black rounded-xl border border-white/10 mt-2 overflow-hidden">
                      <div className="relative h-48 w-full">
                        <img 
                          src={achievement.image} 
                          alt={achievement.title}
                          className="w-full h-full object-cover bg-black"
                        />
                        <button 
                          className="absolute top-3 right-3 bg-black/50 rounded-full p-2 text-white"
                          onClick={() => setSelectedId(null)}
                        >
                          <FiX size={20} />
                        </button>
                      </div>
                      
                      <div className="p-4">
                        <div className="flex items-center mb-3">
                          <FiAward className="text-yellow-400 text-xl mr-2" />
                          <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-pink-300 text-xl font-bold">
                            {achievement.title}
                          </h3>
                        </div>
                        
                        <p className="text-white/80 mb-3 text-sm">{achievement.description}</p>
                        
                        <div className="flex justify-between items-center">
                          <span className="px-2 py-1 bg-white/5 rounded-full text-white/80 text-xs">
                            {achievement.date}
                          </span>
                          <div className="flex space-x-1">
                            <span className="px-2 py-1 bg-violet-500/10 rounded-full text-violet-300 text-xs">
                              Award
                            </span>
                            <span className="px-2 py-1 bg-pink-500/10 rounded-full text-pink-300 text-xs">
                              Tech
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        )}

        {/* Desktop View - Full Cards */}
        {!isMobileView && (
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                className="bg-white/5 rounded-xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1
                }}
                whileHover={{ y: -5 }}
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={achievement.image} 
                    alt={achievement.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                    <div className="flex items-center">
                      <FiAward className="text-yellow-400 text-2xl mr-3" />
                      <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-pink-300 text-2xl font-bold">
                        {achievement.title}
                      </h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <p className="text-white/80">{achievement.description}</p>
                    <span className="px-3 py-1 bg-white/5 rounded-full text-white/80 text-xs whitespace-nowrap ml-4">
                      {achievement.date}
                    </span>
                  </div>
                  
                  <div className="flex space-x-3">
                    <span className="px-3 py-1 bg-violet-500/10 rounded-full text-violet-300 text-xs">
                      Certification
                    </span>
                    <span className="px-3 py-1 bg-pink-500/10 rounded-full text-pink-300 text-xs">
                      AI
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        
      </div>
    </section>
  );
};

export default Achievements;