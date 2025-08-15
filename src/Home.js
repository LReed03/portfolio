import React from "react";
import './Home.css';
import Reveal from "./Reveal";

function Home(){
    const scrollToAbout = () => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    return(
        <div className="home">
            <div className="home-container">
                <Reveal direction="left">
                    <h2>Hi, I’m Landon Reed</h2>
                </Reveal>
                <Reveal direction="right">
                    <h2>Third-Year Software Engineering Student at the University of Calgary</h2>
                </Reveal>
                <Reveal direction="left">
                    <button className="scroll-btn" onClick={scrollToAbout}>
                    ↓ Learn More
                    </button>
                </Reveal>
            </div>
        </div>
    );
}

export default Home;
