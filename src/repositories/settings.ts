import { createMMKV } from "react-native-mmkv";

type Theme = "system" | "light" | "dark";
type Language = string;

const STORAGE_KEY = {
  THEME: "theme",
  LANGUAGE: "language",
};

export const SettingsRepository = {
  getTheme: () => {
    const storedTheme = personalSettingsStorage.getString(STORAGE_KEY.THEME);

    if (!storedTheme) {
      return null;
    }

    return storedTheme as Theme;
  },
  saveTheme: (theme: Theme) => {
    personalSettingsStorage.set(STORAGE_KEY.THEME, theme);
  },
  getLanguage: () => {
    const storedLanguage = personalSettingsStorage.getString(
      STORAGE_KEY.LANGUAGE,
    );

    if (!storedLanguage) {
      return null;
    }

    return storedLanguage as Language;
  },
  saveLanguage: (language: Language) => {
    personalSettingsStorage.set(STORAGE_KEY.LANGUAGE, language);
  },
};

export const personalSettingsStorage = createMMKV({
  id: "personal.settings",
  compareBeforeSet: true,
});
