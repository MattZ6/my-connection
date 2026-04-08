import { SymbolView } from "expo-symbols";
import { Fragment, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Pressable, Text, View } from "react-native";
import { Card } from "@/components/ui/card";
import { SectionDivider } from "@/components/ui/section";
import { useStyles } from "@/hooks/use-styles";
import { useTheme } from "@/hooks/use-theme";
import { HapticsService } from "@/services/device/haptics";
import { getStyles } from "./styles";

type ThemeValue = "system" | "light" | "dark";

const options: ThemeValue[] = ["system", "light", "dark"];

export function ThemeSelect() {
  const { theme, changeTheme } = useTheme();
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
    <Card>
      {options.map((option, index) => (
        <Fragment key={option}>
          <Pressable onPress={() => handleSelectTheme(option)}>
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
          {index < options.length - 1 && <SectionDivider />}
        </Fragment>
      ))}
    </Card>
  );
}
