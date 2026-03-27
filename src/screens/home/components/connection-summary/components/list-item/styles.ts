import { StyleSheet } from "react-native";

import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      gap: 16,
    },
    content: {
      flex: 1,
    },
    label: {
      fontFamily: theme.fontFamily.medium,
      fontSize: 18,
      lineHeight: 32,
      color: theme.colors.text,
    },
    hint: {
      fontFamily: theme.fontFamily.regular,
      fontSize: 14,
      lineHeight: 20,
      color: theme.colors.textSecondary,
    },
    value: {
      fontFamily: theme.fontFamily.regular,
      flexShrink: 0,
      fontSize: 16,
      lineHeight: 24,
      textAlign: "right",
      color: theme.colors.textSecondary,
    },
  });
}
