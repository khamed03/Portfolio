import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      <h1 className="logo">Khaled</h1>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#home" onClick={toggleMenu}>Home</a>
        <a href="#about" onClick={toggleMenu}>About</a>
        <a href="#projects" onClick={toggleMenu}>Projects</a>
        <a href="#highlights" onClick={toggleMenu}>Highlights</a>
        <a href="#contact" onClick={toggleMenu}>Contact</a>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? "rotate-top" : ""}`} />
        <div className={`bar ${isOpen ? "fade-out" : ""}`} />
        <div className={`bar ${isOpen ? "rotate-bottom" : ""}`} />
      </div>
    </header>
  );
};

export default Header;
