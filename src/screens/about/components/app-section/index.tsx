import * as ExpoApplication from "expo-application";
import { useTranslation } from "react-i18next";

import { SettingsRow } from "@/components/ui/settings-row";
import { SettingsSection } from "@/components/ui/settings-section";

import { environment } from "../../environment";
import { useInstallDates } from "../../hooks/use-install-dates";

const version = `${ExpoApplication.nativeApplicationVersion} (${ExpoApplication.nativeBuildVersion})`;

export function AppSection() {
  const { t, i18n } = useTranslation();
  const { installedAt, updatedAt } = useInstallDates(i18n.language);

  return (
    <SettingsSection title={t("about.sections.app.title")}>
      <SettingsRow
        label={t("about.sections.app.fields.name")}
        icon={{ android: "apps", ios: "app" }}
        value={t(`app.${environment}.name`)}
        trailing="none"
        readOnly
      />

      <SettingsRow
        label={t("about.sections.app.fields.version")}
        icon={{ android: "tag", ios: "number" }}
        value={version}
        monoValue
        trailing="none"
        readOnly
      />

      <SettingsRow
        label={t("about.sections.app.fields.installed_at")}
        icon={{ android: "download", ios: "arrow.down.circle" }}
        value={installedAt}
        trailing="none"
        readOnly
      />

      {updatedAt && (
        <SettingsRow
          label={t("about.sections.app.fields.updated_at")}
          icon={{ android: "update", ios: "clock.arrow.circlepath" }}
          value={updatedAt}
          trailing="none"
          readOnly
        />
      )}
    </SettingsSection>
  );
}
