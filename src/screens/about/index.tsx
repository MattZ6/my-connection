import { useObserve } from "expo-observe";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Platform, ScrollView, Text } from "react-native";

import { useStyles } from "@/hooks/use-styles";
import { useTheme } from "@/hooks/use-theme";

import { AboutSection } from "./components/about-section";
import { AuthorSection } from "./components/author-section";
import { DeviceSection } from "./components/device-section";
import { OSSection } from "./components/os-section";

import { getStyles } from "./styles";

export function AboutScreen() {
  const { colors, fontFamily } = useTheme();
  const styles = useStyles(getStyles);
  const { t } = useTranslation();
  const { markInteractive } = useObserve();

  useEffect(() => {
    markInteractive();
  }, [markInteractive]);

  return (
    <>
      <Stack.Screen.BackButton displayMode="minimal" />
      <Stack.Screen.Title
        style={{
          fontFamily: Platform.select({
            android: fontFamily.medium,
            ios: fontFamily.semiBold,
          }),
          color: colors.content.base.toString(),
        }}
      >
        {t("about.meta.title")}
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
        <AuthorSection />
        <Text style={styles.disclaimer}>{t("about.disclaimer")}</Text>
      </ScrollView>
    </>
  );
}
