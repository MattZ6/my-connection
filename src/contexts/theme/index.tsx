import * as ExpoDevice from "expo-device";
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Platform, useColorScheme } from "react-native";

import { SettingsRepository } from "@/repositories/settings";

import { darkTheme } from "@/theme/dark";
import { lightTheme } from "@/theme/light";
import { generateSystemTheme } from "@/theme/system";

import type { ThemeContextTypes, ThemeProviderTypes } from "./types";

export const ThemeContext = createContext({} as ThemeContextTypes.Context);

const MIN_ANDROID_DYNAMIC_COLORS_SDK = 31;

const IS_DYNAMIC_COLORS_AVAILABLE = Platform.select({
  android:
    Number(ExpoDevice.platformApiLevel || 0) >= MIN_ANDROID_DYNAMIC_COLORS_SDK,
  default: true,
});

export function ThemeProvider({ children }: ThemeProviderTypes.Props) {
  const [isUsingAndroidDynamicColors, setIsUsingAndroidDynamicColors] =
    useState(() => {
      if (!IS_DYNAMIC_COLORS_AVAILABLE) {
        return false;
      }

      const storedValue = SettingsRepository.getAndroidDynamicColorsFlag();

      if (storedValue === null) {
        return true;
      }

      return storedValue;
    });
  const deviceColorScheme = useColorScheme();
  const [appColorScheme, setAppColorScheme] =
    useState<ThemeContextTypes.ThemeOption>(() => {
      const storedTheme = SettingsRepository.getTheme();
      return storedTheme ?? "system";
    });

  const resolvedMode = useMemo(() => {
    if (appColorScheme === "system") {
      if (deviceColorScheme === "unspecified" || !deviceColorScheme) {
        return "light";
      }

      return deviceColorScheme;
    }

    return appColorScheme;
  }, [appColorScheme, deviceColorScheme]);

  const themeConfig = useMemo(() => {
    if (appColorScheme === "system") {
      if (isUsingAndroidDynamicColors) {
        return generateSystemTheme({ useDynamicColors: true });
      }

      if (deviceColorScheme === "light") {
        return lightTheme;
      }

      return darkTheme;
    }

    if (appColorScheme === "light") {
      return lightTheme;
    }

    return darkTheme;
  }, [appColorScheme, deviceColorScheme, isUsingAndroidDynamicColors]);

  const changeTheme = useCallback((input: ThemeContextTypes.ThemeOption) => {
    setAppColorScheme(input);
    SettingsRepository.saveTheme(input);
  }, []);

  useEffect(
    () =>
      SettingsRepository.saveAndroidDynamicColorsFlag(
        isUsingAndroidDynamicColors,
      ),
    [isUsingAndroidDynamicColors],
  );

  const toggleAndroidDynamicColors = useCallback(() => {
    if (IS_DYNAMIC_COLORS_AVAILABLE) {
      setIsUsingAndroidDynamicColors((previousValue) => !previousValue);
    }
  }, []);

  const contextValue = useMemo<ThemeContextTypes.Context>(
    () => ({
      theme: appColorScheme,
      resolvedTheme: resolvedMode,
      changeTheme,
      isUsingAndroidDynamicColors,
      toggleAndroidDynamicColors,
      isAndroidDynamicColorsAvailable: IS_DYNAMIC_COLORS_AVAILABLE,
      ...themeConfig,
    }),
    [
      appColorScheme,
      resolvedMode,
      changeTheme,
      themeConfig,
      isUsingAndroidDynamicColors,
      toggleAndroidDynamicColors,
    ],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
