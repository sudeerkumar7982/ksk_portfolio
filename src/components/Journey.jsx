import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Journey = () => {
  const roadmapItems = [
    {
      year: '2023 – 2027',
      title: 'B.Tech CSE',
      sub: 'KL University, Vijayawada',
      desc: 'Pursuing Bachelor of Technology in Computer Science and Engineering.',
      side: 'left'
    },
    {
      year: '2021 – 2023',
      title: 'Intermediate (MPC)',
      sub: 'Tirumala Jr College, Visakhapatnam',
      desc: 'Completed Higher Secondary Education focusing on Mathematics, Physics, and Chemistry.',
      side: 'right'
    },
    {
      year: '2020 – 2021',
      title: '10th Class',
      sub: 'Sri Chaitanya EM School, Visakhapatnam',
      desc: 'Completed Secondary School Education.',
      side: 'left'
    }
  ];

  return (
    <section id="journey" className="journey-section">
      <h2 className="section-title">My Journey</h2>
      <div className="roadmap-container">
        {roadmapItems.map((item, index) => (
          <div key={index} className={`roadmap-item ${item.side === 'right' ? 'right' : ''}`}>
            {/* The curvy road connecting elements */}
            <div className="roadmap-path"></div>
            
            <div className="roadmap-marker">
              <FaMapMarkerAlt size={24} className="marker-icon" />
            </div>
            
            <div className="roadmap-card">
              <div className="roadmap-year">{item.year}</div>
              <div className="roadmap-title">{item.title}</div>
              <div className="roadmap-sub">{item.sub}</div>
              <div className="roadmap-desc">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Journey;
