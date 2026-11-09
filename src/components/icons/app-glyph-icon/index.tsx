import type { ColorValue } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";

type Props = {
  size: number;
  color: ColorValue;
};

/**
 * The app icon's glyph (signal ring + Wi-Fi arc) redrawn as a one-color
 * symbol on a 24px grid with a 2px stroke, to sit next to Material Symbols.
 * Only the ring's 78% progress arc is drawn, with no track behind it, and the
 * ring spans almost the whole grid so it reads as large as the other symbols.
 */
export function AppGlyphIcon({ size, color }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 2A10 10 0 1 1 2.18 10.13"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        d="M7.78 12.44A5.78 5.78 0 0 1 16.22 12.44"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Circle cx={12} cy={14.9} r={1.5} fill={color} />
    </Svg>
  );
}
