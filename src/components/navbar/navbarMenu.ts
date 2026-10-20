export interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const navItems = [
  { id: 'home', label: 'Inicio' },
  { id: 'experience', label: 'Experiencia' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'contact', label: 'Contacto' }
];