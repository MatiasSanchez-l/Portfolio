import { useState, useEffect } from 'react';
import { getThemePreference, applyTheme } from '@/lib/theme';
import type { Theme, ThemeContextType } from '@/types';

/**
 * Custom hook for theme management
 * Provides theme state and setter with proper TypeScript types
 */
export function useTheme(): ThemeContextType {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    // Initialize theme from current state
    const currentTheme = getThemePreference();
    setTheme(currentTheme);
  }, []);

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  return {
    theme,
    setTheme: handleSetTheme,
  };
}
