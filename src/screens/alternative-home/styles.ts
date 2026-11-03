import { StyleSheet } from "react-native";
import type { EdgeInsets } from "react-native-safe-area-context";

import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig, insets: EdgeInsets) {
  return StyleSheet.create({
    scroll: {
      flex: 1,
      backgroundColor: theme.colors.surface.base,
    },
    container: {
      flexGrow: 1,
      justifyContent: "space-between",
      gap: 32,
      paddingTop: 56,
      paddingHorizontal: 16,
      paddingBottom: insets.bottom + 24,
    },
    overview: {
      alignItems: "center",
      gap: 40,
    },
    status: {
      alignItems: "center",
      gap: 20,
    },
    footer: {
      gap: 16,
    },
  });
}
