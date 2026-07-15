import PreviewRH from '@/assets/img/proyectos/RH/PreviewRH.png'
import menuRH from '@/assets/img/proyectos/RH/menuRH.png'
import cartasRH from '@/assets/img/proyectos/RH/cartasRH.png'
import juegoRH from '@/assets/img/proyectos/RH/juegoRH.png'

export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  demoUrl?: string
  repoUrl?: string
  featured?: boolean
  thumbnail?: string
  images?: string[]
  technicalDetails?: string[]
}

export interface SkillGroup {
  category: string
  skills: string[]
}

export interface SocialLink {
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'mail'
}

export interface Education {
  degree: string
  school: string
  location: string
  period: string
  description: string
}

export const siteConfig = {
  name: 'Pablo',
  role: 'Desarrollador Full-Stack',
  tagline: 'Graduado en DAW · Construyo aplicaciones web con tecnologías modernas.',
  email: 'pabloserranom1@gmail.com',
  phone: '+34 691599246',
  location: 'Plasencia, España',
  about: [
    'Desarrollador web con formación en DAW y experiencia en el desarrollo de proyectos completos, combinando frontend y backend con una visión práctica y orientada a resultados.',
    'Me interesan los entornos donde puedo aportar valor desde el diseño de la interfaz hasta la lógica de negocio, creando soluciones funcionales, mantenibles y bien integradas.',
    'Tengo una base sólida en tecnologías modernas y una mentalidad de mejora continua, con especial interés en trabajar en equipos que busquen calidad, claridad y crecimiento.',
  ],
}

export const education: Education = {
  degree: 'Grado Superior en Desarrollo de Aplicaciones Web (DAW)',
  school: 'IES Valle del Jerte',
  location: 'Plasencia, Cáceres',
  period: '2024 - 2026',
  description:
    'Formación completa en desarrollo web full-stack, abarcando tecnologías de frontend, backend, bases de datos y despliegue de aplicaciones.',
}

export const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Formación', href: '#education' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
]

export const projects: Project[] = [
  {
    id: '1',
    title: 'Regnum Hollow',
    description:
      'Juego de estrategia por turnos para dos jugadores, con combate táctico, recursos y IA. Desarrollado como Trabajo de Fin de Grado con React, Node.js y MongoDB.',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Vite'],
    repoUrl: 'https://github.com/pabs-6/Regnum-Hollow',
    demoUrl: 'https://regnumhollow.vercel.app/',
    featured: true,
    thumbnail: PreviewRH,
    images: [
      menuRH,
      cartasRH,
      juegoRH
    ],
    technicalDetails: [
      'Regnum Hollow es un juego de estrategia por turnos para dos jugadores desarrollado como mi Trabajo de Fin de Grado (TFG), inspirado en la baraja española. El objetivo es derrotar al rival mediante un sistema de combate táctico en tres carriles, gestionando recursos y aprovechando las habilidades únicas de cada carta.',
      'El juego incorpora mecánicas como la Voluntad, el apilamiento de cartas (Escalera), sinergias entre palos e inteligencia artificial para el modo de un jugador, ofreciendo una experiencia estratégica con múltiples posibilidades en cada partida.',
      'Todo el proyecto fue desarrollado con React, TypeScript, Node.js, Express, MongoDB y Tailwind CSS, siguiendo una arquitectura modular y aplicando buenas prácticas de desarrollo tanto en el frontend como en el backend.',
    ]
  },
  
]

export const skillGroups: SkillGroup[] = [
  {
    category: 'Lenguajes',
    skills: ['Java', 'JavaScript', 'TypeScript', 'PHP', 'SQL', 'HTML', 'CSS'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Angular', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    category: 'Backend & Runtime',
    skills: ['Node.js', 'Java EE', 'PHP'],
  },
  {
    category: 'Herramientas',
    skills: ['Git', 'GitHub', 'VS Code', 'MySQL', 'Vite'],
  },
]

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/pabs-6', icon: 'github' },
  { label: 'LinkedIn', href: '#', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:hola@ejemplo.com', icon: 'mail' },
]
