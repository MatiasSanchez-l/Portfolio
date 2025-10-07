/**
 * Centralized TypeScript type definitions for the portfolio application
 */

// Language and i18n types
export type SupportedLanguage = 'en' | 'es';

export interface LanguageList {
  en: string;
  es: string;
}

export interface TranslationLabels {
  [key: string]: string;
}

// Navigation types
export interface NavItem {
  href: string;
  labelKey: string;
  external?: boolean;
}

// Theme types
export type Theme = 'light' | 'dark';

// Component prop interfaces
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface LanguageProps {
  currentLang: SupportedLanguage;
}

export interface ThemeProps {
  theme?: Theme;
}

// Navigation component props
export interface NavLinksProps extends LanguageProps {
  onLinkClick?: () => void;
  className?: string;
}

export interface NavMenuProps extends LanguageProps {}

export interface MobileMenuProps extends LanguageProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface MobileMenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export interface DesktopControlsProps extends LanguageProps {}

export interface LogoProps extends BaseComponentProps {}

// Theme component props
export interface ModeToggleProps extends BaseComponentProps {}

export interface LanguageDropdownProps extends LanguageProps {}

// Layout props
export interface LayoutProps extends BaseComponentProps {
  title?: string;
  description?: string;
}

// Section props for the main page
export interface SectionProps extends BaseComponentProps {
  id: string;
  title?: string;
}

// Utility function types
export interface ScrollToSectionOptions {
  offset?: number;
  behavior?: ScrollBehavior;
}

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export interface ProfileProps extends LanguageProps {}

export interface TimelineProps extends LanguageProps {}