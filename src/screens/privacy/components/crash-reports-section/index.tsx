import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { SettingsRow } from "@/components/ui/settings-row";
import { SettingsSection } from "@/components/ui/settings-section";
import { Switch } from "@/components/ui/switch";
import { useHaptics } from "@/hooks/use-haptics";
import { usePreferences } from "@/hooks/use-preferences";

export function CrashReportsSection() {
  const { t } = useTranslation("translation", {
    keyPrefix: "privacy.sections.crash_reports",
  });
  const { crashReportsEnabled, toggleCrashReports } = usePreferences();
  const { performSelectFeedback } = useHaptics();

  const handleToggleCrashReports = useCallback(() => {
    performSelectFeedback();
    toggleCrashReports();
  }, [performSelectFeedback, toggleCrashReports]);

  return (
    <SettingsSection title={t("title")}>
      <SettingsRow
        label={t("fields.crash_reports.title")}
        description={t("fields.crash_reports.description")}
        icon={{ android: "bug_report", ios: "ant" }}
        trailing="none"
        control={<Switch value={crashReportsEnabled} />}
        onPress={handleToggleCrashReports}
        silent
      />
    </SettingsSection>
  );
}
