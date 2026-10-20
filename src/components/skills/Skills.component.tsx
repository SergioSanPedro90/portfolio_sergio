import { BookOpen, Code2, Database, Server, Smartphone, Wrench, type LucideIcon } from 'lucide-react';

interface SkillGroup {
  title: string;
  icon: LucideIcon;
  skills: string[];
  // Grupo secundario: se pinta más apagado
  basic?: boolean;
}

const skillGroups: SkillGroup[] = [
  { title: 'Frontend', icon: Code2, skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'] },
  { title: 'Móvil', icon: Smartphone, skills: ['React Native', 'Expo', 'Expo Router', 'EAS', 'NativeWind'] },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'C# .NET', 'Clean Architecture', 'APIs REST'],
  },
  { title: 'Bases de datos', icon: Database, skills: ['MySQL', 'PostgreSQL', 'Supabase'] },
  { title: 'Herramientas', icon: Wrench, skills: ['Git/GitHub', 'Docker (básico)', 'Railway', 'Vercel', 'Netlify'] },
  { title: 'Conocimientos básicos', icon: BookOpen, skills: ['Python', 'Flask'], basic: true },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Habilidades <span className="text-cyan-400">Técnicas</span>
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map(({ title, icon: Icon, skills, basic }) => (
            <div
              key={title}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-5 border border-slate-700"
            >
              <div className="flex items-center mb-3">
                <Icon className={`w-5 h-5 mr-2 ${basic ? 'text-slate-400' : 'text-cyan-400'}`} />
                <h4 className="text-lg font-bold">{title}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className={
                      basic
                        ? 'font-mono px-2.5 py-1 bg-slate-700/30 text-slate-300 rounded-md text-sm border border-slate-600'
                        : 'font-mono px-2.5 py-1 bg-cyan-500/10 text-cyan-400 rounded-md text-sm border border-cyan-500/30 hover:bg-cyan-500/20 transition-colors'
                    }
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
