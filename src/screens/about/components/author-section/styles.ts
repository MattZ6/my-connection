import { StyleSheet } from "react-native";
import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    card: {
      // alignItems: "center",
      justifyContent: "center",
      padding: 24,
      gap: 16,
    },
    avatar: {
      width: 72,
      height: 72,
      borderRadius: theme.radii.full,
      backgroundColor: theme.colors.surface.elevated,

      alignSelf: "center",
    },
    name: {
      fontFamily: theme.fontFamily.medium,
      fontSize: theme.fontSizes.body.fontSize,
      lineHeight: theme.fontSizes.body.lineHeight,
      color: theme.colors.content.base,
      textAlign: "center",
    },
    description: {
      fontFamily: theme.fontFamily.regular,
      fontSize: theme.fontSizes.bodySmall.fontSize,
      lineHeight: theme.fontSizes.bodySmall.lineHeight,
      color: theme.colors.content.muted,
      textAlign: "center",
    },
    button: {
      borderRadius: theme.radii.full,
      overflow: "hidden",
    },
    buttonContent: {
      alignItems: "center",
      justifyContent: "center",
      height: 40,
    },
    buttonText: {
      fontFamily: theme.fontFamily.medium,
      fontSize: theme.fontSizes.bodySmall.fontSize,
      lineHeight: theme.fontSizes.bodySmall.lineHeight,
      color: theme.colors.brandContent.base,
    },
  });
}
