import {
  type NetInfoState,
  NetInfoStateType,
} from "@react-native-community/netinfo";
import { Color } from "expo-router";
import { SymbolView } from "expo-symbols";
import { Platform, Text, View } from "react-native";
import { SpeedStat } from "./components/speed-stat";

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
  const showSpeedStats =
    info.type === NetInfoStateType.wifi &&
    info.isWifiEnabled !== null &&
    info.isWifiEnabled !== undefined;

  const showCarrierStats =
    info.type === NetInfoStateType.cellular &&
    info.isWifiEnabled !== null &&
    info.isWifiEnabled !== undefined;

  return (
    <View
      style={{
        padding: 24,
        borderRadius: 16,
        gap: 24,
        backgroundColor: Platform.select({
          android: Color.android.dynamic.surfaceContainerLow,
          ios: Color.ios.secondarySystemBackground,
        }),
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 24,
        }}
      >
        <SymbolView
          name={{
            ios: IOS_ICON_MAP[info.type],
            android: ANDROID_ICON_MAP[info.type],
          }}
          tintColor={Platform.select({
            android: Color.android.dynamic.primary,
            ios: Color.ios.systemBlue,
          })}
          size={48}
        />

        <View>
          <Text
            style={{
              fontSize: 12,
              textTransform: "uppercase",
              letterSpacing: 1,
              color: Platform.select({
                android: Color.android.dynamic.onSurfaceVariant,
                ios: Color.ios.secondaryLabel,
              }),
            }}
          >
            Connection type
          </Text>
          <Text
            style={{
              fontSize: 24,
              lineHeight: 40,
              color: Platform.select({
                android: Color.android.dynamic.onSurface,
                ios: Color.ios.label,
              }),
            }}
          >
            {CONNECTION_TYPE_MAP[info.type]}
          </Text>
        </View>
      </View>

      {showCarrierStats && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 16,
          }}
        >
          <SpeedStat label="Carrier" value={info.details.carrier ?? "-"} />
          <SpeedStat
            label="Generation"
            value={info.details.cellularGeneration ?? "-"}
          />
        </View>
      )}

      {showSpeedStats && (
        <View
          style={{
            gap: 24,
          }}
        >
          <View
            style={{
              gap: 6,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                lineHeight: 20,
                textTransform: "uppercase",
                letterSpacing: 1,
                color: Platform.select({
                  android: Color.android.dynamic.onSurfaceVariant,
                  ios: Color.ios.secondaryLabel,
                }),
              }}
            >
              Signal Strength
            </Text>
            <View
              style={{
                height: 8,
                borderRadius: 8,
                backgroundColor: Platform.select({
                  android: Color.android.dynamic.surfaceContainerHigh,
                  ios: Color.ios.secondarySystemFill,
                }),
              }}
            >
              <View
                style={{
                  width: `${info.details.strength ?? 0}%`,
                  height: 8,
                  borderRadius: 8,
                  backgroundColor: Platform.select({
                    android: Color.android.dynamic.primary,
                    ios: Color.ios.systemBlue,
                  }),
                }}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 16,
            }}
          >
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
        </View>
      )}
    </View>
  );
}
