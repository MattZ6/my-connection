import { StyleSheet } from "react-native";

import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    container: {
      gap: 16,
      paddingBottom: 32,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border.default,
    },
    title: {
      color: theme.colors.content.base,
      fontFamily: theme.fontFamily.medium,
      fontSize: theme.fontSizes.title.fontSize,
      lineHeight: theme.fontSizes.title.lineHeight,
    },
    date: {
      color: theme.colors.content.muted,
      fontFamily: theme.fontFamily.regular,
      fontSize: theme.fontSizes.bodySmall.fontSize,
      lineHeight: theme.fontSizes.bodySmall.lineHeight,
    },
    description: {
      color: theme.colors.content.base,
      fontFamily: theme.fontFamily.regular,
      fontSize: theme.fontSizes.body.fontSize,
      lineHeight: theme.fontSizes.body.lineHeight,
    },
  });
}
