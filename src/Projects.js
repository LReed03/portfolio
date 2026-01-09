import React from "react";
import './projects.css'
import ProjectItem from "./ProjectItem";
import courseTrack from './Images/coursetrack.png';
import powerlifting from './Images/powerlifting.png';
import ensfUml from './Images/ENSF380UML.png';
import fms from './Images/fms.png'


function Projects(){
    return(
        <div className="projects-container">
            <h2>Projects</h2>
            <ProjectItem img={fms}
            url={"https://github.com/LReed03/ENSF480-Final-Project"}
            description={"I developed a Flight Management System (FMS)–style desktop application that supports planning and managing flight operations through an interactive graphical interface. The system was designed to reflect real-world aviation software concerns, including role-based access control, authentication, and maintainable architecture."}
            title={"Flight Management Software"}/>
            <ProjectItem img={courseTrack}
            url={"https://course-track-fb2fa.web.app/"}
            description={"This project is a React-based productivity application with a Flask backend that helps students stay organized with their coursework. It features Firebase Authentication with server-side JWT validation to provide secure user access, a dynamic calendar for planning study sessions and deadlines, and a course management system that links tasks directly to specific classes. A task list makes it easy to track assignments and daily to-dos. Future updates will integrate PostgreSQL for persistent data storage and an AI-powered quiz generator to automatically create study materials."}
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