import { StyleSheet } from "react-native";

import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    iconContainer: {
      alignItems: "center",
      justifyContent: "center",
      width: 36,
      height: 36,
      borderRadius: theme.radii["4"],
      backgroundColor:
        theme.theme === "system"
          ? theme.colors.brandSurface.base
          : theme.colors.brandSurface.elevated,
    },
    icon: {
      tintColor: theme.colors.brandContent.base,
    },
    newsDot: {
      width: 8,
      height: 8,
      borderRadius: theme.radii.full,
      backgroundColor: theme.colors.semantic.warning,
    },
  });
}
