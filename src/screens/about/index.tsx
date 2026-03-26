import { Color, Stack } from "expo-router";
import { Platform, ScrollView, Text } from "react-native";
import { AboutSection } from "./components/about-section";
import { DeviceSection } from "./components/device-section";
import { OSSection } from "./components/os-section";

export function AboutScreen() {
  return (
    <>
      <Stack.Screen.BackButton displayMode="minimal" />
      <Stack.Screen.Title>About</Stack.Screen.Title>

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          backgroundColor: Platform.select({
            android: Color.android.dynamic.surface,
            ios: Color.ios.systemBackground,
          }),
        }}
        contentContainerStyle={{
          paddingVertical: 32,
          paddingHorizontal: 16,
          gap: 32,
        }}
      >
        <AboutSection />
        <DeviceSection />
        <OSSection />
        <Text
          style={{
            fontSize: 14,
            lineHeight: 24,
            textAlign: "center",
            color: Platform.select({
              android: Color.android.dynamic.onSurfaceVariant,
              ios: Color.ios.secondaryLabel,
            }),
          }}
        >
          Don't worry, this information won't{"\n"}leave your device.
        </Text>
      </ScrollView>
    </>
  );
}
