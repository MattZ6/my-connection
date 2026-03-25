import { Color } from "expo-router";
import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 12,
  },
  title: {
    fontSize: 12,
    lineHeight: 20,
    textTransform: "uppercase",
    letterSpacing: 1,
    color: Platform.select({
      android: Color.android.dynamic.onSurfaceVariant,
      ios: Color.ios.secondaryLabel,
    }),
  },
});
