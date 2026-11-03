import { StyleSheet } from "react-native";

import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "flex-start",
      gap: 16,
      minHeight: 64,
      paddingVertical: 14,
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
      fontSize: 12,
      lineHeight: 16,
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
      gap: 2,
    },
    title: {
      fontFamily: theme.fontFamily.regular,
      fontSize: 15,
      lineHeight: 20,
      color: theme.colors.content.base,
    },
    description: {
      fontFamily: theme.fontFamily.regular,
      fontSize: 13,
      lineHeight: 18,
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
      fontSize: 13,
      lineHeight: 18,
      color: theme.colors.surface.base,
    },
  });
}
