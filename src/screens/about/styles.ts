import { StyleSheet } from "react-native";
import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    scrollContainer: {
      paddingVertical: 32,
      paddingHorizontal: 16,
      gap: 32,
    },
    disclaimer: {
      fontSize: 14,
      lineHeight: 24,
      textAlign: "center",
      color: theme.colors.textSecondary,
    },
  });
}
