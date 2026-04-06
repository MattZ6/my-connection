import { StyleSheet } from "react-native";

import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    container: {
      padding: 24,
      gap: 24,
    },
    hero: {
      flexDirection: "row",
      alignItems: "center",
      gap: 24,
    },
    heroIcon: {
      tintColor: theme.colors.text,
    },
    heroLabel: {
      fontFamily: theme.fontFamily.regular,
      fontSize: 12,
      textTransform: "uppercase",
      letterSpacing: 1,
      color: theme.colors.textSecondary,
    },
    heroValue: {
      fontFamily: theme.fontFamily.regular,
      fontSize: 24,
      lineHeight: 40,
      color: theme.colors.text,
    },
    statsRow: {
      flexDirection: "row",
      gap: 16,
    },
    signalStrengthLabel: {
      fontFamily: theme.fontFamily.regular,
      fontSize: 12,
      textTransform: "uppercase",
      letterSpacing: 1,
      color: theme.colors.textSecondary,
    },
    signalStrengthProgressContainer: {
      height: 8,
      borderRadius: 8,
      backgroundColor: theme.colors.background,
      // backgroundColor: Platform.select({
      //   android: Color.android.dynamic.surfaceContainerHigh,
      //   ios: Color.ios.secondarySystemFill,
      // }),
    },
    signalStrengthProgress: {
      height: 8,
      borderRadius: 8,
      backgroundColor: theme.colors.text,
      // backgroundColor: Platform.select({
      //   android: Color.android.dynamic.primary,
      //   ios: Color.ios.systemBlue,
      // }
    },
  });
}
