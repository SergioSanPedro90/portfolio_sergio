import { projects } from "./projects";
import { ProjectCard } from "./ProjectsCard.component";
 
export const Projects = () => {
  return (
    <section id="projects" className="py-28 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Proyectos
        </h3>
 
        <div className="grid lg:grid-cols-2 gap-8 p-5">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
 