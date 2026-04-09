import { StyleSheet } from "react-native";

import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    card: {
      borderRadius: theme.radii["6"],
      backgroundColor: theme.colors.surface.elevated,
      overflow: "hidden",
    },
  });
}
