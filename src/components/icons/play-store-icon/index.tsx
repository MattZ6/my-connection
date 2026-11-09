import type { ColorValue } from "react-native";
import Svg, { Path } from "react-native-svg";

type Props = {
  size: number;
  color: ColorValue;
};

/**
 * Google Play's logo drawn as an outline, with the same 2px stroke on a 24px
 * grid as the Material Symbols used across the app.
 */
export function PlayStoreIcon({ size, color }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M5 3.6 20 12 5 20.4Z M5 3.6 15.4 14.6 M5 20.4 15.4 9.4"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
