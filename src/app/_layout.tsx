import "@/i18next/i18next";

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider as NavigationThemeProvider,
  type ParamListBase,
  type ScreenListeners,
  type TabNavigationState,
} from "@react-navigation/native";
import * as Sentry from "@sentry/react-native";
import { isRunningInExpoGo } from "expo";
import ExpoConstants from "expo-constants";
import { useNavigationContainerRef } from "expo-router";
import type { NativeTabNavigationEventMap } from "expo-router/build/native-tabs/types";
import { NativeTabs } from "expo-router/unstable-native-tabs";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import * as ExpoSystemUI from "expo-system-ui";
import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { LocationProvider } from "@/contexts/location";
import { NetworkUpdatesProvider } from "@/contexts/network-updates";
import { PreferencesProvider } from "@/contexts/preferences";
import { ThemeProvider } from "@/contexts/theme";
import { useHaptics } from "@/hooks/use-haptics";
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

SplashScreen.preventAutoHideAsync();

function RootLayout() {
  const ref = useNavigationContainerRef();

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
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
      <ThemeProvider>
        <PreferencesProvider defaultHapticsEnabled={true}>
          <LocationProvider>
            <NetworkUpdatesProvider
              defaultAutomaticUpdatesEnabled={true}
              defaultUpdateFrequency="60s"
            >
              <NavigationProvider />
            </NetworkUpdatesProvider>
          </LocationProvider>
        </PreferencesProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

function NavigationProvider() {
  const { resolvedTheme } = useTheme();

  return (
    <NavigationThemeProvider
      value={resolvedTheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <StatusBar animated style={resolvedTheme === "dark" ? "light" : "dark"} />
      <TabsNavigation />
    </NavigationThemeProvider>
  );
}

function useTabsNavigationConfig() {
  const { colors, fontFamily } = useTheme();
  const { performTabSelectedFeedback } = useHaptics();
  const { t } = useTranslation();

  const backgroundColor = colors.surface.base;
  const textColor = colors.brandContent.base;
  const mutedColor = colors.brandContent.muted;
  const font = fontFamily.regular;
  const indicatorColor = colors.brandSurface.elevated;

  const iconColor = useMemo(
    () => ({
      default: mutedColor,
      selected: textColor,
    }),
    [mutedColor, textColor],
  );

  const labelStyle = useMemo(
    () => ({
      default: {
        fontFamily: font,
        color: mutedColor,
      },
      selected: {
        fontFamily: font,
        color: textColor,
      },
    }),
    [font, mutedColor, textColor],
  );

  const rippleColor = indicatorColor;

  const homeLabel = t("tabs.home.title");
  const settingsLabel = t("tabs.settings.title");

  const screenListeners = useMemo<
    ScreenListeners<
      TabNavigationState<ParamListBase>,
      NativeTabNavigationEventMap
    >
  >(
    () => ({
      tabPress: performTabSelectedFeedback,
    }),
    [performTabSelectedFeedback],
  );

  useEffect(() => {
    ExpoSystemUI.setBackgroundColorAsync(backgroundColor);
  }, [backgroundColor]);

  return {
    backgroundColor,
    iconColor,
    labelStyle,
    indicatorColor,
    rippleColor,
    homeLabel,
    settingsLabel,
    screenListeners,
  };
}

function TabsNavigation() {
  const {
    homeLabel,
    settingsLabel,
    backgroundColor,
    iconColor,
    labelStyle,
    rippleColor,
    indicatorColor,
    screenListeners,
  } = useTabsNavigationConfig();

  return (
    <NativeTabs
      screenListeners={screenListeners}
      backgroundColor={backgroundColor}
      iconColor={iconColor}
      labelStyle={labelStyle}
      indicatorColor={indicatorColor}
      rippleColor={rippleColor}
    >
      <NativeTabs.Trigger name="(main)">
        <NativeTabs.Trigger.Icon
          sf={{ default: "house", selected: "house.fill" }}
          md="home"
        />
        <NativeTabs.Trigger.Label>{homeLabel}</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="settings">
        <NativeTabs.Trigger.Icon sf="gear" md="settings" />
        <NativeTabs.Trigger.Label>{settingsLabel}</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}

let WrappedRootLayout: React.ComponentType = RootLayout;

if (sentryDsn) {
  WrappedRootLayout = Sentry.wrap(RootLayout);
}

export default WrappedRootLayout;
