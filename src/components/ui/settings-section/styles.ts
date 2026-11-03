import { StyleSheet } from "react-native";

import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    container: {
      gap: 8,
    },
    title: {
      paddingHorizontal: 4,
      fontFamily: theme.fontFamily.mono.regular,
      fontSize: 11,
      lineHeight: 16,
      letterSpacing: 1,
      textTransform: "uppercase",
      color: theme.colors.content.muted,
    },
    card: {
      borderRadius: theme.radii["7"],
      backgroundColor: theme.colors.surface.elevated,
      overflow: "hidden",
    },
    divider: {
      height: 2,
      backgroundColor: theme.colors.surface.base,
    },
  });
}
