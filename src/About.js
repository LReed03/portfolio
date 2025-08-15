import React from "react";
import './About.css';
import Reveal from "./Reveal";
import profile from './Images/profile.jpg';

function About(){
    return(
        <div className="about-container" id="about">
            <div className="about">
                <h2>About Me</h2>
                <Reveal direction="left">
                    <img src={profile} alt="Headshot" className="pic"></img>
                </Reveal>
                <Reveal direction="right">
                    <div className="text">
                        <h5>Hi, I'm' Landon Reed!</h5>
                        <p>I’m a third-year Software Engineering student at the University of Calgary passionate about building practical, user-focused applications. I specialize in full-stack development with React, Flask, and Java, with growing expertise in PostgreSQL and AI-assisted tools. I love transforming ideas into clean, efficient, and intuitive software — from the first line of code to the final deployment.
                            <br/><br/>When I’m not coding, I’m often training in the gym or exploring creative outlets like Lego and music, which inspire my problem-solving and attention to detail.
                            <br/><br/>Explore my projects or view my resume to learn more..</p>
                        <div className="link">
                            <a href="resume.pdf" className="resume" target="_blank">Resume</a>
                        </div>
                    </div>
                </Reveal>
            </div>
        </div>
    )
}

export default About;