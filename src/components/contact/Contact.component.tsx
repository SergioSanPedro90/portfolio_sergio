import { Mail, Github } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-30 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          ¿Trabajamos <span className="text-cyan-400">Juntos?</span>
        </h3>
        <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
          Estoy disponible para proyectos freelance y oportunidades laborales. ¡Hablemos sobre tu próxima idea!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a 
            href="mailto:sergiospalvarez@hotmail.com"
            className="w-full sm:w-auto px-8 py-4 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center shadow-lg"
          >
            <Mail className="w-5 h-5 mr-2" />
            Enviar Email
          </a>
          <a 
            href="https://github.com/SergioSanPedro90"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 border-2 border-cyan-500 hover:bg-cyan-500/10 rounded-lg font-semibold transition-all flex items-center justify-center"
          >
            <Github className="w-5 h-5 mr-2" />
            Ver GitHub
          </a>
        </div>
      </div>
    </section>
  );
};