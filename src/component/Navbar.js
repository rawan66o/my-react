import React from "react";
import { Link as ScrollLink } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <ScrollLink to="hero" smooth={true} duration={500} className="navbar-logo-link">
            Rawan
          </ScrollLink>
        </div>
        
        <ul className="navbar-menu">
          <li className="navbar-item">
            <ScrollLink to="hero" smooth={true} duration={500} className="navbar-link">
              Home
            </ScrollLink>
          </li>
          <li className="navbar-item">
            <ScrollLink to="about" smooth={true} duration={500} className="navbar-link">
              About
            </ScrollLink>
          </li>
          <li className="navbar-item">
            <ScrollLink to="portfolio" smooth={true} duration={500} className="navbar-link">
              Skills
            </ScrollLink>
          </li>
          <li className="navbar-item">
            <ScrollLink to="services" smooth={true} duration={500} className="navbar-link">
              Project
            </ScrollLink>
          </li>
          <li className="navbar-item">
            <ScrollLink to="contact" smooth={true} duration={500} className="navbar-link">
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;