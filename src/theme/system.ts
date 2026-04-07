import { generateSystemColors } from "./semantic/colors";
import { fontFamily, fontSizes } from "./semantic/text";

import { radii } from "./tokens/radii";

export function generateSystemTheme() {
  return {
    fontFamily,
    fontSizes,
    colors: generateSystemColors(),
    radii,
  };
}
