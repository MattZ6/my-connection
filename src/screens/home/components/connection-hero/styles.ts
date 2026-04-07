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
      tintColor: theme.colors.content.base,
    },
    heroLabel: {
      fontFamily: theme.fontFamily.regular,
      fontSize: 12,
      textTransform: "uppercase",
      letterSpacing: 1,
      color: theme.colors.content.muted,
    },
    heroValue: {
      fontFamily: theme.fontFamily.regular,
      fontSize: 24,
      lineHeight: 40,
      color: theme.colors.content.base,
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
      color: theme.colors.content.muted,
    },
    signalStrengthProgressContainer: {
      height: 8,
      borderRadius: theme.radii["4"],
      backgroundColor: theme.colors.surface.base,
      // backgroundColor: Platform.select({
      //   android: Color.android.dynamic.surfaceContainerHigh,
      //   ios: Color.ios.secondarySystemFill,
      // }),
    },
    signalStrengthProgress: {
      height: 8,
      borderRadius: theme.radii["4"],
      backgroundColor: theme.colors.content.base,
      // backgroundColor: Platform.select({
      //   android: Color.android.dynamic.primary,
      //   ios: Color.ios.systemBlue,
      // }
    },
  });
}
