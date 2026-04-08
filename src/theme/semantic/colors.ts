import { Color } from "expo-router";
import { type OpaqueColorValue, Platform } from "react-native";

import { darkPalette, palette } from "../tokens/palette";

export const colors = {
  surface: {
    base: palette.gray["1"],
    elevated: palette.gray["2"],
  },

  brandSurface: {
    base: palette.gray["1"],
    elevated: palette.gray["1"],
  },

  content: {
    base: palette.gray["12"],
    muted: palette.gray["11"],
  },

  brandContent: {
    base: palette.gray["12"],
    muted: palette.gray["11"],
  },

  border: {
    default: palette.gray["6"],
  },
};

export const darkColors = {
  surface: {
    base: darkPalette.gray["1"],
    elevated: darkPalette.gray["2"],
  },

  brandSurface: {
    base: darkPalette.gray["1"],
    elevated: darkPalette.gray["1"],
  },
  content: {
    base: darkPalette.gray["12"],
    muted: darkPalette.gray["11"],
  },

  brandContent: {
    base: darkPalette.gray["12"],
    muted: darkPalette.gray["11"],
  },

  border: {
    default: darkPalette.gray["6"],
  },
};

type GenerateSystemColorsInput = {
  useDynamicColors?: boolean;
};

export function generateSystemColors(
  input: GenerateSystemColorsInput = { useDynamicColors: true },
) {
  let androidMaterialColor = Color.android.material;

  if (input.useDynamicColors) {
    androidMaterialColor = Color.android.dynamic;
  }

  return {
    surface: {
      base: Platform.select({
        android: androidMaterialColor.surface,
        ios: Color.ios.systemBackground,
        default: "",
      }),
      elevated: Platform.select({
        android: androidMaterialColor.surfaceContainerLow,
        ios: Color.ios.secondarySystemBackground,
        default: "",
      }),
    },

    brandSurface: {
      base: Platform.select({
        android: androidMaterialColor.surfaceContainerHigh,
        ios: Color.ios.systemBackground,
        default: "",
      }),
      elevated: Platform.select({
        android: androidMaterialColor.primaryInverse,
        ios: Color.ios.secondarySystemBackground,
        default: "",
      }),
    },

    brandContent: {
      base: Platform.select({
        android: androidMaterialColor.primary,
        ios: Color.ios.systemBlue,
        default: "",
      }),
      muted: Platform.select({
        android: androidMaterialColor.onSurfaceVariant,
        ios: Color.ios.system,
        default: "",
      }),
    },

    content: {
      base: Platform.select({
        android: androidMaterialColor.onSurface,
        ios: Color.ios.label,
        default: "",
      }),
      muted: Platform.select({
        android: androidMaterialColor.onSurfaceVariant,
        ios: Color.ios.secondaryLabel,
        default: "",
      }),
    },

    border: {
      default: Platform.select({
        android: androidMaterialColor.surfaceContainerHighest,
        ios: Color.ios.separator,
        default: "",
      }),
    },
  };
}

type AppColorValue = OpaqueColorValue | string;

type Surface = {
  base: AppColorValue;
  elevated: AppColorValue;
};

type Content = {
  base: AppColorValue;
  muted: AppColorValue;
};

type Border = {
  default: AppColorValue;
};

export type Colors = {
  surface: Surface;
  brandSurface: Surface;
  content: Content;
  brandContent: Content;
  border: Border;
};
