import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-8 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          ¿Trabajamos <span className="text-cyan-400">Juntos?</span>
        </h3>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          Estoy disponible para proyectos freelance y oportunidades laborales.
          ¡Hablemos sobre tu próxima idea!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Info de contacto */}
          <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
            <h4 className="text-xl font-bold text-white mb-6">Contacto directo</h4>

            <div className="space-y-5">
              <a
                href="mailto:sergiospalvarez@hotmail.com"
                className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors group"
              >
                <div className="w-10 h-10 bg-cyan-500/10 border border-cyan-500/20 rounded-lg flex items-center justify-center group-hover:border-cyan-500/40 transition-colors">
                  <Mail className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Email</p>
                  <p className="text-sm">sergiospalvarez@hotmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/sergio-san-pedro-alvarez/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors group"
              >
                <div className="w-10 h-10 bg-cyan-500/10 border border-cyan-500/20 rounded-lg flex items-center justify-center group-hover:border-cyan-500/40 transition-colors">
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">LinkedIn</p>
                  <p className="text-sm">sergio-san-pedro-alvarez</p>
                </div>
              </a>

              <a
                href="https://github.com/SergioSanPedro90"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors group"
              >
                <div className="w-10 h-10 bg-cyan-500/10 border border-cyan-500/20 rounded-lg flex items-center justify-center group-hover:border-cyan-500/40 transition-colors">
                  <Github className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">GitHub</p>
                  <p className="text-sm">SergioSanPedro90</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 bg-cyan-500/10 border border-cyan-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Ubicación</p>
                  <p className="text-sm">Bilbao, País Vasco, España</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 flex flex-col justify-between">
            <div>
              <h4 className="text-xl font-bold text-white mb-4">¿Tienes un proyecto en mente?</h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Especializado en desarrollo web y móvil con React, TypeScript y C# .NET.
                Tanto si necesitas una landing page como una aplicación completa, hablemos.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-2.5 py-1 bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 rounded-md text-xs">Landing Pages</span>
                <span className="px-2.5 py-1 bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 rounded-md text-xs">Apps Web</span>
                <span className="px-2.5 py-1 bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 rounded-md text-xs">Apps Móviles</span>
                <span className="px-2.5 py-1 bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 rounded-md text-xs">Automatizaciones</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="mailto:sergiospalvarez@hotmail.com"
                className="w-full px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition-all transform hover:scale-[1.02] flex items-center justify-center shadow-lg text-sm"
              >
                <Mail className="w-4 h-4 mr-2" />
                Enviar Email
              </a>
              <a
                href="https://www.linkedin.com/in/sergio-san-pedro-alvarez/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-3 border-2 border-cyan-500/50 hover:bg-cyan-500/10 rounded-lg font-semibold transition-all flex items-center justify-center text-sm"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                Conectar en LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};