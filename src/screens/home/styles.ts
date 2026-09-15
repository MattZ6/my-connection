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
      paddingTop: 16,
      paddingHorizontal: 16,
      paddingBottom: insets.bottom + 16,
      gap: 32,
    },
  });
}
