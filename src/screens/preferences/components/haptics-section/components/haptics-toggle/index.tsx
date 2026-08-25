import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Pressable } from "react-native";

import {
  SectionItemContent,
  SectionItemHint,
  SectionItemLabel,
  SectionItemRoot,
  SectionItemTrailing,
} from "@/components/ui/section";
import { Switch } from "@/components/ui/switch";

import { useHaptics } from "@/hooks/use-haptics";
import { usePreferences } from "@/hooks/use-preferences";

import { androidRippleConfig } from "@/theme/android-ripple";

export function HapticsToggle() {
  const { t } = useTranslation("translation", {
    keyPrefix: "preferences.sections.haptics.fields.haptics",
  });
  const { hapticsEnabled, toggleHaptics } = usePreferences();
  const { performSelectFeedback } = useHaptics();

  const handleToggle = useCallback(() => {
    performSelectFeedback();
    toggleHaptics();
  }, [toggleHaptics, performSelectFeedback]);

  return (
    <Pressable
      onPress={handleToggle}
      android_disableSound
      android_ripple={androidRippleConfig}
    >
      <SectionItemRoot>
        <SectionItemContent>
          <SectionItemLabel>{t("title")}</SectionItemLabel>
          <SectionItemHint>{t("description")}</SectionItemHint>
        </SectionItemContent>

        <SectionItemTrailing>
          <Switch value={hapticsEnabled} />
        </SectionItemTrailing>
      </SectionItemRoot>
    </Pressable>
  );
}
