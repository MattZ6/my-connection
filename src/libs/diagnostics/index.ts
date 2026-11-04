import * as Sentry from "@sentry/react-native";
import { isRunningInExpoGo } from "expo";
import ExpoConstants from "expo-constants";
import { Observe } from "expo-observe";

import { scrubBreadcrumb, scrubEvent } from "@/libs/sentry/scrubber";

const sentryDsn = String(process.env.EXPO_PUBLIC_SENTRY_DSN || "");
const packageName = String(ExpoConstants.expoConfig?.slug || "");
const packageVersion = String(ExpoConstants.expoConfig?.version || "");
const environment = String(
  process.env.EXPO_PUBLIC_APP_VARIANT || "development",
);

export const isCrashReportingAvailable = Boolean(sentryDsn);

export const navigationIntegration = Sentry.reactNavigationIntegration({
  enableTimeToInitialDisplay: !isRunningInExpoGo(),
});

let isSentryRunning = false;

function startSentry() {
  if (!sentryDsn || isSentryRunning) {
    return;
  }

  Sentry.init({
    dsn: sentryDsn,

    release: `${packageName}@${packageVersion}`,

    // Base config
    sendDefaultPii: false,
    environment,

    // Sample
    tracesSampleRate: 0.2,

    // Network details (SSID, BSSID, IP) never leave the device: no screen
    // replay, no screenshots or view hierarchy, and every event is scrubbed.
    attachScreenshot: false,
    attachViewHierarchy: false,
    beforeSend: scrubEvent,
    beforeSendTransaction: scrubEvent,
    beforeBreadcrumb: scrubBreadcrumb,

    enableNativeFramesTracking: !isRunningInExpoGo(),

    integrations: [navigationIntegration],
  });

  isSentryRunning = true;
}

function stopSentry() {
  if (!isSentryRunning) {
    return;
  }

  isSentryRunning = false;
  Sentry.close().catch(() => {});
}

/**
 * Turns crash reports and app metrics on or off. Nothing is sent until the
 * person turns this on in Settings; it is off by default.
 */
export function setDiagnosticsEnabled(enabled: boolean) {
  Observe.configure({
    dispatchingEnabled: enabled,
    integrations: { "expo-router": true },
  });

  if (enabled) {
    startSentry();
  } else {
    stopSentry();
  }
}
