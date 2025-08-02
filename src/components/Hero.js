import React, { useMemo } from 'react';
import './Home.css';
import ParticlesBackground from './ParticlesBackground';

// Memoize social media links to prevent unnecessary re-renders
const SocialLinks = React.memo(() => (
  <div className="social-links flex justify-center md:justify-start space-x-6 mb-8">
    {[
      { 
        href: "https://linkedin.com/in/sukanth-r-24638a259",
        icon: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      },
      { 
        href: "https://github.com/Sukanth-R",
        icon: <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      },
      { 
        href: "https://wa.me/9360515345",
        icon: <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297a11.815 11.815 0 00-8.4-3.48c-6.627 0-12 5.372-12 12 0 2.52.779 4.86 2.107 6.78l-1.23 4.491 4.606-1.21a11.882 11.882 0 005.517 1.357c6.627 0 12-5.372 12-12 0-3.156-1.22-6.123-3.44-8.363"/>
      }
    ].map((link, index) => (
      <a 
        key={index}
        href={link.href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-white hover:text-pink-500 transition-transform transform hover:scale-110"
        aria-label={`Social media link ${index}`}
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          {link.icon}
        </svg>
      </a>
    ))}
  </div>
));

const Home = () => {
  // Memoize the buttons to prevent unnecessary re-renders
  const Buttons = useMemo(() => (
    <div className="buttons flex flex-row gap-3 justify-center md:justify-start">
      <a 
        href="https://drive.google.com/file/d/1RH6xEccmmfFogw4IwB2WV99MGpVtCSLE/view?usp=drive_link" 
        download
        className="bg-gradient-to-r from-violet-500 to-pink-500 text-white px-6 py-2 md:px-10 md:py-3 rounded-3xl font-medium hover:opacity-90 transition-opacity text-center text-sm md:text-base whitespace-nowrap"
      >
        Resume
      </a>
      <a 
        href="#contact" 
        className="bg-gradient-to-r from-violet-500 to-pink-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-3xl font-medium hover:opacity-90 transition-opacity text-center text-sm md:text-base whitespace-nowrap"
      >
        Contact Me
      </a>
    </div>
  ), []);

  // Split text into letters for animation
  const hiText = "Hi, I'm".split('');
  const nameText = "SUKANTH R".split('');
  const titleText = "Full Stack Developer".split('');
  const degreeText = "B.TECH Information Technology".split('');

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center px-4 py-4 page-load"
      style={{ willChange: 'transform' }}
    >
      <ParticlesBackground />
      <div className="container mx-auto z-50 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left side - Text content */}
        <div className="w-full md:w-1/2 text-center md:text-left px-4 md:mx-12">
          <p className="text-white text-base md:text-xl mb-2 tracking-widest font-sans">
            {hiText.map((char, index) => (
              <span
                key={`hi-${index}`}
                className="letter"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
            <span className="wave">👋</span>
          </p>
          <h1 className="name-text tracking-widest text-3xl md:text-6xl font-bold mb-4 font-sans">
            {nameText.map((char, index) => (
              <span
                key={`name-${index}`}
                className="letter"
                style={{ animationDelay: `${(hiText.length * 0.05 + 0.5 + index * 0.05)}s` }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>
          <p className="text-white text-base md:text-2xl mb-2 tracking-widest font-sans">
            {titleText.map((char, index) => (
              <span
                key={`title-${index}`}
                className="letter"
                style={{ animationDelay: `${(hiText.length * 0.05 + 0.5 + nameText.length * 0.05 + 0.5 + index * 0.05)}s` }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </p>
          <p className="text-white text-sm md:text-xl mb-6 tracking-widest font-sans">
            {degreeText.map((char, index) => (
              <span
                key={`degree-${index}`}
                className="letter"
                style={{ animationDelay: `${(hiText.length * 0.05 + 0.5 + nameText.length * 0.1 + 0.5 + index * 0.05)}s` }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </p>
          <SocialLinks />
          {Buttons}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Home);