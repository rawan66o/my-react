

import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProjectDetails.css';

// استيراد الصور
import harmonyHotel from "../images/photo_2025-05-20_20-27-40.jpg";
import movieApp from "../images/photo_2024-12-17_17-04-35.jpg";
import uranus from "../images/photo_2024-08-06_21-37-00.jpg";
import bizza from "../images/photo_2024-12-17_17-03-57.jpg";
import wonder from "../images/photo_2024-12-17_17-04-14.jpg";
import amazonClone from "../images/photo_2024-12-17_17-04-51.jpg";
import coinSphere from "../images/photo_2024-12-18_22-35-28.jpg";
import qamara from "../images/photo_2024-12-17_17-04-54.jpg";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);

 const projects = [
    {
      id: 1,
      title: "HARMONY HOTEL",
      description: "Comprehensive hotel management and booking platform",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: harmonyHotel,
      glowColor: "#6366f1",
      details: "Harmony Hotel is a full-stack application designed for both hotel managers and guests. It features a real-time booking system, room management, and payment processing.",
      features: [
        "User authentication (JWT)",
        "Real-time room availability updates",
        "Admin dashboard with analytics",
        "Payment integration with Stripe",
        "Responsive design for all devices"
      ],
      githubLink: "https://github.com/yourusername/harmony-hotel",
      liveDemo: "https://harmony-hotel-demo.com"
    },
    {
      id: 2,
      title: "URANUS E-COMMERCE",
      description: "E-commerce platform for Orans Mall with advanced search",
      tags: ["React", "Redux", "Firebase", "Tailwind CSS"],
      image: uranus,
      glowColor: "#ec4899",
      details: "Uranus is a feature-rich e-commerce platform with product search, filtering, and cart functionality. Built with modern web technologies for optimal performance.",
      features: [
        "Product search with filters",
        "Shopping cart with persistent storage",
        "User authentication with Firebase",
        "Product reviews and ratings",
        "Admin product management"
      ],
      githubLink: "https://github.com/yourusername/uranus-ecommerce",
      liveDemo: "https://uranus-ecommerce-demo.com"
    },
    {
      id: 3,
      title: "BIZZA PIZZA",
      description: "Online pizza ordering system with customization",
      tags: ["React", "Context API", "CSS Modules"],
      image: bizza,
      glowColor: "#6366f1",
      details: "Bizza allows customers to customize and order pizzas online with real-time price calculation and delivery tracking.",
      features: [
        "Pizza customization interface",
        "Dynamic price calculation",
        "Order tracking system",
        "Responsive mobile-first design",
        "Local storage for cart persistence"
      ],
      githubLink: "https://github.com/yourusername/bizza-pizza",
      liveDemo: "https://bizza-pizza-demo.com"
    },
    {
      id: 4,
      title: "WONDER TOURS",
      description: "Tourism platform showcasing destinations and packages",
      tags: ["React", "React Router", "SASS"],
      image: wonder,
      glowColor: "#ec4899",
      details: "Wonder Tours is a visually appealing tourism website featuring destinations, tour packages, and booking capabilities.",
      features: [
        "Interactive destination gallery",
        "Tour package comparison",
        "Booking form with validation",
        "Animated transitions",
        "SEO optimized pages"
      ],
      githubLink: "https://github.com/yourusername/wonder-tours",
      liveDemo: "https://wonder-tours-demo.com"
    },
    {
      id: 5,
      title: "AMAZON CLONE",
      description: "Full-featured Amazon clone with Firebase backend",
      tags: ["React", "Firebase", "Redux", "Stripe"],
      image: amazonClone,
      glowColor: "#6366f1",
      details: "A functional Amazon clone with product listings, user authentication, and checkout process.",
      features: [
        "User authentication with Firebase Auth",
        "Product catalog with categories",
        "Shopping cart functionality",
        "Checkout process with Stripe integration",
        "Order history tracking"
      ],
      githubLink: "https://github.com/yourusername/amazon-clone",
      liveDemo: "https://amazon-clone-demo.com"
    },
    {
      id: 6,
      title: "COINSPHERE",
      description: "Cryptocurrency tracking and trading platform",
      tags: ["React", "CoinGecko API", "Chart.js", "Firebase"],
      image: coinSphere,
      glowColor: "#ec4899",
      details: "CoinSphere provides real-time cryptocurrency data, price charts, and portfolio tracking capabilities.",
      features: [
        "Real-time cryptocurrency prices",
        "Interactive price charts",
        "Portfolio tracking",
        "News aggregation",
        "User authentication"
      ],
      githubLink: "https://github.com/yourusername/coinsphere",
      liveDemo: "https://coinsphere-demo.com"
    },
    {
      id: 7,
      title: "QAMARA",
      description: "Official website for Qamara Saudi institution",
      tags: ["React", "GSAP", "i18n", "Responsive Design"],
      image: qamara,
      glowColor: "#ec4899",
      details: "A professional website for Qamara institution with multilingual support and smooth animations.",
      features: [
        "Multilingual support (Arabic/English)",
        "Animated page transitions",
        "Contact form with validation",
        "Services showcase",
        "Mobile responsive design"
      ],
      githubLink: "https://github.com/yourusername/qamara",
      liveDemo: "https://qamara-institution.com"
    },
    {
      id: 8,
      title: "MOVIE APP",
      description: "Movie database with search and favorites",
      tags: ["React", "TMDB API", "Local Storage", "React Query"],
      image: movieApp,
      glowColor: "#ec4899",
      details: "A movie discovery app that allows users to search, browse, and save their favorite movies.",
      features: [
        "Movie search functionality",
        "Detailed movie information",
        "Favorite movies list",
        "Trending/popular movies sections",
        "Responsive grid layout"
      ],
      githubLink: "https://github.com/yourusername/movie-app",
      liveDemo: "https://movie-app-demo.com"
    }
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // إنشاء النجوم
    const createStars = () => {
      const starfield = container.querySelector('.starfield');
      if (!starfield) return;

      for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = `${Math.random() * 3}px`;
        star.style.height = star.style.width;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        starfield.appendChild(star);
      }
    };

    // إنشاء الشهب
    const createMeteors = () => {
      for (let i = 0; i < 3; i++) {
        const meteor = document.createElement('div');
        meteor.className = 'meteor';
        meteor.style.left = `${Math.random() * 100}%`;
        meteor.style.top = `${Math.random() * 100}%`;
        meteor.style.animationDelay = `${Math.random() * 10}s`;
        container.appendChild(meteor);
      }
    };

    createStars();
    createMeteors();

    return () => {
      // تنظيف العناصر عند إلغاء التثبيت
      const meteors = container.querySelectorAll('.meteor');
      meteors.forEach(meteor => meteor.remove());
    };
  }, []);

  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Project Not Found</h2>
        <p>The requested project could not be found.</p>
        <button className="back-button" onClick={() => navigate('/')}>
          ← Back to Projects
        </button>
      </div>
    );
  }

  return (
    <div className="project-details-container" ref={containerRef}>
      <div className="starfield"></div>
      
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back to Projects
      </button>
      
      <div className="project-details-content">
        <div className="project-details">
          <div 
            className="project-details-image"
            style={{ '--glow-color': project.glowColor }}
          >
            <img src={project.image} alt={project.title} />
            <div className="project-image-glow"></div>
          </div>
          
          <div className="project-details-info">
            <h1>{project.title}</h1>
            <p className="project-description">{project.description}</p>
            
            <div className="project-full-details">
              <h3>Project Overview</h3>
              <p>{project.details}</p>
              
              {project.features && project.features.length > 0 && (
                <>
                  <h4>Key Features:</h4>
                  <ul className="project-features">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            
            <div className="project-technologies">
              <h3>Technologies Used:</h3>
              <div className="tech-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tech-tag">{tag}</span>
                ))}
              </div>
            </div>
            
            {/* <div className="project-links">
              {project.liveDemo && (
                <a 
                  href={project.liveDemo} 
                  className="demo-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              )}
              {project.githubLink && (
                <a 
                  href={project.githubLink} 
                  className="code-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              )}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;




