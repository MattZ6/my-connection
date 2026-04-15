import { StyleSheet } from "react-native";

import type { ThemeConfig } from "@/theme/types";

export function getSectionStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    container: {
      gap: 12,
    },
    title: {
      fontFamily: theme.fontFamily.regular,
      fontSize: theme.fontSizes.label.fontSize,
      lineHeight: theme.fontSizes.label.lineHeight,
      textTransform: "uppercase",
      letterSpacing: 1,
      color: theme.colors.content.muted,
    },
  });
}

export type Direction = "row" | "column";

export function getSectionItemStyles(theme: ThemeConfig, direction: Direction) {
  return StyleSheet.create({
    container: {
      flexDirection: direction,
      alignItems: direction === "row" ? "center" : "flex-start",
      padding: 16,
      gap: direction === "row" ? 16 : 8,
    },
    content: {
      flex: 1,
    },
    label: {
      fontFamily: theme.fontFamily.medium,
      fontSize: theme.fontSizes.body.fontSize,
      lineHeight: theme.fontSizes.body.lineHeight,
      color: theme.colors.content.base,
    },
    hint: {
      fontFamily: theme.fontFamily.regular,
      fontSize: theme.fontSizes.bodySmall.fontSize,
      lineHeight: theme.fontSizes.bodySmall.lineHeight,
      color: theme.colors.content.muted,
    },
    trailing: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
    },
    value: {
      fontFamily: theme.fontFamily.regular,
      flexShrink: 0,
      fontSize: theme.fontSizes.body.fontSize,
      lineHeight: theme.fontSizes.body.lineHeight,
      textAlign: direction === "row" ? "right" : "left",
      color: theme.colors.content.muted,
    },
  });
}

export function getSectionDividerStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    divider: {
      height: 1,
      marginHorizontal: 16,
      backgroundColor: theme.colors.border.default,
    },
  });
}
