import { StyleSheet } from "react-native";

import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    container: {
      gap: 8,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
      paddingHorizontal: 4,
    },
    title: {
      fontFamily: theme.fontFamily.mono.regular,
      fontSize: 11,
      lineHeight: 16,
      letterSpacing: 1,
      textTransform: "uppercase",
      color: theme.colors.content.muted,
    },
    count: {
      fontFamily: theme.fontFamily.mono.regular,
      fontSize: 11,
      lineHeight: 16,
      color: theme.colors.content.muted,
      opacity: 0.7,
    },
    card: {
      borderRadius: theme.radii["7"],
      backgroundColor: theme.colors.surface.elevated,
      overflow: "hidden",
    },
    item: {
      backgroundColor: theme.colors.surface.elevated,
      overflow: "hidden",
    },
    firstItem: {
      borderTopLeftRadius: theme.radii["7"],
      borderTopRightRadius: theme.radii["7"],
    },
    lastItem: {
      borderBottomLeftRadius: theme.radii["7"],
      borderBottomRightRadius: theme.radii["7"],
    },
    divider: {
      height: 2,
      backgroundColor: theme.colors.surface.base,
    },
  });
}
