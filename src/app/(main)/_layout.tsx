import { Stack } from "expo-router";
import { Platform } from "react-native";

import { useTheme } from "@/hooks/use-theme";

export default function MainStack() {
  const { colors } = useTheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.select({
            android: colors.card.toString(),
            ios: "transparent",
          }),
        },
      }}
    />
  );
}
