import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import * as Sentry from "@sentry/react-native";
import { isRunningInExpoGo } from "expo";
import ExpoConstants from "expo-constants";
import { Color, useNavigationContainerRef } from "expo-router";
import { NativeTabs } from "expo-router/unstable-native-tabs";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Platform, useColorScheme } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

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

SplashScreen.preventAutoHideAsync();

function RootLayout() {
  const ref = useNavigationContainerRef();

  const colorScheme = useColorScheme();

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
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
    <SafeAreaProvider>
      <StatusBar animated style="auto" />
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <NativeTabs
          backgroundColor={Platform.select({
            android: Color.android.dynamic.surfaceContainerLow,
            ios: undefined,
          })}
          iconColor={Platform.select({
            android: {
              default: Color.android.dynamic.onSurfaceVariant,
              selected: Color.android.dynamic.primary,
            },
            ios: undefined,
          })}
          labelStyle={Platform.select({
            android: {
              default: {
                color: Color.android.dynamic.onSurfaceVariant,
              },
              selected: {
                color: Color.android.dynamic.primary,
              },
            },
            ios: undefined,
          })}
          indicatorColor={Color.android.dynamic.primaryInverse}
          rippleColor={Color.android.dynamic.primaryFixedDim}
          tintColor={Color.android.dynamic.primary}
        >
          <NativeTabs.Trigger name="index">
            <NativeTabs.Trigger.Icon sf="house" md="home" />
            <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
          </NativeTabs.Trigger>
          <NativeTabs.Trigger name="settings">
            <NativeTabs.Trigger.Icon sf="gear" md="settings" />
            <NativeTabs.Trigger.Label>Settings</NativeTabs.Trigger.Label>
          </NativeTabs.Trigger>
        </NativeTabs>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

let WrappedRootLayout: React.ComponentType = RootLayout;

if (sentryDsn) {
  WrappedRootLayout = Sentry.wrap(RootLayout);
}

export default WrappedRootLayout;
