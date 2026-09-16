import { useMemo } from "react";
import type { ImageStyle, TextStyle, ViewStyle } from "react-native";

import type { ThemeConfig } from "@/theme/types";

import { useTheme } from "./use-theme";

type NamedStyles<T> = {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};

export type StyleFactory<T extends NamedStyles<T>> = (
  theme: ThemeConfig,
) => T;

export function useStyles<T extends NamedStyles<T>>(
  factory: StyleFactory<T>,
) {
  const theme = useTheme();

  // biome-ignore lint/correctness/useExhaustiveDependencies: Re-mount only when theme changes.
  return useMemo(() => factory(theme), [theme]);
}
