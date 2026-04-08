import { createMMKV } from "react-native-mmkv";

type Theme = "system" | "light" | "dark";
type Language = string;

const STORAGE_KEY = {
  THEME: "theme",
  DYNAMIC_COLORS: "android.dynamic-colors",
  LANGUAGE: "language",
};

export const SettingsRepository = {
  getAndroidDynamicColorsFlag: () => {
    const storedValue = personalSettingsStorage.getBoolean(
      STORAGE_KEY.DYNAMIC_COLORS,
    );

    if (storedValue === undefined || storedValue === null) {
      return null;
    }

    return storedValue;
  },
  saveAndroidDynamicColorsFlag: (value: boolean) => {
    personalSettingsStorage.set(STORAGE_KEY.DYNAMIC_COLORS, value);
  },
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
