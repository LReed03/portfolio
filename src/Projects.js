import React from "react";
import './projects.css'
import ProjectItem from "./ProjectItem";

function Projects(){
    return(
        <div className="projects-container">
            <ProjectItem img={"powerlifting.png"} description = {"A full-stack application designed for strength athletes and coaches to log, analyze, and optimize powerlifting performance using data-driven insights."} url={"https://github.com/LReed03/powerlifting-analysis"}/>
        </div>
    )
}

export default Projects;