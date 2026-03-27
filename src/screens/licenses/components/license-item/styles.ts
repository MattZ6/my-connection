import { StyleSheet } from "react-native";
import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    container: {
      padding: 16,
      flexDirection: "row",
      gap: 16,
    },
    iconContainer: {
      width: 40,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: 12,
      overflow: "hidden",
      borderColor: theme.colors.divider,
      // borderColor: Platform.select({
      //   android: Color.android.dynamic.surfaceContainerHigh,
      //   ios: Color.ios.separator,
      // }),
    },
    image: {
      width: 36,
      height: 36,
    },
    content: {
      flex: 1,
    },
    header: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
    name: {
      fontFamily: theme.fontFamily.medium,
      fontSize: 16,
      lineHeight: 24,
      color: theme.colors.text,
    },
    version: {
      fontFamily: theme.fontFamily.regular,
      fontSize: 14,
      lineHeight: 24,
      textAlign: "right",
      color: theme.colors.textSecondary,
    },
    licenses: {
      fontFamily: theme.fontFamily.regular,
      fontSize: 14,
      lineHeight: 24,
      color: theme.colors.textSecondary,
    },
  });
}
