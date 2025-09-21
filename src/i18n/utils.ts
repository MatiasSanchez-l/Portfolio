import {labels} from "@/i18n/ui.ts";

const defaultLang = "en";

export function useTranslations(lang: keyof typeof labels) {
  return function t(key: keyof (typeof labels)[typeof defaultLang]) {
    return labels[lang][key] || labels[defaultLang][key];
  };
}
