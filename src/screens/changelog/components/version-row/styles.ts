import { StyleSheet } from "react-native";

import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
      minHeight: 52,
      paddingVertical: 14,
      paddingHorizontal: 16,
    },
    version: {
      width: 72,
      fontFamily: theme.fontFamily.mono.regular,
      fontSize: theme.fontSizes.bodySmall.fontSize,
      lineHeight: theme.fontSizes.bodySmall.lineHeight,
      color: theme.colors.content.muted,
    },
    title: {
      flex: 1,
      fontFamily: theme.fontFamily.regular,
      fontSize: theme.fontSizes.body.fontSize,
      lineHeight: theme.fontSizes.body.lineHeight,
      color: theme.colors.content.base,
    },
    chevron: {
      tintColor: theme.colors.content.muted,
    },
  });
}
