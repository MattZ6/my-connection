import { StyleSheet } from "react-native";

import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      gap: 16,
    },
    listIndicatorContainer: {
      width: 32,
      paddingTop: 8,
      paddingRight: 4,
      alignItems: "flex-end",
    },
    listIndicator: {
      width: 6,
      height: 6,
      opacity: 0.75,
      borderRadius: 6,
      backgroundColor: theme.colors.content.muted,
    },
    content: {
      flex: 1,
    },
    text: {
      color: theme.colors.content.muted,
      fontFamily: theme.fontFamily.regular,
      fontSize: theme.fontSizes.body.fontSize,
      lineHeight: theme.fontSizes.body.lineHeight,
    },
  });
}
