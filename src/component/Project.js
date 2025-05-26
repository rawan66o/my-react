import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Project.css';

// استيراد الصور
import y from "../images/photo_2025-05-20_20-27-40.jpg";
import x from "../images/photo_2024-12-17_17-04-35.jpg";
import z from "../images/photo_2024-08-06_21-37-00.jpg";
import v from "../images/photo_2024-12-17_17-03-57.jpg";
import w from "../images/photo_2024-12-17_17-04-14.jpg";
import l from "../images/photo_2024-12-17_17-04-51.jpg";
import q from "../images/photo_2024-12-18_22-35-28.jpg";
import e from "../images/photo_2024-12-17_17-04-54.jpg";

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "HARMONY HOTEL",
      description: "Harmony Dashboard is a private hotel booking website serving hotel managers and regular users.",
      tags: ["React js"],
      image: y,
      glowColor: "#6366f1",
      details: "Additional details about Harmony Hotel project..."
    },
    {
      id: 2,
      title: "URANUS",
      description: "A special website for Orans Mall that searches for different products that serve all categories.",
      tags: ["React js"],
      image: z,
      glowColor: "#ec4899",
      details: "Additional details about Uranus project..."
    },
    {
      id: 3,
      title: "Bizza",
      description: "A website to display pizza varieties designed with React",
      tags: ["React js"],
      image: v,
      glowColor: "#6366f1",
      details: "Additional details about Bizza project..."
    },
    {
      id: 4,
      title: "Wonder",
      description: "A website specialized in tourism",
      tags: ["React js"],
      image: w,
      glowColor: "#ec4899",
      details: "Additional details about Wonder project..."
    },
    {
      id: 5,
      title: "Amazon",
      description: "Amazon is a website that provides online shopping services and relies on Firebase.",
      tags: ["React js"],
      image: l,
      glowColor: "#6366f1",
      details: "Additional details about Amazon project..."
    },
    {
      id: 6,
      title: "CoinSphere",
      description: "A website specialized in trading and digital currencies",
      tags: ["React js"],
      image: q,
      glowColor: "#ec4899",
      details: "Additional details about CoinSphere project..."
    },
    {
      id: 7,
      title: "Qamara",
      description: "Qamar website is a website of a Saudi institution",
      tags: ["React js"],
      image: e,
      glowColor: "#ec4899",
      details: "Additional details about Qamara project..."
    },
    {
      id: 8,
      title: "Movie",
      description: "A website that displays movies and allows searching and booking.",
      tags: ["React js"],
      image: x,
      glowColor: "#ec4899",
      details: "Additional details about Movie project..."
    },
  ];

  const handleProjectClick = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <section className="cosmic-projects" id="projects">
      <div className="cosmic-stars"></div>
      <div className="cosmic-twinkling"></div>
      
      <div className="cosmic-meteors">
        <div className="meteor"></div>
        <div className="meteor"></div>
      </div>

      <div className="cosmic-container">
        <div className="cosmic-header">
          <h4 className="cosmic-subtitle">My Stellar Creations</h4>
          <h2 className="cosmic-title">
            <span className="cosmic-text-glow">Cosmic</span> Projects
          </h2>
          <p className="cosmic-description">
            Each project is a unique journey through the digital cosmos, 
            crafted with precision and stellar design principles.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ '--glow-color': project.glowColor }}
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="project-image-container">
                <div 
                  className="project-image"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
                <div className="project-glow"></div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>
                <button className="cosmic-button">
                  Explore Project
                  <span className="button-icon">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;