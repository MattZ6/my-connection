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
    leadingTop: {
      alignSelf: "flex-start",
      marginTop: 1,
    },
    content: {
      flex: 1,
      gap: 2,
    },
    icon: {
      tintColor: theme.colors.content.muted,
    },
    label: {
      fontFamily: theme.fontFamily.regular,
      fontSize: 15,
      lineHeight: 20,
      color: theme.colors.content.base,
    },
    description: {
      fontFamily: theme.fontFamily.regular,
      fontSize: 13,
      lineHeight: 18,
      color: theme.colors.content.muted,
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
