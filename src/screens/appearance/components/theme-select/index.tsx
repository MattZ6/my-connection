import { SymbolView } from "expo-symbols";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Pressable, Text, View } from "react-native";

import { useStyles } from "@/hooks/use-styles";
import { useThemeMode } from "@/hooks/use-theme-mode";

import { HapticsService } from "@/services/device/haptics";

import { getStyles } from "./styles";

type ThemeValue = "system" | "light" | "dark";

const options: ThemeValue[] = ["system", "light", "dark"];

export function ThemeSelect() {
  const { theme, changeTheme } = useThemeMode();
  const styles = useStyles(getStyles);
  const { t } = useTranslation();

  const handleSelectTheme = useCallback(
    (option: ThemeValue) => {
      HapticsService.performSelectFeedback();
      changeTheme(option);
    },
    [changeTheme],
  );

  return (
    <View style={styles.card}>
      {options.map((option) => (
        <Pressable key={option} onPress={() => handleSelectTheme(option)}>
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>
              {t(`appearance.sections.theme.fields.${option}.title`)}
            </Text>
            {theme === option && (
              <SymbolView
                name={{ android: "check", ios: "checkmark" }}
                size={20}
                tintColor={styles.icon.tintColor}
              />
            )}
          </View>
        </Pressable>
      ))}
    </View>
  );
}
