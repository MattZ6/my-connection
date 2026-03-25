import { Color } from "expo-router";
import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    backgroundColor: Platform.select({
      android: Color.android.dynamic.surfaceContainerLow,
      ios: Color.ios.secondarySystemBackground,
    }),
  },
  divider: {
    height: 1,
    marginHorizontal: 16,
    backgroundColor: Platform.select({
      android: Color.android.dynamic.surfaceContainerHigh,
      ios: Color.ios.separator,
    }),
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,

    padding: 16,
  },
  buttonIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: Platform.select({
      android: Color.android.dynamic.primaryInverse,
      ios: Color.ios.systemGray4,
    }),
  },
  buttonText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
    color: Platform.select({
      android: Color.android.dynamic.onSurface,
      ios: Color.ios.label,
    }),
  },
});
