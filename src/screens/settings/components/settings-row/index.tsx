import { type AndroidSymbol, type SFSymbol, SymbolView } from "expo-symbols";
import { type ReactNode, useCallback } from "react";
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

type Trailing = "chevron" | "external" | "none";

type Props = {
  label: string;
  icon: {
    android: AndroidSymbol;
    ios?: SFSymbol;
  };
  value?: string;
  badge?: ReactNode;
  control?: ReactNode;
  trailing?: Trailing;
  accessibilityHint?: string;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
  /** Skips the default tap feedback, for rows that give their own. */
  silent?: boolean;
};

export function SettingsRow({
  label,
  icon,
  value,
  badge,
  control,
  trailing = "chevron",
  accessibilityHint,
  onPress,
  silent,
}: Props) {
  const styles = useStyles(getStyles);
  const { performTapFeedback } = useHaptics();

  const handlePress = useCallback(
    (event: GestureResponderEvent) => {
      if (!silent) {
        performTapFeedback();
      }

      onPress?.(event);
    },
    [onPress, performTapFeedback, silent],
  );

  return (
    <Pressable
      onPress={handlePress}
      android_disableSound
      android_ripple={androidRippleConfig}
      accessibilityRole={trailing === "external" ? "link" : "button"}
      accessibilityHint={accessibilityHint}
      style={styles.container}
    >
      <SymbolView
        name={icon}
        size={22}
        tintColor={styles.icon.tintColor}
        style={styles.leadingIcon}
      />

      <Text style={styles.label} numberOfLines={1}>
        {label}
      </Text>

      <View style={styles.trailing}>
        {!!value && (
          <Text style={styles.value} numberOfLines={1}>
            {value}
          </Text>
        )}

        {badge}

        {control}

        {trailing !== "none" && (
          <SymbolView
            name={{
              android:
                trailing === "external" ? "open_in_new" : "chevron_right",
              ios: trailing === "external" ? "arrow.up.right" : "chevron.right",
            }}
            size={20}
            tintColor={styles.icon.tintColor}
          />
        )}
      </View>
    </Pressable>
  );
}
