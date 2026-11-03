import type { ReactNode } from "react";
import { type StyleProp, StyleSheet, View, type ViewStyle } from "react-native";
import Animated, {
  useAnimatedProps,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";
import Svg, { Circle } from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

type Props = {
  value: number;
  size?: number;
  strokeWidth?: number;
  trackColor?: string;
  progressColor?: string;
  /** Draws the track as a dotted line (used for unknown states). */
  dottedTrack?: boolean;
  children?: ReactNode;
  styles?: StyleProp<ViewStyle>;
};

export function AnimatedGauge({
  value,
  size = 240,
  strokeWidth = 8,
  trackColor = "#E5E7EB",
  progressColor = "#000000",
  dottedTrack = false,
  styles,
  children,
}: Props) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const progress = useDerivedValue(() => {
    return withTiming(Math.max(0, Math.min(value, 100)) / 100, {
      duration: 400,
    });
  });

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: circumference * (1 - progress.value),
    // A round line cap still paints a dot at 0%, so hide the arc entirely.
    strokeOpacity: progress.value > 0.001 ? 1 : 0,
  }));

  return (
    <View
      style={{
        width: size,
        height: size,
        ...styles,
      }}
    >
      <Svg width={size} height={size}>
        {/* Track */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={trackColor}
          strokeWidth={dottedTrack ? strokeWidth / 2 : strokeWidth}
          strokeDasharray={dottedTrack ? "2 10" : undefined}
          strokeLinecap={dottedTrack ? "round" : undefined}
          fill="none"
        />

        {/* Progress */}
        <AnimatedCircle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={progressColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={circumference}
          animatedProps={animatedProps}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </Svg>

      <View style={StyleSheet.absoluteFill}>{children}</View>
    </View>
  );
}
