import React, { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <section id="about" className="py-20 px-6 bg-black bg-opacity-30 backdrop-blur-sm">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Profile Image - Perfectly aligned */}
          <div className="lg:w-2/5 flex justify-center">
            <div className="w-64 h-64 rounded-full bg-white bg-opacity-20 border-4 border-white/30 overflow-hidden shadow-xl hover:shadow-2xl transition-all">
              <img 
                src="/images/profile.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          
          {/* Content Section */}
          <div className="lg:w-3/5 space-y-6">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400 text-3xl md:text-4xl font-bold">
              About Me
            </h2>
            
            {/* Navigation Tabs */}
            <div className="flex">
              <div className="flex space-x-3 bg-white/10 rounded-full p-1">
                <button
                  onClick={() => setActiveTab('about')}
                  className={`px-7 py-2 text-sm md:text-base rounded-full transition-all ${
                    activeTab === 'about' 
                      ? 'bg-gradient-to-r from-violet-500 to-pink-500 text-white shadow-md' 
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  About Me
                </button>
                <button
                  onClick={() => setActiveTab('education')}
                  className={`px-7 py-2 text-sm md:text-base rounded-full transition-all ${
                    activeTab === 'education' 
                      ? 'bg-gradient-to-r from-violet-500 to-pink-500 text-white shadow-md' 
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  Education
                </button>
              </div>
            </div>

            {/* Content Area */}
            <div className="text-white/90 text-base md:text-lg mx-1 leading-relaxed space-y-5">
              {activeTab === 'about' ? (
                <>
                  <p>
                    I'm a full-stack developer specializing in modern JavaScript frameworks, with 5+ years of experience building scalable web applications.
                  </p>
                  <p>
                    My expertise spans React ecosystems, Node.js backends, and cloud infrastructure, with a strong focus on performance and user experience.
                  </p>
                  <p>
                    Beyond coding, I contribute to open-source projects and enjoy exploring the intersection of technology and design.
                  </p>
                </>
              ) : (
                <div className="space-y-5">
                  <div className="border-l-4 border-pink-400 pl-5 py-2 bg-white/5 rounded-r-lg">
                    <h3 className="text-xl font-semibold">M.Sc. Computer Science</h3>
                    <p className="text-gray-300 text-sm mt-1">Stanford University | 2018-2020</p>
                    <p className="text-white/90 text-sm mt-2">
                      Specialized in cloud computing architectures and distributed systems
                    </p>
                  </div>
                  <div className="border-l-4 border-violet-400 pl-5 py-2 bg-white/5 rounded-r-lg">
                    <h3 className="text-xl font-semibold">B.Eng. Software Engineering</h3>
                    <p className="text-gray-300 text-sm mt-1">MIT | 2014-2018</p>
                    <p className="text-white/90 text-sm mt-2">
                      Focused on full-stack development and database systems
                    </p>
                  </div>
                  <div className="border-l-4 border-violet-400 pl-5 py-2 bg-white/5 rounded-r-lg">
                    <h3 className="text-xl font-semibold">Certifications</h3>
                    <ul className="list-disc pl-5 text-sm space-y-1 mt-1">
                      <li>AWS Certified Solutions Architect</li>
                      <li>Google Cloud Professional Developer</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;