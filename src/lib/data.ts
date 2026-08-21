import PreviewRH from '@/assets/img/proyectos/RH/PreviewRH.png'
import menuRH from '@/assets/img/proyectos/RH/menuRH.png'
import cartasRH from '@/assets/img/proyectos/RH/cartasRH.png'
import juegoRH from '@/assets/img/proyectos/RH/juegoRH.png'
import PreviewPB from '@/assets/img/proyectos/PB/PreviewPB.png'
import galeriaPB from '@/assets/img/proyectos/PB/galeriaPB.png'
import cartaPB from '@/assets/img/proyectos/PB/cartaPB.png'
import loginPB from '@/assets/img/proyectos/PB/loginPB.png'

export interface Project {
  id: string
  title: string
  description: string
  descriptionEn: string
  tags: string[]
  demoUrl?: string
  repoUrl?: string
  featured?: boolean
  thumbnail?: string
  images?: string[]
  technicalDetails?: string[]
  technicalDetailsEn?: string[]
}

export interface SkillGroup {
  category: string
  categoryEn: string
  skills: string[]
}

export interface SocialLink {
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'mail'
}

export interface Education {
  degree: string
  degreeEn: string
  school: string
  location: string
  locationEn: string
  period: string
  description: string
  descriptionEn: string
}

export interface ExperienceItem {
  company: string
  role: string
  roleEn: string
  period: string
  summary: string
  summaryEn: string
  highlights: string[]
  highlightsEn: string[]
}

export const siteConfig = {
  name: 'Pablo Serrano',
  shortName: 'Pablo',
  role: 'Desarrollador Full-Stack',
  roleEn: 'Full-Stack Developer',
  heroSubtitle:
    'Desarrollo productos web completos que resuelven problemas reales, con código mantenible y foco en el usuario.',
  heroSubtitleEn:
    'I build complete web products that solve real problems, with maintainable code and a user-first mindset.',
  tagline:
    'React · TypeScript · Node.js · Bases de datos · Despliegue en producción',
  taglineEn:
    'React · TypeScript · Node.js · Databases · Production deployment',
  availability: 'Disponible para incorporación',
  availabilityEn: 'Available for hire',
  email: 'pabloserranom1@gmail.com',
  phone: '+34 691 599 246',
  location: 'Plasencia, España',
  locationEn: 'Plasencia, Spain',
  about: [
    'Soy desarrollador Full-Stack con formación en Desarrollo de Aplicaciones Web y experiencia construyendo productos digitales de principio a fin: desde la interfaz hasta la API, la base de datos y el despliegue.',
    'He trabajado en entorno profesional durante mis prácticas en Vitaly, donde participé en un equipo real resolviendo tickets de frontend, backend y modelo de datos con Angular y Spring Boot. Combino esa experiencia con proyectos propios en React y Node.js que demuestran mi capacidad para llevar ideas a producción.',
    'Me motiva unirme a equipos que valoren la calidad técnica, la comunicación clara y el impacto en el negocio. Aprendo con rapidez, me adapto a nuevas tecnologías y busco aportar valor desde el primer día.',
  ],
  aboutEn: [
    'I am a Full-Stack developer with a degree in Web Application Development and experience building digital products end to end — from the interface to the API, database and deployment.',
    'I gained professional experience during my internship at Vitaly, where I joined a real team solving frontend, backend and data model tickets with Angular and Spring Boot. I combine that with personal projects in React and Node.js that show my ability to ship ideas to production.',
    'I am motivated to join teams that value technical quality, clear communication and business impact. I learn fast, adapt to new technologies and aim to deliver value from day one.',
  ],
  aboutHighlights: {
    frontend: {
      title: 'Frontend',
      description:
        'Interfaces modernas, responsivas y accesibles con React, TypeScript y Tailwind CSS. Priorizo rendimiento, usabilidad y una experiencia de usuario cuidada.',
      descriptionEn:
        'Modern, responsive and accessible interfaces with React, TypeScript and Tailwind CSS. I prioritize performance, usability and a polished user experience.',
    },
    backend: {
      title: 'Backend',
      description:
        'APIs REST, lógica de negocio y persistencia de datos con Node.js, Express, Java/Spring Boot y MongoDB. Código estructurado y preparado para escalar.',
      descriptionEn:
        'REST APIs, business logic and data persistence with Node.js, Express, Java/Spring Boot and MongoDB. Structured code built to scale.',
    },
  },
}

