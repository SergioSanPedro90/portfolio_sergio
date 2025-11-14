import { Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero = ({ onNavigate }: HeroProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center pt-16">
        {/* Profile Image */}
        <div className="mb-8 inline-block">
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-slate-800 shadow-2xl bg-linear-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              {/* Reemplaza con: <img src="/tu-foto.jpg" alt="Sergio" className="w-full h-full rounded-full object-cover" /> */}
              <span className="text-5xl md:text-6xl font-bold text-white">S</span>
            </div>
          </div>
        </div>
        
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Full Stack Developer
        </h2>
        
        <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto px-4">
          Transformando ideas en experiencias digitales elegantes y funcionales
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 px-4">
          <button 
            onClick={() => onNavigate('proyectos')}
            className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            Ver Proyectos
          </button>
          <button 
            onClick={() => onNavigate('contacto')}
            className="px-8 py-3 border-2 border-cyan-500 hover:bg-cyan-500/10 rounded-lg font-semibold transition-all"
          >
            Contacto
          </button>
        </div>
        
        <div className="flex justify-center space-x-6">
          <a 
            href="https://github.com/SergioSanPedro90" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="#" 
            className="text-slate-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:tu@email.com" 
            className="text-slate-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};