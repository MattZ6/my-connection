import {
  type NetInfoState,
  NetInfoStateType,
} from "@react-native-community/netinfo";
import { useEffect, useState } from "react";
import { View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { runOnJS } from "react-native-worklets";

import { useNetworkUpdates } from "@/hooks/use-network-updates";
import { useStyles } from "@/hooks/use-styles";

import { ConnectionTypeIcon } from "./components/connection-type-icon";

import { getStyles } from "./styles";

type CircleProps = {
  netInfo: NetInfoState | null;
};

export function ConnectionType({ netInfo }: CircleProps) {
  const styles = useStyles(getStyles);
  // const { netInfo } = useNetworkUpdates();
  const [displayedSubtitle, setDisplayedSubtitle] = useState(
    getAdditionalInfo(netInfo),
  );

  const showMoreInfo = useSharedValue(0);

  useEffect(() => {
    const subtitle = getAdditionalInfo(netInfo);

    if (subtitle) {
      setDisplayedSubtitle(subtitle);
      showMoreInfo.value = withTiming(1, { duration: 200 });
      return;
    }

    showMoreInfo.value = withTiming(0, { duration: 200 }, (finished) => {
      if (finished) {
        runOnJS(setDisplayedSubtitle)("");
      }
    });
  }, [netInfo, showMoreInfo]);

  const labelAnimatedStyles = useAnimatedStyle(() => {
    const translateY = interpolate(showMoreInfo.value, [0, 1], [0, -10]);

    return {
      transform: [{ translateY }],
    };
  });

  const subtitleAnimatedStyles = useAnimatedStyle(() => {
    const opacity = interpolate(showMoreInfo.value, [0, 1], [0, 1]);
    const scale = interpolate(showMoreInfo.value, [0, 1], [0.9, 1]);

    return {
      opacity,
      transform: [{ scale }, { translateY: 10 }],
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <ConnectionTypeIcon netInfo={netInfo} />
      </View>

      <View style={styles.content}>
        <Animated.Text style={[styles.label, labelAnimatedStyles]}>
          {LABEL_MAP[netInfo?.type ?? NetInfoStateType.none]}
        </Animated.Text>
        <Animated.Text style={[styles.subtitle, subtitleAnimatedStyles]}>
          {displayedSubtitle}
        </Animated.Text>
      </View>
    </View>
  );
}

const LABEL_MAP: Record<NetInfoStateType, string> = {
  bluetooth: "Bluetooth",
  cellular: "Cellular",
  ethernet: "Ethernet",
  none: "No connection",
  other: "Other",
  unknown: "Unkown connection",
  vpn: "VPN",
  wifi: "Wi-Fi",
  wimax: "Wi-Max",
};

function getAdditionalInfo(netInfo: NetInfoState | null) {
  switch (netInfo?.type) {
    case NetInfoStateType.bluetooth:
      if (netInfo.isConnected) {
        return "Connected";
      }

      return "Not connected";

    case NetInfoStateType.cellular:
      if (netInfo.details.carrier) {
        return netInfo.details.carrier;
      }

      return null;

    case NetInfoStateType.ethernet:
      if (netInfo.isConnected) {
        return "Connected";
      }

      return "Not connected";

    case NetInfoStateType.none:
      return null;

    case NetInfoStateType.other:
      return null;

    case NetInfoStateType.unknown:
      return null;

    case NetInfoStateType.vpn:
      if (netInfo.isConnected) {
        return "Connected";
      }

      return "Not connected";

    case NetInfoStateType.wifi:
      if (!netInfo.isConnected) {
        return "Not connected";
      }

      if (netInfo.details.ssid) {
        return netInfo.details.ssid;
      }

      return "Show SSID";

    case NetInfoStateType.wimax:
      if (netInfo.isConnected) {
        return "Connected";
      }

      return "Not connected";

    default:
      return null;
  }
}
