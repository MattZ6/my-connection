import { useRouter } from "expo-router";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";

import { Card } from "@/components/ui/card";
import { Section, SectionDivider } from "@/components/ui/section";

import { PressableConfigItem } from "../pressable-config-item";

export function PreferencesSectionContent() {
  const router = useRouter();
  const { t } = useTranslation("translation", {
    keyPrefix: "settings.sections.preferences",
  });

  const handleNavigateToPreferencesPage = useCallback(
    () => router.navigate("/settings/preferences"),
    [router.navigate],
  );

  const handleNavigateToAppearancePage = useCallback(
    () => router.navigate("/settings/appearance"),
    [router.navigate],
  );

  const handleNavigateToLanguagePage = useCallback(
    () => router.navigate("/settings/language"),
    [router.navigate],
  );

  return (
    <Section title={t("title")}>
      <Card>
        <PressableConfigItem
          label={t("links.preferences.title")}
          icon={{ android: "tune", ios: "slider.horizontal.3" }}
          onPress={handleNavigateToPreferencesPage}
        />

        <SectionDivider />

        <PressableConfigItem
          label={t("links.appearance.title")}
          icon={{ android: "palette", ios: "paintpalette" }}
          onPress={handleNavigateToAppearancePage}
        />

        <SectionDivider />

        <PressableConfigItem
          label={t("links.language.title")}
          icon={{ android: "language", ios: "translate" }}
          onPress={handleNavigateToLanguagePage}
        />
      </Card>
    </Section>
  );
}
