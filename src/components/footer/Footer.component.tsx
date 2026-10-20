export const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="max-w-6xl mx-auto text-center text-slate-400 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Sergio San Pedro Álvarez. Hecho con React, TypeScript y Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};