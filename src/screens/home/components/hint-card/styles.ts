import { StyleSheet } from "react-native";

import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    card: {
      flexDirection: "row",
      gap: 12,
      padding: 16,
      borderRadius: theme.radii[7],
      borderWidth: 1,
      borderColor: theme.colors.border.default,
      backgroundColor: theme.colors.surface.elevated,
    },
    content: {
      flex: 1,
      gap: 12,
      alignItems: "flex-start",
    },
    texts: {},
    title: {
      fontFamily: theme.fontFamily.medium,
      fontSize: theme.fontSizes.body.fontSize,
      lineHeight: theme.fontSizes.body.lineHeight,
      color: theme.colors.content.base,
    },
    message: {
      fontFamily: theme.fontFamily.regular,
      fontSize: theme.fontSizes.bodySmall.fontSize,
      lineHeight: theme.fontSizes.bodySmall.lineHeight,
      color: theme.colors.content.muted,
    },
    actionContainer: {
      borderRadius: theme.radii.full,
      overflow: "hidden",
    },
    action: {
      height: 36,
      paddingHorizontal: 14,
      justifyContent: "center",
      borderRadius: theme.radii.full,
      backgroundColor: theme.colors.content.base,
    },
    actionLabel: {
      fontFamily: theme.fontFamily.medium,
      fontSize: 13,
      lineHeight: 18,
      color: theme.colors.surface.base,
    },
    dismiss: {
      alignSelf: "flex-start",
    },
  });
}
