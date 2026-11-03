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
      flexShrink: 1,
      // Same height as the icon, so a lone label sits centered next to it.
      height: 44,
      justifyContent: "center",
      gap: 2,
    },
    label: {
      fontFamily: theme.fontFamily.mono.medium,
      fontSize: 13,
      lineHeight: 18,
      color: theme.colors.content.muted,
    },
    subtitle: {
      fontFamily: theme.fontFamily.medium,
      fontSize: 15,
      lineHeight: 20,
      color: theme.colors.content.base,
    },
    chipContainer: {
      alignSelf: "flex-start",
      borderRadius: theme.radii.full,
      overflow: "hidden",
    },
    chip: {
      flexDirection: "row",
      alignItems: "center",
      gap: 4,
      height: 28,
      paddingLeft: 8,
      paddingRight: 10,
      borderRadius: theme.radii.full,
      borderWidth: 1,
      borderColor: theme.colors.border.default,
    },
    chipLabel: {
      fontFamily: theme.fontFamily.medium,
      fontSize: 13,
      lineHeight: 18,
      color: theme.colors.content.base,
    },
  });
}
