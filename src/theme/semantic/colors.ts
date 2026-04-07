import { darkPalette, palette } from "../tokens/palette";

export const colors = {
  surface: {
    base: palette.gray["1"],
    elevated: palette.gray["2"],
  },

  content: {
    base: palette.gray["12"],
    muted: palette.gray["11"],
  },

  border: {
    default: palette.gray["6"],
  },

  // surface: {
  //   base: pallete.gray["1"],
  //   elevated: palette.gray["900"],
  //   subtle: palette.gray["800"],
  //   skeleton: palette.gray["700"],

  //   brandMuted: palette.green["950"],
  // },

  // content: {
  //   primary: palette.gray["300"],
  //   secondary: palette.gray["500"],

  //   brand: palette.green["400"],
  // },

  // border: {
  //   default: palette.gray["800"],
  // },

  // feedback: {
  //   positive: {
  //     content: palette.green["300"],
  //     surface: "rgba(92, 192, 155, 0.15)",
  //   },

  //   negative: {
  //     content: palette.red["400"],
  //     surface: "rgba(212, 75, 98, 0.15)",
  //   },
  // },
};

export const darkColors = {
  surface: {
    base: darkPalette.gray["1"],
    elevated: darkPalette.gray["2"],
  },

  content: {
    base: darkPalette.gray["12"],
    muted: darkPalette.gray["11"],
  },

  border: {
    default: darkPalette.gray["6"],
  },
};

export type Colors = typeof colors;
