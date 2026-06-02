import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award, Target, Zap } from 'lucide-react';

const Achievements = () => {
  return (
    <section id="achievements">
      <h2 className="section-title">Achievements & More</h2>
      <div className="achievements-grid">
        <div className="glass-panel achieve-card">
          <h3 className="achieve-title"><Target className="text-accent" /> Achievements</h3>
          <ul className="achieve-list">
            {portfolioData.achievements.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
        
        <div className="glass-panel achieve-card">
          <h3 className="achieve-title"><Award className="text-accent" /> Certifications</h3>
          <ul className="achieve-list">
            {portfolioData.certifications.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>

        <div className="glass-panel achieve-card">
          <h3 className="achieve-title"><Zap className="text-accent" /> Strengths</h3>
          <ul className="achieve-list">
            {portfolioData.strengths.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
