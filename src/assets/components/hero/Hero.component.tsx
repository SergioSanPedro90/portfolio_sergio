import { Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero = ({ onNavigate }: HeroProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image and Name */}
          <div className="text-center lg:text-left">
            {/* Profile Image */}
            <div className="mb-8 inline-block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-slate-800 shadow-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mx-auto lg:mx-0">
                  {/* Reemplaza con: <img src="/tu-foto.jpg" alt="Sergio" className="w-full h-full rounded-full object-cover" /> */}
                  <span className="text-6xl md:text-7xl font-bold text-white">S</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Sergio
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mb-6">
              Full Stack Developer
            </h2>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4 mb-8">
              <a 
                href="https://github.com/SergioSanPedro90" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-slate-800/50 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500 rounded-lg transition-all transform hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-3 bg-slate-800/50 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500 rounded-lg transition-all transform hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:tu@email.com" 
                className="p-3 bg-slate-800/50 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500 rounded-lg transition-all transform hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right side - About text */}
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-cyan-400">
              Sobre mí
            </h3>
            
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Después de <span className="text-white font-semibold">12 años como matricero ajustador</span> en la industria metalúrgica, hice la transición al desarrollo de software en 2024 tras completar el bootcamp de <span className="text-cyan-400">4Geeks Academy</span>.
              </p>
              
              <p>
                Mi experiencia previa me ha enseñado el valor de la <span className="text-white font-semibold">precisión, la resolución metódica de problemas y la atención al detalle</span>, cualidades que ahora aplico al desarrollo de aplicaciones web.
              </p>
              
              <p>
                Me especializo en crear soluciones full-stack con <span className="text-cyan-400 font-semibold">React, TypeScript y Python</span>, con enfoque en diseño responsive y automatización de procesos.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button 
                onClick={() => onNavigate('proyectos')}
                className="flex-1 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              >
                Ver Proyectos
              </button>
              <button 
                onClick={() => onNavigate('contacto')}
                className="flex-1 px-6 py-3 border-2 border-cyan-500 hover:bg-cyan-500/10 rounded-lg font-semibold transition-all"
              >
                Contactar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};