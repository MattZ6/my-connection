import { StyleSheet } from "react-native";

import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      gap: 16,
      minHeight: 56,
      paddingVertical: 16,
      paddingHorizontal: 16,
    },
    disabled: {
      opacity: 0.55,
    },
    leadingIcon: {
      width: 22,
      height: 22,
    },
    leadingTop: {
      alignSelf: "flex-start",
      marginTop: 4,
    },
    content: {
      flex: 1,
    },
    icon: {
      tintColor: theme.colors.content.muted,
    },
    label: {
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
    trailing: {
      flexShrink: 1,
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
    },
    value: {
      flexShrink: 1,
      fontFamily: theme.fontFamily.regular,
      fontSize: 15,
      lineHeight: theme.fontSizes.body.lineHeight,
      color: theme.colors.content.muted,
    },
    monoValue: {
      fontFamily: theme.fontFamily.mono.regular,
      fontSize: theme.fontSizes.bodySmall.fontSize,
    },
  });
}
