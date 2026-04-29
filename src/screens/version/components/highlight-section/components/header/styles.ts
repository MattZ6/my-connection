import { StyleSheet } from "react-native";

import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      gap: 16,
    },
    iconContainer: {
      width: 32,
      height: 32,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: theme.colors.border.default,
      alignItems: "center",
      justifyContent: "center",
    },
    icon: {
      tintColor: theme.colors.content.base,
    },
    content: {
      flex: 1,
    },
    title: {
      color: theme.colors.content.base,
      fontFamily: theme.fontFamily.medium,
      fontSize: theme.fontSizes.subtitle.fontSize,
      lineHeight: theme.fontSizes.subtitle.lineHeight,
    },
  });
}
