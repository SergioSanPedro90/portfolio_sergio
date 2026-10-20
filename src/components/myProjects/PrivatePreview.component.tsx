// Placeholder para proyectos de cliente sin capturas públicas.
// Misma altura que la cabecera de las tarjetas móviles (p-4 + h-74).
interface PrivatePreviewProps {
  note?: string;
}

export const PrivatePreview = ({
  note = "🔒 Capturas no públicas · datos reales de cliente",
}: PrivatePreviewProps) => {
  return (
    <div className="p-4 bg-slate-900/50">
      <div className="relative h-74 rounded-lg overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 border border-slate-700/60">
        <div className="absolute inset-0 flex items-center justify-center gap-4 sm:gap-6 pb-10">
          {/* Tablet: web del dueño */}
          <div className="w-40 sm:w-52 h-36 rounded-lg border-2 border-slate-600 bg-slate-900/80 p-2 shadow-lg">
            <div className="h-3 rounded-sm bg-cyan-500/70 mb-2" />
            <div className="space-y-1.5">
              {["bg-amber-400", "bg-emerald-400", "bg-emerald-400", "bg-amber-400", "bg-emerald-400"].map(
                (status, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <div className="h-2 w-8 rounded-sm bg-slate-600" />
                    <div className="h-2 flex-1 rounded-sm bg-slate-700" />
                    <div className="h-2 w-6 rounded-sm bg-slate-600" />
                    <div className={`h-2 w-2 rounded-full ${status}`} />
                  </div>
                )
              )}
            </div>
          </div>

          {/* Móvil: app del pintor */}
          <div className="w-20 h-40 rounded-xl border-2 border-slate-600 bg-slate-900/80 px-1.5 pt-3 pb-1.5 shadow-lg">
            <div className="mx-auto mb-2 h-1 w-6 rounded-full bg-slate-600" />
            <div className="space-y-1.5">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-6 rounded-sm bg-slate-700 border-l-2 border-cyan-400"
                />
              ))}
            </div>
          </div>
        </div>

        <span className="absolute bottom-3 left-1/2 -translate-x-1/2 w-max max-w-[90%] text-center px-3 py-1 bg-slate-900/80 text-slate-300 border border-slate-600 rounded-full text-xs">
          {note}
        </span>
      </div>
    </div>
  );
};
