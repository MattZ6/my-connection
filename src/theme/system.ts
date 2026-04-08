import { generateSystemColors } from "./semantic/colors";
import { fontFamily, fontSizes } from "./semantic/text";

import { radii } from "./tokens/radii";

type GenerateSystemThemeInput = {
  useDynamicColors?: boolean;
};

export function generateSystemTheme(input?: GenerateSystemThemeInput) {
  return {
    fontFamily,
    fontSizes,
    colors: generateSystemColors(input),
    radii,
  };
}
