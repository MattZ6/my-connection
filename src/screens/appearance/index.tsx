import { Stack } from "expo-router";
import { useTranslation } from "react-i18next";
import { ScrollView } from "react-native";

import { Section } from "@/components/ui/section";
import { useStyles } from "@/hooks/use-styles";

import { useTheme } from "@/hooks/use-theme";

import { ThemeSelect } from "./components/theme-select";

import { getStyles } from "./styles";

export function AppearanceScreen() {
  const { colors, fontFamily } = useTheme();
  const styles = useStyles(getStyles);
  const { t } = useTranslation();

  return (
    <>
      <Stack.Screen.BackButton displayMode="minimal" />
      <Stack.Screen.Title
        style={{
          fontFamily: fontFamily.medium,
          color: colors.text.toString(),
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
      </ScrollView>
    </>
  );
}
