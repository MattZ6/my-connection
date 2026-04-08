import { Stack } from "expo-router";
import { Platform } from "react-native";

import { useTheme } from "@/hooks/use-theme";

const isIos = Platform.OS === "ios";

export default function SettingsStack() {
  const { colors } = useTheme();

  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerTransparent: isIos,
        headerStyle: {
          backgroundColor: Platform.select({
            android: colors.surface.elevated.toString(),
            ios: "transparent",
          }),
        },
      }}
    />
  );
}
