import type { ReactNode } from "react";

export namespace ThemeContextTypes {
  export type ResolvedTheme = "light" | "dark";
  export type Theme = "system" | ResolvedTheme;

  export type Context = {
    resolvedTheme: ResolvedTheme;
    theme: Theme;
    changeTheme: (input: Theme) => void;
  };
}

export namespace ThemeProviderTypes {
  export type Props = {
    children: ReactNode;
  };
}
