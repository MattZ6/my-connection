import { StyleSheet } from "react-native";

import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  const size = 56;

  return StyleSheet.create({
    androidButtonContainer: {
      alignItems: "center",
      justifyContent: "center",
      padding: 8,
      marginRight: -16,
      width: size,
      height: size,
      borderRadius: size,
      overflow: "hidden",
    },
    androidButton: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    icon: {
      color: theme.colors.content.base,
    },
  });
}
