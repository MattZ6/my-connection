import { Link } from "expo-router";
import { useTranslation } from "react-i18next";

import { Card } from "@/components/ui/card";
import { Section, SectionDivider } from "@/components/ui/section";

import { useLastVersionViewed } from "@/hooks/use-last-version-viewed";

import { PressableConfigItem } from "../pressable-config-item";

export function AboutSectionContent() {
  const { t } = useTranslation();
  const { currrentAppVersion, lastVersionViewed } = useLastVersionViewed();

  const hasNews = currrentAppVersion !== lastVersionViewed;

  return (
    <Section title={t("settings.sections.about.title")}>
      <Card>
        <Link href="/settings/about" asChild>
          <PressableConfigItem
            label={t("settings.sections.about.links.about.title")}
            icon={{ android: "info", ios: "info.circle" }}
          />
        </Link>

        <SectionDivider />

        <Link href="/settings/changelog" asChild>
          <PressableConfigItem
            label={t("settings.sections.about.links.changelog.title")}
            icon={{ android: "history_edu", ios: "doc.on.doc" }}
            hasNews={hasNews}
          />
        </Link>

        <SectionDivider />

        <Link href="/settings/licenses" asChild>
          <PressableConfigItem
            label={t("settings.sections.about.links.licenses.title")}
            icon={{ android: "description", ios: "doc.text" }}
          />
        </Link>
      </Card>
    </Section>
  );
}
