import {
  NetInfoCellularGeneration,
  type NetInfoState,
  NetInfoStateType,
} from "@react-native-community/netinfo";
import type { AndroidSymbol } from "expo-symbols";

import { SIGNAL_THRESHOLDS } from "./signal-quality";

export type HintSeverity = "critical" | "warning" | "info";

export type HintId =
  | "offline"
  | "wifi_disconnected"
  | "wifi_no_internet"
  | "cellular_no_internet"
  | "weak_signal"
  | "slow_cellular"
  | "slow_link"
  | "fair_signal"
  | "band_2_4"
  | "metered_wifi"
  | "mobile_data"
  | "vpn";

export type HintAction =
  | "open_network_settings"
  | "choose_network"
  | "turn_on_wifi";

export type ConnectionHint = {
  id: HintId;
  severity: HintSeverity;
  icon: AndroidSymbol;
  action?: HintAction;
  /** Interpolation values for the translated message. */
  params?: Record<string, string>;
};

/** Link speed (Mbps) below which the Wi-Fi link is considered slow. */
export const SLOW_LINK_SPEED = 25;

/** Frequencies (MHz) below this value belong to the 2.4 GHz band. */
const BAND_5_GHZ_START = 3000;

/**
 * Returns every hint that applies to the given state, ordered by priority.
 * The screen shows only the first one; info hints can be dismissed.
 */
export function getConnectionHints(
  netInfo: NetInfoState | null,
): ConnectionHint[] {
  if (!netInfo) {
    return [];
  }

  const hints: ConnectionHint[] = [];

  switch (netInfo.type) {
    case NetInfoStateType.none:
      if (netInfo.isWifiEnabled) {
        hints.push({
          id: "wifi_disconnected",
          severity: "critical",
          icon: "wifi_find",
          action: "choose_network",
        });
      } else {
        hints.push({
          id: "offline",
          severity: "critical",
          icon: "cloud_off",
          action: "open_network_settings",
        });
      }
      break;

    case NetInfoStateType.wifi: {
      const { strength, linkSpeed, frequency, isConnectionExpensive } =
        netInfo.details;

      if (netInfo.isConnected && netInfo.isInternetReachable === false) {
        hints.push({
          id: "wifi_no_internet",
          severity: "critical",
          icon: "public_off",
        });
      }

      if (strength !== null && strength < SIGNAL_THRESHOLDS.weak) {
        hints.push({
          id: "weak_signal",
          severity: "warning",
          icon: "network_wifi_1_bar",
        });
      }

      if (linkSpeed !== null && linkSpeed < SLOW_LINK_SPEED) {
        hints.push({ id: "slow_link", severity: "warning", icon: "speed" });
      }

      if (
        strength !== null &&
        strength >= SIGNAL_THRESHOLDS.weak &&
        strength < SIGNAL_THRESHOLDS.fair
      ) {
        hints.push({
          id: "fair_signal",
          severity: "info",
          icon: "network_wifi_2_bar",
        });
      }

      if (
        frequency !== null &&
        frequency < BAND_5_GHZ_START &&
        strength !== null &&
        strength >= SIGNAL_THRESHOLDS.good
      ) {
        hints.push({ id: "band_2_4", severity: "info", icon: "router" });
      }

      if (isConnectionExpensive) {
        hints.push({
          id: "metered_wifi",
          severity: "info",
          icon: "data_usage",
        });
      }
      break;
    }

    case NetInfoStateType.cellular: {
      const generation = netInfo.details.cellularGeneration;

      if (netInfo.isConnected && netInfo.isInternetReachable === false) {
        hints.push({
          id: "cellular_no_internet",
          severity: "critical",
          icon: "public_off",
        });
      }

      if (
        generation === NetInfoCellularGeneration["2g"] ||
        generation === NetInfoCellularGeneration["3g"]
      ) {
        hints.push({
          id: "slow_cellular",
          severity: "warning",
          icon: "signal_cellular_alt_1_bar",
          params: { generation: generation.toUpperCase() },
        });
      }

      if (!netInfo.isWifiEnabled) {
        hints.push({
          id: "mobile_data",
          severity: "info",
          icon: "wifi",
          action: "turn_on_wifi",
        });
      }
      break;
    }

    case NetInfoStateType.vpn:
      if (netInfo.isConnected) {
        hints.push({ id: "vpn", severity: "info", icon: "vpn_lock" });
      }
      break;

    default:
      break;
  }

  const order: HintSeverity[] = ["critical", "warning", "info"];

  // Array.prototype.sort is stable, so hints keep their catalog order inside
  // the same severity.
  return hints.sort(
    (a, b) => order.indexOf(a.severity) - order.indexOf(b.severity),
  );
}
