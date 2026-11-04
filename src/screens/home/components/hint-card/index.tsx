import { SymbolView } from "expo-symbols";
import { useTranslation } from "react-i18next";
import { Pressable, Text, View } from "react-native";
import Animated, {
  FadeInDown,
  FadeOut,
  LinearTransition,
} from "react-native-reanimated";

import { useHaptics } from "@/hooks/use-haptics";
import { useStyles } from "@/hooks/use-styles";
import { useTheme } from "@/hooks/use-theme";

import { androidRippleConfig } from "@/theme/android-ripple";

import { NetworkSettingsUtils } from "@/utils/network-settings";

import type {
  ConnectionHint,
  HintAction,
  HintSeverity,
} from "../../utils/connection-hint";
import type { SignalTone } from "../../utils/signal-quality";
import { getToneColor } from "../../utils/tone-color";

import { getStyles } from "./styles";

type Props = {
  hint: ConnectionHint;
  onDismiss: () => void;
};

const SEVERITY_TONE: Record<HintSeverity, SignalTone> = {
  critical: "danger",
  warning: "caution",
  info: "neutral",
};

const ACTION_HANDLERS: Record<HintAction, () => void> = {
  open_network_settings: NetworkSettingsUtils.openNetworkSettings,
  choose_network: NetworkSettingsUtils.openWifiSettings,
  turn_on_wifi: NetworkSettingsUtils.openWifiSettings,
};

export function HintCard({ hint, onDismiss }: Props) {
  const theme = useTheme();
  const styles = useStyles(getStyles);
  const { performTapFeedback } = useHaptics();
  const { t } = useTranslation("translation", {
    keyPrefix: "home.hints",
  });

  const color = getToneColor(theme, SEVERITY_TONE[hint.severity]);
  // Only info hints can be dismissed: the others go away when the problem does.
  const isDismissible = hint.severity === "info";

  const handleAction = () => {
    if (!hint.action) {
      return;
    }

    performTapFeedback();
    ACTION_HANDLERS[hint.action]();
  };

  const handleDismiss = () => {
    performTapFeedback();
    onDismiss();
  };

  return (
    <Animated.View
      entering={FadeInDown.duration(250)}
      exiting={FadeOut.duration(150)}
      layout={LinearTransition.duration(220)}
      style={styles.card}
      accessibilityRole="summary"
    >
      <SymbolView name={{ android: hint.icon }} size={22} tintColor={color} />

      <View style={styles.content}>
        <View style={styles.texts}>
          <Text style={styles.title}>{t(`${hint.id}.title`)}</Text>
          <Text style={styles.message}>
            {t(`${hint.id}.message`, hint.params)}
          </Text>
        </View>

        {hint.action && (
          <View style={styles.actionContainer}>
            <Pressable
              style={styles.action}
              android_ripple={androidRippleConfig}
              onPress={handleAction}
              accessibilityRole="button"
            >
              <Text style={styles.actionLabel}>
                {t(`actions.${hint.action}`)}
              </Text>
            </Pressable>
          </View>
        )}
      </View>

      {isDismissible && (
        <Pressable
          style={styles.dismiss}
          hitSlop={8}
          onPress={handleDismiss}
          accessibilityRole="button"
          accessibilityLabel={t("dismiss")}
        >
          <SymbolView
            name={{ android: "close" }}
            size={20}
            tintColor={theme.colors.content.muted}
          />
        </Pressable>
      )}
    </Animated.View>
  );
}
