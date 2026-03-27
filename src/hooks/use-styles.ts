import { useMemo } from "react";
import type { StyleSheet } from "react-native";

import type { ThemeConfig } from "@/theme/types";

import { useTheme } from "./use-theme";

export type StyleFactory<T extends StyleSheet.NamedStyles<T>> = (
  theme: ThemeConfig,
) => T;

export function useStyles<T extends StyleSheet.NamedStyles<T>>(
  factory: StyleFactory<T>,
) {
  const theme = useTheme();

  return useMemo(() => factory(theme), [theme, factory]);
}
