import React from "react";
import './projects.css'
import ProjectItem from "./ProjectItem";
import courseTrack from './Images/coursetrack.png';
import powerlifting from './Images/powerlifting.png';
import ensfUml from './Images/ENSF380UML.png';
import fms from './Images/fms.png'
import iq from './Images/iqtestapp.png'
import sb from './Images/sustainabuilder.png'


function Projects(){
    return(
        <div className="projects-container">
            <h2>Projects</h2>
            <ProjectItem img={sb}
            url={"https://github.com/LReed03/seng401-city-sim"}
            description={"A Godot 4 and GDScript tile-based city builder paired with a Node.js Express API that registers players, validates logins, and save/loads full city state to PostgreSQL as JSONB in fixed save slots using plpgsql routines and bcrypt-style password hashing. The sim rolls up sustainability, population, economy, tax, upkeep, unemployment, and happiness from placed roads, housing, parks, factories, and water—factory revenue depends on worker assignment, and weak morale cuts income and can shrink population or penalize new housing—supporting play aligned with UN SDG 11. The client covers main menu, login/signup, load and save, tutorial, pause and settings, and the in-game build HUD with objectives, milestones, and achievements."}
            title={"SustainaBuilder"}/>
            <ProjectItem img={iq}
            url={"https://github.com/VLukeC/iqtestapp"}
            description = {"A React Router (TypeScript) and Tailwind front end paired with a Flask API that uses Google Gemini to generate text-only multiple-choice IQ-style questions and to produce scored results with an estimated IQ and explanation. Supabase handles authentication and stores profiles, user quiz preferences, and completed attempts in PostgreSQL with row-level policies so each user only sees their own data, with routes for home, quiz, results, history, account, login, signup, and password reset."}
            title={"AI-Generated IQ Test"}/>
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