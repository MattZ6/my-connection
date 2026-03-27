import {
  type NetInfoState,
  NetInfoStateType,
} from "@react-native-community/netinfo";
import { SymbolView } from "expo-symbols";
import { Text, View } from "react-native";
import { Card } from "@/components/ui/card";
import { useStyles } from "@/hooks/use-styles";
import { SpeedStat } from "./components/speed-stat";
import { getStyles } from "./styles";

const ANDROID_ICON_MAP = {
  [NetInfoStateType.bluetooth]: "bluetooth",
  [NetInfoStateType.cellular]: "signal_cellular_4_bar",
  [NetInfoStateType.ethernet]: "settings_ethernet",
  [NetInfoStateType.none]: "unknown_med",
  [NetInfoStateType.other]: "network_ping",
  [NetInfoStateType.unknown]: "error_outline",
  [NetInfoStateType.vpn]: "vpn_key",
  [NetInfoStateType.wifi]: "wifi",
  [NetInfoStateType.wimax]: "wifi",
} as const;

const IOS_ICON_MAP = {
  [NetInfoStateType.bluetooth]: "cellularbars",
  [NetInfoStateType.cellular]: "cellularbars",
  [NetInfoStateType.ethernet]: "wave.3.backward",
  [NetInfoStateType.none]: "minus",
  [NetInfoStateType.other]: "info.circle",
  [NetInfoStateType.unknown]: "questionmark",
  [NetInfoStateType.vpn]: "wifi",
  [NetInfoStateType.wifi]: "wifi",
  [NetInfoStateType.wimax]: "wifi",
} as const;

const CONNECTION_TYPE_MAP = {
  [NetInfoStateType.bluetooth]: "Bluetooth",
  [NetInfoStateType.cellular]: "Cellular",
  [NetInfoStateType.ethernet]: "Ethernet",
  [NetInfoStateType.none]: "None",
  [NetInfoStateType.other]: "Other",
  [NetInfoStateType.unknown]: "Unkwon",
  [NetInfoStateType.vpn]: "VPN",
  [NetInfoStateType.wifi]: "Wi-Fi",
  [NetInfoStateType.wimax]: "WiMax",
};

type Props = {
  info: NetInfoState;
};

export function ConnectionHero({ info }: Props) {
  const styles = useStyles(getStyles);

  const showSpeedStats =
    info.type === NetInfoStateType.wifi &&
    info.isWifiEnabled !== null &&
    info.isWifiEnabled !== undefined;

  const showCarrierStats =
    info.type === NetInfoStateType.cellular &&
    info.isWifiEnabled !== null &&
    info.isWifiEnabled !== undefined;

  return (
    <Card style={styles.container}>
      <View style={styles.hero}>
        <SymbolView
          name={{
            ios: IOS_ICON_MAP[info.type],
            android: ANDROID_ICON_MAP[info.type],
          }}
          tintColor={styles.heroIcon.tintColor}
          // tintColor={Platform.select({
          //   android: Color.android.dynamic.primary,
          //   ios: Color.ios.systemBlue,
          // })}
          size={48}
        />

        <View>
          <Text style={styles.heroLabel}>Connection type</Text>
          <Text style={styles.heroValue}>{CONNECTION_TYPE_MAP[info.type]}</Text>
        </View>
      </View>

      {showCarrierStats && (
        <View style={styles.statsRow}>
          <SpeedStat label="Carrier" value={info.details.carrier ?? "-"} />
          <SpeedStat
            label="Generation"
            value={info.details.cellularGeneration ?? "-"}
          />
        </View>
      )}

      {showSpeedStats && (
        <>
          <View
            style={{
              gap: 6,
            }}
          >
            <Text style={styles.signalStrengthLabel}>Signal Strength</Text>
            <View style={styles.signalStrengthProgressContainer}>
              <View
                style={[
                  styles.signalStrengthProgress,
                  { width: `${info.details.strength ?? 0}%` },
                ]}
              />
            </View>
          </View>

          <View style={styles.statsRow}>
            <SpeedStat
              label="Speed"
              value={`${info.details.linkSpeed ?? "-"} Mbps`}
            />
            <SpeedStat
              label="Download"
              value={`${info.details.rxLinkSpeed ?? "-"} Mbps`}
            />
            <SpeedStat
              label="Upload"
              value={`${info.details.txLinkSpeed ?? "-"} Mbps`}
            />
          </View>
        </>
      )}
    </Card>
  );
}
