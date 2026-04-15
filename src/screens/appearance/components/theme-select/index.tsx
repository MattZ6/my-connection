import { SymbolView } from "expo-symbols";
import { Fragment, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Pressable } from "react-native";

import { Card } from "@/components/ui/card";
import {
  SectionDivider,
  SectionItemContent,
  SectionItemLabel,
  SectionItemRoot,
  SectionItemTrailing,
} from "@/components/ui/section";

import { useHaptics } from "@/hooks/use-haptics";
import { useStyles } from "@/hooks/use-styles";
import { useTheme } from "@/hooks/use-theme";

import { androidRippleConfig } from "@/theme/android-ripple";

import { getStyles } from "./styles";

type ThemeValue = "system" | "light" | "dark";

const options: ThemeValue[] = ["system", "light", "dark"];

export function ThemeSelect() {
  const { theme, changeTheme } = useTheme();
  const { performSelectFeedback } = useHaptics();
  const styles = useStyles(getStyles);
  const { t } = useTranslation("translation", {
    keyPrefix: "appearance.sections.theme.fields",
  });

  const handleSelectTheme = useCallback(
    (option: ThemeValue) => {
      performSelectFeedback();
      changeTheme(option);
    },
    [changeTheme, performSelectFeedback],
  );

  return (
    <Card>
      {options.map((option, index) => (
        <Fragment key={option}>
          <Pressable
            onPress={() => handleSelectTheme(option)}
            android_disableSound
            android_ripple={androidRippleConfig}
          >
            <SectionItemRoot>
              <SectionItemContent>
                <SectionItemLabel>{t(`${option}.title`)}</SectionItemLabel>
              </SectionItemContent>
              <SectionItemTrailing>
                {theme === option && (
                  <SymbolView
                    name={{ android: "check", ios: "checkmark" }}
                    size={20}
                    tintColor={styles.icon.tintColor}
                  />
                )}
              </SectionItemTrailing>
            </SectionItemRoot>
          </Pressable>
          {index < options.length - 1 && <SectionDivider />}
        </Fragment>
      ))}
    </Card>
  );
}
