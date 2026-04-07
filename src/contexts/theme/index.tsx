import { createContext, useCallback, useMemo, useState } from "react";
import { useColorScheme } from "react-native";

import { SettingsRepository } from "@/repositories/settings";

import { darkTheme } from "@/theme/dark";
import { lightTheme } from "@/theme/light";

import type { ThemeContextTypes, ThemeProviderTypes } from "./types";

export const ThemeContext = createContext({} as ThemeContextTypes.Context);

export function ThemeProvider({ children }: ThemeProviderTypes.Props) {
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
    if (resolvedMode === "light") {
      return lightTheme;
    }

    return darkTheme;
  }, [resolvedMode]);

  const changeTheme = useCallback((input: ThemeContextTypes.ThemeOption) => {
    setAppColorScheme(input);
    SettingsRepository.saveTheme(input);
  }, []);

  const contextValue = useMemo<ThemeContextTypes.Context>(
    () => ({
      theme: appColorScheme,
      resolvedTheme: resolvedMode,
      changeTheme,
      ...themeConfig,
    }),
    [appColorScheme, resolvedMode, changeTheme, themeConfig],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
