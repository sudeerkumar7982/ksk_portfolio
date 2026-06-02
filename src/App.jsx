import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import TechStack from './components/TechStack';
import GithubActivity from './components/GithubActivity';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <div className="ambient-background">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Journey />
        <TechStack />
        <GithubActivity />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
