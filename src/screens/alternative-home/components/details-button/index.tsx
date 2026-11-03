import { SymbolView } from "expo-symbols";
import { useTranslation } from "react-i18next";
import { Pressable, Text, View } from "react-native";

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
    <View style={styles.container}>
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
    </View>
  );
}
