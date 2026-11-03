import { type AndroidSymbol, type SFSymbol, SymbolView } from "expo-symbols";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";

import { SettingsRow } from "@/components/ui/settings-row";
import { SettingsSection } from "@/components/ui/settings-section";

import type { ThemeContextTypes } from "@/contexts/theme/types";

import { useHaptics } from "@/hooks/use-haptics";
import { useTheme } from "@/hooks/use-theme";

type ThemeOption = ThemeContextTypes.ThemeOption;

const OPTIONS: {
  value: ThemeOption;
  icon: { android: AndroidSymbol; ios: SFSymbol };
}[] = [
  {
    value: "system",
    icon: { android: "contrast", ios: "circle.lefthalf.filled" },
  },
  { value: "light", icon: { android: "light_mode", ios: "sun.max" } },
  { value: "dark", icon: { android: "dark_mode", ios: "moon" } },
];

export function ThemeSection() {
  const { theme, changeTheme, colors } = useTheme();
  const { performSelectFeedback } = useHaptics();
  const { t } = useTranslation("translation", {
    keyPrefix: "appearance.sections.theme",
  });

  const handleSelect = useCallback(
    (option: ThemeOption) => {
      performSelectFeedback();
      changeTheme(option);
    },
    [changeTheme, performSelectFeedback],
  );

  return (
    <SettingsSection title={t("title")}>
      {OPTIONS.map(({ value, icon }) => (
        <SettingsRow
          key={value}
          label={t(`fields.${value}.title`)}
          description={
            value === "system" ? t("fields.system.description") : undefined
          }
          icon={icon}
          trailing="none"
          control={
            theme === value ? (
              <SymbolView
                name={{ android: "check", ios: "checkmark" }}
                size={22}
                tintColor={colors.content.base}
              />
            ) : null
          }
          selected={theme === value}
          onPress={() => handleSelect(value)}
          silent
        />
      ))}
    </SettingsSection>
  );
}
