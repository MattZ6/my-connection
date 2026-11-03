import { StyleSheet } from "react-native";
import type { EdgeInsets } from "react-native-safe-area-context";

import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig, insets: EdgeInsets) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.surface.base,
    },
    scrollContainer: {
      paddingTop: 24,
      paddingBottom: insets.bottom + 16,
      paddingHorizontal: 16,
      gap: 24,
    },
    intro: {
      paddingHorizontal: 4,
      fontFamily: theme.fontFamily.regular,
      fontSize: 14,
      lineHeight: 21,
      color: theme.colors.content.muted,
    },
    disclaimer: {
      alignItems: "center",
      gap: 6,
      paddingTop: 8,
    },
    disclaimerIcon: {
      tintColor: theme.colors.content.muted,
    },
    disclaimerText: {
      maxWidth: 280,
      fontFamily: theme.fontFamily.regular,
      fontSize: 13,
      lineHeight: 18,
      color: theme.colors.content.muted,
      textAlign: "center",
    },
  });
}
