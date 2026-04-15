import { StyleSheet } from "react-native";

import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    container: {
      padding: 0,
    },
    label: {
      fontSize: theme.fontSizes.subtitle.fontSize,
      lineHeight: theme.fontSizes.subtitle.lineHeight,
    },
    hint: {
      fontFamily: theme.fontFamily.regular,
      fontSize: theme.fontSizes.bodySmall.fontSize,
      lineHeight: theme.fontSizes.bodySmall.lineHeight,
      color: theme.colors.content.muted,
    },
  });
}
