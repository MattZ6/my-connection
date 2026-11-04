import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import { setDiagnosticsEnabled } from "@/libs/diagnostics";
import { SettingsRepository } from "@/repositories/settings";

import type {
  PreferencesContextTypes,
  PreferencesProviderTypes,
} from "./types";

export const PreferencesContext = createContext(
  {} as PreferencesContextTypes.Context,
);

export function PreferencesProvider({
  children,
  defaultHapticsEnabled,
}: PreferencesProviderTypes.Props) {
  const [isHapticsEnabled, setIsHapticsEnabled] = useState(() => {
    const storedValue = SettingsRepository.getHapticsFlag();

    if (storedValue === null) {
      return defaultHapticsEnabled;
    }

    return storedValue;
  });

  const toggleHaptics = useCallback(
    () => setIsHapticsEnabled((prev) => !prev),
    [],
  );

  useEffect(
    () => SettingsRepository.saveHapticsFlag(isHapticsEnabled),
    [isHapticsEnabled],
  );

  // Off until the person opts in.
  const [isCrashReportsEnabled, setIsCrashReportsEnabled] = useState(
    () => SettingsRepository.getCrashReportsFlag() ?? false,
  );

  const toggleCrashReports = useCallback(
    () => setIsCrashReportsEnabled((prev) => !prev),
    [],
  );

  useEffect(() => {
    SettingsRepository.saveCrashReportsFlag(isCrashReportsEnabled);
    setDiagnosticsEnabled(isCrashReportsEnabled);
  }, [isCrashReportsEnabled]);

  const contextValue = useMemo<PreferencesContextTypes.Context>(
    () => ({
      hapticsEnabled: isHapticsEnabled,
      toggleHaptics,
      crashReportsEnabled: isCrashReportsEnabled,
      toggleCrashReports,
    }),
    [
      isHapticsEnabled,
      toggleHaptics,
      isCrashReportsEnabled,
      toggleCrashReports,
    ],
  );

  return (
    <PreferencesContext.Provider value={contextValue}>
      {children}
    </PreferencesContext.Provider>
  );
}
