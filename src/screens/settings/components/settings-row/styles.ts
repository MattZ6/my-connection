import { StyleSheet } from "react-native";

import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      gap: 16,
      minHeight: 56,
      paddingVertical: 10,
      paddingHorizontal: 16,
    },
    leadingIcon: {
      width: 22,
      height: 22,
    },
    icon: {
      tintColor: theme.colors.content.muted,
    },
    label: {
      flex: 1,
      fontFamily: theme.fontFamily.regular,
      fontSize: 15,
      lineHeight: 20,
      color: theme.colors.content.base,
    },
    trailing: {
      flexShrink: 1,
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
    },
    value: {
      flexShrink: 1,
      fontFamily: theme.fontFamily.regular,
      fontSize: 14,
      lineHeight: 20,
      color: theme.colors.content.muted,
    },
  });
}
