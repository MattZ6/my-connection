import { StyleSheet } from "react-native";
import { typography } from "@/theme/tokens/typography";
import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    container: {
      gap: 12,
      paddingHorizontal: 4,
    },
    date: {
      fontFamily: theme.fontFamily.mono.regular,
      fontSize: theme.fontSizes.label.fontSize,
      lineHeight: theme.fontSizes.label.lineHeight,
      color: theme.colors.content.muted,
    },
    title: {
      fontFamily: theme.fontFamily.semiBold,
      fontSize: typography["7"].fontSize,
      lineHeight: typography["7"].lineHeight,
      color: theme.colors.content.base,
    },
    paragraph: {
      fontFamily: theme.fontFamily.regular,
      fontSize: theme.fontSizes.body.fontSize,
      lineHeight: theme.fontSizes.body.lineHeight,
      color: theme.colors.content.muted,
    },
  });
}
