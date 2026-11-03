import { Link } from "expo-router";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";

import { Switch } from "@/components/ui/switch";

import { useHaptics } from "@/hooks/use-haptics";
import { usePreferences } from "@/hooks/use-preferences";
import { useTheme } from "@/hooks/use-theme";

import { SettingsRow } from "../settings-row";
import { SettingsSection } from "../settings-section";

export function GeneralSection() {
  const { t, i18n } = useTranslation("translation");
  const { theme } = useTheme();
  const { hapticsEnabled, toggleHaptics } = usePreferences();
  const { performSelectFeedback } = useHaptics();

  const handleToggleHaptics = useCallback(() => {
    performSelectFeedback();
    toggleHaptics();
  }, [performSelectFeedback, toggleHaptics]);

  const languageValue = t(
    `language.sections.language.fields.language.${i18n.language}.title`,
    { defaultValue: i18n.language },
  );

  return (
    <SettingsSection title={t("settings.sections.general.title")}>
      <Link href="/settings/appearance" asChild>
        <SettingsRow
          label={t("settings.sections.general.links.appearance.title")}
          icon={{ android: "palette", ios: "paintpalette" }}
          value={t(`settings.sections.general.links.appearance.value.${theme}`)}
        />
      </Link>

      <Link href="/settings/language" asChild>
        <SettingsRow
          label={t("settings.sections.general.links.language.title")}
          icon={{ android: "language", ios: "globe" }}
          value={languageValue}
        />
      </Link>

      <SettingsRow
        label={t("settings.sections.general.links.haptics.title")}
        icon={{ android: "vibration", ios: "iphone.radiowaves.left.and.right" }}
        trailing="none"
        control={<Switch value={hapticsEnabled} />}
        onPress={handleToggleHaptics}
        silent
      />
    </SettingsSection>
  );
}
