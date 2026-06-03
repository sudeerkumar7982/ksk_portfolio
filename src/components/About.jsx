import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import profileImg from '../assets/profile.png';

const About = () => {
  const { name, title, summary, linkedin, github, email } = portfolioData.personalInfo;

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image-wrapper">
          <div className="about-image-placeholder">
            <img src={profileImg} alt="Profile" className="about-profile-img" />
          </div>
        </div>
        
        <div className="about-content">
          <h2 className="section-title text-left">
            I'm <span className="text-accent">{name}</span>, a {title}
          </h2>
          <p className="about-desc">{summary}</p>
          <p className="about-desc">
            I'm passionate about building scalable, data-driven applications using modern web technologies and robust backend systems. Beyond coding, I'm constantly learning and exploring new challenges in software architecture.
          </p>

          <div className="about-social">
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="social-icon-btn">
              <FaLinkedin size={22} />
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer" className="social-icon-btn">
              <FaGithub size={22} />
            </a>
            <a href={`mailto:${email}`} className="social-icon-btn">
              <FiMail size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
