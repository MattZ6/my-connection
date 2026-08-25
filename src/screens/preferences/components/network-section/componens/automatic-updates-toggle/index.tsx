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

import { androidRippleConfig } from "@/theme/android-ripple";

type Props = {
  value: boolean;
  onToggle: () => void;
};

export function AutomaticUpdatesToggle({ value, onToggle }: Props) {
  const { performSelectFeedback } = useHaptics();
  const { t } = useTranslation("translation", {
    keyPrefix: "preferences.sections.network_updates.fields.automatic_updates",
  });

  const handleToggle = useCallback(() => {
    performSelectFeedback();
    onToggle();
  }, [performSelectFeedback, onToggle]);

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
          <Switch value={value} />
        </SectionItemTrailing>
      </SectionItemRoot>
    </Pressable>
  );
}
