
import { Project } from "./Project";

export function ProjectCard(props : any){

    function handleClick( project : Project ) {
        console.log("Project Id: " + project.id);
    }

    return (
        <div className="card">
            <img src={props.project.imageUrl} alt={props.project.name} />
            <section className="section dark">
                <h5 className="strong">
                    <strong>{props.project.name}</strong>
                </h5>
                <p>{formatDescription(props.project.description)}</p>
                <p>Budget : {props.project.budget.toLocaleString()}</p>
                <button onClick={()=>handleClick(props.project)}>
                    <span className="icon-edit "></span>
                    Edit
                </button>
            </section>
        </div>
  );
}


function formatDescription(description : string): string  {
    return description.slice(0,60);
}