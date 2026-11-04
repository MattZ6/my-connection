import { typography } from "../tokens/typography";

export const fontSizes = {
  label: typography["1"],
  bodySmall: typography["2"],
  body: typography["3"],
  subtitle: typography["4"],
  title: typography["5"],
};

export const mono = {
  regular: "GeistMono_400Regular",
  medium: "GeistMono_500Medium",
};

export const fontFamily = {
  regular: "Geist_400Regular",
  medium: "Geist_500Medium",
  semiBold: "Geist_600SemiBold",
  bold: "Geist_700Bold",
  mono,
};

export type FontSize = typeof fontSizes;
export type FontSizeOptions = keyof typeof fontSizes;
export type FontFamily = typeof fontFamily;
export type FontFamilyOptions = keyof typeof fontFamily;
