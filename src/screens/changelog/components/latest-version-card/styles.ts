import { StyleSheet } from "react-native";

import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    wrapper: {
      padding: 16,
      gap: 32,
    },
    container: {
      padding: 16,
      gap: 16,
    },
    upperRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16,
    },
    versionContainer: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
    },
    icon: {
      tintColor: theme.colors.content.muted,
    },
    label: {
      fontFamily: theme.fontFamily.regular,
      color: theme.colors.content.muted,
      fontSize: theme.fontSizes.label.fontSize,
      lineHeight: theme.fontSizes.label.lineHeight,
      textTransform: "uppercase",
      letterSpacing: 1.25,
    },
    version: {
      fontFamily: theme.fontFamily.regular,
      color: theme.colors.content.muted,
      fontSize: theme.fontSizes.body.fontSize,
      lineHeight: theme.fontSizes.body.lineHeight,
    },
    date: {
      fontFamily: theme.fontFamily.regular,
      color: theme.colors.content.muted,
      fontSize: theme.fontSizes.bodySmall.fontSize,
      lineHeight: theme.fontSizes.bodySmall.lineHeight,
      textAlign: "right",
    },
    newVersionDot: {
      width: 8,
      height: 8,
      borderRadius: theme.radii.full,
      backgroundColor: theme.colors.semantic.warning,
    },
    content: {
      gap: 8,
    },
    title: {
      fontFamily: theme.fontFamily.medium,
      color: theme.colors.content.base,
      fontSize: theme.fontSizes.subtitle.fontSize,
      lineHeight: theme.fontSizes.subtitle.lineHeight,
    },
    description: {
      fontFamily: theme.fontFamily.regular,
      color: theme.colors.content.muted,
      fontSize: theme.fontSizes.body.fontSize,
      lineHeight: theme.fontSizes.body.lineHeight,
    },
  });
}
