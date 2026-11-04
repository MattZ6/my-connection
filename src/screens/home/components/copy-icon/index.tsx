import { SymbolView } from "expo-symbols";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { useTheme } from "@/hooks/use-theme";

const ANIMATION_DURATION = 200;

type Props = {
  isCopied: boolean;
  size?: number;
};

/** "Copy" icon that cross-fades into a green check once the value is copied. */
export function CopyIcon({ isCopied, size = 16 }: Props) {
  const { colors } = useTheme();
  const progress = useSharedValue(isCopied ? 1 : 0);

  useEffect(() => {
    progress.value = withTiming(isCopied ? 1 : 0, {
      duration: ANIMATION_DURATION,
    });
  }, [isCopied, progress]);

  const copyStyle = useAnimatedStyle(() => ({
    opacity: interpolate(progress.value, [0, 1], [1, 0]),
    transform: [{ scale: interpolate(progress.value, [0, 1], [1, 0.6]) }],
  }));

  const checkStyle = useAnimatedStyle(() => ({
    opacity: progress.value,
    transform: [{ scale: interpolate(progress.value, [0, 1], [0.6, 1]) }],
  }));

  return (
    <View style={{ width: size, height: size }}>
      <Animated.View style={[styles.icon, copyStyle]}>
        <SymbolView
          name={{ android: "content_copy" }}
          size={size}
          tintColor={colors.content.muted}
        />
      </Animated.View>

      <Animated.View style={[styles.icon, checkStyle]}>
        <SymbolView
          name={{ android: "check" }}
          size={size}
          tintColor={colors.semantic.success}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    ...StyleSheet.absoluteFill,
    alignItems: "center",
    justifyContent: "center",
  },
});
