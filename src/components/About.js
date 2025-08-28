import React, { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <section 
      id="about" 
      className="py-24 px-4 sm:px-8 bg-black bg-pattern min-h-screen"
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
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          {/* Content Section */}
          <div className="lg:w-5/5 w-full space-y-8 mx-auto">
            <h2 className="text-transparent text-center bg-clip-text bg-gradient-to-r from-violet-500 to-pink-500 text-4xl md:text-5xl font-extrabold tracking-tight">
              About Me
            </h2>
            
            {/* Navigation Tabs */}
            <div className="flex justify-center lg:justify-center">
              <div className="flex space-x-4 bg-white/10 backdrop-blur-md rounded-full p-1.5 shadow-lg">
                <button
                  onClick={() => setActiveTab('about')}
                  className={`px-8 py-2.5 text-sm md:text-base rounded-full transition-all duration-300 glow-hover ${
                    activeTab === 'about' 
                      ? 'bg-gradient-to-r from-violet-500 to-pink-500 text-white shadow-md' 
                      : 'text-white/80 hover:bg-white/20'
                  }`}
                >
                  About Me
                </button>
                <button
                  onClick={() => setActiveTab('education')}
                  className={`px-8 py-2.5 text-sm md:text-base rounded-full transition-all duration-300 glow-hover ${
                    activeTab === 'education' 
                      ? 'bg-gradient-to-r from-violet-500 to-pink-500 text-white shadow-md' 
                      : 'text-white/80 hover:bg-white/20'
                  }`}
                >
                  Education
                </button>
              </div>
            </div>

            {/* Content Area */}
            <div className="relative min-h-[450px] text-white text-base md:text-lg leading-relaxed">
              <div className={`transition-all duration-700 ease-in-out transform ${activeTab === 'about' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 absolute'}`}>
                {activeTab === 'about' && (
                  <div className="space-y-6 backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
                    <p className="text-3xl font-bold">
                      <span className="text-white">Hi, I'm </span>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">Sukanth R</span>
                    </p>
                    <p className="text-violet-300 font-semibold">
                      Current Status: Studying Final Year, B.Tech Information Technology, Kongu Engineering College
                    </p>
                    <p>
                      I'm a passionate Information Technology student at Kongu Engineering College, Perundurai, honing my skills as a full-stack developer. 
                      I thrive on blending academic learning with real-world coding projects to build practical expertise.
                    </p>
                    <p>
                      My experience includes crafting projects with the MERN stack (MongoDB, Express, React, Node.js). 
                      I actively explore new tech through online courses, hackathons, and personal projects, creating web apps that showcase my frontend and backend skills.
                    </p>
                    <p>
                      I love transforming ideas into user-friendly applications, with a keen interest in responsive design and accessible web experiences.
                    </p>
                    
                    {/* Contact Information */}
                    <div className="flex flex-wrap items-center gap-6 pt-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium">Sankari, Salem, Tamil Nadu</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium">sukanth0021@gmail.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium">+91 93605 15345</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className={`transition-all duration-700 ease-in-out transform ${activeTab === 'education' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 absolute'}`}>
                {activeTab === 'education' && (
                  <div className="space-y-6 backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
                    <div className="relative pl-8 py-4 group hover:bg-white/10 transition-all duration-300 rounded-xl">
                      <div className="absolute left-0 top-0 w-3 h-3 bg-pink-500 rounded-full group-hover:scale-125 transition-transform"></div>
                      <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">B.Tech Information Technology</h3>
                      <p className="text-white/90 text-sm mt-1">Kongu Engineering College | 2022-2026</p>
                      <p className="text-white/80 text-sm mt-2">CGPA: 8.54*</p>
                    </div>
                    <div className="relative pl-8 py-4 group hover:bg-white/10 transition-all duration-300 rounded-xl">
                      <div className="absolute left-0 top-0 w-3 h-3 bg-violet-500 rounded-full group-hover:scale-125 transition-transform"></div>
                      <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">12th (HSC) & 10th (SSLC)</h3>
                      <p className="text-white/90 text-sm mt-1">Mahendra Matric Higher Secondary School | 2019-2020 & 2021-2022</p>
                      <p className="text-white/80 text-sm mt-2">12th: 93.67% | 10th: 99.4%</p>
                    </div>
                    <div className="relative pl-8 py-4 group hover:bg-white/10 transition-all duration-300 rounded-xl">
                      <div className="absolute left-0 top-0 w-3 h-3 bg-violet-500 rounded-full group-hover:scale-125 transition-transform"></div>
                      <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">Certifications</h3>
                      <ul className="list-disc pl-5 text-sm space-y-1 mt-2 text-white/90">
                        <li>Azure AI Engineer Associate</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;