import { Link } from "expo-router";
import { useTranslation } from "react-i18next";
import { Platform } from "react-native";

import { Card } from "@/components/ui/card";
import { Section, SectionDivider } from "@/components/ui/section";

import { PressableConfigItem } from "../pressable-config-item";

const params = new URLSearchParams({
  source: "myconnection-app",
  platform: Platform.OS,
});

const PRIVACY_POLICY_LINK = `https://myconnection.zanin.dev/privacy-policy?${params.toString()}`;

export function PrivacySectionContent() {
  const { t } = useTranslation("translation", {
    keyPrefix: "settings.sections.privacy",
  });

  return (
    <Section title={t("title")}>
      <Card>
        <Link href="/settings/permissions" asChild>
          <PressableConfigItem
            label={t("links.permissions.title")}
            icon={{ android: "shield_lock", ios: "lock.shield" }}
          />
        </Link>

        <SectionDivider />

        <Link href={PRIVACY_POLICY_LINK} target="_blank" asChild>
          <PressableConfigItem
            label={t("links.privacy_policy.title")}
            icon={{ android: "policy", ios: "hand.raised" }}
            external
          />
        </Link>
      </Card>
    </Section>
  );
}
