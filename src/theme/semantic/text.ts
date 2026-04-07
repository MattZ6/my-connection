import { typography } from "../tokens/typography";

export const fontSizes = {
  label: typography["1"],
  bodySmall: typography["2"],
  body: typography["3"],
  subtitle: typography["4"],
  title: typography["5"],
};

export const fontFamily = {
  regular: "Poppins_400Regular",
  medium: "Poppins_500Medium",
};

export type FontSize = typeof fontSizes;
export type FontSizeOptions = keyof typeof fontSizes;
export type FontFamily = typeof fontFamily;
export type FontFamilyOptions = keyof typeof fontFamily;
