import { Code2, Database } from 'lucide-react';

export const Skills = () => {
  const skills = {
    frontend: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML/CSS'],
    backend: ['Python', 'Flask', 'SQLAlchemy', 'REST APIs']
  };

  return (
    <section id="habilidades" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Habilidades <span className="text-cyan-400">Técnicas</span>
        </h3>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Frontend */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-slate-700 shadow-xl">
            <div className="flex items-center mb-6">
              <Code2 className="w-7 h-7 md:w-8 md:h-8 text-cyan-400 mr-3" />
              <h4 className="text-xl md:text-2xl font-bold">Frontend</h4>
            </div>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {skills.frontend.map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-2 bg-cyan-500/10 text-cyan-400 rounded-lg text-xs md:text-sm border border-cyan-500/30 hover:bg-cyan-500/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-slate-700 shadow-xl">
            <div className="flex items-center mb-6">
              <Database className="w-7 h-7 md:w-8 md:h-8 text-purple-400 mr-3" />
              <h4 className="text-xl md:text-2xl font-bold">Backend</h4>
            </div>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {skills.backend.map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-2 bg-purple-500/10 text-purple-400 rounded-lg text-xs md:text-sm border border-purple-500/30 hover:bg-purple-500/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};