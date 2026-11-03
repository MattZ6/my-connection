import { useObserve } from "expo-observe";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Platform, ScrollView } from "react-native";

import { useStyles } from "@/hooks/use-styles";
import { useTheme } from "@/hooks/use-theme";

import { AboutSection } from "./components/about-section";
import { EnvironmentBanner } from "./components/environment-banner";
import { GeneralSection } from "./components/general-section";
import { NetworkSection } from "./components/network-section";
import { PrivacyDisclaimer } from "./components/privacy-disclaimer";

import { getStyles } from "./styles";

const isIos = Platform.OS === "ios";

const environment = String(
  process.env.EXPO_PUBLIC_APP_VARIANT || "development",
) as "development" | "preview" | "production";

export function SettingsScreen() {
  const { colors, fontFamily } = useTheme();
  const styles = useStyles(getStyles);
  const { t } = useTranslation();
  const { markInteractive } = useObserve();

  useEffect(() => {
    markInteractive();
  }, [markInteractive]);

  return (
    <>
      <Stack.Screen.Title
        large={isIos}
        largeStyle={{
          fontFamily: fontFamily.bold,
          color: colors.content.base.toString(),
        }}
        style={{
          fontFamily: Platform.select({
            android: fontFamily.medium,
            ios: fontFamily.semiBold,
          }),
          color: colors.content.base.toString(),
        }}
      >
        {t("settings.meta.title")}
      </Stack.Screen.Title>

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        style={styles.container}
        contentContainerStyle={styles.scrollContainer}
      >
        <EnvironmentBanner variant={environment} />
        <NetworkSection />
        <GeneralSection />
        <AboutSection />
        <PrivacyDisclaimer />
      </ScrollView>
    </>
  );
}
