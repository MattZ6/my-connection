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

export function generateSystemColors() {
  return {
    surface: {
      base: Platform.select({
        android: Color.android.dynamic.surface,
        ios: Color.ios.systemBackground,
        default: "",
      }),
      elevated: Platform.select({
        android: Color.android.dynamic.surfaceContainerLow,
        ios: Color.ios.secondarySystemBackground,
        default: "",
      }),
    },

    brandSurface: {
      base: Platform.select({
        android: Color.android.dynamic.surfaceContainerHigh,
        ios: Color.ios.systemBackground,
        default: "",
      }),
      elevated: Platform.select({
        android: Color.android.dynamic.primaryInverse,
        ios: Color.ios.secondarySystemBackground,
        default: "",
      }),
    },

    brandContent: {
      base: Platform.select({
        android: Color.android.dynamic.primary,
        ios: Color.ios.systemBlue,
        default: "",
      }),
      muted: Platform.select({
        android: Color.android.dynamic.onSurfaceVariant,
        ios: Color.ios.system,
        default: "",
      }),
    },

    content: {
      base: Platform.select({
        android: Color.android.dynamic.onSurface,
        ios: Color.ios.label,
        default: "",
      }),
      muted: Platform.select({
        android: Color.android.dynamic.onSurfaceVariant,
        ios: Color.ios.secondaryLabel,
        default: "",
      }),
    },

    border: {
      default: Platform.select({
        android: Color.android.dynamic.surfaceContainerHighest,
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
