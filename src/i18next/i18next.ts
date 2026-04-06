import { getLocales } from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { SettingsRepository } from "@/repositories/settings";

import en from "./locales/en";
import pt from "./locales/pt";

const storedLanguage = SettingsRepository.getLanguage();

export const lng = storedLanguage ?? getLocales()[0].languageCode ?? "en";

if (!storedLanguage) {
  SettingsRepository.saveLanguage(lng);
}

i18n.use(initReactI18next).init({
  resources: {
    en,
    pt,
  },
  lng,
  fallbackLng: "en",
  supportedLngs: ["en", "pt"],

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
