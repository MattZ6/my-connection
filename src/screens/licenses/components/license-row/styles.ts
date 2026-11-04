import { StyleSheet } from "react-native";

import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      gap: 16,
      minHeight: 60,
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
    content: {
      flex: 1,
      gap: 2,
    },
    name: {
      fontFamily: theme.fontFamily.mono.regular,
      fontSize: theme.fontSizes.bodySmall.fontSize,
      lineHeight: theme.fontSizes.bodySmall.lineHeight,
      color: theme.colors.content.base,
    },
    details: {
      fontFamily: theme.fontFamily.regular,
      fontSize: theme.fontSizes.bodySmall.fontSize,
      lineHeight: theme.fontSizes.bodySmall.lineHeight,
      color: theme.colors.content.muted,
    },
    icon: {
      tintColor: theme.colors.content.muted,
    },
  });
}
