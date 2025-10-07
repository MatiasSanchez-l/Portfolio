import type { LanguageList, TranslationLabels } from "@/types";

export const languageList: LanguageList = {
    en: "English",
    es: "Español",
}

export type LabelKey = keyof TranslationLabels;

export const labels: Record<string, TranslationLabels> = {
  en: {
    "head.title":"Sanchez Matias | Portfolio",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.openMenu": "Open menu",
    "nav.closeMenu": "Close menu",
    "profile.greeting": "Hello, my name is",
    "profile.name": "Matias Sanchez",
    "profile.title": "<Full Stack Developer />",
    "profile.description": "Hi, My name is Matias Sanchez. I started programming because I like video games. I am currently working as a Software Engineer at Santander Tecnología Argentina mainly with Reactjs.",
    "profile.learnMore": "Learn More",
    "profile.linkedin": "LinkedIn",
    "profile.github": "GitHub",
    "profile.downloadCV": "Download CV",
  },
  es: {
    "head.title":"Sanchez Matias | Portafolio",
    "nav.home": "Inicio",
    "nav.about": "Acerca de",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "nav.openMenu": "Abrir menú",
    "nav.closeMenu": "Cerrar menú",
    "profile.greeting": "Hola, mi nombre es",
    "profile.name": "Matias Sanchez",
    "profile.title": "<Desarrollador Full Stack />",
    "profile.description": "Hola, mi nombre es Matias Sanchez. Empecé a programar porque me gustan los videojuegos. Actualmente trabajo como Ingeniero de Software en Santander Tecnología Argentina principalmente con Reactjs.",
    "profile.learnMore": "Saber Más",
    "profile.linkedin": "LinkedIn",
    "profile.github": "GitHub",
    "profile.downloadCV": "Descargar CV",
  },
};
