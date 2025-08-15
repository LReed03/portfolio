import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";

const menus = ["Home", "About", "Projects", "Contact"];

function Navbar() {
  const [activeSection, setActiveSection] = useState(menus[0]);
  const ratiosRef = useRef({});
  const headerRef = useRef(null);

  useEffect(() => {
    const navH = headerRef.current ? headerRef.current.offsetHeight : 0;

    const thresholds = Array.from({ length: 21 }, (_, i) => i / 20);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratiosRef.current[entry.target.id] = entry.intersectionRatio;
        });


        let bestId = activeSection;
        let bestRatio = -1;
        for (const id of menus) {
          const r = ratiosRef.current[id] ?? -1;
          if (r > bestRatio) {
            bestRatio = r;
            bestId = id;
          }
        }

        const nearBottom =
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 2;
        if (nearBottom) bestId = menus[menus.length - 1];

        if (bestId !== activeSection) setActiveSection(bestId);
      },
      {
        root: null,
        rootMargin: `-${navH}px 0px 0px 0px`, 
        threshold: thresholds,
      }
    );

    const sections = menus
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    sections.forEach((el) => observer.observe(el));
    return () => {
      sections.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []); 

  return (
    <header className="container" ref={headerRef} style={{ height: "10vh", position: "sticky", top: 0, zIndex: 100 }}>
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
