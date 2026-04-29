import { StyleSheet } from "react-native";

import type { ThemeConfig } from "@/theme/types";

export function getStyles(_: ThemeConfig) {
  return StyleSheet.create({
    card: {
      padding: 16,
      gap: 16,
    },
    list: {
      gap: 8,
    },
  });
}
