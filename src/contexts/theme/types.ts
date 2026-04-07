import type { ReactNode } from "react";
import type { Theme } from "@/theme/types";

export namespace ThemeContextTypes {
  export type ResolvedThemeOption = "light" | "dark";
  export type ThemeOption = "system" | ResolvedThemeOption;

  export type Context = Theme & {
    resolvedTheme: ResolvedThemeOption;
    theme: ThemeOption;
    changeTheme: (input: ThemeOption) => void;
  };
}

export namespace ThemeProviderTypes {
  export type Props = {
    children: ReactNode;
  };
}
