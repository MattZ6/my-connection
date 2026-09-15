import "@/i18next/i18next";

import * as Sentry from "@sentry/react-native";
import { isRunningInExpoGo } from "expo";
import ExpoConstants from "expo-constants";
import { Observe, ObserveRoot, useObserve } from "expo-observe";
import { Stack, useNavigationContainerRef } from "expo-router";
import * as ExpoSplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Platform } from "react-native";

import { Provider } from "@/contexts/provider";

import { useFontFamily } from "@/hooks/use-font-family";
import { useTheme } from "@/hooks/use-theme";

const sentryDsn = String(process.env.EXPO_PUBLIC_SENTRY_DSN || "");
const packageName = String(ExpoConstants.expoConfig?.slug || "");
const packageVersion = String(ExpoConstants.expoConfig?.version || "");
const environment = String(
  process.env.EXPO_PUBLIC_APP_VARIANT || "development",
);

const navigationIntegration = Sentry.reactNavigationIntegration({
  enableTimeToInitialDisplay: !isRunningInExpoGo(),
});

if (sentryDsn) {
  Sentry.init({
    dsn: sentryDsn,

    release: `${packageName}@${packageVersion}`,

    // Base config
    sendDefaultPii: false,
    environment,

    // Sample
    tracesSampleRate: 0.2,

    // Session Replay
    replaysSessionSampleRate: 0,
    replaysOnErrorSampleRate: 1,

    enableNativeFramesTracking: !isRunningInExpoGo(),

    integrations: [navigationIntegration, Sentry.mobileReplayIntegration()],
  });
}

Observe.configure({
  integrations: { "expo-router": true },
});

ExpoSplashScreen.preventAutoHideAsync();

function RootLayout() {
  const ref = useNavigationContainerRef();
  const [fontsLoaded] = useFontFamily();
  const { markInteractive } = useObserve();

  useEffect(() => {
    if (fontsLoaded) {
      ExpoSplashScreen.hideAsync();
      markInteractive();
    }
  }, [fontsLoaded, markInteractive]);

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

if (sentryDsn) {
  WrappedRootLayout = Sentry.wrap(RootLayout);
}

export default ObserveRoot.wrap(WrappedRootLayout);
