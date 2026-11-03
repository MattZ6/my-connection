import type { ColorValue } from "react-native";

import type { ThemeConfig } from "@/theme/types";

import type { SignalTone } from "./signal-quality";

export function getToneColor(
  theme: ThemeConfig,
  tone: SignalTone,
): NonNullable<ColorValue> {
  switch (tone) {
    case "danger":
      return theme.colors.semantic.warning;

    case "caution":
      return theme.colors.semantic.caution;

    case "success":
      return theme.colors.semantic.success;

    default:
      return theme.colors.content.muted;
  }
}
