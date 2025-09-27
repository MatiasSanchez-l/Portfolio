import { useTranslations as useI18nTranslations } from '@/i18n/utils';
import type { SupportedLanguage } from '@/types';

/**
 * Custom hook for translations with proper TypeScript support
 * Wraps the i18n utility with better type safety
 */
export function useTranslations(currentLang: SupportedLanguage) {
  const translateLabels = useI18nTranslations(currentLang);
  
  return {
    t: translateLabels,
    currentLang,
  };
}
