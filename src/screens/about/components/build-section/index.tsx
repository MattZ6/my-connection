import * as ExpoApplication from "expo-application";
import * as ExpoDevice from "expo-device";
import { useTranslation } from "react-i18next";

import { SettingsRow } from "@/components/ui/settings-row";
import { SettingsSection } from "@/components/ui/settings-section";

import { isDevelopment } from "../../environment";

/** Extra build details, only in development builds. */
export function BuildSection() {
  const { t } = useTranslation("translation", {
    keyPrefix: "about.sections.build",
  });

  if (!isDevelopment) {
    return null;
  }

  return (
    <SettingsSection title={t("title")}>
      <SettingsRow
        label={t("fields.package")}
        icon={{ android: "inventory_2", ios: "shippingbox" }}
        description={ExpoApplication.applicationId ?? "—"}
        trailing="none"
        readOnly
      />

      <SettingsRow
        label={t("fields.build_id")}
        icon={{ android: "build", ios: "hammer" }}
        description={ExpoDevice.osBuildId ?? "—"}
        trailing="none"
        readOnly
      />

      {!!ExpoDevice.osBuildFingerprint && (
        <SettingsRow
          label={t("fields.fingerprint")}
          icon={{ android: "fingerprint", ios: "touchid" }}
          description={ExpoDevice.osBuildFingerprint}
          trailing="none"
          readOnly
        />
      )}
    </SettingsSection>
  );
}
