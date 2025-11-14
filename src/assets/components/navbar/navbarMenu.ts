export interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const navItems = [
  { id: 'home', label: 'Inicio' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'contacto', label: 'Contacto' }
];