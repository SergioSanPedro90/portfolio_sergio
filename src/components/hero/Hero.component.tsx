import { Github, Linkedin, Mail } from "lucide-react";

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
                <div className="absolute inset-0 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-slate-800 shadow-2xl overflow-hidden mx-auto">
                  <img
                    src="/images/img_curriculum.jpg"
                    alt="Sergio"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold pb-5 bg-linear-to-r from-cyan-400 to-blue-500  bg-clip-text text-transparent text-center">
  Sergio
</h1>

           <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mb-6 text-center">
  Full Stack Developer
</h2>

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

            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Después de{" "}
                <span className="text-white font-semibold">
                  12 años como matricero ajustador
                </span>{" "}
                en la industria metalúrgica, hice la transición al desarrollo de
                software en 2025 tras completar el bootcamp de{" "}
                <span className="text-cyan-400">4Geeks Academy</span>.
              </p>

              <p>
                Mi experiencia previa me ha enseñado el valor de la{" "}
                <span className="text-white font-semibold">
                  precisión, la resolución metódica de problemas y la atención
                  al detalle
                </span>
                , cualidades que ahora aplico al desarrollo de aplicaciones web.
              </p>

              <p>
                Me especializo en crear soluciones full-stack con{" "}
                <span className="text-cyan-400 font-semibold">
                  React, TypeScript, Python, JavaScript
                </span>
                , con enfoque en diseño responsive y automatización de procesos.
              </p>
            </div>

            {/* botones */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                onClick={() => onNavigate("proyects")}
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
          </div>
        </div>
      </div>
    </section>
  );
};
