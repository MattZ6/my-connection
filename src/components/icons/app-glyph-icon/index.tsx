import type { ColorValue } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";

type Props = {
  size: number;
  color: ColorValue;
};

/**
 * The app icon's glyph (signal ring + Wi-Fi arc) redrawn as a one-color
 * symbol on a 24px grid with a 2px stroke, to sit next to Material Symbols.
 * The ring keeps the icon's 78% progress; the rest of it is a faint track.
 */
export function AppGlyphIcon({ size, color }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle
        cx={12}
        cy={12}
        r={9}
        stroke={color}
        strokeOpacity={0.35}
        strokeWidth={2}
      />
      <Path
        d="M12 3A9 9 0 1 1 3.16 10.31"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        d="M8.2 12.4A5.2 5.2 0 0 1 15.8 12.4"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Circle cx={12} cy={14.6} r={1.4} fill={color} />
    </Svg>
  );
}
