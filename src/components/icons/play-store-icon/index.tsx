import type { ColorValue } from "react-native";
import Svg, { Line, Path } from "react-native-svg";

type Props = {
  size: number;
  color: ColorValue;
};

/**
 * Google Play's logo drawn as an outline, the same drawing the site uses. The
 * 22px stroke on a 256px grid matches the Material Symbols weight.
 */
export function PlayStoreIcon({ size, color }: Props) {
  const stroke = {
    stroke: color,
    strokeWidth: 22,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  } as const;

  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" fill="none">
      <Path
        d="M56,224.14a8,8,0,0,0,12.06,6.77L235.9,134.84a7.75,7.75,0,0,0,0-13.68L68.06,25.09A8,8,0,0,0,56,31.86Z"
        {...stroke}
      />
      <Line x1={58.33} y1={26.33} x2={192} y2={160} {...stroke} />
      <Line x1={58.33} y1={229.67} x2={191.98} y2={96.02} {...stroke} />
    </Svg>
  );
}
