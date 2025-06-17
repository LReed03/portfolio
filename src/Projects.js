import React from "react";
import './projects.css'
import ProjectItem from "./ProjectItem";

function Projects(){
    return(
        <div className="projects-container">
            <h2>Projects</h2>
            <ProjectItem img={"powerlifting.png"} 
            description = {"A full-stack application designed for strength athletes and coaches to log, analyze, and optimize powerlifting performance using data-driven insights."} 
            url={"https://github.com/LReed03/powerlifting-analysis"}
            title={"Powerlifting Web App"}/>
            <ProjectItem img={""}
            description = {"CRUD STUFF"}
            url = {"https://github.com/LReed03/ENSF380FinalProject"}
            title = {"Disaster Victim Relief System"}/>
        </div>
    )
}

export default Projects;