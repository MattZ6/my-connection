import { Color, Stack } from "expo-router";
import { Platform, ScrollView } from "react-native";
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
          padding: 24,
          gap: 24,
        }}
      >
        <AboutSection />
        <DeviceSection />
        <OSSection />
      </ScrollView>
    </>
  );
}
