import React from 'react';
import './Hero.css';
import image from "../images/photo_2025-04-08_13-37-02.jpg";
const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* Text Content */}
        <div className="hero-text-content">
          <h4 className="hero-subtitle">Welcome to My Portfolio</h4>
          <h1 className="hero-main-title">
            I'm <span className="text-gradient">Rawan Khalifeh</span>
          </h1>
          <h2 className="hero-job-title">
            Creative <span className="text-gradient">Frontend Developer</span>
          </h2>
          <p className="hero-description">
           I learned HTML, CSS, JS, TS, React Js , Next Js and
designed many experimental projects in React Js and I
worked as a front-end developer at Ren Tech. 
I craft stunning digital experiences that blend functional aesthetics with peak performance
          </p>
        
        </div>

        {/* Visual Side */}
        <div className="hero-visual">
          <div className="image-container">
            <div className="gradient-frame"></div>
           
            <img className="profile-picture" src={image } alt="Rawn" />
            <div className="glow-effect"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;