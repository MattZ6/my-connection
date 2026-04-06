import { SymbolView } from "expo-symbols";
import { Fragment, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Pressable, Text, View } from "react-native";

import { Card } from "@/components/ui/card";
import { SectionDivider } from "@/components/ui/section";

import { useStyles } from "@/hooks/use-styles";

import { SettingsRepository } from "@/repositories/settings";

import { HapticsService } from "@/services/device/haptics";

import { getStyles } from "./styles";

const languages = ["en", "pt"];

export function LanguageSelect() {
  const styles = useStyles(getStyles);
  const { t, i18n } = useTranslation();

  const handleSelectTheme = useCallback(
    (option: string) => {
      HapticsService.performSelectFeedback();
      SettingsRepository.saveLanguage(option);
      i18n.changeLanguage(option);
    },
    [i18n.changeLanguage],
  );

  return (
    <Card>
      {languages.map((language, index) => (
        <Fragment key={language}>
          <Pressable onPress={() => handleSelectTheme(language)}>
            <View style={styles.buttonContent}>
              <View style={styles.buttonTextContent}>
                <Text style={styles.buttonText}>
                  {t(
                    `language.sections.language.fields.language.${language}.title`,
                  )}
                </Text>
                {i18n.language !== language && (
                  <Text style={styles.buttonDescription}>
                    {t(
                      `language.sections.language.fields.language.${language}.description`,
                    )}
                  </Text>
                )}
              </View>
              {i18n.language === language && (
                <SymbolView
                  name={{ android: "check", ios: "checkmark" }}
                  size={20}
                  tintColor={styles.icon.tintColor}
                />
              )}
            </View>
          </Pressable>

          {index < languages.length - 1 && <SectionDivider />}
        </Fragment>
      ))}
    </Card>
  );
}
