import { PROJECTS } from "../data/data";
import ProjectCard from "./project-card";

export default function Projects() {
  return (
    <div className="mt-10">
      <hr className="my-5" />
      <div>
        <h4 className="text-2xl mb-5">Projects</h4>
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} project={project} css="mb-5" />
        ))}
      </div>
    </div>
  );
}
