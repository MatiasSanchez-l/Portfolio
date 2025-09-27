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
  },
};
