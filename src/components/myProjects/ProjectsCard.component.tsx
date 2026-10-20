import { Download, ExternalLink, Github, Lock, Play, Star } from "lucide-react";
import { useState, type ReactNode } from "react";
import type { Project } from "./projects";
import { PrivatePreview } from "./PrivatePreview.component";

interface ProjectCardProps {
  project: Project;
}

interface ProjectLink {
  href: string;
  label: string;
  icon: ReactNode;
}

// Las imágenes están en dos tamaños: nombre-1200.webp y nombre-600.webp
const srcSetFor = (src: string) =>
  src.endsWith("-1200.webp")
    ? `${src.replace("-1200.webp", "-600.webp")} 600w, ${src} 1200w`
    : undefined;

const MOBILE_SIZES = "(min-width: 1024px) 220px, 40vw";
const DESKTOP_SIZES = "(min-width: 1024px) 560px, 100vw";

const primaryLinkClass =
  "flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:border-cyan-500 rounded-lg text-sm transition-all";
const secondaryLinkClass =
  "flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-slate-600 hover:border-cyan-500 hover:bg-slate-800 rounded-lg transition-all font-medium text-sm";

const getLinks = (project: Project): ProjectLink[] => {
  const github: ProjectLink | null = project.githubLink
    ? { href: project.githubLink, label: "Código", icon: <Github className="w-4 h-4" /> }
    : null;

  // En las apps con APK el código es el enlace principal y el APK, secundario
  if (project.isApk) {
    const apk: ProjectLink | null = project.apkLink
      ? { href: project.apkLink, label: "Descargar APK", icon: <Download className="w-4 h-4" /> }
      : null;
    return [github, apk].filter((link): link is ProjectLink => link !== null);
  }

  const demo: ProjectLink | null = project.demoLink
    ? {
        href: project.demoLink,
        label: project.linkLabel ?? "Ver proyecto",
        icon: <ExternalLink className="w-4 h-4" />,
      }
    : null;
  const playStore: ProjectLink | null = project.playStoreLink
    ? { href: project.playStoreLink, label: "Google Play", icon: <Play className="w-4 h-4" /> }
    : null;
  return [demo, playStore, github].filter((link): link is ProjectLink => link !== null);
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const allImages = [
    project.image,
    project.imageHover,
    project.image2,
    project.imageHover2,
  ].filter((src): src is string => Boolean(src));
  const fitClass = project.imageContain ? "object-contain" : "object-cover";
  const links = getLinks(project);

  return (
    <div
      className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl border ${
        project.featured ? "border-cyan-500/60" : "border-slate-700"
      } hover:border-cyan-500 transition-all duration-300 shadow-xl overflow-hidden group flex flex-col`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Imagenes */}
      <div className="relative overflow-hidden">
        {project.featured && (
          <span className="absolute top-3 left-3 z-10 flex items-center gap-1 px-3 py-1 bg-slate-900/80 text-cyan-400 border border-cyan-500/40 rounded-full text-sm font-medium">
            <Star className="w-3.5 h-3.5" />
            Destacado
          </span>
        )}
        {!project.image ? (
          <PrivatePreview note={project.privateNote} />
        ) : (
          <>
            {/* Con ratón: imagen que cambia al pasar por encima */}
            <div className="pointer-coarse:hidden">
              {project.isMobile ? (
                <div className="flex gap-3 p-4 bg-slate-900/50 justify-center">
                  <img
                    src={isHovered && project.imageHover ? project.imageHover : project.image}
                    srcSet={srcSetFor(isHovered && project.imageHover ? project.imageHover : project.image)}
                    sizes={MOBILE_SIZES}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className={`w-2/5 rounded-lg ${fitClass} object-top max-h-74 transition-all duration-500`}
                  />
                  {project.image2 && (
                    <img
                      src={isHovered && project.imageHover2 ? project.imageHover2 : project.image2}
                      srcSet={srcSetFor(isHovered && project.imageHover2 ? project.imageHover2 : project.image2)}
                      sizes={MOBILE_SIZES}
                      alt={`${project.title} - 2`}
                      loading="lazy"
                      decoding="async"
                      className={`w-2/5 rounded-lg ${fitClass} object-top max-h-74 transition-all duration-500`}
                    />
                  )}
                </div>
              ) : (
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={isHovered && project.imageHover ? project.imageHover : project.image}
                    srcSet={srcSetFor(isHovered && project.imageHover ? project.imageHover : project.image)}
                    sizes={DESKTOP_SIZES}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className={`w-full h-full ${fitClass} transition-all duration-500`}
                  />
                </div>
              )}
            </div>

            {/* En pantallas táctiles no hay hover: todas las capturas en fila con scroll horizontal */}
            <div
              className={`hidden pointer-coarse:flex gap-3 overflow-x-auto snap-x snap-mandatory ${
                project.isMobile ? "p-4 bg-slate-900/50" : ""
              }`}
            >
              {allImages.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  srcSet={srcSetFor(src)}
                  sizes={project.isMobile ? MOBILE_SIZES : DESKTOP_SIZES}
                  alt={`${project.title} - ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  className={
                    project.isMobile
                      ? `w-2/5 shrink-0 snap-start rounded-lg ${fitClass} object-top max-h-74`
                      : `w-[85%] shrink-0 snap-start ${fitClass}`
                  }
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Contenido */}
      <div className="p-6 lg:p-8 flex flex-col flex-1">
        <h4
          className={`text-xl md:text-2xl font-bold group-hover:text-cyan-400 transition-colors ${
            project.subtitle ? "mb-1" : "mb-3"
          }`}
        >
          {project.title}
        </h4>
        {project.subtitle && (
          <p className="text-base text-slate-400 mb-3">{project.subtitle}</p>
        )}
        <p className="text-base md:text-lg text-slate-300 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Highlights */}
        {project.highlights && (
          <ul className="space-y-2 mb-6">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex gap-2 text-base text-slate-300 leading-relaxed"
              >
                <span className="mt-2.5 w-1.5 h-1.5 shrink-0 rounded-full bg-cyan-400" />
                {highlight}
              </li>
            ))}
          </ul>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="font-mono px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm border border-cyan-500/30 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        {project.clientLabel ? (
          <div className="mt-auto flex items-center justify-center gap-2 px-4 py-2 bg-slate-900/50 text-slate-300 border border-slate-600 rounded-lg text-sm font-medium">
            <Lock className="w-4 h-4 text-cyan-400" />
            {project.clientLabel}
          </div>
        ) : (
          (links.length > 0 || project.playStoreComingSoon) && (
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-auto">
              {links.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={i === 0 ? primaryLinkClass : secondaryLinkClass}
                >
                  {link.icon}
                  {link.label}
                </a>
              ))}
              {!project.playStoreLink && project.playStoreComingSoon && (
                <span className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-dashed border-slate-700 text-slate-500 rounded-lg font-medium text-sm cursor-not-allowed">
                  <Play className="w-4 h-4" />
                  Google Play · Próximamente
                </span>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};
