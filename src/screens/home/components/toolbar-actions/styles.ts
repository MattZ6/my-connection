import { StyleSheet } from "react-native";

import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  const size = 48;

  return StyleSheet.create({
    androidButtonContainer: {
      alignItems: "center",
      justifyContent: "center",
      padding: 8,
      marginRight: -12,
      width: size,
      height: size,
      borderRadius: size,
      overflow: "hidden",
    },
    androidButton: {
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      borderRadius: size,
    },
    icon: {
      color: theme.colors.content.base,
    },
  });
}
