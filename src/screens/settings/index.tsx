import { Stack } from "expo-router";
import { useTranslation } from "react-i18next";
import { Platform, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useStyles } from "@/hooks/use-styles";
import { useTheme } from "@/hooks/use-theme";

import { AboutSection } from "./components/about-section";
import { EnvironmentBanner } from "./components/environment-banner";
import { GeneralSection } from "./components/general-section";
import { NetworkSection } from "./components/network-section";
import { PrivacyDisclaimer } from "./components/privacy-disclaimer";
import { PrivacySection } from "./components/privacy-section";

import { getStyles } from "./styles";

const environment = String(
  process.env.EXPO_PUBLIC_APP_VARIANT || "development",
) as "development" | "preview" | "production";

export function SettingsScreen() {
  const { colors, fontFamily } = useTheme();
  const insets = useSafeAreaInsets();
  const styles = useStyles((s) => getStyles(s, insets));
  const { t } = useTranslation();

  return (
    <>
      <Stack.Screen.Title
        style={{
          fontFamily: Platform.select({
            android: fontFamily.semiBold,
            ios: fontFamily.semiBold,
          }),
          color: colors.content.base.toString(),
        }}
      >
        {t("settings.meta.title")}
      </Stack.Screen.Title>

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}
        contentContainerStyle={styles.scrollContainer}
        fadingEdgeLength={32}
      >
        <EnvironmentBanner variant={environment} />
        <NetworkSection />
        <GeneralSection />
        <PrivacySection />
        <AboutSection />
        <PrivacyDisclaimer />
      </ScrollView>
    </>
  );
}
