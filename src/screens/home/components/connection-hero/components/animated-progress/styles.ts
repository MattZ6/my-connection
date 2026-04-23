import { StyleSheet } from "react-native";

import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    container: {
      height: 8,
      borderRadius: theme.radii["4"],
      backgroundColor: theme.colors.brandSurface.base,
      overflow: "hidden",
    },
    bar: {
      width: "100%",
      height: 8,
      borderRadius: theme.radii["4"],
      backgroundColor: theme.colors.brandContent.base,
    },
  });
}
