import {
  type NetInfoState,
  NetInfoStateType,
} from "@react-native-community/netinfo";
import { SymbolView } from "expo-symbols";
import { useTranslation } from "react-i18next";
import { Pressable, Text, View } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

import { useStyles } from "@/hooks/use-styles";

import { androidRippleConfig } from "@/theme/android-ripple";

import { ConnectionTypeIcon } from "./components/connection-type-icon";

import { getStyles } from "./styles";

type Props = {
  netInfo: NetInfoState | null;
  onShowNetworkName: () => void;
};

type Subtitle =
  | { kind: "text"; value: string }
  | { kind: "status"; value: "connected" | "not_connected" }
  | { kind: "show_network_name" }
  | null;

export function ConnectionTypeHeader({ netInfo, onShowNetworkName }: Props) {
  const styles = useStyles(getStyles);
  const { t } = useTranslation("translation", {
    keyPrefix: "alternative_home.header",
  });

  const subtitle = getSubtitle(netInfo);

  // When Wi-Fi is on but not connected, Android reports type "none".
  const isWifiWithoutNetwork =
    netInfo?.type === NetInfoStateType.none && netInfo.isWifiEnabled;

  const typeKey = isWifiWithoutNetwork
    ? NetInfoStateType.wifi
    : (netInfo?.type ?? NetInfoStateType.unknown);

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <ConnectionTypeIcon netInfo={netInfo} />
      </View>

      <View style={styles.content}>
        <Text style={styles.label} numberOfLines={1}>
          {t(`type.${typeKey}`)}
        </Text>

        {(subtitle?.kind === "text" || subtitle?.kind === "status") && (
          <Animated.Text
            key={subtitle.value}
            entering={FadeIn}
            exiting={FadeOut}
            style={styles.subtitle}
            numberOfLines={1}
          >
            {subtitle.kind === "status"
              ? t(`subtitle.${subtitle.value}`)
              : subtitle.value}
          </Animated.Text>
        )}

        {subtitle?.kind === "show_network_name" && (
          <Animated.View
            entering={FadeIn}
            exiting={FadeOut}
            style={styles.chipContainer}
          >
            <Pressable
              style={styles.chip}
              android_ripple={androidRippleConfig}
              onPress={onShowNetworkName}
              accessibilityRole="button"
            >
              <SymbolView
                name={{ android: "visibility" }}
                size={16}
                tintColor={styles.chipLabel.color}
              />
              <Text style={styles.chipLabel}>
                {t("subtitle.show_network_name")}
              </Text>
            </Pressable>
          </Animated.View>
        )}
      </View>
    </View>
  );
}

function getSubtitle(netInfo: NetInfoState | null): Subtitle {
  switch (netInfo?.type) {
    case NetInfoStateType.wifi:
      if (!netInfo.isConnected) {
        return { kind: "status", value: "not_connected" };
      }

      if (netInfo.details.ssid) {
        return { kind: "text", value: netInfo.details.ssid };
      }

      return { kind: "show_network_name" };

    case NetInfoStateType.cellular:
      if (netInfo.details.carrier) {
        return { kind: "text", value: netInfo.details.carrier };
      }

      return null;

    case NetInfoStateType.none:
      if (netInfo.isWifiEnabled) {
        return { kind: "status", value: "not_connected" };
      }

      return null;

    case NetInfoStateType.bluetooth:
    case NetInfoStateType.ethernet:
    case NetInfoStateType.vpn:
    case NetInfoStateType.wimax:
      return {
        kind: "status",
        value: netInfo.isConnected ? "connected" : "not_connected",
      };

    default:
      return null;
  }
}
