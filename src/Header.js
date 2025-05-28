import React from "react";
import './Header.css';

function Header({ scrollToHome, scrollToAbout, scrollToProjects, scrollToContact }) {
  return (
    <div className="container">
      <div className="item"><a onClick={scrollToHome}>Home</a></div>
      <div className="item"><a onClick={scrollToAbout}>About</a></div>
      <div className="item"><a onClick={scrollToProjects}>Projects</a></div>
      <div className="item"><a onClick={scrollToContact}>Contact</a></div>
    </div>
  );
}

export default Header;
