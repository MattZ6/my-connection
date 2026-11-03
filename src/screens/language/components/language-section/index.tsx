import { SymbolView } from "expo-symbols";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";

import { SettingsRow } from "@/components/ui/settings-row";
import { SettingsSection } from "@/components/ui/settings-section";

import { useHaptics } from "@/hooks/use-haptics";
import { useTheme } from "@/hooks/use-theme";

import { SettingsRepository } from "@/repositories/settings";

const LANGUAGES = ["en", "pt", "es"] as const;

export function LanguageSection() {
  const { colors } = useTheme();
  const { performSelectFeedback } = useHaptics();
  const { t, i18n } = useTranslation("translation", {
    keyPrefix: "language.sections.language",
  });

  const handleSelect = useCallback(
    (language: string) => {
      performSelectFeedback();
      SettingsRepository.saveLanguage(language);
      i18n.changeLanguage(language);
    },
    [i18n, performSelectFeedback],
  );

  return (
    <SettingsSection title={t("title")}>
      {LANGUAGES.map((language) => {
        const isSelected = i18n.language === language;

        return (
          <SettingsRow
            key={language}
            // Native name on top, name in the current language below.
            label={t(`fields.language.${language}.title`)}
            description={t(`fields.language.${language}.description`)}
            trailing="none"
            control={
              isSelected ? (
                <SymbolView
                  name={{ android: "check", ios: "checkmark" }}
                  size={22}
                  tintColor={colors.content.base}
                />
              ) : null
            }
            selected={isSelected}
            onPress={() => handleSelect(language)}
            silent
          />
        );
      })}
    </SettingsSection>
  );
}
