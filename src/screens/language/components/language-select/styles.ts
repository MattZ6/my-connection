import { StyleSheet } from "react-native";
import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    card: {
      borderRadius: 16,
      backgroundColor: theme.colors.card,
    },
    buttonContent: {
      flexDirection: "row",
      gap: 16,
      padding: 16,
    },
    buttonTextContent: {
      flex: 1,
      flexDirection: "column",
    },
    buttonText: {
      fontFamily: theme.fontFamily.regular,
      fontSize: 16,
      lineHeight: 24,
      color: theme.colors.text,
    },
    buttonDescription: {
      fontFamily: theme.fontFamily.regular,
      fontSize: 14,
      lineHeight: 24,
      color: theme.colors.textSecondary,
    },
    icon: {
      tintColor: theme.colors.text,
    },
  });
}
