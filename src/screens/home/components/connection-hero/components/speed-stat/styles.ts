import { StyleSheet } from "react-native";

import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    label: {
      fontFamily: theme.fontFamily.regular,
      fontSize: 12,
      lineHeight: 20,
      textTransform: "uppercase",
      letterSpacing: 1,
      color: theme.colors.textSecondary,
    },
    value: {
      fontFamily: theme.fontFamily.regular,
      fontSize: 20,
      lineHeight: 32,
      color: theme.colors.textSecondary,
    },
  });
}
