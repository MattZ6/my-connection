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
import { useColorScheme } from "react-native";
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
          backgroundColor={Color.android.material.surfaceContainerLow}
          iconColor={{
            default: Color.android.material.onSurfaceVariant,
            selected: Color.android.material.onSurface,
          }}
          labelStyle={{
            default: {
              color: Color.android.material.onSurfaceVariant,
            },
            selected: {
              color: Color.android.material.onSurface,
            },
          }}
          rippleColor={Color.android.material.onSurfaceVariant}
          indicatorColor={Color.android.material.surfaceContainerHighest}
          //  screenOptions={{
          //     contentStyle: {
          //       backgroundColor: Color.android.material.surface,
          //     },
          //     headerStyle: {
          //       backgroundColor: Color.android.material.surface.toString(),
          //     },
          //     headerShadowVisible: false,
          //     headerTitleStyle: {
          //       color: Color.android.material.onSurfaceInverse.toString(),
          //     },
          //   }}
        >
          <NativeTabs.Trigger name="index">
            <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
            <NativeTabs.Trigger.Icon
              sf="house.fill"
              md="home"
              selectedColor={Color.android.material.onSurface}
            />
          </NativeTabs.Trigger>
          <NativeTabs.Trigger name="about">
            <NativeTabs.Trigger.Icon sf="gear" md="settings" />
            <NativeTabs.Trigger.Label>Settings</NativeTabs.Trigger.Label>
          </NativeTabs.Trigger>
        </NativeTabs>
        {/* <Stack
          screenOptions={{
            contentStyle: {
              backgroundColor: Color.android.material.surface,
            },
            headerStyle: {
              backgroundColor: Color.android.material.surface.toString(),
            },
            headerShadowVisible: false,
            headerTitleStyle: {
              color: Color.android.material.onSurfaceInverse.toString(),
            },
          }}
        /> */}
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

let WrappedRootLayout: React.ComponentType = RootLayout;

if (sentryDsn) {
  WrappedRootLayout = Sentry.wrap(RootLayout);
}

export default WrappedRootLayout;
