import { Download, Github, Linkedin, Mail } from "lucide-react";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero = ({ onNavigate }: HeroProps) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full pt-16">
        <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-16">

          {/* izquierda -- imagen y nombre */}
          <div className="flex flex-col items-center mt-7">
            {/* Profile Image */}
            <div className="mb-8 inline-block">
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-50 motion-safe:animate-pulse"></div>
                <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-slate-800 shadow-2xl overflow-hidden mx-auto">
                  <img
                    src="/images/img_curriculum.webp"
                    alt="Sergio San Pedro Álvarez"
                    width={600}
                    height={800}
                    fetchPriority="high"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl text-balance font-bold pb-5 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-center">
              Sergio San Pedro Álvarez
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mb-3 text-center">
              Full Stack Developer
            </h2>

            <p className="font-mono text-base text-balance text-cyan-400 mb-6 text-center">
              React · React Native · Java / Spring Boot · .NET
            </p>

            {/* links */}
            <div className="flex justify-center space-x-4 mb-8">
              <a
                href="https://github.com/SergioSanPedro90"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500 rounded-lg transition-all transform hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sergio-san-pedro-alvarez/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500 rounded-lg transition-all transform hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:sergiospalvarez@hotmail.com"
                className="p-3 bg-slate-800/50 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500 rounded-lg transition-all transform hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* derecha --  sobre mi */}
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-cyan-400">
              Sobre mí
            </h3>

            <div className="space-y-4 text-base md:text-lg text-slate-300 leading-relaxed">
              <p>
                Full Stack Developer con React, React Native y TypeScript en
                frontend y Java/Spring Boot en backend, con experiencia también
                en C# .NET con Clean Architecture. Trabajo como freelance en el
                frontend web y móvil de un software de gestión que un taller de
                carrocería y pintura de Barcelona usa a diario, y he creado en
                solitario GurePintxo, una app móvil con backend propio en Spring
                Boot, ahora en pruebas en Google Play.
              </p>

              <p>
                Antes de dedicarme al desarrollo trabajé 13 años como matricero
                en Gestamp: ajuste de moldes con tolerancias exigentes y puesta
                a punto en plantas de clientes en España y en el extranjero. De
                ahí vienen mi rigor y la costumbre de entregar cosas que
                funcionan a la primera.
              </p>

              <p>
                Busco incorporarme a un equipo de desarrollo, con disponibilidad
                para trasladarme a cualquier ciudad de España.
              </p>
            </div>

            {/* botones */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                onClick={() => onNavigate("projects")}
                className="cursor-pointer flex-1 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              >
                Ver Proyectos
              </button>
              <button
                onClick={() => onNavigate("contact")}
                className="cursor-pointer flex-1 px-6 py-3 border-2 border-cyan-500 hover:bg-cyan-500/10 rounded-lg font-semibold transition-all"
              >
                Contactar
              </button>
            </div>
            <a
              href="/cv/CV_Sergio_San_Pedro.pdf"
              download
              className="mt-4 flex items-center justify-center gap-2 px-6 py-3 border-2 border-slate-600 hover:border-cyan-500 hover:bg-slate-800 rounded-lg font-semibold transition-all"
            >
              <Download className="w-5 h-5" />
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
