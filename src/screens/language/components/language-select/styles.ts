import { StyleSheet } from "react-native";
import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
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
      fontSize: theme.fontSizes.body.fontSize,
      lineHeight: theme.fontSizes.body.lineHeight,
      color: theme.colors.content.base,
    },
    buttonDescription: {
      fontFamily: theme.fontFamily.regular,
      fontSize: theme.fontSizes.bodySmall.fontSize,
      lineHeight: theme.fontSizes.bodySmall.lineHeight,
      color: theme.colors.content.muted,
    },
    icon: {
      tintColor: theme.colors.content.base,
    },
  });
}
