import { Link } from "expo-router";
import { useTranslation } from "react-i18next";

import { useLocation } from "@/hooks/use-location";
import { useNetworkUpdates } from "@/hooks/use-network-updates";

import { SettingsRow } from "../settings-row";
import { SettingsSection } from "../settings-section";

export function NetworkSection() {
  const { t } = useTranslation("translation", {
    keyPrefix: "settings.sections.network",
  });
  const { automaticUpdatesOn, updateFrequency } = useNetworkUpdates();
  const { permission, precision } = useLocation();

  const networkUpdatesValue = automaticUpdatesOn
    ? t("links.network_updates.value.enabled", { frequency: updateFrequency })
    : t("links.network_updates.value.disabled");

  let locationValue = t("links.location.value.not_allowed");

  if (permission === "granted") {
    locationValue =
      precision === "precise"
        ? t("links.location.value.allowed")
        : t("links.location.value.approximate");
  }

  return (
    <SettingsSection title={t("title")}>
      <Link href="/settings/preferences" asChild>
        <SettingsRow
          label={t("links.network_updates.title")}
          icon={{ android: "autorenew", ios: "arrow.triangle.2.circlepath" }}
          value={networkUpdatesValue}
        />
      </Link>

      <Link href="/settings/permissions" asChild>
        <SettingsRow
          label={t("links.location.title")}
          icon={{ android: "location_on", ios: "location" }}
          value={locationValue}
        />
      </Link>
    </SettingsSection>
  );
}
