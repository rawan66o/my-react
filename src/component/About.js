import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="cosmic-about" id="about">
      {/* النجوم في الخلفية */}
      <div className="cosmic-stars"></div>
      <div className="cosmic-twinkling"></div>
      
      {/* الشهب */}
      <div className="cosmic-meteors">
        <div className="meteor"></div>
        <div className="meteor"></div>
        <div className="meteor"></div>
      </div>

      <div className="cosmic-container">
        {/* الجانب البصري الفضائي */}
        <div className="cosmic-visual">
          <div className="planet-system">
            <div className="cosmic-planet">
              <div className="planet-rings"></div>
              <div className="planet-glow"></div>
            </div>
            <div className="cosmic-satellite"></div>
          </div>
        </div>

        {/* المحتوى النصي */}
        <div className="cosmic-content">
          <h4 className="cosmic-subtitle">Exploring Digital Galaxies</h4>
          <h2 className="cosmic-title">
            <span className="cosmic-text-glow">About</span> My Universe
          </h2>
          
          <div className="cosmic-stats">
            <div className="cosmic-stat">
              <div className="stat-value cosmic-pulse">2+</div>
              <div className="stat-label">Light Years Experience</div>
            </div>
            <div className="cosmic-stat">
              <div className="stat-value cosmic-pulse">10+</div>
              <div className="stat-label">Interstellar Projects</div>
            </div>
          </div>

          <p className="cosmic-description">
            As a cosmic Web Frontend Developer, I navigate through digital galaxies to create 
            stellar user experiences. My design philosophy orbits around creating 
            interfaces that are as intuitive as they are visually captivating.
          </p>

          <div className="cosmic-skills">
            <h3 className="skills-title">My Tech Constellations</h3>
            <div className="skills-grid">
              {[
                { icon: '🪐', name: 'Html' },
                { icon: '🪐', name: 'css' },
                 { icon: '🪐', name: 'js' },
                 { icon: '🚀', name: 'React js' },
                  { icon: '🚀', name: 'Next js' },
                
                  { icon: '🚀', name: 'ts' },
                { icon: '🔭', name: 'Prototyping' },
                // { icon: '🌌', name: 'Mobile Design' },
                { icon: '🛰️', name: 'Web Design' },
                { icon: '⚡', name: 'Interaction Design' }
              ].map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-name">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;