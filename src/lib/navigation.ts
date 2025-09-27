// src/lib/navigation.ts
export interface NavItem {
    href: string;
    labelKey: string; // i18n key
    external?: boolean;
  }
  
  export const navigation: NavItem[] = [
    { href: '/', labelKey: 'nav.home' },
    { href: '#about', labelKey: 'nav.about' },
    { href: '#contact', labelKey: 'nav.contact' },
  ];