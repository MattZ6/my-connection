import { SymbolView } from "expo-symbols";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Pressable, Text } from "react-native";
import Animated from "react-native-reanimated";

import { SettingsRow } from "@/components/ui/settings-row";
import { SettingsSection } from "@/components/ui/settings-section";

import { useAnimatedNetworkUpdates } from "@/hooks/use-animated-network-updates";
import { useHaptics } from "@/hooks/use-haptics";
import { useNetworkUpdates } from "@/hooks/use-network-updates";
import { useStyles } from "@/hooks/use-styles";

import { androidRippleConfig } from "@/theme/android-ripple";

import { useElapsedSeconds } from "./hooks/use-elapsed-seconds";
import { getStyles } from "./styles";

export function StatusSection() {
  const styles = useStyles(getStyles);
  const { t } = useTranslation("translation", {
    keyPrefix: "preferences.sections.status",
  });
  const { lastUpdated } = useNetworkUpdates();
  const seconds = useElapsedSeconds(lastUpdated);
  const { performTapFeedback, notifySuccess, notifyFailure } = useHaptics();

  const { isRefreshing, refresh, animatedStyle } = useAnimatedNetworkUpdates({
    onBefore: performTapFeedback,
    onSuccess: notifySuccess,
    onFailure: notifyFailure,
  });

  const handleRefresh = useCallback(() => {
    refresh();
  }, [refresh]);

  return (
    <SettingsSection
      title={t("title")}
      footer={
        <Pressable
          onPress={handleRefresh}
          disabled={isRefreshing}
          android_disableSound
          android_ripple={androidRippleConfig}
          accessibilityRole="button"
          accessibilityState={{ busy: isRefreshing }}
          style={styles.refreshButton}
        >
          <Animated.View style={animatedStyle}>
            <SymbolView
              name={{ android: "refresh", ios: "arrow.clockwise" }}
              size={18}
              tintColor={styles.refreshIcon.tintColor}
            />
          </Animated.View>
          <Text style={styles.refreshLabel}>{t("actions.refresh.title")}</Text>
        </Pressable>
      }
    >
      <SettingsRow
        label={t("fields.last_updated.title")}
        icon={{ android: "history", ios: "clock.arrow.circlepath" }}
        value={formatElapsed(seconds, t)}
        trailing="none"
        readOnly
      />
    </SettingsSection>
  );
}

function formatElapsed(
  seconds: number | null,
  t: (key: string, options?: Record<string, number>) => string,
) {
  if (seconds === null) {
    return "—";
  }

  if (seconds < 1) {
    return t("fields.last_updated.value.now");
  }

  if (seconds < 60) {
    return t("fields.last_updated.value.seconds", { count: seconds });
  }

  const minutes = Math.floor(seconds / 60);

  if (minutes < 60) {
    return t("fields.last_updated.value.minutes", { count: minutes });
  }

  const hours = Math.floor(minutes / 60);

  if (hours < 24) {
    return t("fields.last_updated.value.hours", { count: hours });
  }

  return t("fields.last_updated.value.days", {
    count: Math.floor(hours / 24),
  });
}
