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
            description={"A React-based productivity application with a Flask backend that helps students manage coursework, track assignments, and organize schedules. Features include a dynamic calendar for planning study sessions, a course management system that links tasks and to-do items directly to specific classes, and a task list for efficient tracking. Future updates will integrate PostgreSQL for persistent storage and AI-powered quiz generation to enhance learning efficiency."}
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