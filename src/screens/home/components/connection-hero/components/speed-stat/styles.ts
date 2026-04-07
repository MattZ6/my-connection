import { StyleSheet } from "react-native";

import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    label: {
      fontFamily: theme.fontFamily.regular,
      fontSize: theme.fontSizes.label.fontSize,
      lineHeight: theme.fontSizes.label.lineHeight,
      textTransform: "uppercase",
      letterSpacing: 1,
      color: theme.colors.content.muted,
    },
    value: {
      fontFamily: theme.fontFamily.regular,
      fontSize: theme.fontSizes.title.fontSize,
      lineHeight: theme.fontSizes.title.lineHeight,
      color: theme.colors.content.base,
    },
  });
}
