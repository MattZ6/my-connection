// import type { OpaqueColorValue } from "react-native";

import type { ThemeContextTypes } from "@/contexts/theme/types";

import type { Colors } from "./semantic/colors";
import type { FontFamily, FontSize } from "./semantic/text";
import type { Radii } from "./tokens/radii";

// export type ThemeConfig = {
//   theme: ThemeContextTypes.Theme;
//   resolvedTheme: ThemeContextTypes.ResolvedTheme;
//   fontFamily: {
//     regular: string;
//     medium: string;
//   };
//   colors: {
//     background: string | OpaqueColorValue;
//     card: string | OpaqueColorValue;
//     divider: string | OpaqueColorValue;
//     text: string | OpaqueColorValue;
//     textSecondary: string | OpaqueColorValue;
//   };
// };

export type Theme = {
  fontFamily: FontFamily;
  fontSizes: FontSize;
  radii: Radii;
  colors: Colors;
};

export type ThemeConfig = Theme & {
  theme: ThemeContextTypes.ThemeOption;
  resolvedTheme: ThemeContextTypes.ResolvedThemeOption;
};
