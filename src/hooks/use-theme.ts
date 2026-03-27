import { useTheme as useNavigationTheme } from "@react-navigation/native";
import { Color } from "expo-router";
import { Platform } from "react-native";

import type { ThemeConfig } from "@/theme/types";

import { useThemeMode } from "./use-theme-mode";

const fontFamily = {
  regular: "Poppins_400Regular",
  medium: "Poppins_500Medium",
};

export function useTheme(): ThemeConfig {
  const { theme, resolvedTheme } = useThemeMode();
  const { colors } = useNavigationTheme();

  if (theme === "system") {
    return {
      theme,
      resolvedTheme,
      fontFamily,
      colors: {
        background: Platform.select({
          android: Color.android.dynamic.surface,
          ios: Color.ios.systemBackground,
          default: colors.background,
        }),
        card: Platform.select({
          android: Color.android.dynamic.surfaceContainerLow,
          ios: Color.ios.secondarySystemBackground,
          default: colors.background,
        }),
        divider: Platform.select({
          android: Color.android.dynamic.surfaceContainerHigh,
          ios: Color.ios.separator,
          default: colors.border,
        }),
        text: Platform.select({
          android: Color.android.dynamic.onSurface,
          ios: Color.ios.label,
          default: colors.text,
        }),
        textSecondary: Platform.select({
          android: Color.android.dynamic.onSurfaceVariant,
          ios: Color.ios.secondaryLabel,
          default: colors.primary,
        }),
      },
    };
  }

  return {
    theme,
    resolvedTheme,
    fontFamily,
    colors: {
      background: colors.background,
      card: colors.card,
      divider: colors.border,
      text: colors.text,
      textSecondary: colors.text, // TODO: resolver essa questão
    },
  };
}
