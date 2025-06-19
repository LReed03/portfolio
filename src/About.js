import React from "react";
import './About.css';
import Reveal from "./Reveal";

function About(){
    return(
        <div className="about-container">
            <div className="about">
                <img src="profile.jpg" alt="Headshot" className="pic"></img>
                <div className="text">
                    <h2>About Me</h2>
                    <h5>Software Engineering Student</h5>
                    <p>Hey! I’m a Software Engineering student who’s into building cool and useful things with code.
                        Right now, I’m learning a bit of everything — from front-end stuff like HTML/CSS and JavaScript to back-end tools like Java and databases. 
                        I’m especially into creating apps that are actually fun or helpful to use.
                        I’m the kind of person who loves figuring things out, whether it’s fixing a bug that won’t go away or 
                        learning a new tech stack just to see what it can do.
                        Let’s build something awesome!</p>
                    <div className="link">
                        <a href="" className="resume">Resume</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;