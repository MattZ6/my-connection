import {
  NetInfoCellularGeneration,
  type NetInfoState,
  NetInfoStateType,
} from "@react-native-community/netinfo";
import { type AndroidSymbol, type SFSymbol, SymbolView } from "expo-symbols";

import { useTheme } from "@/hooks/use-theme";

type Props = {
  netInfo: NetInfoState | null;
};

export function ConnectionTypeIcon({ netInfo }: Props) {
  const theme = useTheme();
  const symbolsName = getSymbolFromNetInfo(netInfo);

  return (
    <SymbolView tintColor={theme.colors.content.base} name={symbolsName} />
  );
}

function getSymbolFromNetInfo(netInfo: NetInfoState | null): {
  ios?: SFSymbol;
  android: AndroidSymbol;
} {
  switch (netInfo?.type) {
    case NetInfoStateType.bluetooth:
      if (netInfo.isConnected) {
        return { android: "bluetooth_connected" };
      }

      return { android: "bluetooth" };

    case NetInfoStateType.cellular:
      if (!netInfo.isConnected) {
        return { android: "android_cell_4_bar_off" };
      }

      if (netInfo.isInternetReachable === false) {
        return { android: "android_cell_4_bar_alert" };
      }

      if (
        netInfo.details.cellularGeneration === NetInfoCellularGeneration["2g"]
      ) {
        return { android: "g_mobiledata" };
      }

      if (
        netInfo.details.cellularGeneration === NetInfoCellularGeneration["3g"]
      ) {
        return { android: "3g_mobiledata" };
      }

      if (
        netInfo.details.cellularGeneration === NetInfoCellularGeneration["4g"]
      ) {
        return { android: "4g_mobiledata" };
      }

      if (
        netInfo.details.cellularGeneration === NetInfoCellularGeneration["5g"]
      ) {
        return { android: "5g" };
      }

      return { android: "android_cell_4_bar" };

    case NetInfoStateType.ethernet:
      return { android: "settings_ethernet" };

    case NetInfoStateType.none:
      return { android: "unknown_med" };

    case NetInfoStateType.other:
      return { android: "swap_vert" };

    case NetInfoStateType.unknown:
      return { android: "android_wifi_3_bar_question" };

    case NetInfoStateType.vpn:
      return { android: "vpn_lock_2" };

    case NetInfoStateType.wifi:
      if (!netInfo.isConnected) {
        return { android: "wifi_off" };
      }

      if (netInfo.isInternetReachable === false) {
        return { android: "android_wifi_3_bar_alert" };
      }

      if (netInfo.details.strength !== null) {
        if (netInfo.details.strength <= 20) {
          return { android: "wifi_1_bar" };
        }

        if (netInfo.details.strength <= 65) {
          return { android: "wifi_2_bar" };
        }
      }

      return { android: "wifi" };

    case NetInfoStateType.wimax:
      return { android: "cell_tower" };

    default:
      return { android: "question_mark" };
  }
}
