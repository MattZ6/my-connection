import {
  addEventListener as addNetworkStateEventListener,
  configure as configureNetwork,
  fetch as fetchNetworkState,
  type NetInfoState,
} from "@react-native-community/netinfo";
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { AppState } from "react-native";
import { SettingsRepository } from "@/repositories/settings";
import type {
  NetworkUpdatesContextTypes,
  NetworkUpdatesProviderTypes,
} from "./types";

export const NetworkUpdatesContext = createContext(
  {} as NetworkUpdatesContextTypes.Context,
);

configureNetwork({ shouldFetchWiFiSSID: true });

export function NetworkUpdatesProvider({
  children,
  defaultAutomaticUpdatesEnabled,
  defaultUpdateFrequency,
}: NetworkUpdatesProviderTypes.Props) {
  const isRefreshingRef = useRef(false);

  const [appState, setAppState] = useState(AppState.currentState);
  const appStateRef = useRef(AppState.currentState);

  const [netInfo, setNetInfo] = useState<NetInfoState | null>(null);
  const [automaticUpdatesOn, setAutomaticUpdatesOn] = useState(() => {
    const storedValue =
      SettingsRepository.getNetworkAutomaticUpdatesEnabledValue();

    if (storedValue === null) {
      return defaultAutomaticUpdatesEnabled;
    }

    return storedValue;
  });
  const [updateFrequency, setUpdateFrequency] =
    useState<NetworkUpdatesContextTypes.UpdateFrequency>(() => {
      const storedValue =
        SettingsRepository.getNetworkAutomaticUpdatesFrequencyValue();

      if (storedValue === null) {
        return defaultUpdateFrequency;
      }

      return storedValue;
    });
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const toggleAutomaticUpdates = useCallback(() => {
    setAutomaticUpdatesOn((prev) => !prev);
  }, []);

  const changeUpdateFrequency = useCallback(
    (value: NetworkUpdatesContextTypes.UpdateFrequency) => {
      setUpdateFrequency(value);
    },
    [],
  );

  const refresh = useCallback(async () => {
    const state = await fetchNetworkState();
    const now = new Date();

    setNetInfo(state);
    setLastUpdated(now);
  }, []);

  const safeRefresh = useCallback(async () => {
    if (isRefreshingRef.current) {
      return;
    }

    isRefreshingRef.current = true;

    try {
      await refresh();
    } finally {
      isRefreshingRef.current = false;
    }
  }, [refresh]);

  useEffect(() => {
    if (appState !== "active" || !automaticUpdatesOn) {
      return;
    }

    safeRefresh();

    const intervalDuration = mapUpdateFrequencyToMilliseconds(updateFrequency);

    const intervalId = setInterval(() => {
      if (appStateRef.current !== "active") {
        return;
      }

      safeRefresh();
    }, intervalDuration);

    return () => clearInterval(intervalId);
  }, [automaticUpdatesOn, updateFrequency, safeRefresh, appState]);

  useEffect(() => {
    const changetSubscription = AppState.addEventListener(
      "change",
      (nextState) => {
        setAppState(nextState);
        appStateRef.current = nextState;
      },
    );

    return () => changetSubscription.remove();
  }, []);

  useEffect(() => {
    const unsubscribe = addNetworkStateEventListener((state) => {
      const now = new Date();

      setNetInfo(state);
      setLastUpdated(now);
    });

    return () => unsubscribe();
  }, []);

  useEffect(
    () =>
      SettingsRepository.saveNetworkAutomaticUpdatesEnabled(automaticUpdatesOn),
    [automaticUpdatesOn],
  );

  useEffect(
    () =>
      SettingsRepository.saveNetworkAutomaticUpdatesFrequency(updateFrequency),
    [updateFrequency],
  );

  const contextValue = useMemo<NetworkUpdatesContextTypes.Context>(
    () => ({
      netInfo,
      automaticUpdatesOn,
      updateFrequency,
      lastUpdated,
      toggleAutomaticUpdates,
      changeUpdateFrequency,
      refresh,
    }),
    [
      netInfo,
      automaticUpdatesOn,
      updateFrequency,
      lastUpdated,
      toggleAutomaticUpdates,
      changeUpdateFrequency,
      refresh,
    ],
  );

  return (
    <NetworkUpdatesContext.Provider value={contextValue}>
      {children}
    </NetworkUpdatesContext.Provider>
  );
}

function mapUpdateFrequencyToMilliseconds(
  frequency: NetworkUpdatesContextTypes.UpdateFrequency,
) {
  switch (frequency) {
    case "15s":
      return 15 * 1000;

    case "30s":
      return 30 * 1000;

    case "60s":
      return 60 * 1000;

    default:
      throw new Error(`Frequency ${frequency} not implemented`);
  }
}
