import { type AndroidSymbol, type SFSymbol, SymbolView } from "expo-symbols";
import { useCallback } from "react";
import {
  type GestureResponderEvent,
  Platform,
  Pressable,
  Text,
  View,
} from "react-native";

import { useHaptics } from "@/hooks/use-haptics";
import { useStyles } from "@/hooks/use-styles";

import { androidRippleConfig } from "@/theme/android-ripple";
import { getStyles } from "./styles";

type Props = {
  label: string;
  icon: {
    ios: SFSymbol;
    android: AndroidSymbol;
  };
  onPress: ((event: GestureResponderEvent) => void) | null | undefined;
};

export function PressableConfigItem({ label, icon, onPress }: Props) {
  const styles = useStyles(getStyles);
  const { performTapFeedback } = useHaptics();

  const handlePress = useCallback(
    (event: GestureResponderEvent) => {
      performTapFeedback();

      if (onPress) {
        onPress(event);
      }
    },
    [onPress, performTapFeedback],
  );

  return (
    <Pressable
      onPress={handlePress}
      android_disableSound
      android_ripple={androidRippleConfig}
    >
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <SymbolView
            name={icon}
            tintColor={styles.icon.tintColor}
            size={Platform.select({
              ios: 20,
              android: 24,
            })}
          />
        </View>

        <Text style={styles.text}>{label}</Text>

        <SymbolView
          name={{ android: "chevron_right", ios: "chevron.right" }}
          tintColor={styles.chevron.tintColor}
          size={Platform.select({
            ios: 12,
            android: 24,
          })}
        />
      </View>
    </Pressable>
  );
}
