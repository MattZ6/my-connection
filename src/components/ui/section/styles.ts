import { StyleSheet } from "react-native";

import type { ThemeConfig } from "@/theme/types";

export function getSectionStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    container: {
      gap: 12,
    },
    title: {
      fontFamily: theme.fontFamily.regular,
      fontSize: 12,
      lineHeight: 20,
      textTransform: "uppercase",
      letterSpacing: 1,
      color: theme.colors.textSecondary,
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
      fontSize: 16,
      lineHeight: 24,
      color: theme.colors.text,
    },
    hint: {
      fontFamily: theme.fontFamily.regular,
      fontSize: 14,
      lineHeight: 20,
      color: theme.colors.textSecondary,
    },
    value: {
      fontFamily: theme.fontFamily.regular,
      flexShrink: 0,
      fontSize: 16,
      lineHeight: 24,
      textAlign: direction === "row" ? "right" : "left",
      color: theme.colors.textSecondary,
    },
  });
}

export function getSectionDividerStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    divider: {
      height: 1,
      marginHorizontal: 16,
      backgroundColor: theme.colors.divider,
    },
  });
}
