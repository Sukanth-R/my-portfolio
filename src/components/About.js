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
                src="https://sukanth-r.github.io/my-portfolio/images/profile.jpg"
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
            <div className="text-white/90 text-base md:text-[16px] mx-1 leading-relaxed space-y-5">
              {activeTab === 'about' ? (
                 <>
                 <p className="text-3xl font-bold bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">
  <span className="text-white">Hi,hello I'm </span>
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">Sukanth R</span>
</p>

                 <p>
                   I'm currently pursuing my degree in Information Technology in Kongu Engineering College,Perundurai while passionately building my skills as a full-stack developer. 
                   I balance my academic coursework with hands-on coding projects to develop practical expertise alongside theoretical knowledge.
                 </p>
                 <p>
                   My journey includes building projects with the MERN stack (MongoDB, Express, React, and Node.js), 
                   and I'm constantly exploring new technologies through online courses, hackathons, and personal projects. 
                   I've developed several web applications that demonstrate my growing capabilities in both frontend and backend development.
                 </p>
                 <p>
                   What excites me most about development is the ability to turn ideas into functional, user-friendly applications. 
                   I'm particularly interested in responsive design principles and creating accessible web experiences.
                 </p>
                 
               </>
             ) : (
                <div className="space-y-5">
                  <div className="border-l-4 border-pink-400 pl-5 py-2 bg-white/5 rounded-r-lg">
                    <h3 className="text-xl font-semibold">B.Tech Information Technology</h3>
                    <p className="text-gray-300 text-sm mt-1">Kongu Engineering College | 2022-2026</p>
                    <p className="text-white/90 text-sm mt-2">
                      CGPA: 8.65*
                    </p>
                  </div>
                  <div className="border-l-4 border-violet-400 pl-5 py-2 bg-white/5 rounded-r-lg">
                    <h3 className="text-xl font-semibold">12th(HSC) & 10th(SSLC)</h3>
                    <p className="text-gray-300 text-sm mt-1">Mahendra Matric Higher Secondary School | 2019-2020 & 2021-2022</p>
                    <p className="text-white/90 text-sm mt-2">
                      Passed out with a percentage of 93.67% in 12th and 99.4% in 10th
                    </p>
                  </div>
                  <div className="border-l-4 border-violet-400 pl-5 py-2 bg-white/5 rounded-r-lg">
                    <h3 className="text-xl font-semibold">Certifications</h3>
                    <ul className="list-disc pl-5 text-sm space-y-1 mt-1">
                      <li>Azure AI Engineer Associate</li>
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