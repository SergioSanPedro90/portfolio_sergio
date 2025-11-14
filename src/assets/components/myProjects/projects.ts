interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;        // Imagen estática (mockup)
  imageHover?: string;  // GIF animado (opcional)
  demoLink: string;     // Link del proyecto en producción
  githubLink: string;   // Link del código en GitHub
}

export const projects: Project[] = [
    {
      title: 'Sistema de Gestión de Contactos',
      description: 'Aplicación full-stack con CRUD completo, autenticación JWT y arquitectura de componentes escalable.',
      tech: ['React', 'TypeScript', 'Flask', 'SQLAlchemy'],
      image: '/projects/contactos-static.png',      // ← Pon tu captura aquí
      imageHover: '/projects/contactos-demo.gif',   // ← Pon tu GIF aquí
      demoLink: 'https://tu-proyecto.vercel.app',
      githubLink: 'https://github.com/SergioSanPedro90/contactos'
    },
    {
      title: 'Automatización WhatsApp/Email',
      description: 'Sistema de recordatorios automatizados para Calendly usando Twilio y notificaciones por email.',
      tech: ['React', 'Flask', 'Twilio API', 'PostgreSQL'],
      image: '/projects/whatsapp-static.png',
      imageHover: '/projects/whatsapp-demo.gif',
      demoLink: 'https://tu-proyecto.vercel.app',
      githubLink: 'https://github.com/SergioSanPedro90/whatsapp-automation'
    },
    {
      title: 'Landing Pages Inmobiliarias',
      description: 'Diseños responsive con efectos hover optimizados para móvil y desktop.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      image: '/projects/inmobiliaria-static.png',
      imageHover: '/projects/inmobiliaria-demo.gif',
      demoLink: 'https://tu-proyecto.vercel.app',
      githubLink: 'https://github.com/SergioSanPedro90/landing-inmobiliaria'
    },
    {
      title: 'Sistema de Biblioteca',
      description: 'Gestión completa de libros con backend Flask y autenticación de usuarios.',
      tech: ['React', 'Flask', 'SQLAlchemy', 'JWT'],
      image: '/projects/biblioteca-static.png',
      imageHover: '/projects/biblioteca-demo.gif',
      demoLink: 'https://tu-proyecto.vercel.app',
      githubLink: 'https://github.com/SergioSanPedro90/biblioteca'
    }
  ];