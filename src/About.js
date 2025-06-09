import React from "react";
import './About.css';
import Reveal from "./Reveal";

function About(){
    return(
        <div className="about-container">
            <div className="about">
                <Reveal direction="left">
                    <img src="profile.jpg" alt="Headshot" className="pic"></img>
                </Reveal>
                <Reveal direction="right">
                    <div className="text">
                        <h2>About Me</h2>
                        <h5>Software Engineering Student</h5>
                        <p>Filler content for now fill this in later yuyuyuyuyuyuy</p>
                        <div className="link">
                            <a href="" className="resume">Resume</a>
                        </div>
                    </div>
                </Reveal>
            </div>
        </div>
    )
}

export default About;