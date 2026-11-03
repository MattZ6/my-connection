import { StyleSheet } from "react-native";

import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      alignSelf: "center",
      gap: 4,
      height: 32,
      paddingHorizontal: 4,
      borderRadius: theme.radii.full,
      borderWidth: 1,
      borderStyle: "dashed",
      borderColor: theme.colors.border.default,
    },
    arrow: {
      width: 28,
      height: 28,
      alignItems: "center",
      justifyContent: "center",
    },
    label: {
      minWidth: 180,
      textAlign: "center",
      fontFamily: theme.fontFamily.mono.regular,
      fontSize: 12,
      lineHeight: 16,
      color: theme.colors.content.muted,
    },
  });
}
