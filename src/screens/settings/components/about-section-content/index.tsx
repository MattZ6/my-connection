import { useRouter } from "expo-router";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";

import { Card } from "@/components/ui/card";
import { Section, SectionDivider } from "@/components/ui/section";

import { PressableConfigItem } from "../pressable-config-item";

export function AboutSectionContent() {
  const router = useRouter();
  const { t } = useTranslation();

  const handleNavigateToAboutPage = useCallback(
    () => router.push("/settings/about"),
    [router.push],
  );

  const handleNavigateToLicensesPage = useCallback(
    () => router.push("/settings/licenses"),
    [router.push],
  );

  return (
    <Section title={t("settings.sections.about.title")}>
      <Card>
        <PressableConfigItem
          label={t("settings.sections.about.links.about.title")}
          icon={{ android: "info", ios: "info.circle" }}
          onPress={handleNavigateToAboutPage}
        />

        <SectionDivider />

        <PressableConfigItem
          label={t("settings.sections.about.links.licenses.title")}
          icon={{ android: "apk_document", ios: "doc" }}
          onPress={handleNavigateToLicensesPage}
        />
      </Card>
    </Section>
  );
}
