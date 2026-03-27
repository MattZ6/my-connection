import { StyleSheet } from "react-native";

import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    divider: {
      height: 1,
      marginHorizontal: 16,
      backgroundColor: theme.colors.divider,
    },
  });
}
