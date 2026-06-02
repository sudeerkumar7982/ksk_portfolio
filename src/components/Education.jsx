import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="about">
      <h2 className="section-title">Education</h2>
      <div className="glass-panel education-card">
        {portfolioData.education.map((edu, index) => (
          <div key={index}>
            <div className="edu-header">
              <h3 className="edu-inst">
                <GraduationCap style={{display: 'inline', marginRight: '10px', verticalAlign: 'middle'}}/>
                {edu.institution}
              </h3>
              <span className="edu-duration">{edu.duration}</span>
            </div>
            <p className="edu-degree">{edu.degree}</p>
            <p className="edu-score">{edu.score}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
