import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiArrowDown } from 'react-icons/fi';

const Hero = () => {
  const { name, title, summary, linkedin, github } = portfolioData.personalInfo;

  return (
    <section className="hero" id="home">
      <div className="hero-content animate-fade-in">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          Available for opportunities
        </div>
        <span className="hero-greeting">I am</span>
        <h1 className="hero-name">{name}</h1>
        <h2 className="hero-title">{title}</h2>
        <p className="hero-summary">{summary}</p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#about" className="btn btn-outline">
            About Me
          </a>
        </div>

        <div className="hero-socials">
          <a href={github} target="_blank" rel="noopener noreferrer" className="hero-social-link">
            <FaGithub size={20} />
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hero-social-link">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>

      <a href="#about" className="hero-scroll-hint">
        <FiArrowDown size={20} />
      </a>
    </section>
  );
};

export default Hero;
