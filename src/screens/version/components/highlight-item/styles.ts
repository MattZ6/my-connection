import { StyleSheet } from "react-native";

import type { ThemeConfig } from "@/theme/types";

const BULLET_SIZE = 6;

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      gap: 12,
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
    // Centered on the first line of text.
    bullet: {
      width: BULLET_SIZE,
      height: BULLET_SIZE,
      marginTop: (theme.fontSizes.body.lineHeight - BULLET_SIZE) / 2,
      borderRadius: theme.radii.full,
      backgroundColor: theme.colors.border.default,
    },
    text: {
      flex: 1,
      fontFamily: theme.fontFamily.regular,
      fontSize: theme.fontSizes.body.fontSize,
      lineHeight: theme.fontSizes.body.lineHeight,
      color: theme.colors.content.base,
    },
  });
}