export const education: Education = {
  degree: 'Grado Superior en Desarrollo de Aplicaciones Web (DAW)',
  degreeEn: 'Higher Education in Web Application Development (DAW)',
  school: 'IES Valle del Jerte',
  location: 'Plasencia, Cáceres',
  locationEn: 'Plasencia, Cáceres',
  period: '2024 – 2026',
  description:
    'Formación oficial en desarrollo web full-stack: diseño de interfaces, programación cliente y servidor, bases de datos relacionales, despliegue de aplicaciones y metodologías ágiles. Base sólida para integrarme en equipos de desarrollo con criterio técnico y visión de producto.',
  descriptionEn:
    'Official training in full-stack web development: interface design, client and server programming, relational databases, application deployment and agile methodologies. A solid foundation to join development teams with technical judgment and product vision.',
}

export const experiences: ExperienceItem[] = [
  {
    company: 'Vitaly',
    role: 'Prácticas en Desarrollo de Software',
    roleEn: 'Software Development Internship',
    period: 'Feb 2026 – Abr 2026',
    summary:
      'Experiencia profesional en un entorno de desarrollo real, con formación intensiva en Angular y Spring Boot seguida de integración en un equipo activo con aplicación en producción.',
    summaryEn:
      'Professional experience in a real development environment, with intensive training in Angular and Spring Boot followed by integration into an active team with a production application.',
    highlights: [
      'Formación práctica en Angular: componentes, servicios, routing y buenas prácticas de frontend empresarial.',
      'Desarrollo backend con Spring Boot y bases de datos: APIs, persistencia y modelado de datos.',
      'Integración en equipo resolviendo tickets reales de frontend, backend y base de datos en un producto existente.',
      'Presentación de una aplicación final que demostró la capacidad de entregar un proyecto completo de forma autónoma.',
    ],
    highlightsEn: [
      'Hands-on training in Angular: components, services, routing and enterprise frontend best practices.',
      'Backend development with Spring Boot and databases: APIs, persistence and data modeling.',
      'Team integration solving real frontend, backend and database tickets on an existing product.',
      'Delivery of a final application demonstrating the ability to ship a complete project independently.',
    ],
  },
]

export const navLinks = [
  { label: 'Inicio', labelEn: 'Home', href: '#hero' },
  { label: 'Habilidades', labelEn: 'Skills', href: '#skills' },
  { label: 'Sobre mí', labelEn: 'About', href: '#about' },
  { label: 'Experiencia', labelEn: 'Experience', href: '#experience' },
  { label: 'Formación', labelEn: 'Education', href: '#education' },
  { label: 'Proyectos', labelEn: 'Projects', href: '#projects' },
  { label: 'Contacto', labelEn: 'Contact', href: '#contact' },
]

