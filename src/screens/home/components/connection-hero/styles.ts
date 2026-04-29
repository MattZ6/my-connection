import { StyleSheet } from "react-native";

import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    container: {
      padding: 24,
      gap: 24,
    },
    hero: {
      flexDirection: "row",
      alignItems: "center",
      gap: 24,
    },
    heroIcon: {
      tintColor: theme.colors.brandContent.base,
    },
    heroLabel: {
      fontFamily: theme.fontFamily.regular,
      fontSize: theme.fontSizes.label.fontSize,
      lineHeight: theme.fontSizes.label.lineHeight,
      textTransform: "uppercase",
      letterSpacing: 1.25,
      color: theme.colors.content.muted,
    },
    heroValue: {
      fontFamily: theme.fontFamily.regular,
      fontSize: 24,
      lineHeight: 40,
      color: theme.colors.content.base,
    },
    statsRow: {
      flexDirection: "row",
      gap: 16,
    },
    signalStrengthLabel: {
      fontFamily: theme.fontFamily.regular,
      fontSize: theme.fontSizes.label.fontSize,
      lineHeight: theme.fontSizes.label.lineHeight,
      textTransform: "uppercase",
      letterSpacing: 1.25,
      color: theme.colors.content.muted,
    },
  });
}
