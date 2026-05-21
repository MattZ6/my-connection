import { useRouter } from "expo-router";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Linking, Platform } from "react-native";

import { Card } from "@/components/ui/card";
import { Section, SectionDivider } from "@/components/ui/section";

import { useLastVersionViewed } from "@/hooks/use-last-version-viewed";

import { PressableConfigItem } from "../pressable-config-item";

export function AboutSectionContent() {
  const router = useRouter();
  const { t } = useTranslation();
  const { currrentAppVersion, lastVersionViewed } = useLastVersionViewed();

  const hasNews = currrentAppVersion !== lastVersionViewed;

  const handleNavigateToAboutPage = useCallback(
    () => router.push("/settings/about"),
    [router.push],
  );

  const handleNavigateToLicensesPage = useCallback(
    () => router.push("/settings/licenses"),
    [router.push],
  );

  const handleNavigateToChangelogPage = useCallback(
    () => router.push("/settings/changelog"),
    [router.push],
  );

  function handleOpenPrivacyPolicy() {
    const params = new URLSearchParams({
      source: "myconnection-app",
      platform: Platform.OS,
    });

    const url = `https://zanin.dev/myconnection/privacy-policy?${params.toString()}`;

    Linking.openURL(url);
  }

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
          icon={{ android: "description", ios: "doc.text" }}
          onPress={handleNavigateToLicensesPage}
        />

        <SectionDivider />

        <PressableConfigItem
          label={t("settings.sections.about.links.changelog.title")}
          icon={{ android: "history_edu", ios: "doc.on.doc" }}
          onPress={handleNavigateToChangelogPage}
          hasNews={hasNews}
        />

        <SectionDivider />

        <PressableConfigItem
          label={t("settings.sections.about.links.privacy_policy.title")}
          icon={{ android: "policy", ios: "hand.raised" }}
          onPress={handleOpenPrivacyPolicy}
          external
        />
      </Card>
    </Section>
  );
}
