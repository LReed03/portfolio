import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";

const IDS = ["Home", "About", "Projects", "Contact"];

function Navbar() {
  const [active, setActive] = useState(IDS[0]);
  const headerRef = useRef(null);
  const sectionsRef = useRef([]);

  const getScroller = () => document.querySelector("[data-scroll-root]") || window;

  const getScrollTop = (scroller) =>
    scroller === window
      ? window.pageYOffset || document.documentElement.scrollTop
      : scroller.scrollTop;

  const getViewportH = (scroller) =>
    scroller === window ? window.innerHeight : scroller.clientHeight;

  const getScrollH = (scroller) =>
    scroller === window ? document.documentElement.scrollHeight : scroller.scrollHeight;

  const getAbsTop = (el, scroller) => {
    const r = el.getBoundingClientRect();
    const base = scroller === window ? 0 : scroller.getBoundingClientRect().top;
    const sTop = getScrollTop(scroller);
    return r.top - base + sTop;
  };

  useEffect(() => {
    const scroller = getScroller();

    const measure = () => {
      sectionsRef.current = IDS.map((id) => {
        const el = document.getElementById(id);
        return el ? { id, el } : null;
      }).filter(Boolean);
    };

    const pick = () => {
      const navH = headerRef.current?.getBoundingClientRect().height || 0;
      const sTop = getScrollTop(scroller);
      const vH = getViewportH(scroller);
      const sH = getScrollH(scroller);

      const probeY = sTop + navH + vH * 0.25;

      let current = IDS[0];

      for (const { id, el } of sectionsRef.current) {
        const top = getAbsTop(el, scroller);
        if (probeY >= top - 1) current = id; 
      }


      if (sTop <= 1) current = IDS[0]; 
      if (sTop + vH >= sH - 1) current = IDS[IDS.length - 1]; 

      if (current !== active) setActive(current);
    };

    const onScroll = () => {
      if (onScroll.raf) cancelAnimationFrame(onScroll.raf);
      onScroll.raf = requestAnimationFrame(pick);
    };

    const onResize = () => {
      measure();
      pick();
    };

    measure();
    pick();

    const scrollTarget = scroller === window ? window : scroller;
    scrollTarget.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("load", onResize);

    const ro = new ResizeObserver(pick);
    if (headerRef.current) ro.observe(headerRef.current);

    return () => {
      scrollTarget.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", onResize);
      ro.disconnect();
      if (onScroll.raf) cancelAnimationFrame(onScroll.raf);
    };
  }, [active]);

  return (
    <header
      ref={headerRef}
      className="container"
      style={{ position: "sticky", top: 0, height: "10vh", zIndex: 100 }}
    >
      <nav>
        {IDS.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={active === id ? "active" : ""}
            onClick={() => setActive(id)} 
          >
            {id}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
