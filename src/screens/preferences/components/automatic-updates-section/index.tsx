import { useCallback } from "react";
import { useTranslation } from "react-i18next";

import { SettingsRow } from "@/components/ui/settings-row";
import { SettingsSection } from "@/components/ui/settings-section";
import { Switch } from "@/components/ui/switch";

import { useHaptics } from "@/hooks/use-haptics";
import { useNetworkUpdates } from "@/hooks/use-network-updates";

type Props = {
  onOpenFrequency: () => void;
};

export function AutomaticUpdatesSection({ onOpenFrequency }: Props) {
  const { t } = useTranslation("translation", {
    keyPrefix: "preferences.sections.automatic_updates",
  });
  const { automaticUpdatesOn, toggleAutomaticUpdates, updateFrequency } =
    useNetworkUpdates();
  const { performSelectFeedback } = useHaptics();

  const handleToggle = useCallback(() => {
    performSelectFeedback();
    toggleAutomaticUpdates();
  }, [performSelectFeedback, toggleAutomaticUpdates]);

  return (
    <SettingsSection title={t("title")}>
      <SettingsRow
        label={t("fields.automatic_updates.title")}
        description={t("fields.automatic_updates.description")}
        icon={{ android: "autorenew", ios: "arrow.triangle.2.circlepath" }}
        trailing="none"
        control={<Switch value={automaticUpdatesOn} />}
        onPress={handleToggle}
        silent
      />

      <SettingsRow
        label={t("fields.frequency.title")}
        icon={{ android: "timer", ios: "timer" }}
        value={updateFrequency}
        onPress={onOpenFrequency}
      />
    </SettingsSection>
  );
}
