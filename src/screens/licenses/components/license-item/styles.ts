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
      borderRadius: theme.radii["5"],
      overflow: "hidden",
      borderColor: theme.colors.border.default,
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
      fontSize: theme.fontSizes.body.fontSize,
      lineHeight: theme.fontSizes.body.lineHeight,
      color: theme.colors.content.base,
    },
    version: {
      fontFamily: theme.fontFamily.regular,
      fontSize: theme.fontSizes.bodySmall.fontSize,
      lineHeight: theme.fontSizes.bodySmall.lineHeight,
      textAlign: "right",
      color: theme.colors.content.muted,
    },
    licenses: {
      fontFamily: theme.fontFamily.regular,
      fontSize: theme.fontSizes.bodySmall.fontSize,
      lineHeight: theme.fontSizes.bodySmall.lineHeight,
      color: theme.colors.content.muted,
    },
  });
}
