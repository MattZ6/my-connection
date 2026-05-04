import { useLayoutEffect } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";

const DURATION = 250;

type Props = {
  children: React.ReactNode;
  delay?: number;
};

export function FadeInWrapper({ children, delay = 0 }: Props) {
  const opacity = useSharedValue(0);

  useLayoutEffect(() => {
    opacity.value = withDelay(delay, withTiming(1, { duration: DURATION }));
  }, [delay, opacity]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return <Animated.View style={animatedStyle}>{children}</Animated.View>;
}
