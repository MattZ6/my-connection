import {
  type NetInfoState,
  NetInfoStateType,
} from "@react-native-community/netinfo";
import { type AndroidSymbol, type SFSymbol, SymbolView } from "expo-symbols";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";

import { Card } from "@/components/ui/card";

import { useStyles } from "@/hooks/use-styles";

import { AnimatedProgress } from "./components/animated-progress";
import { Stat } from "./components/stat";

import { getStyles } from "./styles";

const ICON_MAP: Record<
  NetInfoStateType,
  { ios: SFSymbol; android: AndroidSymbol }
> = {
  bluetooth: { ios: "cellularbars", android: "bluetooth" },
  cellular: { ios: "cellularbars", android: "signal_cellular_4_bar" },
  ethernet: { ios: "wave.3.backward", android: "settings_ethernet" },
  none: { ios: "minus", android: "unknown_med" },
  other: { ios: "info.circle", android: "network_ping" },
  unknown: { ios: "questionmark", android: "error_outline" },
  vpn: { ios: "wifi", android: "vpn_key" },
  wifi: { ios: "wifi", android: "wifi" },
  wimax: { ios: "wifi", android: "wifi" },
};

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
          name={ICON_MAP[info.type]}
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
          <Stat
            label={t("home.sections.hero.fields.carrier.label")}
            value={info.details.carrier || "-"}
          />
          <Stat
            label={t("home.sections.hero.fields.generation.label")}
            value={String(info.details.cellularGeneration || "-").toUpperCase()}
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
            <AnimatedProgress value={info.details.strength || 0} />
          </View>

          <View style={styles.statsRow}>
            <Stat
              label={t("home.sections.hero.fields.speed.label")}
              value={formatMbps(info.details.linkSpeed)}
            />
            <Stat
              label={t("home.sections.hero.fields.download.label")}
              value={formatMbps(info.details.rxLinkSpeed)}
            />
            <Stat
              label={t("home.sections.hero.fields.upload.label")}
              value={formatMbps(info.details.txLinkSpeed)}
            />
          </View>
        </>
      )}
    </Card>
  );
}

function formatMbps(value?: number | string | null) {
  const parsedValue = String(value || "").trim();

  if (!parsedValue) {
    return "-";
  }

  return `${parsedValue} Mbps`;
}
