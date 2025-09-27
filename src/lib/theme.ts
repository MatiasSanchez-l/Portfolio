/**
 * Theme utility functions for managing dark/light mode
 */

export type Theme = 'light' | 'dark';

/**
 * Gets the current theme preference from localStorage or system preference
 */
export function getThemePreference(): Theme {
  if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
    return localStorage.getItem('theme') as Theme;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/**
 * Applies the theme to the document element
 */
export function applyTheme(theme: Theme): void {
  const isDark = theme === 'dark';
  document.documentElement.classList[isDark ? 'add' : 'remove']('dark');
}

/**
 * Initializes the theme system
 * - Gets the current theme preference
 * - Applies the theme to the document
 * - Sets up a mutation observer to sync theme changes to localStorage
 */
export function initializeTheme(): void {
  const theme = getThemePreference();
  applyTheme(theme);

  // Set up mutation observer to sync theme changes to localStorage
  if (typeof localStorage !== 'undefined') {
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
  }
}
