import type { OpaqueColorValue } from "react-native";

import type { ThemeContextTypes } from "@/contexts/theme/types";

export type ThemeConfig = {
  theme: ThemeContextTypes.Theme;
  resolvedTheme: ThemeContextTypes.ResolvedTheme;
  fontFamily: {
    regular: string;
    medium: string;
  };
  colors: {
    background: string | OpaqueColorValue;
    card: string | OpaqueColorValue;
    divider: string | OpaqueColorValue;
    text: string | OpaqueColorValue;
    textSecondary: string | OpaqueColorValue;
  };
};
