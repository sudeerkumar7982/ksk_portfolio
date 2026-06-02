import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
  const { name, email, linkedin, github } = portfolioData.personalInfo;

  return (
    <footer className="footer" id="footer-social">
      <div className="footer-social">
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaLinkedin size={20} />
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaGithub size={20} />
        </a>
        <a href={`mailto:${email}`} className="social-icon">
          <FiMail size={20} />
        </a>
      </div>
      <p className="footer-text">
        © {new Date().getFullYear()} {name}. Built with React & CSS.
      </p>
    </footer>
  );
};

export default Footer;
