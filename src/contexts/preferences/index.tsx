import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

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

  const contextValue = useMemo<PreferencesContextTypes.Context>(
    () => ({
      hapticsEnabled: isHapticsEnabled,
      toggleHaptics,
    }),
    [isHapticsEnabled, toggleHaptics],
  );

  return (
    <PreferencesContext.Provider value={contextValue}>
      {children}
    </PreferencesContext.Provider>
  );
}
