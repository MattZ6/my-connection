import { StyleSheet } from "react-native";

import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    card: {
      flexDirection: "row",
      gap: 16,
      padding: 16,
    },
    content: {
      flex: 1,
      flexDirection: "column",
    },
    title: {
      fontFamily: theme.fontFamily.medium,
      fontSize: theme.fontSizes.body.fontSize,
      lineHeight: theme.fontSizes.body.lineHeight,
      color: theme.colors.content.base,
    },
    description: {
      fontFamily: theme.fontFamily.regular,
      fontSize: theme.fontSizes.bodySmall.fontSize,
      lineHeight: theme.fontSizes.bodySmall.lineHeight,
      color: theme.colors.content.muted,
    },
    iconContainer: {
      alignItems: "center",
      justifyContent: "center",
      width: 36,
      height: 36,
      borderRadius: theme.radii["4"],
      backgroundColor:
        theme.theme === "system"
          ? theme.colors.brandSurface.base
          : theme.colors.brandSurface.elevated,
    },
    icon: {
      tintColor: theme.colors.brandContent.base,
    },
  });
}
