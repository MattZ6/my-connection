import {
  Column,
  Host,
  Row,
  Spacer,
  Surface,
  Switch,
  Text,
} from "@expo/ui/jetpack-compose";
import { paddingAll, weight, width } from "@expo/ui/jetpack-compose/modifiers";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";

import { Card } from "@/components/ui/card";

import { useHaptics } from "@/hooks/use-haptics";
import { useTheme } from "@/hooks/use-theme";

export function DynamicColorsToggle() {
  const { performSelectFeedback } = useHaptics();
  const { t } = useTranslation("translation", {
    keyPrefix:
      "appearance.sections.android_dynamic_colors.fields.dynamic_colors",
  });
  const {
    theme,
    fontFamily,
    fontSizes,
    colors,
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

  return (
    <Card>
      <Host
        style={{ width: "100%", height: "auto" }}
        matchContents={{ vertical: true }}
      >
        <Surface
          onClick={handleToggle}
          color="transparent"
          enabled={theme === "system"}
        >
          <Row
            horizontalArrangement="spaceBetween"
            verticalAlignment="center"
            modifiers={[paddingAll(16)]}
          >
            <Column modifiers={[weight(1)]}>
              <Text
                style={{
                  fontFamily: fontFamily.medium,
                  fontSize: fontSizes.body.fontSize,
                  lineHeight: fontSizes.body.lineHeight,
                }}
                color={colors.content.base.toString()}
              >
                {t("title")}
              </Text>
              <Text
                style={{
                  fontFamily: fontFamily.regular,
                  fontSize: fontSizes.bodySmall.fontSize,
                  lineHeight: fontSizes.bodySmall.lineHeight,
                }}
                color={colors.content.muted.toString()}
              >
                {t("description")}
              </Text>
            </Column>

            <Spacer modifiers={[width(16)]} />

            <Switch
              value={isUsingAndroidDynamicColors}
              onCheckedChange={handleToggle}
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
          </Row>
        </Surface>
      </Host>
    </Card>
  );
}
