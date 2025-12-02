interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string; // Imagen estática (mockup)
  imageHover?: string; // GIF animado (opcional)
  demoLink: string; // Link del proyecto en producción
  githubLink: string; // Link del código en GitHub
}

export const projects: Project[] = [
  {
    title: "Brand Genius S.A.C",
    description:
      "Landing page corporativa con sistema de automatización completo y SEO básico. Los formularios se integran con Google Sheets para generar reportes automáticos en Excel, y los usuarios son dirigidos a Calendly para agendar citas. Solución end-to-end que optimiza el proceso de captación de leads.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Google Sheets API",
      "Calendly", "Git", "GitHub"
    ],
    image: "/images/Captura de pantalla 2025-11-20 092835.png",
    imageHover: "/images/Captura de pantalla 2025-11-20 093157.png",
    demoLink: "",
    githubLink: "https://github.com/tu-usuario/brand-genius", // si aplica
  },
  {
    title: "Proyecto Bootcamp",
    description:
      "Aplicación web full-stack enfocada al universo de Dragones y Mazmorras desarrollada en equipo de 4 personas. Sistema de autenticación completo con registro tradicional y Google OAuth, envío automático de emails de bienvenida con SendGrid, y base de datos relacional. Proyecto que integra frontend y backend con gestión de estado y API REST.",
    tech: ["React", "Flask", "JavaScript", "Python", "Google OAuth", "SendGrid", "SQLAlchemy", "PostgreSQL", "API`s", "JWT", "Git", "GitHub"],
    image: "/images/proyectoBootcamp/Captura de pantalla 2025-11-19 201131.png",
    imageHover: "/images/proyectoBootcamp/Captura de pantalla 2025-11-20 101018.png",
    demoLink: "https://sample-service-name-mv9q.onrender.com/",
    githubLink: "https://github.com/SergioSanPedro90/SergioSanPedro-ProyectoFinal",
  },
  {
    title: "Landing Page Magic The Gathering",
    description:
      "Galería visual de cartas de Magic: The Gathering más buscadas. Cada carta enlaza directamente a tiendas online para facilitar la compra. Proyecto personal que combina mi pasión por Magic con desarrollo web.",
    tech: ["React", "JavasScript", "Bootstrap", "Netlify", "Git", "GitHub"],
    image: "/images/landingMTG/Captura de pantalla 2025-11-20 094031.png",
    imageHover: "/images/landingMTG/Captura de pantalla 2025-11-20 094056.png",
    demoLink: "https://top-magics-cards.netlify.app/",
    githubLink: "https://github.com/SergioSanPedro90/SergioSanPedro-LandingPage-Magic",
  },
  {
    title: "Blog de Naruto",
    description:
      "Blog interactivo con integración de la API oficial de Naruto. Sistema de favoritos con persistencia en LocalStorage. Context API para estado global y diseño temático responsive del anime.",
    tech: ["React", "JavaScript", "Naruto API", "LocalStorage", "React Router", "Netlify", "Git", "GitHub"],
    image: "/images/blogNaruto/Captura de pantalla 2025-12-02 143012.png",
    imageHover: "/images/blogNaruto/Captura de pantalla 2025-12-02 143046.png",
    demoLink: "https://naruto-blog.netlify.app/",
    githubLink: "https://github.com/SergioSanPedro90/SergioSanPedro-BlogNaruto",
  },
];
