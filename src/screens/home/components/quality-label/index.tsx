import { useEffect, useState } from "react";
import type { ColorValue } from "react-native";
import { View } from "react-native";
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";

import { useStyles } from "@/hooks/use-styles";

import { getStyles } from "./styles";

type Props = {
  /** Text currently shown. Changing it slides the new text in. */
  label: string;
  /** Used to decide the slide direction: higher slides up, lower slides down. */
  level: number;
  color: ColorValue;
};

/** Each slot keeps its own color, so the outgoing text fades out in its old color. */
type Slot = { label: string; level: number; color: ColorValue };

type Slots = {
  current: Slot;
  next: Slot;
};

const ANIMATION_DURATION = 400;
const ANIMATION_OFFSET = 8;

export function QualityLabel({ label, level, color }: Props) {
  const styles = useStyles(getStyles);
  const [slots, setSlots] = useState<Slots>({
    current: { label, level, color },
    next: { label, level, color },
  });

  const progress = useSharedValue(1);
  const direction = useSharedValue(1);

  useEffect(() => {
    if (label === slots.next.label) {
      return;
    }

    direction.value = level >= slots.current.level ? 1 : -1;
    setSlots((state) => ({
      current: state.next,
      next: { label, level, color },
    }));

    const settle = () =>
      setSlots((state) => ({ current: state.next, next: state.next }));

    progress.value = 0;
    progress.value = withTiming(
      1,
      { duration: ANIMATION_DURATION, easing: Easing.out(Easing.cubic) },
      (finished) => {
        if (finished) {
          scheduleOnRN(settle);
        }
      },
    );
  }, [
    label,
    level,
    color,
    slots.current.level,
    slots.next.label,
    direction,
    progress,
  ]);

  const outgoingStyle = useAnimatedStyle(() => ({
    opacity: interpolate(progress.value, [0, 1], [1, 0]),
    transform: [
      {
        translateY: interpolate(
          progress.value,
          [0, 1],
          [0, direction.value * -ANIMATION_OFFSET],
        ),
      },
    ],
  }));

  const incomingStyle = useAnimatedStyle(() => ({
    opacity: interpolate(progress.value, [0, 1], [0, 1]),
    transform: [
      {
        translateY: interpolate(
          progress.value,
          [0, 1],
          [direction.value * ANIMATION_OFFSET, 0],
        ),
      },
    ],
  }));

  const isAnimating = slots.current.label !== slots.next.label;

  return (
    <View style={styles.container}>
      {isAnimating && (
        <Animated.Text
          style={[styles.label, { color: slots.current.color }, outgoingStyle]}
        >
          {slots.current.label}
        </Animated.Text>
      )}

      <Animated.Text
        style={[
          styles.label,
          { color: slots.next.color },
          isAnimating && incomingStyle,
        ]}
      >
        {slots.next.label}
      </Animated.Text>
    </View>
  );
}
