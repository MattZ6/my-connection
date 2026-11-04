import { Link } from "expo-router";
import { useTranslation } from "react-i18next";
import { Platform } from "react-native";
import { SettingsRow } from "@/components/ui/settings-row";
import { SettingsSection } from "@/components/ui/settings-section";
import { usePreferences } from "@/hooks/use-preferences";

const params = new URLSearchParams({
  source: "myconnection-app",
  platform: Platform.OS,
});

const PRIVACY_POLICY_LINK = `https://myconnection.zanin.dev/privacy-policy?${params.toString()}`;

export function PrivacySection() {
  const { t } = useTranslation("translation", {
    keyPrefix: "settings.sections.privacy",
  });
  const { crashReportsEnabled } = usePreferences();

  return (
    <SettingsSection title={t("title")}>
      <Link href="/settings/privacy" asChild>
        <SettingsRow
          label={t("links.crash_reports.title")}
          icon={{ android: "bug_report", ios: "ant" }}
          value={
            crashReportsEnabled
              ? t("links.crash_reports.value.on")
              : t("links.crash_reports.value.off")
          }
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
