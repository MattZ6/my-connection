import {
  type NetInfoState,
  NetInfoStateType,
} from "@react-native-community/netinfo";
import { SymbolView } from "expo-symbols";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";

import { Card } from "@/components/ui/card";

import { useStyles } from "@/hooks/use-styles";

import { Stat } from "./components/stat";

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

type Props = {
  info: NetInfoState;
};

export function ConnectionHero({ info }: Props) {
  const styles = useStyles(getStyles);
  const { t } = useTranslation();

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
          size={48}
          tintColor={styles.heroIcon.tintColor}
          name={{
            ios: IOS_ICON_MAP[info.type],
            android: ANDROID_ICON_MAP[info.type],
          }}
        />

        <View>
          <Text style={styles.heroLabel}>
            {t("home.sections.hero.fields.connection_type.label")}
          </Text>
          <Text style={styles.heroValue}>
            {t(`home.sections.hero.fields.connection_type.value.${info.type}`)}
          </Text>
        </View>
      </View>

      {showCarrierStats && (
        <View style={styles.statsRow}>
          <Stat label="Carrier" value={info.details.carrier || "-"} />
          <Stat
            label="Generation"
            value={info.details.cellularGeneration || "-"}
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
            <Text style={styles.signalStrengthLabel}>
              {t("home.sections.hero.fields.strength.label")}
            </Text>
            <View style={styles.signalStrengthProgressContainer}>
              <View
                style={[
                  styles.signalStrengthProgress,
                  { width: `${info.details?.strength || 0}%` },
                ]}
              />
            </View>
          </View>

          <View style={styles.statsRow}>
            <Stat
              label={t("home.sections.hero.fields.speed.label")}
              value={t("home.sections.hero.fields.speed.value", {
                count: info?.details?.linkSpeed || 0,
              })}
            />
            <Stat
              label={t("home.sections.hero.fields.download.label")}
              value={t("home.sections.hero.fields.download.value", {
                count: info?.details?.rxLinkSpeed || 0,
              })}
            />
            <Stat
              label={t("home.sections.hero.fields.upload.label")}
              value={t("home.sections.hero.fields.upload.value", {
                count: info?.details?.txLinkSpeed || 0,
              })}
            />
          </View>
        </>
      )}
    </Card>
  );
}
