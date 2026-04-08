import { use } from "react";

import { ThemeContext } from "@/contexts/theme";

export function useTheme() {
  const ctx = use(ThemeContext);

  if (!ctx) {
    throw new Error("useThemeMode must be used within ThemeProvider");
  }

  return ctx;
}
