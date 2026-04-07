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
      fontSize: theme.fontSizes.subtitle.fontSize,
      lineHeight: theme.fontSizes.subtitle.lineHeight,
      color: theme.colors.content.base,
    },
    hint: {
      fontFamily: theme.fontFamily.regular,
      fontSize: theme.fontSizes.bodySmall.fontSize,
      lineHeight: theme.fontSizes.bodySmall.lineHeight,
      color: theme.colors.content.muted,
    },
    value: {
      fontFamily: theme.fontFamily.regular,
      flexShrink: 0,
      fontSize: theme.fontSizes.body.fontSize,
      lineHeight: theme.fontSizes.body.lineHeight,
      textAlign: "right",
      color: theme.colors.content.muted,
    },
  });
}
