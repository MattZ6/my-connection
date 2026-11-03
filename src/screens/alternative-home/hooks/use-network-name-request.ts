import type { ModalBottomSheetRef } from "@expo/ui/jetpack-compose";
import type { AndroidSymbol } from "expo-symbols";
import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { useHaptics } from "@/hooks/use-haptics";
import { useLocation } from "@/hooks/use-location";
import { useNetworkUpdates } from "@/hooks/use-network-updates";

import { LocationUtils } from "@/utils/location";

export type NetworkNameSheet = {
  icon: AndroidSymbol;
  title: string;
  message: string;
  actionTitle: string;
  onAction: () => void;
};

/**
 * Handles the "Show network name" flow: Android only shares the SSID/BSSID
 * with apps that have precise location access and location services on.
 * Each missing step opens a bottom sheet explaining it; once everything is
 * granted the sheet closes by itself and the network info is refreshed.
 */
export function useNetworkNameRequest() {
  const sheetRef = useRef<ModalBottomSheetRef>(null);
  const wasEverythingOkRef = useRef<boolean | null>(null);
  const [sheet, setSheet] = useState<NetworkNameSheet | null>(null);

  const {
    permission,
    precision,
    canAskAgain,
    locationServicesEnabled,
    requestPermission,
  } = useLocation();
  const { refresh } = useNetworkUpdates();
  const { performTapFeedback } = useHaptics();
  const { t } = useTranslation("translation", {
    keyPrefix: "home.sections.network.fields.ssid.action.handling",
  });

  const isEverythingOk =
    permission === "granted" &&
    precision === "precise" &&
    locationServicesEnabled;

  const close = useCallback(async () => {
    await sheetRef.current?.hide();
    setSheet(null);
  }, []);

  const handleRequestPermission = useCallback(() => {
    performTapFeedback();
    requestPermission();
  }, [performTapFeedback, requestPermission]);

  const handleOpenAppSettings = useCallback(() => {
    performTapFeedback();
    LocationUtils.openAppSettings();
    close();
  }, [close, performTapFeedback]);

  const handleOpenLocationSettings = useCallback(() => {
    performTapFeedback();
    LocationUtils.openDeviceLocationSettings();
    close();
  }, [close, performTapFeedback]);

  const request = useCallback(() => {
    performTapFeedback();

    if (permission !== "granted") {
      if (canAskAgain) {
        setSheet({
          icon: "network_manage",
          title: t("permission_request.title"),
          message: t("permission_request.message"),
          actionTitle: t("permission_request.action.title"),
          onAction: handleRequestPermission,
        });
        return;
      }

      setSheet({
        icon: "wifi_lock",
        title: t("permission_blocked.title"),
        message: t("permission_blocked.message"),
        actionTitle: t("permission_blocked.action.title"),
        onAction: handleOpenAppSettings,
      });
      return;
    }

    if (precision !== "precise") {
      setSheet({
        icon: "network_manage",
        title: t("precision_required.title"),
        message: t("precision_required.message"),
        actionTitle: t("precision_required.action.title"),
        onAction: handleOpenAppSettings,
      });
      return;
    }

    if (!locationServicesEnabled) {
      setSheet({
        icon: "wifi_off",
        title: t("location_off.title"),
        message: t("location_off.message"),
        actionTitle: t("location_off.action.title"),
        onAction: handleOpenLocationSettings,
      });
      return;
    }

    refresh();
  }, [
    permission,
    precision,
    canAskAgain,
    locationServicesEnabled,
    performTapFeedback,
    handleRequestPermission,
    handleOpenAppSettings,
    handleOpenLocationSettings,
    refresh,
    t,
  ]);

  useEffect(() => {
    if (!sheet) {
      wasEverythingOkRef.current = null;
      return;
    }

    if (wasEverythingOkRef.current === null) {
      wasEverythingOkRef.current = isEverythingOk;
      return;
    }

    if (!wasEverythingOkRef.current && isEverythingOk) {
      close().then(refresh);
    }

    wasEverythingOkRef.current = isEverythingOk;
  }, [isEverythingOk, sheet, close, refresh]);

  return { sheet, sheetRef, request, close };
}
