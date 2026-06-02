import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {Object.entries(portfolioData.skills).map(([category, items]) => (
          <div key={category} className="glass-panel skill-category">
            <h3 className="skill-cat-title" style={{ textTransform: 'capitalize' }}>
              {category}
            </h3>
            <div className="skill-list">
              {items.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
