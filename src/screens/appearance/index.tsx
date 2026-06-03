import { useObserve } from "expo-observe";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Platform, ScrollView } from "react-native";

import { Section } from "@/components/ui/section";

import { useStyles } from "@/hooks/use-styles";
import { useTheme } from "@/hooks/use-theme";

import { DynamicColorsToggle } from "./components/dynamic-colors-toggle";
import { ThemeSelect } from "./components/theme-select";

import { getStyles } from "./styles";

export function AppearanceScreen() {
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
        {t("appearance.meta.title")}
      </Stack.Screen.Title>

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        style={styles.container}
        contentContainerStyle={styles.scrollContainer}
      >
        <Section title={t("appearance.sections.theme.title")}>
          <ThemeSelect />
        </Section>

        <Section>
          <DynamicColorsToggle />
        </Section>
      </ScrollView>
    </>
  );
}
