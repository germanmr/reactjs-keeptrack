import { Project } from "./Project";

import {ProjectCard} from "./ProjectCard"
import { ProjectForm } from "./ProjectForm";

export interface ProjectListItem {
    id : number;
    name: string;
}

interface ProjectListProps {
    projects: Project[];
}
  
export function ProjectList({ projects }: ProjectListProps) {

    function handleClick(projectId : number) {
      console.log(projectId);
    }

    return (
          <div className="row">
            {projects.map((project : Project) => (
              <div key={project.id} className="cols-sm" onClick={()=>handleClick}>
                <ProjectCard project ={project} ></ProjectCard>
                <ProjectForm></ProjectForm>
              </div>
            ))}
          </div>
        );
  }

