import { Download, Mail, Github, Linkedin, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-12 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          ¿<span className="text-cyan-400">Hablamos?</span>
        </h3>

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
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="text-base">sergiospalvarez@hotmail.com</p>
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
                  <p className="text-sm text-slate-500">LinkedIn</p>
                  <p className="text-base">sergio-san-pedro-alvarez</p>
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
                  <p className="text-sm text-slate-500">GitHub</p>
                  <p className="text-base">SergioSanPedro90</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 bg-cyan-500/10 border border-cyan-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Ubicación</p>
                  <p className="text-base">Bilbao, País Vasco, España</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 flex flex-col justify-between">
            <div>
              <h4 className="text-xl font-bold text-white mb-4">¿Hablamos?</h4>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8">
                Busco incorporarme a un equipo de desarrollo. Disponible para
                trasladarme a cualquier ciudad de España y con incorporación
                inmediata.
              </p>
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
              <a
                href="/cv/CV_Sergio_Portfolio.pdf"
                download
                className="w-full px-6 py-3 border-2 border-slate-600 hover:border-cyan-500 hover:bg-slate-800 rounded-lg font-semibold transition-all flex items-center justify-center text-sm"
              >
                <Download className="w-4 h-4 mr-2" />
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};