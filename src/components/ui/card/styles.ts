import { StyleSheet } from "react-native";

import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    card: {
      borderRadius: 16,
      backgroundColor: theme.colors.card,
    },
  });
}
