import { ExternalLink } from 'lucide-react';
import { experiencesList } from './experience';

export const ExperienceComponent = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h3 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Experiencia{' '}
          <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Real
          </span>
        </h3>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Línea vertical central */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-cyan-500/20" />

          <div className="space-y-12">
            {experiencesList.map((exp, index) => (
              <div key={index} className="relative pl-16 md:pl-20">
                {/* Dot en la línea */}
                <div className="absolute left-4 md:left-6 top-1 w-4 h-4 rounded-full bg-cyan-400 border-4 border-slate-900 z-10 shadow-[0_0_8px_rgba(34,211,238,0.4)]" />

                {/* Card */}
                <div className="mt-6 bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <span className="text-xs text-cyan-400 tracking-wider">{exp.period}</span>
                      <h4 className="text-xl font-bold text-white">
                        {exp.title}
                      </h4>
                      <p className="text-cyan-400 text-sm font-medium">
                        {exp.role}
                      </p>
                      <p className="text-slate-400 text-xs mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 p-2 text-slate-400 hover:text-cyan-400 transition-colors"
                        title="Ver proyecto"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 rounded-md text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};