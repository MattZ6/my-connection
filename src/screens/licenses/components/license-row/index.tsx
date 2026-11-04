import { SymbolView } from "expo-symbols";
import { useCallback } from "react";
import {
  type GestureResponderEvent,
  Pressable,
  Text,
  View,
} from "react-native";

import { useHaptics } from "@/hooks/use-haptics";
import { useStyles } from "@/hooks/use-styles";

import { androidRippleConfig } from "@/theme/android-ripple";

import { getStyles } from "./styles";

type Props = {
  name: string;
  version: string | null;
  licenses: string;
  onPress?: ((event: GestureResponderEvent) => void) | null;
};

export function LicenseRow({ name, version, licenses, onPress }: Props) {
  const styles = useStyles(getStyles);
  const { performTapFeedback } = useHaptics();

  const handlePress = useCallback(
    (event: GestureResponderEvent) => {
      performTapFeedback();
      onPress?.(event);
    },
    [onPress, performTapFeedback],
  );

  const details = [version, licenses].filter(Boolean).join(" · ");

  return (
    <Pressable
      android_disableSound
      android_ripple={androidRippleConfig}
      accessibilityRole="link"
      accessibilityLabel={`${name}, ${details}`}
      onPress={handlePress}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.details}>{details}</Text>
      </View>

      <SymbolView
        name={{ android: "open_in_new", ios: "arrow.up.right" }}
        size={18}
        tintColor={styles.icon.tintColor}
      />
    </Pressable>
  );
}
