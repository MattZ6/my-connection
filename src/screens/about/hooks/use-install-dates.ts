import * as ExpoApplication from "expo-application";
import { useEffect, useState } from "react";
import { Platform } from "react-native";

/** Install and last update dates, formatted as a medium date in `language`. */
export function useInstallDates(language: string) {
  const [installedAt, setInstalledAt] = useState<Date | null>(null);
  const [updatedAt, setUpdatedAt] = useState<Date | null>(null);

  useEffect(() => {
    async function loadDates() {
      try {
        const [installationTime, lastUpdateTime] = await Promise.all([
          ExpoApplication.getInstallationTimeAsync(),
          Platform.OS === "android"
            ? ExpoApplication.getLastUpdateTimeAsync()
            : Promise.resolve(null),
        ]);

        setInstalledAt(installationTime);
        setUpdatedAt(lastUpdateTime);
      } catch {
        // The dates are optional; the rows simply stay empty.
      }
    }

    loadDates();
  }, []);

  const formatter = new Intl.DateTimeFormat(language, { dateStyle: "medium" });

  return {
    installedAt: installedAt ? formatter.format(installedAt) : "…",
    updatedAt: updatedAt ? formatter.format(updatedAt) : null,
  };
}
