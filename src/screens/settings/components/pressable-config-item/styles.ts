import { StyleSheet } from "react-native";

import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    content: {
      flexDirection: "row",
      alignItems: "center",
      gap: 16,

      padding: 16,
    },
    iconContainer: {
      alignItems: "center",
      justifyContent: "center",
      width: 36,
      height: 36,
      borderRadius: theme.radii["4"],
      backgroundColor: theme.colors.brandSurface.base,
    },
    icon: {
      tintColor: theme.colors.brandContent.base,
    },
    text: {
      flex: 1,
      fontFamily: theme.fontFamily.medium,
      fontSize: theme.fontSizes.body.fontSize,
      lineHeight: theme.fontSizes.body.lineHeight,
      color: theme.colors.content.base,
    },
    chevron: {
      tintColor: theme.colors.content.muted,
    },
  });
}
