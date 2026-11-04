import { StyleSheet } from "react-native";

import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    container: {
      height: 18,
      minWidth: 120,
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    },
    label: {
      position: "absolute",
      fontFamily: theme.fontFamily.regular,
      fontSize: 13,
      lineHeight: 18,
      letterSpacing: 1.2,
      textTransform: "uppercase",
    },
  });
}
