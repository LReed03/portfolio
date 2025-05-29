import React, { useRef } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <Header
        scrollToHome={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        scrollToAbout={() => aboutRef.current.scrollIntoView({ behavior: 'smooth' })}
        scrollToProjects={() => projectsRef.current.scrollIntoView({ behavior: 'smooth' })}
        scrollToContact={() => contactRef.current.scrollIntoView({ behavior: 'smooth' })}
      />

      <div ref={homeRef}><Home /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={projectsRef}><Projects /></div>
      <div ref={contactRef}><Contact /></div>
      <Footer/>
    </div>
  );
}

export default App;
