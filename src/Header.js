import React from "react";
import './Header.css';

function Header(props) {

  // Next step here is to add a effect when I scroll into view of each part
  return (
    <div className="container">
      <a href="#home" className={props.active === 'home' ? 'active' : ''}>Home</a>
      <a href="#about" className={props.active === 'about' ? 'active' : ''}>About</a>
      <a href="#projects" className={props.active === 'projects' ? 'active' : ''}>Projects</a>
      <a href="#contact" className={props.active === 'contact' ? 'active' : ''}>Contact</a>
    </div>
  );
}

export default Header;