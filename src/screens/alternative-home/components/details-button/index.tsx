import { SymbolView } from "expo-symbols";
import { useTranslation } from "react-i18next";
import { Pressable, Text } from "react-native";
import Animated, {
  FadeInUp,
  FadeOutDown,
  LinearTransition,
} from "react-native-reanimated";

import { useHaptics } from "@/hooks/use-haptics";
import { useStyles } from "@/hooks/use-styles";

import { androidRippleConfig } from "@/theme/android-ripple";

import { getStyles } from "./styles";

type Props = {
  onPress: () => void;
};

export function DetailsButton({ onPress }: Props) {
  const styles = useStyles(getStyles);
  const { performTapFeedback } = useHaptics();
  const { t } = useTranslation("translation", {
    keyPrefix: "alternative_home.details",
  });

  const handlePress = () => {
    performTapFeedback();
    onPress();
  };

  return (
    // Rises in from below when details become available, and sinks out when
    // they go away (offline / unknown).
    <Animated.View
      entering={FadeInUp.duration(250)}
      exiting={FadeOutDown.duration(200)}
      layout={LinearTransition.duration(220)}
      style={styles.container}
    >
      <Pressable
        style={styles.button}
        android_ripple={androidRippleConfig}
        onPress={handlePress}
        accessibilityRole="button"
      >
        <Text style={styles.label}>{t("button")}</Text>
        <SymbolView
          name={{ android: "expand_less" }}
          size={20}
          tintColor={styles.label.color}
        />
      </Pressable>
    </Animated.View>
  );
}
