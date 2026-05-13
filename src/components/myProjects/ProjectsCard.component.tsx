import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import type { Project } from "./projects";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 shadow-xl overflow-hidden group flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Imagenes */}
      <div className="relative overflow-hidden">
        {project.isMobile ? (
          <div className="flex gap-3 p-4 bg-slate-900/50 justify-center">
            <img
              src={
                isHovered && project.imageHover
                  ? project.imageHover
                  : project.image
              }
              alt={project.title}
              className="w-2/5 rounded-lg object-cover object-top max-h-74 transition-all duration-500"
            />
            {project.image2 && (
              <img
                src={
                  isHovered && project.imageHover2
                    ? project.imageHover2
                    : project.image2
                }
                alt={`${project.title} - 2`}
                className="w-2/5 rounded-lg object-cover object-top max-h-74 transition-all duration-500"
              />
            )}
          </div>
        ) : (
          <div className="rounded-xl overflow-hidden">
            <img
              src={
                isHovered && project.imageHover
                  ? project.imageHover
                  : project.image
              }
              alt={project.title}
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="p-6 lg:p-8 flex flex-col flex-1">
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
        <div className="flex gap-4 mt-auto">
          <button
            onClick={() =>
              window.open(
                project.isApk ? project.apkLink : project.demoLink,
                "_blank"
              )
            }
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:border-cyan-500 rounded-lg text-xs transition-all cursor-pointer"
          >
            <ExternalLink className="w-4 h-4" />
            {project.isApk ? "Descargar APK" : "Ver proyecto"}
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
  );
};