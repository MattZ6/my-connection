import { StyleSheet } from "react-native";

import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    container: {
      gap: 8,
    },
    // Same look as the SettingsSection title.
    title: {
      paddingHorizontal: 4,
      fontFamily: theme.fontFamily.mono.regular,
      fontSize: 11,
      lineHeight: 16,
      letterSpacing: 1,
      textTransform: "uppercase",
      color: theme.colors.content.muted,
    },
    card: {
      paddingVertical: 24,
      paddingHorizontal: 20,
      gap: 20,
      borderRadius: theme.radii["7"],
      backgroundColor: theme.colors.surface.elevated,
    },
    quote: {
      gap: 8,
    },
    quoteIcon: {
      tintColor: theme.colors.border.default,
    },
    quoteText: {
      fontFamily: theme.fontFamily.regular,
      fontStyle: "italic",
      fontSize: theme.fontSizes.subtitle.fontSize,
      lineHeight: theme.fontSizes.subtitle.lineHeight,
      color: theme.colors.content.base,
    },
    byline: {
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: theme.radii.full,
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      backgroundColor: theme.colors.brandSurface.elevated,
    },
    avatarImage: {
      position: "absolute",
      inset: 0,
    },
    avatarText: {
      fontFamily: theme.fontFamily.mono.regular,
      fontSize: theme.fontSizes.label.fontSize,
      lineHeight: theme.fontSizes.label.lineHeight,
      color: theme.colors.content.base,
    },
    bylineText: {
      flex: 1,
    },
    name: {
      fontFamily: theme.fontFamily.semiBold,
      fontSize: theme.fontSizes.body.fontSize,
      lineHeight: theme.fontSizes.body.lineHeight,
      color: theme.colors.content.base,
    },
    role: {
      fontFamily: theme.fontFamily.regular,
      fontSize: theme.fontSizes.bodySmall.fontSize,
      lineHeight: theme.fontSizes.bodySmall.lineHeight,
      color: theme.colors.content.muted,
    },
  });
}
