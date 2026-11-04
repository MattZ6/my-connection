import {
  NetInfoCellularGeneration,
  type NetInfoState,
  NetInfoStateType,
} from "@react-native-community/netinfo";
import { type AndroidSymbol, type SFSymbol, SymbolView } from "expo-symbols";

import { useTheme } from "@/hooks/use-theme";

import { SIGNAL_THRESHOLDS } from "../../../../utils/signal-quality";

type Props = {
  netInfo: NetInfoState | null;
};

export function ConnectionTypeIcon({ netInfo }: Props) {
  const theme = useTheme();

  return (
    <SymbolView
      tintColor={theme.colors.content.base}
      name={getSymbolFromNetInfo(netInfo)}
      size={22}
    />
  );
}

function getSymbolFromNetInfo(netInfo: NetInfoState | null): {
  ios?: SFSymbol;
  android: AndroidSymbol;
} {
  switch (netInfo?.type) {
    case NetInfoStateType.bluetooth:
      return {
        android: netInfo.isConnected ? "bluetooth_connected" : "bluetooth",
      };

    case NetInfoStateType.cellular: {
      if (!netInfo.isConnected) {
        return { android: "android_cell_4_bar_off" };
      }

      if (netInfo.isInternetReachable === false) {
        return { android: "android_cell_4_bar_alert" };
      }

      const generationIcon: Record<NetInfoCellularGeneration, AndroidSymbol> = {
        [NetInfoCellularGeneration["2g"]]: "g_mobiledata",
        [NetInfoCellularGeneration["3g"]]: "3g_mobiledata",
        [NetInfoCellularGeneration["4g"]]: "4g_mobiledata",
        [NetInfoCellularGeneration["5g"]]: "5g",
      };

      const generation = netInfo.details.cellularGeneration;

      return {
        android: generation ? generationIcon[generation] : "android_cell_4_bar",
      };
    }

    case NetInfoStateType.ethernet:
      return { android: "settings_ethernet" };

    case NetInfoStateType.none:
      return { android: netInfo.isWifiEnabled ? "wifi_find" : "wifi_off" };

    case NetInfoStateType.other:
      return { android: "network_ping" };

    case NetInfoStateType.vpn:
      return { android: "vpn_key" };

    case NetInfoStateType.wifi: {
      if (!netInfo.isConnected) {
        return { android: "wifi_off" };
      }

      if (netInfo.isInternetReachable === false) {
        return { android: "android_wifi_3_bar_alert" };
      }

      const { strength } = netInfo.details;

      if (strength !== null) {
        if (strength < SIGNAL_THRESHOLDS.weak) {
          return { android: "network_wifi_1_bar" };
        }

        if (strength < SIGNAL_THRESHOLDS.fair) {
          return { android: "network_wifi_2_bar" };
        }

        if (strength < SIGNAL_THRESHOLDS.good) {
          return { android: "network_wifi_3_bar" };
        }
      }

      return { android: "wifi" };
    }

    case NetInfoStateType.wimax:
      return { android: "cell_tower" };

    default:
      return { android: "error_outline" };
  }
}
