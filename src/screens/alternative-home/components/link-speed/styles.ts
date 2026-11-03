import { StyleSheet } from "react-native";

import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    container: {
      alignItems: "center",
      gap: 8,
    },
    title: {
      fontFamily: theme.fontFamily.mono.regular,
      fontSize: 11,
      lineHeight: 16,
      letterSpacing: 1,
      textTransform: "uppercase",
      color: theme.colors.content.muted,
    },
    values: {
      flexDirection: "row",
      alignItems: "center",
      gap: 24,
    },
    value: {
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
    },
    number: {
      fontFamily: theme.fontFamily.mono.regular,
      fontSize: 22,
      lineHeight: 28,
      color: theme.colors.content.base,
    },
    unit: {
      fontFamily: theme.fontFamily.regular,
      fontSize: 13,
      lineHeight: 18,
      color: theme.colors.content.muted,
    },
  });
}
