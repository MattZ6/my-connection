import { StyleSheet } from "react-native";

import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
      minHeight: 32,
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: theme.radii.full,
      backgroundColor: theme.colors.surface.elevated,
    },
    label: {
      flexShrink: 1,
      fontFamily: theme.fontFamily.regular,
      fontSize: 13,
      lineHeight: 18,
      color: theme.colors.content.muted,
    },
    mono: {
      fontFamily: theme.fontFamily.mono.regular,
    },
  });
}
