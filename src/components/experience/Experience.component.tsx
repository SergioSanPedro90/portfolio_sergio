import { ArrowRight, Tally1 } from 'lucide-react';
import { experiencesList } from './experience';
import './experience.css';

export const ExperienceComponent = () => {
  const chronologicalExperiences = experiencesList;

  const colors = [
    { circle: 'bg-emerald-400', border: 'border-emerald-400', text: 'text-emerald-400', line: 'bg-emerald-400' },
    { circle: 'bg-amber-400', border: 'border-amber-400', text: 'text-amber-400', line: 'bg-amber-400' },
    { circle: 'bg-blue-400', border: 'border-blue-400', text: 'text-blue-400', line: 'bg-blue-400' },
  ];

  return (
    <section id="experience" className="py-30 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h3 className="text-3xl md:text-4xl font-bold mb-20 text-center">
          MI EXPERIENCIA{' '}
          <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            REAL
          </span>{' '}
        </h3>

        {/* Desktop - Horizontal Timeline */}
        <div className="hidden lg:block">
          <div className="relative w-full mx-auto px-4">
            {/* Main horizontal line */}
            <div className="absolute top-12 left-8 right-8 h-1 bg-linear-to-r from-emerald-400 via-amber-400 to-blue-400 opacity-50"></div>

            {/* Arrow */}
            <div className="absolute top-12.5 right-10 transform translate-x-full -translate-y-1/2">
              <ArrowRight className='size-10 text-blue-400/65' />
            </div>

            {/* End Cap */}
            <div className="absolute top-12.5 left-18 transform -translate-x-full -translate-y-1/2">
              <Tally1 className='size-12 text-emerald-400 opacity-50' />
            </div>

            {/* Timeline items */}
            <div className="grid grid-cols-3 gap-6 xl:gap-8">
              {chronologicalExperiences.map((exp, index) => {
                const color = colors[index];

                return (
                  <div key={index} className="relative pt-24">
                    {/* Year Circle on the line */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                      <div className={`w-24 h-24 ${color.circle} rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-slate-900 relative z-10`}>
                        <span className="text-xl font-bold text-slate-900">
                          {exp.year}
                        </span>
                      </div>
                    </div>

                    {/* Vertical connector line */}
                    <div className={`absolute top-24 left-1/2 w-1 h-20 ${color.line} opacity-50 transform -translate-x-1/2`}></div>

                    {/* Card below with animated border */}
                    <div className={`card-with-trace bg-slate-800/90 backdrop-blur-sm rounded-xl p-6 border-2 ${color.border} shadow-xl hover:scale-105 transition-all duration-300 mt-8`}>
                      <h4 className="text-xl font-bold text-white mb-2">
                        {exp.title}
                      </h4>
                      <p className={`${color.text} font-semibold text-sm mb-3`}>
                        {exp.company}
                      </p>

                      <div className="flex items-center gap-2 mb-3 text-slate-400 text-xs">
                        <span>{exp.subtitle}</span>
                      </div>

                      <p className="text-slate-300 text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className={`px-2 py-1 bg-slate-700/50 ${color.text} rounded text-xs font-medium`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet - Vertical Timeline */}
        <div className="lg:hidden max-w-2xl mx-auto space-y-8">
          {chronologicalExperiences.map((exp, index) => {
            const color = colors[index];

            return (
              <div key={index} className="flex items-start gap-4">
                {/* Year Circle */}
                <div className={`shrink-0 w-16 h-16 ${color.circle} rounded-full flex items-center justify-center shadow-xl border-4 border-slate-900`}>
                  <span className="text-xs font-bold text-slate-900">
                    {exp.year}
                  </span>
                </div>

                {/* Card */}
                <div className={`flex-1 bg-slate-800/90 backdrop-blur-sm rounded-xl p-5 border-2 ${color.border} shadow-xl`}>
                  <h4 className="text-lg font-bold text-white mb-1">
                    {exp.title}
                  </h4>
                  <p className={`${color.text} font-semibold text-sm mb-2`}>
                    {exp.company}
                  </p>
                  <div className="flex items-center gap-2 mb-3 text-slate-400 text-xs">
                    <span>{exp.subtitle}</span>
                  </div>
                  <p className="text-slate-300 text-sm mb-3 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-2 py-1 bg-slate-700/50 ${color.text} rounded text-xs`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};