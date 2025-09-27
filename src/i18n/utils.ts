import {labels} from "@/i18n/ui.ts";
import type { SupportedLanguage, TranslationLabels } from "@/types";

const defaultLang: SupportedLanguage = "en";

export function useTranslations(lang: SupportedLanguage) {
  return function t(key: keyof TranslationLabels) {
    return labels[lang][key] || labels[defaultLang][key];
  };
}
