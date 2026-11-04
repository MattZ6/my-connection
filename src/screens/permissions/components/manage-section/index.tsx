import { useTranslation } from "react-i18next";

import { SettingsRow } from "@/components/ui/settings-row";
import { SettingsSection } from "@/components/ui/settings-section";

import { LocationUtils } from "@/utils/location";

export function ManageSection() {
  const { t } = useTranslation("translation", {
    keyPrefix: "permissions.sections.manage",
  });

  return (
    <SettingsSection title={t("title")}>
      <SettingsRow
        label={t("app_permissions.title")}
        description={t("app_permissions.description")}
        icon={{ android: "settings", ios: "gear" }}
        trailing="external"
        onPress={LocationUtils.openAppSettings}
      />
    </SettingsSection>
  );
}
