import { getLocales } from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const lng = getLocales()[0].languageCode ?? "en";

i18n.use(initReactI18next).init({
  resources: {},
  lng,
  fallbackLng: "en",
  supportedLngs: ["en", "pt"],

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
