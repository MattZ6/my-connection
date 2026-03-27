import { StyleSheet } from "react-native";

import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    content: {
      flexDirection: "row",
      alignItems: "center",
      gap: 16,

      padding: 16,
    },
    iconContainer: {
      alignItems: "center",
      justifyContent: "center",
      width: 36,
      height: 36,
      borderRadius: 8,
      backgroundColor: theme.colors.background,
      // backgroundColor: Platform.select({
      //   android: Color.android.dynamic.primaryInverse,
      //   ios: Color.ios.systemGray4,
      // }),
    },
    icon: {
      tintColor: theme.colors.text,
    },
    text: {
      flex: 1,
      fontFamily: theme.fontFamily.medium,
      fontSize: 16,
      lineHeight: 24,
      color: theme.colors.text,
    },
    chevron: {
      tintColor: theme.colors.textSecondary,
    },
  });
}
