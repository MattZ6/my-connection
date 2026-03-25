import { Color, Stack } from "expo-router";
import { Platform } from "react-native";

export default function SettingsStack() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.select({
            android: Color.android?.dynamic?.surfaceContainerLow?.toString(),
            ios: "transparent",
          }),
        },
      }}
    />
  );
}
