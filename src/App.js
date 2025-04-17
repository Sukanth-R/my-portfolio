import React from 'react';
import ParticlesBackground from './components/ParticlesBackground';
import Header from './components/Header';
import Home from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from "./components/Projects";
import Achieve from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./footer";
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
        <Achieve/>
        <Contact/>
        {/* Add other sections here */}
      </main>
      <Footer/>
    </div>
  );
}

export default App;