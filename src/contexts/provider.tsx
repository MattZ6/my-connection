import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider as NavigationThemeProvider,
} from "expo-router";
import { StatusBar } from "expo-status-bar";
import type { ReactNode } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useTheme } from "@/hooks/use-theme";

import { LocationProvider } from "./location";
import { NetworkUpdatesProvider } from "./network-updates";
import { PreferencesProvider } from "./preferences";
import { ThemeProvider } from "./theme";

type NavigationProviderProps = {
  children: ReactNode;
};

function NavigationProvider({ children }: NavigationProviderProps) {
  const { resolvedTheme } = useTheme();

  return (
    <NavigationThemeProvider
      value={resolvedTheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <StatusBar animated style={resolvedTheme === "dark" ? "light" : "dark"} />
      {children}
    </NavigationThemeProvider>
  );
}

type Props = {
  children: ReactNode;
};

export function Provider(props: Props) {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <PreferencesProvider defaultHapticsEnabled={true}>
          <LocationProvider>
            <NetworkUpdatesProvider
              defaultAutomaticUpdatesEnabled={true}
              defaultUpdateFrequency="60s"
            >
              <NavigationProvider {...props} />
            </NetworkUpdatesProvider>
          </LocationProvider>
        </PreferencesProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
