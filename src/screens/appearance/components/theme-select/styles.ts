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
      fontSize: 16,
      lineHeight: 24,
      color: theme.colors.text,
    },
    icon: {
      tintColor: theme.colors.text,
    },
  });
}
