import react from "react";
import "./ProjectItem.css";

function ProjectItem(props){
    return(
        <div className="projectItem">
            <h3>{props.title}</h3>
            <a href={props.url}><img src={props.img} ></img></a>
            <p>{props.description}</p>
        </div>
    )
}

export default ProjectItem;