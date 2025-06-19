import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Python', icon: 'https://cdn.pixabay.com/photo/2024/03/31/02/11/python-8665904_1280.png' },
        { name: 'Java', icon: 'https://brandlogos.net/wp-content/uploads/2021/11/java-logo-512x512.png' },
        { name: 'C', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1853px-C_Programming_Language.svg.png' }
      ]
    },
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'React', icon: 'https://images-cdn.openxcell.com/wp-content/uploads/2024/07/25085005/reactjs-inner.svg' },
        { name: 'HTML', icon: 'https://img.icons8.com/color/512/html-5--v2.png' },
        { name: 'CSS', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968242.png' },
        { name: 'Tailwind CSS', icon: 'https://avatars.githubusercontent.com/u/30317862?s=200&v=4' },
        { name: 'JavaScript', icon: 'https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png' }
      ]
    },
    {
      title: 'Backend Technologies',
      skills: [
        { name: 'Node JS', icon: 'https://www.edureka.co/blog/wp-content/uploads/2019/08/node-logo.png' },
        { name: 'Express JS', icon: 'https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png' },
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MongoDB', icon: 'https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png' },
        { name: 'MySQL', icon: 'https://www.svgrepo.com/show/303251/mysql-logo.svg' }
      ]
    },
    {
      title: 'Version Control & Frameworks',
      skills: [
        { name: 'Git', icon: 'https://images.seeklogo.com/logo-png/30/2/github-logo-png_seeklogo-304612.png' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 bg-black min-h-screen" style={{
      backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
      backgroundSize: '20px 20px'
    }}>
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
          Technical Skills
        </h2>
        
        <div className="space-y-16">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="space-y-8">
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400 text-2xl md:text-3xl font-bold text-center mb-8">
                {category.title}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="relative flex flex-col items-center backdrop-blur-md p-4 sm:p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/20 hover:border-violet-500/50 glow-hover transition-all duration-500 group transform hover:-translate-y-2 shadow-xl hover:shadow-2xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                    <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 flex items-center justify-center relative">
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        style={{ filter: 'brightness(1.2) contrast(1.3) saturate(1.2)' }}
                      />
                    </div>
                    <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-pink-300 font-semibold text-sm sm:text-lg text-center z-10">
                      {skill.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;