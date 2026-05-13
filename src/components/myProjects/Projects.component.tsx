import { projects } from "./projects";
import { ProjectCard } from "./ProjectsCard.component";
 
export const Projects = () => {
  return (
    <section id="proyects" className="py-28 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Proyectos <span className="text-cyan-400">Propios</span>
        </h3>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          Cada proyecto incluye las tecnologías utilizadas y está desplegado en
          producción
        </p>
 
        <div className="grid lg:grid-cols-2 gap-8 p-5">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
 