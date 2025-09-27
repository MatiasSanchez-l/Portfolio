/**
 * Application constants and configuration values
 */

// Theme constants
export const THEME_STORAGE_KEY = 'theme';
export const DEFAULT_THEME = 'dark';

// Scroll constants
export const SCROLL_OFFSET = 80; // Header height offset for smooth scrolling
export const SCROLL_BEHAVIOR = 'smooth' as const;

// Navigation constants
export const NAVIGATION_ANIMATION_DURATION = 300; // ms

// Language constants
export const DEFAULT_LANGUAGE = 'en';
export const SUPPORTED_LANGUAGES = ['en', 'es'] as const;

// UI constants
export const MOBILE_BREAKPOINT = 'md'; // Tailwind breakpoint for mobile/desktop
export const Z_INDEX_NAVIGATION = 10;
export const Z_INDEX_MOBILE_MENU = 20;

// Animation constants
export const TRANSITION_DURATION = 300; // ms
export const HOVER_TRANSITION = 'transition-colors';

// Contact information
export const CONTACT_EMAIL = 'matias@example.com';
export const LINKEDIN_URL = 'https://linkedin.com/in/matiassanchez';

// SEO constants
export const SITE_TITLE = 'Matias Sanchez | Portfolio';
export const SITE_DESCRIPTION = 'Full Stack Developer Portfolio';
