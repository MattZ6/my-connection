import { StyleSheet } from "react-native";

import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      gap: 6,
      paddingTop: 8,
    },
    icon: {
      tintColor: theme.colors.content.muted,
    },
    text: {
      fontFamily: theme.fontFamily.regular,
      fontSize: 13,
      lineHeight: 18,
      maxWidth: 280,
      color: theme.colors.content.muted,
      textAlign: "center",
    },
  });
}
