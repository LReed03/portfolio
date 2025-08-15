import React from "react";
import './projects.css'
import ProjectItem from "./ProjectItem";
import courseTrack from './Images/coursetrack.png';
import powerlifting from './Images/powerlifting.png';
import ensfUml from './Images/ENSF380UML.png';


function Projects(){
    return(
        <div className="projects-container">
            <h2>Projects</h2>
            <ProjectItem img={courseTrack}
            description={"A full-stack productivity application designed to help students manage coursework, track assignments, and schedule study sessions. Built with React for an interactive UI and a Node.js/Express backend with PostgreSQL for persistent data storage. Features include a to-do list, course scheduler, and AI-powered quiz generator to enhance learning efficiency."}
            title={"Course Management & AI Study Assistant"}/>
            <ProjectItem img={powerlifting} 
            description = {"A full-stack application built to help strength athletes and coaches analyze competition preformance. This app fetches athlete data from openpowerlifting.org using Beautiful Soup in Python via Flask. The frontend UI is designed through React."} 
            url={"https://github.com/LReed03/powerlifting-analysis"}
            title={"Powerlifting Web App"}/>
            <ProjectItem img={ensfUml}
            description = {"Jave bases CLI application built to manage and track individuals affected by disasters. The database uses PostgreSQL relational database and include JUnit testing. Built for ENSF 380 Final Project. Grade: 95%"}
            url = {"https://github.com/LReed03/ENSF380FinalProject"}
            title = {"Disaster Victim Relief System"}/>
        </div>
    )
}

export default Projects;