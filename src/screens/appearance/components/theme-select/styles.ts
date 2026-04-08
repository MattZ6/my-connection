import { StyleSheet } from "react-native";
import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    buttonContent: {
      flexDirection: "row",
      gap: 16,
      padding: 16,
    },
    buttonText: {
      flex: 1,
      fontFamily: theme.fontFamily.regular,
      fontSize: theme.fontSizes.body.fontSize,
      lineHeight: theme.fontSizes.body.lineHeight,
      color: theme.colors.content.base,
    },
    icon: {
      tintColor: theme.colors.brandContent.base,
    },
  });
}
