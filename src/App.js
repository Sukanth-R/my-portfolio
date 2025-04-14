import React from 'react';
import ParticlesBackground from './components/ParticlesBackground';
import Header from './components/Header';
import Home from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from "./components/Projects";
function App() {
  return (
    <div className="relative min-h-screen">
      <ParticlesBackground />
      <Header />
      <main className="relative z-10">
        <Home />
        <About/>
        <Skills/>
        <Projects/>
        {/* Add other sections here */}
      </main>
    </div>
  );
}

export default App;