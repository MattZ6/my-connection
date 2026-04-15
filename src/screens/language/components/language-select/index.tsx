import { SymbolView } from "expo-symbols";
import { Fragment, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Pressable } from "react-native";

import { Card } from "@/components/ui/card";
import {
  SectionDivider,
  SectionItemContent,
  SectionItemHint,
  SectionItemLabel,
  SectionItemRoot,
  SectionItemTrailing,
} from "@/components/ui/section";

import { useHaptics } from "@/hooks/use-haptics";
import { useStyles } from "@/hooks/use-styles";

import { SettingsRepository } from "@/repositories/settings";

import { androidRippleConfig } from "@/theme/android-ripple";

import { getStyles } from "./styles";

const languages = ["en", "pt", "es"];

export function LanguageSelect() {
  const { performSelectFeedback } = useHaptics();
  const styles = useStyles(getStyles);
  const { t, i18n } = useTranslation("translation", {
    keyPrefix: "language.sections.language.fields.language",
  });

  const handleSelectTheme = useCallback(
    (option: string) => {
      performSelectFeedback();
      SettingsRepository.saveLanguage(option);
      i18n.changeLanguage(option);
    },
    [i18n.changeLanguage, performSelectFeedback],
  );

  return (
    <Card>
      {languages.map((language, index) => (
        <Fragment key={language}>
          <Pressable
            onPress={() => handleSelectTheme(language)}
            android_disableSound
            android_ripple={androidRippleConfig}
          >
            <SectionItemRoot>
              <SectionItemContent>
                <SectionItemLabel>{t(`${language}.title`)}</SectionItemLabel>
                {i18n.language !== language && (
                  <SectionItemHint>
                    {t(`${language}.description`)}
                  </SectionItemHint>
                )}
              </SectionItemContent>
              <SectionItemTrailing>
                {i18n.language === language && (
                  <SymbolView
                    name={{ android: "check", ios: "checkmark" }}
                    size={20}
                    tintColor={styles.icon.tintColor}
                  />
                )}
              </SectionItemTrailing>
            </SectionItemRoot>
          </Pressable>

          {index < languages.length - 1 && <SectionDivider />}
        </Fragment>
      ))}
    </Card>
  );
}
