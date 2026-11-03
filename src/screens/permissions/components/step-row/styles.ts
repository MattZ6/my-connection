import { StyleSheet } from "react-native";

import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "flex-start",
      gap: 16,
      minHeight: 64,
      paddingVertical: 16,
      paddingHorizontal: 16,
    },
    locked: {
      opacity: 0.55,
    },
    leading: {
      width: 22,
      height: 22,
    },
    doneIcon: {
      tintColor: theme.colors.semantic.success,
    },
    number: {
      borderRadius: theme.radii.full,
      alignItems: "center",
      justifyContent: "center",
    },
    numberActive: {
      backgroundColor: theme.colors.semantic.caution,
    },
    numberLocked: {
      borderWidth: 1.5,
      borderColor: theme.colors.border.default,
    },
    numberText: {
      fontSize: theme.fontSizes.label.fontSize,
      lineHeight: theme.fontSizes.label.lineHeight,
    },
    numberTextActive: {
      fontFamily: theme.fontFamily.mono.medium,
      color: theme.colors.surface.base,
    },
    numberTextLocked: {
      fontFamily: theme.fontFamily.mono.regular,
      color: theme.colors.content.muted,
    },
    content: {
      flex: 1,
    },
    title: {
      fontFamily: theme.fontFamily.regular,
      fontSize: theme.fontSizes.body.fontSize,
      lineHeight: theme.fontSizes.body.lineHeight,
      color: theme.colors.content.base,
    },
    description: {
      fontFamily: theme.fontFamily.regular,
      fontSize: theme.fontSizes.bodySmall.fontSize,
      lineHeight: theme.fontSizes.bodySmall.lineHeight,
      color: theme.colors.content.muted,
    },
    action: {
      alignSelf: "center",
      height: 36,
      paddingHorizontal: 14,
      justifyContent: "center",
      borderRadius: theme.radii.full,
      backgroundColor: theme.colors.content.base,
      overflow: "hidden",
    },
    actionText: {
      fontFamily: theme.fontFamily.medium,
      fontSize: theme.fontSizes.bodySmall.fontSize,
      lineHeight: theme.fontSizes.bodySmall.lineHeight,
      color: theme.colors.surface.base,
    },
  });
}
