import { StyleSheet } from "react-native";

import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    refreshButton: {
      alignSelf: "flex-start",
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
      height: 40,
      paddingHorizontal: 16,
      borderWidth: 1,
      borderColor: theme.colors.border.default,
      borderRadius: theme.radii.full,
      overflow: "hidden",
    },
    refreshIcon: {
      tintColor: theme.colors.content.base,
    },
    refreshLabel: {
      fontFamily: theme.fontFamily.regular,
      fontSize: 14,
      lineHeight: 20,
      color: theme.colors.content.base,
    },
  });
}