export const projects: Project[] = [
  {
    id: '1',
    title: 'Regnum Hollow',
    description:
      'TFG full-stack: juego de estrategia por turnos con combate táctico, IA y arquitectura cliente-servidor. Demuestra dominio de React, Node.js y MongoDB en un producto complejo.',
    descriptionEn:
      'Full-stack final project: turn-based strategy game with tactical combat, AI and client-server architecture. Demonstrates mastery of React, Node.js and MongoDB in a complex product.',
    tags: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    repoUrl: 'https://github.com/pabs-6/Regnum-Hollow',
    demoUrl: 'https://regnumhollow.vercel.app/',
    featured: true,
    thumbnail: PreviewRH,
    images: [menuRH, cartasRH, juegoRH],
    technicalDetails: [
      'Proyecto de Trabajo de Fin de Grado: juego de estrategia por turnos para dos jugadores con combate táctico en tres carriles, gestión de recursos y mecánicas avanzadas inspiradas en la baraja española.',
      'Incluye modo multijugador, IA para un jugador, sistema de cartas con sinergias, apilamiento y habilidades únicas. Arquitectura modular con separación clara entre frontend, API REST y persistencia en MongoDB.',
      'Desarrollado con React, TypeScript, Node.js, Express y Tailwind CSS. Desplegado en producción con enfoque en rendimiento, mantenibilidad y experiencia de juego fluida.',
    ],
    technicalDetailsEn: [
      'Final degree project: two-player turn-based strategy game with tactical combat across three lanes, resource management and advanced mechanics inspired by the Spanish deck.',
      'Features multiplayer mode, single-player AI, card system with synergies, stacking and unique abilities. Modular architecture with clear separation between frontend, REST API and MongoDB persistence.',
      'Built with React, TypeScript, Node.js, Express and Tailwind CSS. Deployed to production with a focus on performance, maintainability and smooth gameplay.',
    ],
  },
  {
    id: '2',
    title: 'PokéBinder',
    description:
      'Plataforma full-stack para coleccionistas Pokémon TCG: catálogo, álbum en MongoDB, wishlist, estadísticas, precios de mercado y guía de videojuegos con Pokédex y equipos.',
    descriptionEn:
      'Full-stack platform for Pokémon TCG collectors: catalog, MongoDB-backed album, wishlist, statistics, market prices and a video games guide with Pokédex and teams.',
    tags: ['React', 'Node.js', 'MongoDB', 'REST API', 'Tailwind CSS'],
    demoUrl: 'https://pokebinder-tcg.vercel.app/',
    repoUrl: 'https://github.com/pabs-6/poketcgcloud',
    thumbnail: PreviewPB,
    images: [galeriaPB, cartaPB, loginPB],
    technicalDetails: [
      'Aplicación full-stack para gestionar colecciones Pokémon TCG: exploración del catálogo oficial, álbum personal con filtros avanzados, wishlist, favoritos, dashboard con estadísticas y seguimiento del valor de mercado.',
      'Persistencia en MongoDB para usuarios, sesiones y el álbum de cartas (cantidad, condición, foil y precio de compra). Autenticación con email y Google OAuth, perfil editable e internacionalización ES/EN.',
      'Integración con Pokémon TCG API y precios de TCGPlayer/Cardmarket. Incluye sección de videojuegos con Pokédex por juego o generación, stats, evoluciones, naturalezas y equipos recomendados. Frontend en React + Vite + Tailwind CSS; backend Node.js con API REST; desplegado en Vercel y Render.',
    ],
    technicalDetailsEn: [
      'Full-stack app to manage Pokémon TCG collections: official catalog browsing, personal album with advanced filters, wishlist, favorites, statistics dashboard and market value tracking.',
      'MongoDB persistence for users, sessions and the card album (quantity, condition, foil and purchase price). Email and Google OAuth authentication, editable profile and ES/EN i18n.',
      'Integration with Pokémon TCG API and TCGPlayer/Cardmarket prices. Video games section with Pokédex by game or generation, stats, evolutions, natures and recommended teams. Frontend with React + Vite + Tailwind CSS; Node.js REST API backend; deployed on Vercel and Render.',
    ],
  },
]

export const skillGroups: SkillGroup[] = [
  {
    category: 'Lenguajes',
    categoryEn: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Java', 'PHP', 'SQL', 'HTML', 'CSS'],
  },
  {
    category: 'Frontend',
    categoryEn: 'Frontend',
    skills: ['React', 'Angular', 'Tailwind CSS', 'Bootstrap', 'Vite'],
  },
  {
    category: 'Backend & APIs',
    categoryEn: 'Backend & APIs',
    skills: ['Node.js', 'Express', 'Spring Boot', 'REST APIs', 'Java EE'],
  },
  {
    category: 'Datos & Herramientas',
    categoryEn: 'Data & Tools',
    skills: ['MongoDB', 'MySQL', 'Git', 'GitHub', 'Vercel', 'VS Code'],
  },
]

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/pabs-6', icon: 'github' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/pablo-serrano-martín-121bb0387',
    icon: 'linkedin',
  },
  { label: 'Email', href: 'mailto:pabloserranom1@gmail.com', icon: 'mail' },
]
