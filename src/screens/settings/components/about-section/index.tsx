import { Link } from "expo-router";
import { useTranslation } from "react-i18next";
import { Platform } from "react-native";

import { useLastVersionViewed } from "@/hooks/use-last-version-viewed";

import { NewBadge } from "../new-badge";
import { SettingsRow } from "../settings-row";
import { SettingsSection } from "../settings-section";

const params = new URLSearchParams({
  source: "myconnection-app",
  platform: Platform.OS,
});

const PRIVACY_POLICY_LINK = `https://myconnection.zanin.dev/privacy-policy?${params.toString()}`;

export function AboutSection() {
  const { t } = useTranslation("translation", {
    keyPrefix: "settings.sections.about",
  });
  const { currrentAppVersion, lastVersionViewed } = useLastVersionViewed();

  const hasNews = currrentAppVersion !== lastVersionViewed;

  return (
    <SettingsSection title={t("title")}>
      <Link href="/settings/about" asChild>
        <SettingsRow
          label={t("links.about.title")}
          icon={{ android: "info", ios: "info.circle" }}
        />
      </Link>

      <Link href="/settings/changelog" asChild>
        <SettingsRow
          label={t("links.changelog.title")}
          icon={{ android: "new_releases", ios: "sparkles" }}
          badge={
            hasNews ? <NewBadge label={t("links.changelog.badge")} /> : null
          }
        />
      </Link>

      <Link href="/settings/licenses" asChild>
        <SettingsRow
          label={t("links.licenses.title")}
          icon={{ android: "description", ios: "doc.text" }}
        />
      </Link>

      <Link href={PRIVACY_POLICY_LINK} target="_blank" asChild>
        <SettingsRow
          label={t("links.privacy_policy.title")}
          icon={{ android: "policy", ios: "hand.raised" }}
          trailing="external"
        />
      </Link>
    </SettingsSection>
  );
}
