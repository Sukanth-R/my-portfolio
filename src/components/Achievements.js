import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiX } from 'react-icons/fi';

const Achievements = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);

  // Check if mobile view on component mount and resize
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
      id: 3,
      title: "Open Source Contributor",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      description: "Recognized contributor to major open source projects with 50+ merged PRs.",
      date: "Ongoing"
    },
    {
      id: 4,
      title: "Tech Conference Speaker",
      image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      description: "Featured speaker at international developer conference on AI trends.",
      date: "October 2021"
    }
  ];

  const selectedAchievement = achievements.find(item => item.id === selectedId);

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 bg-black bg-opacity-10 backdrop-blur-sm">
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
              <motion.div
                key={achievement.id}
                className="relative aspect-square cursor-pointer"
                onClick={() => setSelectedId(achievement.id)}
                layoutId={`mobile-image-${achievement.id}`}
              >
                <img 
                  src={achievement.image} 
                  alt={achievement.title}
                  className="w-full h-full object-contain bg-black/20 rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                  <h3 className="text-white text-sm font-medium truncate w-full px-1">
                    {achievement.title}
                  </h3>
                </div>
              </motion.div>
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

        {/* Mobile Detail View */}
        <AnimatePresence>
          {selectedId && isMobileView && (
            <motion.div 
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
            >
              <motion.div 
                className="bg-gray-900 rounded-xl border border-white/10 max-w-md w-full max-h-[90vh] overflow-y-auto"
                layoutId={`mobile-image-${selectedId}`}
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                <div className="relative h-48 w-full">
                  <img 
                    src={selectedAchievement.image} 
                    alt={selectedAchievement.title}
                    className="w-full h-full object-contain bg-black"
                  />
                  <button 
                    className="absolute top-3 right-3 bg-black/50 rounded-full p-2 text-white"
                    onClick={() => setSelectedId(null)}
                  >
                    <FiX size={20} />
                  </button>
                </div>
                
                <div className="p-6 bg-black">
                  <div className="flex items-center mb-4 bg-black">
                    <FiAward className="text-yellow-400 text-2xl mr-3" />
                    <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-pink-300 text-2xl font-bold">
                      {selectedAchievement.title}
                    </h3>
                  </div>
                  
                  <p className="text-white/80 mb-4">{selectedAchievement.description}</p>
                  
                  <div className="flex justify-between items-center mb-4">
                    <span className="px-3 py-1 bg-white/5 rounded-full text-white/80 text-xs">
                      {selectedAchievement.date}
                    </span>
                    <div className="flex space-x-2">
                      <span className="px-2 py-1 bg-violet-500/10 rounded-full text-violet-300 text-xs">
                        Certification
                      </span>
                      <span className="px-2 py-1 bg-pink-500/10 rounded-full text-pink-300 text-xs">
                        AI
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-white/60 mb-4">More achievements and recognitions</p>
          <button className="px-6 py-2 bg-gradient-to-r from-violet-500/20 to-pink-500/20 text-white rounded-lg hover:from-violet-500/30 hover:to-pink-500/30 transition-all border border-white/10">
            View Full Credentials
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;