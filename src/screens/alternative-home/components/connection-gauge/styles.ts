import { StyleSheet } from "react-native";

import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    gauge: {
      alignSelf: "center",
    },
    center: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      gap: 4,
    },
    value: {
      fontFamily: theme.fontFamily.mono.regular,
      fontSize: 52,
      lineHeight: 60,
      letterSpacing: -1,
      color: theme.colors.content.base,
    },
    caption: {
      fontFamily: theme.fontFamily.regular,
      fontSize: 13,
      lineHeight: 18,
      letterSpacing: 1.2,
      textTransform: "uppercase",
      color: theme.colors.content.muted,
    },
  });
}
