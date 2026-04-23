import { useEffect } from "react";
import { type LayoutChangeEvent, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { useStyles } from "@/hooks/use-styles";

import { getStyles } from "./styles";

type Props = {
  value: number;
};

export function AnimatedProgress({ value }: Props) {
  const styles = useStyles(getStyles);

  const progress = useSharedValue(0);
  const containerWidth = useSharedValue(0);

  const progressAnimatedStyles = useAnimatedStyle(() => {
    const progressBarWidth = containerWidth.value;

    return {
      transform: [
        {
          translateX:
            -progressBarWidth + progressBarWidth * (progress.value / 100),
        },
      ],
    };
  });

  useEffect(() => {
    const clamped = Math.min(Math.max(value, 0), 100);

    progress.value = withTiming(clamped, {
      duration: 400,
      easing: Easing.out(Easing.cubic),
    });
  }, [value, progress]);

  const handleLayout = (e: LayoutChangeEvent) => {
    containerWidth.value = e.nativeEvent.layout.width;
  };

  return (
    <View style={styles.container} onLayout={handleLayout}>
      <Animated.View style={[styles.bar, progressAnimatedStyles]} />
    </View>
  );
}
