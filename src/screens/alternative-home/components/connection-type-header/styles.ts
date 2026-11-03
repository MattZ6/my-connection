import { StyleSheet } from "react-native";
import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      gap: 16,
    },
    iconContainer: {
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      width: 44,
      height: 44,
      borderRadius: 44,
      backgroundColor: theme.colors.surface.elevated,
    },
    content: {
      position: "relative",
      justifyContent: "center",
    },
    label: {
      position: "absolute",
      fontFamily: theme.fontFamily.mono.medium,
      fontSize: theme.fontSizes.bodySmall.fontSize,
      lineHeight: theme.fontSizes.label.lineHeight,
      color: theme.colors.content.muted,
    },
    subtitle: {
      position: "absolute",
      fontFamily: theme.fontFamily.medium,
      fontSize: theme.fontSizes.bodySmall.fontSize,
      lineHeight: theme.fontSizes.label.lineHeight,
      color: theme.colors.content.base,
    },
  });
}
