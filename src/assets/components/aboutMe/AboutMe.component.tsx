export const About = () => {
  return (
    <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-cyan-400">Mí</span>
        </h3>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-slate-700 shadow-xl">
          <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-6">
            Soy desarrollador full-stack con una perspectiva única: después de 12 años como matricero ajustador en la industria metalúrgica, hice la transición al desarrollo de software en 2024 tras completar el bootcamp de 4Geeks Academy.
          </p>
          <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-6">
            Mi experiencia previa me ha enseñado el valor de la precisión, la resolución metódica de problemas y la atención al detalle, cualidades que ahora aplico al desarrollo de aplicaciones web robustas y escalables.
          </p>
          <p className="text-base md:text-lg text-slate-300 leading-relaxed">
            Me especializo en crear soluciones full-stack con React, TypeScript y Python, con un enfoque particular en diseño responsive, automatización de procesos y experiencias de usuario intuitivas.
          </p>
        </div>
      </div>
    </section>
  );
};