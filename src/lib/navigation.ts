// src/lib/navigation.ts
export interface NavItem {
    href: string;
    labelKey: string; // i18n key
    external?: boolean;
  }
  
  export const navigation: NavItem[] = [
    { href: '#home', labelKey: 'nav.home' },
    { href: '#about', labelKey: 'nav.about' },
    { href: '#experience', labelKey: 'nav.experience' },
    { href: '#projects', labelKey: 'nav.projects' },
    { href: '#contact', labelKey: 'nav.contact' },
  ];