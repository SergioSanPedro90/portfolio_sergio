import { Briefcase, GraduationCap, Code2, type LucideIcon } from 'lucide-react';

export interface Experience {
  year: string;
  subtitle: string;
  title: string;
  company: string;
  icon: LucideIcon;
  description: string;
  skills: string[];
}

export const experiencesList: Experience[] = [
  {
    year: '2024',
    subtitle: 'Presente',
    title: 'Full Stack Developer',
    company: 'Freelance',
    icon: Code2,
    description: 'Desarrollo de aplicaciones web full-stack con React, TypeScript y Python. Especializado en landing pages responsivas, sistemas de automatización con APIs y soluciones personalizadas.',
    skills: ['React', 'TypeScript', 'Python', 'Flask', 'Tailwind CSS', 'REST APIs']
  },
  {
    year: '2024',
    subtitle: '6 meses',
    title: 'Bootcamp Full-Stack',
    company: '4Geeks Academy',
    icon: GraduationCap,
    description: 'Formación intensiva en desarrollo web full-stack. Proyectos: sistema de gestión de contactos, biblioteca con JWT, aplicación colaborativa, integración de APIs externas.',
    skills: ['React', 'JavaScript', 'Python', 'Flask', 'SQLAlchemy', 'Git']
  },
  {
    year: '2012',
    subtitle: '12 años',
    title: 'Matricero Ajustador',
    company: 'Industria Metalúrgica',
    icon: Briefcase,
    description: 'Fabricación y ajuste de matrices. Desarrollo de precisión técnica, resolución metódica de problemas y atención rigurosa al detalle. Habilidades transferidas al desarrollo de software.',
    skills: ['Precisión técnica', 'Resolución de problemas', 'Especificaciones técnicas', 'Control de calidad']
  }
];