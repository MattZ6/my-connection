import { SymbolView } from "expo-symbols";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Pressable } from "react-native";

import { Card } from "@/components/ui/card";
import {
  Section,
  SectionItemContent,
  SectionItemLabel,
  SectionItemRoot,
  SectionItemTrailing,
} from "@/components/ui/section";

import { useHaptics } from "@/hooks/use-haptics";
import { useNetworkUpdates } from "@/hooks/use-network-updates";
import { useTheme } from "@/hooks/use-theme";

import { androidRippleConfig } from "@/theme/android-ripple";

export function RefreshNetworkSection() {
  const { colors } = useTheme();
  const { performTapFeedback } = useHaptics();
  const { refresh } = useNetworkUpdates();
  const { t } = useTranslation("translation", {
    keyPrefix: "preferences.sections.network_updates.actions.refresh",
  });

  const handleRefresh = useCallback(() => {
    performTapFeedback();
    refresh();
  }, [performTapFeedback, refresh]);

  return (
    <Section>
      <Card>
        <Pressable
          onPress={handleRefresh}
          android_disableSound
          android_ripple={androidRippleConfig}
        >
          <SectionItemRoot>
            <SectionItemContent>
              <SectionItemLabel>{t("title")}</SectionItemLabel>
            </SectionItemContent>

            <SectionItemTrailing>
              <SymbolView
                name={{ android: "refresh", ios: "arrow.clockwise" }}
                size={24}
                tintColor={colors.content.muted}
              />
            </SectionItemTrailing>
          </SectionItemRoot>
        </Pressable>
      </Card>
    </Section>
  );
}
