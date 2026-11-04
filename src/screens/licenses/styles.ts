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
      paddingBottom: insets.bottom + 24,
      paddingHorizontal: 16,
      gap: 24,
    },
    description: {
      paddingHorizontal: 4,
      fontFamily: theme.fontFamily.regular,
      fontSize: theme.fontSizes.bodySmall.fontSize,
      lineHeight: theme.fontSizes.bodySmall.lineHeight,
      color: theme.colors.content.muted,
    },
  });
}
