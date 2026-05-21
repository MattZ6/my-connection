import { Link } from "expo-router";
import { useTranslation } from "react-i18next";

import { Card } from "@/components/ui/card";
import { Section, SectionDivider } from "@/components/ui/section";

import { PressableConfigItem } from "../pressable-config-item";

export function PreferencesSectionContent() {
  const { t } = useTranslation("translation", {
    keyPrefix: "settings.sections.preferences",
  });

  return (
    <Section title={t("title")}>
      <Card>
        <Link href="/settings/preferences" asChild>
          <PressableConfigItem
            label={t("links.preferences.title")}
            icon={{ android: "tune", ios: "slider.horizontal.3" }}
          />
        </Link>

        <SectionDivider />

        <Link href="/settings/appearance" asChild>
          <PressableConfigItem
            label={t("links.appearance.title")}
            icon={{ android: "palette", ios: "paintpalette" }}
          />
        </Link>

        <SectionDivider />

        <Link href="/settings/language" asChild>
          <PressableConfigItem
            label={t("links.language.title")}
            icon={{ android: "language", ios: "translate" }}
          />
        </Link>
      </Card>
    </Section>
  );
}
