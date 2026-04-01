import { Stack } from "expo-router";
import { ScrollView, Text } from "react-native";

import { useStyles } from "@/hooks/use-styles";
import { useTheme } from "@/hooks/use-theme";

import { AboutSection } from "./components/about-section";
import { DeviceSection } from "./components/device-section";
import { OSSection } from "./components/os-section";

import { getStyles } from "./styles";

export function AboutScreen() {
  const { colors, fontFamily } = useTheme();
  const styles = useStyles(getStyles);

  return (
    <>
      <Stack.Screen.BackButton displayMode="minimal" />
      <Stack.Screen.Title
        style={{
          fontFamily: fontFamily.medium,
          color: colors.text.toString(),
        }}
      >
        About
      </Stack.Screen.Title>

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        style={styles.container}
        contentContainerStyle={styles.scrollContainer}
      >
        <AboutSection />
        <DeviceSection />
        <OSSection />
        <Text style={styles.disclaimer}>
          Don't worry, this information won't{"\n"}leave your device.
        </Text>
      </ScrollView>
    </>
  );
}
