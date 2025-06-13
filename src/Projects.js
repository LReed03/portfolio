import React from "react";
import './projects.css'
import ProjectItem from "./ProjectItem";

function Projects(){
    return(
        <div className="projects-container">
            <ProjectItem img={"powerlifting.png"} description = {"A full-stack application designed for strength athletes and coaches to log, analyze, and optimize powerlifting performance using data-driven insights."}/>
        </div>
    )
}

export default Projects;