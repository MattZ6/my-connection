import { useTranslation } from "react-i18next";

import { SettingsRow } from "@/components/ui/settings-row";
import { SettingsSection } from "@/components/ui/settings-section";

/** Lists what stays on the device, even with crash reports on. */
export function NeverSentSection() {
  const { t } = useTranslation("translation", {
    keyPrefix: "privacy.sections.never_sent",
  });

  return (
    <SettingsSection title={t("title")}>
      <SettingsRow
        label={t("items.network_name")}
        icon={{ android: "wifi", ios: "wifi" }}
        trailing="none"
        readOnly
      />
      <SettingsRow
        label={t("items.bssid")}
        icon={{ android: "router", ios: "wifi.router" }}
        trailing="none"
        readOnly
      />
      <SettingsRow
        label={t("items.ip_address")}
        icon={{ android: "lan", ios: "network" }}
        trailing="none"
        readOnly
      />
      <SettingsRow
        label={t("items.location")}
        icon={{ android: "location_on", ios: "location" }}
        trailing="none"
        readOnly
      />
    </SettingsSection>
  );
}
