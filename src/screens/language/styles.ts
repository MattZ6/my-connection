import { StyleSheet } from "react-native";

import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.surface.base,
    },
    scrollContainer: {
      paddingVertical: 32,
      paddingHorizontal: 16,
      gap: 32,
    },
  });
}
