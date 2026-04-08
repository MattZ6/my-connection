import { Stack } from "expo-router";
import { useTranslation } from "react-i18next";
import { Platform, ScrollView } from "react-native";

import { Section } from "@/components/ui/section";

import { useStyles } from "@/hooks/use-styles";
import { useTheme } from "@/hooks/use-theme";

import { LanguageSelect } from "./components/language-select";

import { getStyles } from "./styles";

export function LanguageScreen() {
  const { colors, fontFamily } = useTheme();
  const styles = useStyles(getStyles);
  const { t } = useTranslation();

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
        {t("language.meta.title")}
      </Stack.Screen.Title>

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        style={styles.container}
        contentContainerStyle={styles.scrollContainer}
      >
        <Section title={t("language.sections.language.title")}>
          <LanguageSelect />
        </Section>
      </ScrollView>
    </>
  );
}
