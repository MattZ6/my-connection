import { createContext, useCallback, useMemo, useState } from "react";
import { useColorScheme } from "react-native";

import { SettingsRepository } from "@/repositories/settings";

import type { ThemeContextTypes, ThemeProviderTypes } from "./types";

export const ThemeContext = createContext({} as ThemeContextTypes.Context);

export function ThemeProvider({ children }: ThemeProviderTypes.Props) {
  const deviceTheme = useColorScheme();
  const [appTheme, setAppTheme] = useState<ThemeContextTypes.Theme>(() => {
    const storedTheme = SettingsRepository.getTheme();
    return storedTheme ?? "system";
  });

  const resolvedMode = useMemo(() => {
    if (appTheme === "system") {
      if (deviceTheme === "unspecified" || !deviceTheme) {
        return "light";
      }

      return deviceTheme;
    }

    return appTheme;
  }, [appTheme, deviceTheme]);

  const changeTheme = useCallback((input: ThemeContextTypes.Theme) => {
    setAppTheme(input);
    SettingsRepository.saveTheme(input);
  }, []);

  const contextValue = useMemo<ThemeContextTypes.Context>(
    () => ({
      theme: appTheme,
      resolvedTheme: resolvedMode,
      changeTheme,
    }),
    [appTheme, resolvedMode, changeTheme],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
