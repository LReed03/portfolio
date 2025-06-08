import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import Navbar from './Navbar';

function App() {
  return (
    <div>
      <div id="Home"></div>
      <Navbar/>
      <div className="home-head">
        <Home />
      </div>
      <div id="About">
        <About />
      </div>
      <div id="Projects">
        <Projects />
      </div>
      <div id="Contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}


export default App;
