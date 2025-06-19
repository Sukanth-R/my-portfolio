import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiX, FiExternalLink } from 'react-icons/fi';

const Achievements = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);
  const cardRefs = useRef({});

  useEffect(() => {
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
      title: "Hackathon Winner",
      image: "https://sukanth-r.github.io/portfolio/images/mit.jpg",
      description: "Runner-up in hackathon conducted by Madras Institute of Technology, Chennai.",
      date: "March 16 & 17,2024",
      certificateLink: "https://drive.google.com/file/d/1I1XwcU7qIp8otWoQDxLl9IDVKyqX-faJ/view?usp=drive_link"
    },
    {
      id: 2,
      title: "Hackathon Winner",
      image: "https://sukanth-r.github.io/portfolio/images/zinna.jpg",
      description: "Second prize  with a cash prize of Rs.2500/- in hackathon organized by Government Engineering College(IRTT),Erode.",
      date: "November 8,2024",
      certificateLink: "https://drive.google.com/file/d/16lWIjJGOg_Bn-asr2eM1W0_4lMWVCVAD/view?usp=drive_link"
    },
    {
      id: 3,
      title: "Project Expo Winner",
      image: "https://sukanth-r.github.io/portfolio/images/sasurie.jpg",
      description: "First prize with a cash prize Rs.1000/- in project expo(Inovation Fair) organized by Sasurie College of Engineering.",
      date: "October 26,2024",
      certificateLink: "https://drive.google.com/file/d/1hCB95r0PQ0aB95_p_hXwPggQnv5Xd8RH/view?usp=drive_link"
    },
    {
      id: 4,
      title: "Hackathon Winner",
      image: "https://sukanth-r.github.io/portfolio/images/csd.jpg",
      description: "First prize with a cash prize of Rs.2000/- in 24 hours hackathon organized by Computer Science and Design department,Kongu Engineering College,Perundurai.",
      date: "March 06,2025",
      certificateLink: "https://drive.google.com/file/d/1Q0zK9GTghtwwQwQ7HEtMigv-FgPr4UMn/view?usp=drive_link"
    },
    {
      id: 5,
      title: "Hackathon Winner",
      image: "https://sukanth-r.github.io/portfolio/images/it.jpg",
      description: "First prize with a cash prize of Rs.1000/- in 30 hours hackathon organized by Information Technology department,Kongu Engineering College,Perundurai.",
      date: "May 2 & 3,2025",
      certificateLink: "https://drive.google.com/file/d/1mwyOlYadDLwjmgQky511ts3LBTP6pwIg/view?usp=drive_link"
    },
  ];

  const handleCardClick = (id) => {
    setSelectedId(selectedId === id ? null : id);
    setTimeout(() => {
      cardRefs.current[id]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }, 10);
  };

  return (
    <section 
      id="achievements" 
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
          .mobile-achievement-title {
            white-space: normal;
            word-break: break-word;
            line-height: 1.4;
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
          My Achievements
        </motion.h2>
        
        {/* Mobile View */}
        {isMobileView && (
          <div className="grid grid-cols-2 gap-4 md:hidden">
            {achievements.map((achievement) => (
              <React.Fragment key={achievement.id}>
                <motion.div
                  ref={(el) => (cardRefs.current[achievement.id] = el)}
                  className="relative aspect-square cursor-pointer rounded-2xl overflow-hidden border border-white/20 hover:border-violet-500/50 glow-hover"
                  onClick={() => handleCardClick(achievement.id)}
                  layoutId={`mobile-card-${achievement.id}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-pink-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={achievement.image} 
                    alt={achievement.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-pink-300 text-sm font-semibold w-full mobile-achievement-title">
                      {achievement.title}
                    </h3>
                  </div>
                </motion.div>

                {/* Mobile Details Panel */}
                {selectedId === achievement.id && (
                  <motion.div
                    className="col-span-2 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/20 overflow-hidden backdrop-blur-md"
                    initial={{ opacity: 0, height: 0, y: 20 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: 20 }}
                    transition={{ duration: 0.4 }}
                    layoutId={`mobile-details-${achievement.id}`}
                  >
                    <div className="relative h-56 w-full">
                      <img 
                        src={achievement.image} 
                        alt={achievement.title}
                        className="w-full h-full object-cover"
                      />
                      <motion.button 
                        className="absolute top-4 right-4 bg-black/50 rounded-full p-2.5 text-white glow-hover"
                        onClick={() => setSelectedId(null)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FiX size={20} />
                      </motion.button>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <FiAward className="text-yellow-400 text-2xl mr-3" />
                        <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400 text-xl font-bold">
                          {achievement.title}
                        </h3>
                      </div>
                      <p className="text-white/80 mb-4 text-sm leading-relaxed">{achievement.description}</p>
                      <div className="flex justify-between items-center mb-4">
                        <span className="px-3 py-1.5 bg-white/10 rounded-full text-white/80 text-xs backdrop-blur-sm">
                          {achievement.date}
                        </span>
                        
                      </div>
                      {achievement.certificateLink && (
                        <motion.a
                          href={achievement.certificateLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-3 bg-gradient-to-r from-violet-500/30 to-pink-500/30 text-white rounded-lg text-sm flex items-center justify-center gap-2 hover:from-violet-500/40 hover:to-pink-500/40 transition-all glow-hover"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <FiExternalLink size={16} /> View Certificate
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        )}

        {/* Desktop View */}
        {!isMobileView && (
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/20 hover:border-violet-500/50 glow-hover overflow-hidden transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: '0 10px 30px rgba(139, 92, 246, 0.2)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-pink-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={achievement.image} 
                    alt={achievement.title} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div className="flex items-center">
                      <FiAward className="text-yellow-400 text-3xl mr-4" />
                      <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400 text-xl font-bold">
                        {achievement.title}
                      </h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 relative">
                  <p className="text-white/80 text-sm mb-4 leading-relaxed">{achievement.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="px-3 py-1.5 bg-white/10 rounded-full text-white/80 text-xs backdrop-blur-sm">
                      {achievement.date}
                    </span>
                    
                  </div>
                  {achievement.certificateLink && (
                    <motion.a
                      href={achievement.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-gradient-to-r from-violet-500/30 to-pink-500/30 text-white rounded-lg text-sm flex items-center justify-center gap-2 hover:from-violet-500/40 hover:to-pink-500/40 transition-all glow-hover"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <FiExternalLink size={16} /> View Certificate
                    </motion.a>
                  )}
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