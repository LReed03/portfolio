import React from "react";
import { Link as ScrollLink } from "react-scroll";
import './Header.css';

function Header() {

  // Next step here is to add a effect when I scroll into view of each part
  return (
    <div className="container">
      <ScrollLink className="item" to="home" spy activeClass="link-active">Home</ScrollLink>
      <ScrollLink className="item" to="about" spy activeClass="link-active" offset={-250}>About</ScrollLink>
      <ScrollLink className="item" to="projects" spy activeClass="link-active" offset={-250}>Projects</ScrollLink>
      <ScrollLink className="item" to="contact" spy activeClass="link-active" offset={-250}>Contact</ScrollLink>
    </div>
  );
}

export default Header;