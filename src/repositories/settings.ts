import { createMMKV } from "react-native-mmkv";

type Theme = "system" | "light" | "dark";

const STORAGE_KEY = {
  THEME: "theme",
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
};

export const personalSettingsStorage = createMMKV({
  id: "personal.settings",
  compareBeforeSet: true,
});
