import { Observe } from "expo-observe";
import { SymbolView } from "expo-symbols";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Pressable } from "react-native";
import Animated from "react-native-reanimated";

import { Card } from "@/components/ui/card";
import {
  Section,
  SectionItemContent,
  SectionItemLabel,
  SectionItemRoot,
  SectionItemTrailing,
} from "@/components/ui/section";

import { useAnimatedNetworkUpdates } from "@/hooks/use-animated-network-updates";
import { useHaptics } from "@/hooks/use-haptics";
import { useTheme } from "@/hooks/use-theme";

import { androidRippleConfig } from "@/theme/android-ripple";

export function RefreshNetworkSection() {
  const { colors } = useTheme();
  const { performTapFeedback, notifySuccess, notifyFailure } = useHaptics();
  const { t } = useTranslation("translation", {
    keyPrefix: "preferences.sections.network_updates.actions.refresh",
  });

  const { isRefreshing, refresh, animatedStyle } = useAnimatedNetworkUpdates({
    onBefore: performTapFeedback,
    onSuccess: notifySuccess,
    onFailure: notifyFailure,
  });

  const handleRefresh = useCallback(() => {
    Observe.logEvent("connection.refresh", {
      attributes: {
        source: "manual",
        from: "/settings/preferences",
      },
    });
    refresh();
  }, [refresh]);

  return (
    <Section>
      <Card>
        <Pressable
          onPress={handleRefresh}
          android_disableSound
          android_ripple={androidRippleConfig}
          disabled={isRefreshing}
        >
          <SectionItemRoot>
            <SectionItemContent>
              <SectionItemLabel>{t("title")}</SectionItemLabel>
            </SectionItemContent>

            <SectionItemTrailing>
              <Animated.View style={animatedStyle}>
                <SymbolView
                  name={{ android: "refresh", ios: "arrow.clockwise" }}
                  size={24}
                  tintColor={colors.content.muted}
                />
              </Animated.View>
            </SectionItemTrailing>
          </SectionItemRoot>
        </Pressable>
      </Card>
    </Section>
  );
}
