import { ExternalLink, Github, Lock, X } from "lucide-react";
import { useState } from "react";
import { projects } from "./projects";

export const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [showConfidentialModal, setShowConfidentialModal] = useState(false);

  return (
    <section id="proyects" className="py-30 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          PROYECTOS <span className="text-cyan-400">DESTACADOS</span>
        </h3>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          Cada proyecto incluye las tecnologías utilizadas y está desplegado en
          producción
        </p>

        <div className="grid lg:grid-cols-2 gap-8 p-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 shadow-xl overflow-hidden group"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Imagenes */}
              <div className="relative h-auto overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br"></div>

                {/* Projectos */}
                <div className="relative h-full w-full ">
                  <div className="relative w-full">
                    {/* Laptop Frame */}
                    <div className="relative rounded-lg border-slate-700">
                      {/* Screen */}
                      <div className="rounded-xl overflow-hidden">
                        <img
                          src={
                            hoveredProject === index && project.imageHover
                              ? project.imageHover
                              : project.image
                          }
                          alt={project.title}
                          className="w-full h-full object-cover transition-all duration-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6 lg:p-8">
                <h4 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm md:text-base text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs border border-cyan-500/30 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <button
                    onClick={(e) => {
                      if (project.isConfidential) {
                        e.preventDefault();
                        setShowConfidentialModal(true);
                      } else {
                        window.open(project.demoLink, "_blank");
                      }
                    }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-all font-medium text-sm cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ver proyecto
                  </button>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-slate-600 hover:border-cyan-500 hover:bg-slate-800 rounded-lg transition-all font-medium text-sm"
                  >
                    <Github className="w-4 h-4" />
                    Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL CONFIDENCIAL */}
        {showConfidentialModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
            <div className="bg-slate-800 border-2 border-cyan-500/50 rounded-2xl p-8 max-w-md w-full shadow-2xl">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                    <Lock className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white">
                    Proyecto Confidencial
                  </h4>
                </div>
                <button
                  onClick={() => setShowConfidentialModal(false)}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <p className="text-slate-300 leading-relaxed mb-6">
                Por motivos de{" "}
                <span className="text-cyan-400 font-semibold">
                  confidencialidad
                </span>{" "}
                con el cliente, este proyecto aún no puede ser mostrado
                públicamente en este momento.
              </p>

              <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 mb-6">
                <p className="text-sm text-slate-400">
                  Si estás interesado en conocer más detalles sobre este
                  proyecto, no dudes en contactarme directamente.
                </p>
              </div>

              <button
                onClick={() => setShowConfidentialModal(false)}
                className="cursor-pointer w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition-all"
              >
                Entendido
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
