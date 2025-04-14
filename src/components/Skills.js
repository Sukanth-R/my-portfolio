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
        { name: '.NET', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/1200px-Microsoft_.NET_logo.svg.png' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 bg-black bg-opacity-10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400 text-4xl md:text-5xl font-bold text-center mb-16">
          Technical Skills
        </h2>
        
        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="space-y-6">
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-pink-300 text-2xl md:text-3xl font-semibold mb-6 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex flex-col items-center backdrop-blur-sm p-6 bg-white/20 rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                  >
                    <div className="w-20 h-20 mb-4 flex items-center justify-center">
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 filter brightness-100 contrast-125"
                        style={{ filter: 'brightness(1.1) contrast(1.25) saturate(1.1)' }}
                      />
                    </div>
                    <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400 font-medium text-lg text-center">
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