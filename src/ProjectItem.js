import react from "react";

function ProjectItem(props){
    return(
        <div className="projectItem">
            <img src={props.img} ></img>
            <p>{props.description}</p>
        </div>
    )
}

export default ProjectItem;