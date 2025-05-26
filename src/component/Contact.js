import React from 'react';
import './Contact.css';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaInstagram, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  const socialLinks = [
    { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/rawan-khalifeh-02a393253', color: '#0A66C2' },
    { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/rawan66o', color: '#181717' },
    { name: 'Twitter', icon: <FaInstagram />, url: 'https://www.instagram.com/rawan_khalifeh.7370?igsh=MTJ3ZGNxazczZWsweQ==',color: 'linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80)'},
    { name: 'Email', icon: <FaFacebook />, url: 'https://www.facebook.com/share/18pbQggzjG/', color: '#1DA1F2' }
  ];

  return (
    <section className="cosmic-contact" id="contact">
      {/* الخلفية الكونية */}
      <div className="cosmic-stars"></div>
      <div className="cosmic-twinkling"></div>
      <div className="cosmic-meteors">
        <div className="meteor"></div>
        <div className="meteor"></div>
      </div>

      <div className="cosmic-container">
        {/* عنوان القسم */}
        <div className="cosmic-header">
          <h4 className="cosmic-subtitle">Get In Touch</h4>
          <h2 className="cosmic-title">
            <span className="cosmic-text-glow">Interstellar</span> Contact
          </h2>
          <p className="cosmic-description">
            Ready to start your cosmic journey? Send me a message and let's create something stellar together.
          </p>
        </div>

        {/* محتوى التواصل */}
        <div className="contact-content">
          {/* نموذج التواصل */}
        

          {/* معلومات التواصل */}
          <div className="contact-info">
            <div className="info-card cosmic-glow-card">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="info-content">
                <h3>Location</h3>
                <p>Aleppo, Syria</p>
              </div>
            </div>
            
            <div className="info-card cosmic-glow-card">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div className="info-content">
                <h3>Email</h3>
                <p>rawankhalifeh2003@gmail.com</p>
              </div>
            </div>
            
            <div className="info-card cosmic-glow-card">
              <div className="info-icon">
                <FaPhoneAlt />
              </div>
              <div className="info-content">
                <h3>Phone</h3>
                <p>+963 936 967 910</p>
              </div>
            </div>

            {/* روابط التواصل الاجتماعي */}
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  className="social-link cosmic-glow-hover"
                  style={{ '--social-glow': social.color }}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* تأثيرات الكواكب */}
        <div className="orbiting-planet" style={{ '--planet-size': '120px', '--orbit-size': '300px' }}>
          <div className="planet-core"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;