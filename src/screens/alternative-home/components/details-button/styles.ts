import { StyleSheet } from "react-native";

import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    container: {
      alignSelf: "center",
      borderRadius: theme.radii.full,
      overflow: "hidden",
    },
    button: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
      height: 44,
      paddingHorizontal: 20,
      borderRadius: theme.radii.full,
      borderWidth: 1,
      borderColor: theme.colors.border.default,
      backgroundColor: theme.colors.surface.elevated,
    },
    label: {
      fontFamily: theme.fontFamily.regular,
      fontSize: 14,
      lineHeight: 20,
      color: theme.colors.content.base,
    },
  });
}
