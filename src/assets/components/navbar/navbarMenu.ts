export interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}


export const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'sobre-mi', label: 'Sobre Mí' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'contacto', label: 'Contacto' }
  ];