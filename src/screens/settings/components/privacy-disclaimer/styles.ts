import { StyleSheet } from "react-native";

import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      gap: 16,
    },
    iconContainer: {
      width: 40,
      height: 40,
      borderRadius: theme.radii["4"],
      alignItems: "center",
      justifyContent: "center",

      backgroundColor: theme.colors.surface.elevated,
    },
    icon: {
      tintColor: theme.colors.content.muted,
    },
    text: {
      fontSize: theme.fontSizes.bodySmall.fontSize,
      lineHeight: theme.fontSizes.bodySmall.lineHeight,
      color: theme.colors.content.muted,
      textAlign: "center",
    },
  });
}
