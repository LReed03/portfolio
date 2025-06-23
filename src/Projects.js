import React from "react";
import './projects.css'
import ProjectItem from "./ProjectItem";

function Projects(){
    return(
        <div className="projects-container">
            <h2>Projects</h2>
            <ProjectItem img={"powerlifting.png"} 
            description = {"A full-stack application built to help strength athletes and coaches analyze competition preformance. This app fetches athlete data from openpowerlifting.org using Beautiful Soup in Python via Flask. The frontend UI is designed through React."} 
            url={"https://github.com/LReed03/powerlifting-analysis"}
            title={"Powerlifting Web App"}/>
            <ProjectItem img={"ENSF380UML.png"}
            description = {"Jave bases CLI application built to manage and track individuals affected by disasters. The database uses PostgreSQL relational database and include JUnit testing. Built for ENSF 380 Final Project. Grade: 95%"}
            url = {"https://github.com/LReed03/ENSF380FinalProject"}
            title = {"Disaster Victim Relief System"}/>
        </div>
    )
}

export default Projects;