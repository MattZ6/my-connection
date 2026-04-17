import { createMMKV } from "react-native-mmkv";

type Theme = "system" | "light" | "dark";
type Language = string;
type NetworkUpdateFrequency = "15s" | "30s" | "60s";

const STORAGE_KEY = {
  THEME: "theme",
  DYNAMIC_COLORS: "android.dynamic-colors",
  LANGUAGE: "language",
  HAPTICS: "haptics",
  NETWORK_AUTOMATIC_UPDATES_ENABLED: "network.auto_updates.on",
  NETWORK_AUTOMATIC_UPDATES_FREQUENCY: "network.auto_updates.frequency",
};

export const SettingsRepository = {
  getNetworkAutomaticUpdatesEnabledValue: () => {
    const storedValue = personalSettingsStorage.getBoolean(
      STORAGE_KEY.NETWORK_AUTOMATIC_UPDATES_ENABLED,
    );

    if (storedValue === undefined || storedValue === null) {
      return null;
    }

    return storedValue;
  },
  saveNetworkAutomaticUpdatesEnabled: (value: boolean) => {
    personalSettingsStorage.set(
      STORAGE_KEY.NETWORK_AUTOMATIC_UPDATES_ENABLED,
      value,
    );
  },
  getNetworkAutomaticUpdatesFrequencyValue: () => {
    const storedValue = personalSettingsStorage.getString(
      STORAGE_KEY.NETWORK_AUTOMATIC_UPDATES_FREQUENCY,
    );

    if (storedValue === undefined || storedValue === null) {
      return null;
    }

    return storedValue as NetworkUpdateFrequency;
  },
  saveNetworkAutomaticUpdatesFrequency: (value: NetworkUpdateFrequency) => {
    personalSettingsStorage.set(
      STORAGE_KEY.NETWORK_AUTOMATIC_UPDATES_FREQUENCY,
      value,
    );
  },
  getHapticsFlag: () => {
    const storedValue = personalSettingsStorage.getBoolean(STORAGE_KEY.HAPTICS);

    if (storedValue === undefined || storedValue === null) {
      return null;
    }

    return storedValue;
  },
  saveHapticsFlag: (value: boolean) => {
    personalSettingsStorage.set(STORAGE_KEY.HAPTICS, value);
  },
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
