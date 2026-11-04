import * as ExpoDevice from "expo-device";
import { useTranslation } from "react-i18next";

import { SettingsRow } from "@/components/ui/settings-row";
import { SettingsSection } from "@/components/ui/settings-section";

const model =
  [ExpoDevice.manufacturer, ExpoDevice.modelName].filter(Boolean).join(" ") ||
  "—";

const android = [
  ExpoDevice.osVersion,
  ExpoDevice.platformApiLevel ? `API ${ExpoDevice.platformApiLevel}` : null,
]
  .filter(Boolean)
  .join(" · ");

export function DeviceSection() {
  const { t } = useTranslation("translation", {
    keyPrefix: "about.sections.device",
  });

  return (
    <SettingsSection title={t("title")}>
      <SettingsRow
        label={t("fields.model")}
        icon={{ android: "smartphone", ios: "iphone" }}
        value={model}
        trailing="none"
        readOnly
      />

      <SettingsRow
        label={t("fields.android")}
        icon={{ android: "android", ios: "gear" }}
        value={android || "—"}
        trailing="none"
        readOnly
      />
    </SettingsSection>
  );
}
