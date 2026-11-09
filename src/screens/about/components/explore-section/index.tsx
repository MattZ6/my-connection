import { Link } from "expo-router";
import { useTranslation } from "react-i18next";
import { Platform } from "react-native";

import { PlayStoreIcon } from "@/components/icons/play-store-icon";
import { SettingsRow } from "@/components/ui/settings-row";
import { SettingsSection } from "@/components/ui/settings-section";

const params = new URLSearchParams({
  source: "myconnection-app",
  platform: Platform.OS,
});

const WEBSITE_LINK = `https://myconnection.zanin.dev?${params.toString()}`;
// Always the production listing, also from dev and preview builds.
const PLAY_STORE_LINK =
  "https://play.google.com/store/apps/details?id=dev.zanin.myconnection";

export function ExploreSection() {
  const { t } = useTranslation("translation", {
    keyPrefix: "about.sections.explore",
  });

  return (
    <SettingsSection title={t("title")}>
      <Link href={WEBSITE_LINK} target="_blank" asChild>
        <SettingsRow
          label={t("fields.website.title")}
          description="myconnection.zanin.dev"
          icon={{ android: "language", ios: "globe" }}
          trailing="external"
        />
      </Link>

      <Link href={PLAY_STORE_LINK} target="_blank" asChild>
        <SettingsRow
          label={t("fields.play_store.title")}
          description={t("fields.play_store.description")}
          renderIcon={(props) => <PlayStoreIcon {...props} />}
          trailing="external"
        />
      </Link>
    </SettingsSection>
  );
}
