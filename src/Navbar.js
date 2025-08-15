import React, { useEffect, useState } from "react";
import "./Navbar.css";

const menus = ["Home", "About", "Projects", "Contact"];

function Navbar() {
  const [activeSection, setActiveSection] = useState(menus[0]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-80px 0px -40% 0px", 
      threshold: [0.15, 0.3, 0.6],      
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, options);

    const sections = menus
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    sections.forEach((el) => observer.observe(el));
    return () => sections.forEach((el) => observer.unobserve(el));
  }, []); 

  return (
    <header className="container">
      <nav>
        {menus.map((menu) => (
          <a
            key={menu}
            href={`#${menu}`}
            className={activeSection === menu ? "active" : ""}
          >
            {menu}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
