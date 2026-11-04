import { Link } from "expo-router";
import { useTranslation } from "react-i18next";
import { NewBadge } from "@/components/ui/new-badge";
import { SettingsRow } from "@/components/ui/settings-row";
import { SettingsSection } from "@/components/ui/settings-section";
import { useLastVersionViewed } from "@/hooks/use-last-version-viewed";

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
    </SettingsSection>
  );
}
