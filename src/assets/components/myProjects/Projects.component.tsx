import { ExternalLink } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: 'Sistema de Gestión de Contactos',
      description: 'Aplicación full-stack con CRUD completo, autenticación JWT y arquitectura de componentes escalable.',
      tech: ['React', 'TypeScript', 'Flask', 'SQLAlchemy'],
      image: '🎯',
      link: '#'
    },
    {
      title: 'Automatización WhatsApp/Email',
      description: 'Sistema de recordatorios automatizados para Calendly usando Twilio y notificaciones por email.',
      tech: ['React', 'Flask', 'Twilio API', 'PostgreSQL'],
      image: '📱',
      link: '#'
    },
    {
      title: 'Landing Pages Inmobiliarias',
      description: 'Diseños responsive con efectos hover optimizados para móvil y desktop.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      image: '🏡',
      link: '#'
    },
    {
      title: 'Sistema de Biblioteca',
      description: 'Gestión completa de libros con backend Flask y autenticación de usuarios.',
      tech: ['React', 'Flask', 'SQLAlchemy', 'JWT'],
      image: '📚',
      link: '#'
    }
  ];

  return (
    <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Proyectos <span className="text-cyan-400">Destacados</span>
        </h3>
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-2 shadow-xl overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <div className="text-5xl md:text-6xl mb-4">{project.image}</div>
                <h4 className="text-xl md:text-2xl font-bold mb-3">{project.title}</h4>
                <p className="text-sm md:text-base text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                >
                  Ver proyecto <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};