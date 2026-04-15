import * as ExpoLocation from "expo-location";
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { AppState, type NativeEventSubscription, Platform } from "react-native";

import type { LocationContextTypes, LocationProviderTypes } from "./types";

export const LocationContext = createContext(
  {} as LocationContextTypes.Context,
);

const DEBOUNCE = 500;

export function LocationProvider({ children }: LocationProviderTypes.Props) {
  const lastSyncRef = useRef(0);
  const currentAppStateRef = useRef(AppState.currentState);

  const [_, setIsLoading] = useState(false);
  const [permission, setPermission] =
    useState<LocationContextTypes.Permission>("undetermined");
  const [precision, setPrecision] =
    useState<LocationContextTypes.Precision>("none");
  const [canAskAgain, setCanAskAgain] = useState<boolean>(true);
  const [locationServicesEnabled, setLocationServicesEnabled] =
    useState<boolean>(false);

  const checkPermission = useCallback(async () => {
    const now = Date.now();

    if (now - lastSyncRef.current < DEBOUNCE) {
      return;
    }

    lastSyncRef.current = now;

    try {
      const [permission, locationEnabled] = await Promise.all([
        ExpoLocation.getForegroundPermissionsAsync(),
        ExpoLocation.hasServicesEnabledAsync(),
      ]);

      const status = mapPermissionStatusToLocationPermission(permission.status);
      const precision = resolvePrecision(permission);

      setPermission(status);
      setPrecision(precision);
      setCanAskAgain(permission.canAskAgain);
      setLocationServicesEnabled(locationEnabled);
      setIsLoading(true);
    } catch (_error) {
      // TODO: O que fazer?
    }
  }, []);

  const requestPermission = useCallback(async () => {
    const [permission, locationEnabled] = await Promise.all([
      ExpoLocation.requestForegroundPermissionsAsync(),
      ExpoLocation.hasServicesEnabledAsync(),
    ]);

    const status = mapPermissionStatusToLocationPermission(permission.status);
    const precision = resolvePrecision(permission);

    setPermission(status);
    setPrecision(precision);
    setCanAskAgain(permission.canAskAgain);
    setLocationServicesEnabled(locationEnabled);
  }, []);

  const contextValue = useMemo<LocationContextTypes.Context>(
    () => ({
      permission,
      precision,
      canAskAgain,
      locationServicesEnabled,
      requestPermission,
    }),
    [
      permission,
      precision,
      canAskAgain,
      locationServicesEnabled,
      requestPermission,
    ],
  );

  useEffect(() => {
    let focusSubscription: NativeEventSubscription | null = null;

    if (Platform.OS === "android") {
      focusSubscription = AppState.addEventListener("focus", () => {
        checkPermission();
      });
    }

    const changeSubscription = AppState.addEventListener(
      "change",
      (nextAppState) => {
        const currentAppState = currentAppStateRef.current;

        if (
          currentAppState.match(/inactive|background/) &&
          nextAppState === "active"
        ) {
          checkPermission();
        }

        currentAppStateRef.current = nextAppState;
      },
    );

    return () => {
      changeSubscription.remove();

      if (focusSubscription) {
        focusSubscription.remove();
      }
    };
  }, [checkPermission]);

  useEffect(() => {
    checkPermission();
  }, [checkPermission]);

  return (
    <LocationContext.Provider value={contextValue}>
      {children}
    </LocationContext.Provider>
  );
}

function mapPermissionStatusToLocationPermission(
  input: ExpoLocation.PermissionStatus,
): LocationContextTypes.Permission {
  switch (input) {
    case ExpoLocation.PermissionStatus.GRANTED:
      return "granted";

    case ExpoLocation.PermissionStatus.DENIED:
      return "denied";

    default:
      return "undetermined";
  }
}

function mapAndroidPrecisionToLocationPrecision(
  input: ExpoLocation.PermissionDetailsLocationAndroid["accuracy"],
): LocationContextTypes.Precision {
  switch (input) {
    case "fine":
      return "precise";

    case "coarse":
      return "reduced";

    default:
      return "none";
  }
}

function mapIOSPrecisionToLocationPrecision(
  input: ExpoLocation.PermissionDetailsLocationIOS["accuracy"],
): LocationContextTypes.Precision {
  switch (input) {
    case "full":
      return "precise";

    case "reduced":
      return "reduced";

    default:
      return "none";
  }
}

function resolvePrecision(permission: ExpoLocation.LocationPermissionResponse) {
  if (permission.android) {
    return mapAndroidPrecisionToLocationPrecision(permission.android.accuracy);
  }

  if (permission.ios) {
    return mapIOSPrecisionToLocationPrecision(permission.ios.accuracy);
  }

  return "none";
}
