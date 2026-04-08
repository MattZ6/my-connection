import { Host, Switch } from "@expo/ui/jetpack-compose";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Pressable, Text, View } from "react-native";

import { Card } from "@/components/ui/card";

import { useStyles } from "@/hooks/use-styles";
import { useTheme } from "@/hooks/use-theme";

import { HapticsService } from "@/services/device/haptics";

import { getStyles } from "./styles";

export function DynamicColorsToggle() {
  const { t } = useTranslation();
  const styles = useStyles(getStyles);
  const {
    theme,
    colors,
    isUsingAndroidDynamicColors,
    toggleAndroidDynamicColors,
  } = useTheme();

  const handleToggle = useCallback(() => {
    HapticsService.performSelectFeedback();
    toggleAndroidDynamicColors();
  }, [toggleAndroidDynamicColors]);

  return (
    <Card>
      <Pressable onPress={handleToggle}>
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>
            {t(
              "appearance.sections.android_dynamic_colors.fields.dynamic_colors.title",
            )}
          </Text>
          <Host matchContents>
            <Switch
              value={isUsingAndroidDynamicColors}
              enabled={theme === "system"}
              colors={{
                checkedBorderColor: colors.brandSurface.elevated,
                checkedTrackColor: colors.brandSurface.elevated,
                checkedThumbColor: colors.brandContent.base,
                checkedIconColor: colors.brandContent.base,

                uncheckedBorderColor: colors.brandSurface.base,
                uncheckedTrackColor: colors.brandSurface.base,
                uncheckedThumbColor: colors.brandContent.base,
                uncheckedIconColor: colors.brandContent.base,

                disabledCheckedBorderColor: colors.border.default,
                disabledCheckedTrackColor: colors.surface.elevated,
                disabledCheckedThumbColor: colors.border.default,
                disabledCheckedIconColor: colors.border.default,

                disabledUncheckedBorderColor: colors.border.default,
                disabledUncheckedTrackColor: colors.surface.elevated,
                disabledUncheckedThumbColor: colors.border.default,
                disabledUncheckedIconColor: colors.border.default,
              }}
            />
          </Host>
        </View>
      </Pressable>
    </Card>
  );
}
