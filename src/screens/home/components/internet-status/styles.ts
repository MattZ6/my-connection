import { StyleSheet } from "react-native";

import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
    },
    dot: {
      width: 8,
      height: 8,
      borderRadius: 8,
    },
    label: {
      fontFamily: theme.fontFamily.regular,
      fontSize: 15,
      lineHeight: 20,
      color: theme.colors.content.base,
    },
  });
}
