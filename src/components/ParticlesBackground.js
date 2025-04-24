import React, { useEffect, useState } from 'react';
import './particles.css';

const ParticlesBackground = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile view
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const loadParticles = () => {
      if (window.particlesJS) {
        window.particlesJS('particles-js', {
          particles: {
            number: {
              value: isMobile ? 40 : 80, // Fewer particles on mobile
              density: {
                enable: true,
                value_area: isMobile ? 600 : 800
              }
            },
            color: {
              value: ["#3a86ff", "#8338ec", "#ff006e", "#2bff00", "#ff0000"]
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0
              }
            },
            opacity: {
              value: 0.9,
              random: true,
              anim: {
                enable: true,
                speed: 0.8,
                opacity_min: 0.4,
                sync: false
              }
            },
            size: {
              value: 5,
              random: true,
              anim: {
                enable: true,
                speed: 4,
                size_min: 1.5,
                sync: false
              }
            },
            line_linked: {
              enable: false
            },
            move: {
              enable: true,
              speed: 0.8,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: true,
                rotateX: 1000,
                rotateY: 2000
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "bubble"
              },
              onclick: {
                enable: true,
                mode: "repulse"
              }
            },
            modes: {
              bubble: {
                distance: 120,
                size: 8,
                duration: 1.5,
                opacity: 1,
                speed: 2
              },
              repulse: {
                distance: 80,
                duration: 0.5
              }
            }
          },
          retina_detect: true
        });

        addFloatingLogos();
      }
    };

    const addFloatingLogos = () => {
      const container = document.getElementById('particles-js');
      const existingLogos = document.querySelectorAll('.floating-logo');
      existingLogos.forEach(logo => logo.remove());

      // Online logos from CDNs
      const allLogos = [
        { 
          url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', 
          name: 'react' 
        },
        { 
          url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', 
          name: 'html' 
        },
        { 
          url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', 
          name: 'css' 
        },
        { 
          url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', 
          name: 'javascript' 
        },
        { 
          url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', 
          name: 'mongodb' 
        }
      ];


      // Display only 1 random logo on mobile, all on desktop
      const logosToShow = isMobile 
        ? [allLogos[Math.floor(Math.random() * allLogos.length)]] 
        : allLogos;

      logosToShow.forEach((logo, index) => {
        const img = document.createElement('img');
        img.src = logo.url;
        img.alt = `${logo.name} logo`;
        img.className = 'floating-logo';
        img.style.width = isMobile ? '30px' : '40px';
        img.style.height = isMobile ? '30px' : '40px';
        img.style.left = `${Math.random() * 90}%`;
        img.style.top = `${Math.random() * 90}%`;
        img.style.animation = `float ${15 + index * 2}s infinite ease-in-out`;
        img.style.animationDelay = `${index * 2}s`;
        
        container.appendChild(img);
      });
    };

    if (!window.particlesJS) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
      script.async = true;
      script.onload = loadParticles;
      document.body.appendChild(script);
    } else {
      loadParticles();
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      const logos = document.querySelectorAll('.floating-logo');
      logos.forEach(logo => logo.remove());
    };
  }, [isMobile]);

  return <div id="particles-js" className="particles-container"></div>;
};

export default ParticlesBackground;