import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {portfolioData.projects.map((project, index) => (
          <div key={index} className="glass-panel project-card">
            <div className="project-content-inner">
              <span className="project-type">{project.type}</span>
              <h3 className="project-title">{project.title}</h3>
              <ul className="project-desc">
                {project.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              <div className="project-links-row">
                <span className="project-status-soon">Soon...</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
