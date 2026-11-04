import { StyleSheet } from "react-native";

import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    card: {
      borderRadius: theme.radii["7"],
      backgroundColor: theme.colors.surface.elevated,
      overflow: "hidden",
    },
    container: {
      padding: 20,
      gap: 8,
    },
    upperRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 8,
    },
    tags: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
    },
    versionChip: {
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
      paddingVertical: 2,
      paddingHorizontal: 10,
      borderRadius: theme.radii.full,
      backgroundColor: theme.colors.brandSurface.elevated,
    },
    versionChipIcon: {
      tintColor: theme.colors.content.base,
    },
    version: {
      fontFamily: theme.fontFamily.mono.regular,
      fontSize: theme.fontSizes.label.fontSize,
      lineHeight: theme.fontSizes.label.lineHeight,
      color: theme.colors.content.base,
    },
    date: {
      fontFamily: theme.fontFamily.mono.regular,
      fontSize: theme.fontSizes.label.fontSize,
      lineHeight: theme.fontSizes.label.lineHeight,
      color: theme.colors.content.muted,
    },
    title: {
      fontFamily: theme.fontFamily.semiBold,
      fontSize: theme.fontSizes.subtitle.fontSize,
      lineHeight: theme.fontSizes.subtitle.lineHeight,
      color: theme.colors.content.base,
    },
    description: {
      fontFamily: theme.fontFamily.regular,
      fontSize: theme.fontSizes.bodySmall.fontSize,
      lineHeight: theme.fontSizes.bodySmall.lineHeight,
      color: theme.colors.content.muted,
    },
    readMore: {
      flexDirection: "row",
      alignItems: "center",
      gap: 4,
      paddingTop: 4,
    },
    readMoreText: {
      fontFamily: theme.fontFamily.medium,
      fontSize: theme.fontSizes.bodySmall.fontSize,
      lineHeight: theme.fontSizes.bodySmall.lineHeight,
      color: theme.colors.content.base,
    },
    readMoreIcon: {
      tintColor: theme.colors.content.base,
    },
  });
}
