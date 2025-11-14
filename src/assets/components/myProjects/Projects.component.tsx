import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';
import { projects } from './projects';



export const Projects = () => {

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Proyectos <span className="text-cyan-400">Destacados</span>
        </h3>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          Cada proyecto incluye las tecnologías utilizadas y está desplegado en producción
        </p>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 shadow-xl overflow-hidden group"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Image Container with Mockup Effect */}
              <div className="relative h-64 bg-slate-900/50 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 to-purple-500/10"></div>
                
                {/* Project Screenshot in Laptop Mockup */}
                <div className="relative h-full flex items-center justify-center p-6">
                  <div className="relative w-full max-w-md">
                    {/* Laptop Frame */}
                    <div className="relative bg-slate-800 rounded-lg p-1 shadow-2xl border-2 border-slate-700">
                      {/* Screen */}
                      <div className="bg-slate-900 rounded-md overflow-hidden aspect-video">
                        <img 
                          src={hoveredProject === index && project.imageHover ? project.imageHover : project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-top transition-all duration-500"
                          onError={(e) => {
                            // Fallback si no existe la imagen
                            e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23334155"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="20" fill="%2394a3b8" text-anchor="middle" dominant-baseline="middle"%3EImagen en desarrollo%3C/text%3E%3C/svg%3E';
                          }}
                        />
                      </div>
                      {/* Keyboard base */}
                      <div className="h-2 bg-slate-700 rounded-b-lg mt-1"></div>
                    </div>
                  </div>
                </div>

                {/* Hover indicator */}
                {project.imageHover && (
                  <div className="absolute top-4 right-4 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/50 text-cyan-400 text-xs px-3 py-1 rounded-full">
                    Hover para ver demo
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
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
                  <a 
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-all font-medium text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ver proyecto
                  </a>
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
      </div>
    </section>
  );
};