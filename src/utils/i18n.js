import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ar from "../locales/ar/translation.json";
import en from "../locales/en/translation.json";

const resources = {
  en: {
    translation: en,
    websiteDir: "ltr",
  },
  ar: {
    translation: ar,
    websiteDir: "rtl",
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "ar",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage"],
      caches: ["localStorage"],
    },
  });

export default i18n;
