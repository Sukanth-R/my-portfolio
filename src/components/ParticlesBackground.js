// components/ParticlesBackground.js
import React, { useEffect } from 'react';
import './particles.css';

const ParticlesBackground = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.async = true;
    
    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS('particles-js', {
          particles: {
            number: {
              value:150,  // Optimal number for standalone particles
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: ["#3a86ff", "#8338ec", "#ff006e", "#2bff00","#ff0000"] // DevForge colors
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0
              }
            },
            opacity: {
              value: 0.9,  // More visible particles
              random: true,
              anim: {
                enable: true,
                speed: 0.8,
                opacity_min: 0.4,
                sync: false
              }
            },
            size: {
              value: 5,  // Slightly larger
              random: true,
              anim: {
                enable: true,
                speed: 4,
                size_min: 1.5,  // Bigger minimum size
                sync: false
              }
            },
            line_linked: {
              enable: false // Completely disabled
            },
            move: {
              enable: true,
              speed: 0.8,  // Slower movement
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
                mode: "bubble"  // Particles grow on hover
              },
              onclick: {
                enable: true,
                mode: "repulse" // Gentle push effect
              }
            },
            modes: {
              bubble: {
                distance: 120,
                size: 8,  // More noticeable growth
                duration: 1.5,
                opacity: 1,  // Full opacity on hover
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
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="particles-js" className="particles-container"></div>;
};

export default ParticlesBackground;