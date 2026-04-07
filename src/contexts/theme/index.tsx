import { createContext, useCallback, useMemo, useState } from "react";
import { useColorScheme } from "react-native";

import { SettingsRepository } from "@/repositories/settings";

import { darkTheme } from "@/theme/dark";
import { lightTheme } from "@/theme/light";
import { generateSystemTheme } from "@/theme/system";
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

  // biome-ignore lint/correctness/useExhaustiveDependencies: Consider deviceColorScheme to change colors
  const themeConfig = useMemo(() => {
    if (appColorScheme === "system") {
      return generateSystemTheme();
    }

    if (appColorScheme === "light") {
      return lightTheme;
    }

    return darkTheme;
  }, [appColorScheme, deviceColorScheme]);

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
