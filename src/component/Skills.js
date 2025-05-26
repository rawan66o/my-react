import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      category: "Frontend Development",
      items: [
        { name: "React js", level: 90, color: "#61DAFB" },
         { name: "Next js", level: 50, color: "#61DAFB" },
        { name: "JavaScript", level: 85, color: "#F7DF1E" },
        { name: "HTML5", level: 95, color: "#E34F26" },
        { name: "CSS3", level: 95, color: "#1572B6" },
        { name: "Ts", level: 50, color: "#38B2AC" }
      ]
    },
    {
      category: "Backend Development",
      items: [
        { name: "Node.js", level: 75, color: "#339933" },
        { name: " PHP Laravel", level: 50, color: "#000000" },
        { name: "API", level: 85, color: "#47A248" },
        { name: "Firebase", level: 60, color: "#FFCA28" }
      ]
    },
    {
      category: "Design & Tools",
      items: [
        { name: "Figma", level: 85, color: "#F24E1E" },
        // { name: "Photoshop", level: 75, color: "#31A8FF" },
        { name: "Git", level: 80, color: "#F05032" },
        { name: "VS Code", level: 95, color: "#007ACC" }
      ]
    }
  ];

  return (
    <section className="cosmic-skills" id="skills">
      {/* النجوم في الخلفية */}
      <div className="cosmic-stars"></div>
      <div className="cosmic-twinkling"></div>
      
      {/* الشهب */}
      <div className="cosmic-meteors">
        <div className="meteor"></div>
        <div className="meteor"></div>
      </div>

      <div className="cosmic-container">
        {/* عنوان القسم */}
        <div className="cosmic-header">
          <h4 className="cosmic-subtitle">My Technical Arsenal</h4>
          <h2 className="cosmic-title">
            <span className="cosmic-text-glow">Celestial</span> Skills
          </h2>
          <p className="cosmic-description">
            My expertise spans across multiple dimensions of development, 
            each skill honed to stellar perfection.
          </p>
        </div>

        {/* شبكة المهارات */}
        <div className="skills-grid">
          {skills.map((skillCategory, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{skillCategory.category}</h3>
              <div className="skills-list">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{
                          width: `${skill.level}%`,
                          backgroundColor: skill.color,
                          boxShadow: `0 0 10px ${skill.color}`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* الكواكب العائمة */}
        <div className="floating-planets">
          <div className="planet purple" style={{ '--size': '80px', '--glow': '#9F7AEA' }}></div>
          <div className="planet blue" style={{ '--size': '120px', '--glow': '#4299E1' }}></div>
          <div className="planet pink" style={{ '--size': '60px', '--glow': '#F687B3' }}></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

















