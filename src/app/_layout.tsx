import "@/i18next/i18next";

import * as Sentry from "@sentry/react-native";
import { Stack, useNavigationContainerRef } from "expo-router";
import * as ExpoSplashScreen from "expo-splash-screen";
import * as ExpoSystemUI from "expo-system-ui";
import { useEffect } from "react";
import { Platform } from "react-native";

import { Provider } from "@/contexts/provider";

import { useFontFamily } from "@/hooks/use-font-family";
import { useTheme } from "@/hooks/use-theme";

import {
  isCrashReportingAvailable,
  navigationIntegration,
  setDiagnosticsEnabled,
} from "@/libs/diagnostics";

import { SettingsRepository } from "@/repositories/settings";

setDiagnosticsEnabled(SettingsRepository.getCrashReportsFlag() ?? false);

ExpoSplashScreen.preventAutoHideAsync();

function RootLayout() {
  const ref = useNavigationContainerRef();
  const [fontsLoaded] = useFontFamily();

  useEffect(() => {
    if (fontsLoaded) {
      ExpoSplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    if (ref) {
      navigationIntegration.registerNavigationContainer(ref);
    }
  }, [ref]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider>
      <RootStackNavigation />
    </Provider>
  );
}

function RootStackNavigation() {
  const { colors } = useTheme();

  useEffect(() => {
    ExpoSystemUI.setBackgroundColorAsync(colors.surface.base);
  }, [colors.surface.base]);

  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerTransparent: Platform.OS === "ios",
        headerStyle: {
          backgroundColor: Platform.select({
            android: colors.surface.base.toString(),
            ios: "transparent",
          }),
        },
      }}
    />
  );
}

let WrappedRootLayout: React.ComponentType = RootLayout;

if (isCrashReportingAvailable) {
  WrappedRootLayout = Sentry.wrap(RootLayout);
}

export default WrappedRootLayout;
