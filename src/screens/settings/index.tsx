import { Stack } from "expo-router";
import { useTranslation } from "react-i18next";
import { Platform, ScrollView } from "react-native";

import { useStyles } from "@/hooks/use-styles";
import { useTheme } from "@/hooks/use-theme";

import { AboutSectionContent } from "./components/about-section-content";
import { EnvironmentBanner } from "./components/environment-banner";
import { PreferencesSectionContent } from "./components/preferences-section-content";
import { PrivacyDisclaimer } from "./components/privacy-disclaimer";
import { PrivacySectionContent } from "./components/privacy-section";

import { getStyles } from "./styles";

const isIos = Platform.OS === "ios";

const environment = String(
  process.env.EXPO_PUBLIC_APP_VARIANT || "development",
) as "development" | "preview" | "production";

export function SettingsScreen() {
  const { colors, fontFamily } = useTheme();
  const styles = useStyles(getStyles);
  const { t } = useTranslation();

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
        <PreferencesSectionContent />
        <PrivacySectionContent />
        <AboutSectionContent />
        <PrivacyDisclaimer />
      </ScrollView>
    </>
  );
}
