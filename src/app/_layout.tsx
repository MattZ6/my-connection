import {
  Poppins_400Regular,
  Poppins_500Medium,
  useFonts,
} from "@expo-google-fonts/poppins";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider as NavigationThemeProvider,
} from "@react-navigation/native";
import * as Sentry from "@sentry/react-native";
import { isRunningInExpoGo } from "expo";
import ExpoConstants from "expo-constants";
import { useNavigationContainerRef } from "expo-router";
import { NativeTabs } from "expo-router/unstable-native-tabs";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { ThemeProvider } from "@/contexts/theme";

import { useTheme } from "@/hooks/use-theme";
import { useThemeMode } from "@/hooks/use-theme-mode";

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

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
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
      <ThemeProvider>
        <NavigationProvider />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

function NavigationProvider() {
  const { resolvedTheme } = useThemeMode();

  return (
    <NavigationThemeProvider
      value={resolvedTheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <StatusBar animated style={resolvedTheme === "dark" ? "light" : "dark"} />
      <TabsNavigation />
    </NavigationThemeProvider>
  );
}

function TabsNavigation() {
  const { colors, fontFamily } = useTheme();

  return (
    <NativeTabs
      backgroundColor={colors.background}
      // iconColor={Platform.select({
      //   android: {
      //     default: Color.android.dynamic.onSurfaceVariant,
      //     selected: Color.android.dynamic.primary,
      //   },
      //   ios: {
      //     default: Color.ios.label,
      //     selected: Color.ios.systemBlue,
      //   },
      // })}
      iconColor={{
        default: colors.textSecondary,
        selected: colors.text,
      }}
      // labelStyle={Platform.select({
      //   android: {
      //     default: {
      //       color: Color.android.dynamic.onSurfaceVariant,
      //     },
      //     selected: {
      //       color: Color.android.dynamic.primary,
      //     },
      //   },
      //   ios: {
      //     default: {
      //       color: Color.ios.label,
      //     },
      //     selected: {
      //       color: Color.ios.systemBlue,
      //     },
      //   },
      // })}
      labelStyle={{
        default: {
          fontFamily: fontFamily.regular,
          color: colors.textSecondary,
        },
        selected: {
          fontFamily: fontFamily.regular,
          color: colors.text,
        },
      }}
      // indicatorColor={Color.android.dynamic.primaryInverse}
      // tintColor={Color.android.dynamic.primary}
      indicatorColor={colors.card}
      rippleColor={colors.card}
      // tintColor={colors.text}
    >
      <NativeTabs.Trigger name="(main)">
        <NativeTabs.Trigger.Icon sf="house" md="home" />
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="settings">
        <NativeTabs.Trigger.Icon sf="gear" md="settings" />
        <NativeTabs.Trigger.Label>Settings</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}

let WrappedRootLayout: React.ComponentType = RootLayout;

if (sentryDsn) {
  WrappedRootLayout = Sentry.wrap(RootLayout);
}

export default WrappedRootLayout;
