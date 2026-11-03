import { useCallback } from "react";
import { useTranslation } from "react-i18next";

import { SettingsRow } from "@/components/ui/settings-row";
import { SettingsSection } from "@/components/ui/settings-section";
import { Switch } from "@/components/ui/switch";

import { useHaptics } from "@/hooks/use-haptics";
import { useTheme } from "@/hooks/use-theme";

/** Material You dynamic colors, only where Android supports them. */
export function ColorsSection() {
  const { performSelectFeedback } = useHaptics();
  const { t } = useTranslation("translation", {
    keyPrefix: "appearance.sections.android_dynamic_colors",
  });
  const {
    theme,
    isUsingAndroidDynamicColors,
    toggleAndroidDynamicColors,
    isAndroidDynamicColorsAvailable,
  } = useTheme();

  const handleToggle = useCallback(() => {
    performSelectFeedback();
    toggleAndroidDynamicColors();
  }, [toggleAndroidDynamicColors, performSelectFeedback]);

  if (!isAndroidDynamicColorsAvailable) {
    return null;
  }

  // Dynamic colors only apply while the theme follows the system.
  const enabled = theme === "system";

  return (
    <SettingsSection title={t("title")}>
      <SettingsRow
        label={t("fields.dynamic_colors.title")}
        description={
          enabled
            ? t("fields.dynamic_colors.description")
            : t("fields.dynamic_colors.description_disabled")
        }
        icon={{ android: "palette", ios: "paintpalette" }}
        trailing="none"
        control={
          <Switch value={isUsingAndroidDynamicColors} enabled={enabled} />
        }
        onPress={handleToggle}
        disabled={!enabled}
        silent
      />
    </SettingsSection>
  );
}
