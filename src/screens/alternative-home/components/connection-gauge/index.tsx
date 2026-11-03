import {
  type NetInfoState,
  NetInfoStateType,
} from "@react-native-community/netinfo";
import { type AndroidSymbol, SymbolView } from "expo-symbols";
import { useTranslation } from "react-i18next";
import { Text, useWindowDimensions, View } from "react-native";

import { useStyles } from "@/hooks/use-styles";
import { useTheme } from "@/hooks/use-theme";

import { getSignalQuality } from "../../utils/signal-quality";
import { getToneColor } from "../../utils/tone-color";
import { AnimatedGauge } from "../animated-gauge";
import { QualityLabel } from "../quality-label";

import { getStyles } from "./styles";

type Props = {
  netInfo: NetInfoState | null;
};

type GaugeContent =
  | { kind: "signal"; strength: number }
  | {
      kind: "neutral";
      /** Big mono text in the center (e.g. "5G"), or an icon when absent. */
      value?: string;
      icon: AndroidSymbol;
      caption: string;
      dotted?: boolean;
    };

const MAX_SIZE = 280;

/**
 * The ring at the top of the screen. It always sits in the same place so the
 * layout does not jump when the connection type changes: Wi-Fi fills it with
 * the signal strength, other types show what they are inside an empty ring.
 */
export function ConnectionGauge({ netInfo }: Props) {
  const theme = useTheme();
  const styles = useStyles(getStyles);
  const { width } = useWindowDimensions();
  const { t } = useTranslation("translation", {
    keyPrefix: "alternative_home",
  });

  const size = Math.min(Math.ceil(width / 3) * 2, MAX_SIZE);
  const content = getGaugeContent(netInfo);

  const trackColor = theme.colors.border.default.toString();

  if (content.kind === "signal") {
    const quality = getSignalQuality(content.strength);
    const color = getToneColor(theme, quality.tone);
    const qualityLabel = t(`quality.${quality.key}`);

    return (
      <AnimatedGauge
        value={content.strength}
        size={size}
        strokeWidth={7}
        trackColor={trackColor}
        progressColor={color.toString()}
        styles={styles.gauge}
      >
        <View
          style={styles.center}
          accessible
          accessibilityLabel={t("gauge.a11y", {
            value: content.strength,
            quality: qualityLabel,
          })}
        >
          <Text style={styles.value}>{content.strength}%</Text>
          <QualityLabel
            label={qualityLabel}
            level={quality.level}
            color={color}
          />
        </View>
      </AnimatedGauge>
    );
  }

  return (
    <AnimatedGauge
      value={0}
      size={size}
      strokeWidth={7}
      trackColor={trackColor}
      dottedTrack={content.dotted}
      styles={styles.gauge}
    >
      <View style={styles.center} accessible>
        {content.value ? (
          <Text style={styles.value}>{content.value}</Text>
        ) : (
          <SymbolView
            name={{ android: content.icon }}
            size={48}
            tintColor={theme.colors.content.muted}
          />
        )}
        <Text style={styles.caption}>{t(`gauge.${content.caption}`)}</Text>
      </View>
    </AnimatedGauge>
  );
}

function getGaugeContent(netInfo: NetInfoState | null): GaugeContent {
  switch (netInfo?.type) {
    case NetInfoStateType.wifi:
      return { kind: "signal", strength: netInfo.details.strength ?? 0 };

    case NetInfoStateType.cellular: {
      const generation = netInfo.details.cellularGeneration;

      return {
        kind: "neutral",
        value: generation ? generation.toUpperCase() : undefined,
        icon: "signal_cellular_alt",
        caption: "mobile",
      };
    }

    case NetInfoStateType.ethernet:
      return { kind: "neutral", icon: "settings_ethernet", caption: "wired" };

    case NetInfoStateType.vpn:
      return { kind: "neutral", icon: "vpn_lock", caption: "vpn" };

    case NetInfoStateType.bluetooth:
      return { kind: "neutral", icon: "bluetooth", caption: "tethering" };

    case NetInfoStateType.other:
    case NetInfoStateType.wimax:
      return { kind: "neutral", icon: "network_ping", caption: "other" };

    case NetInfoStateType.none:
      if (netInfo.isWifiEnabled) {
        return {
          kind: "neutral",
          icon: "wifi_find",
          caption: "not_connected",
        };
      }

      return { kind: "neutral", icon: "cloud_off", caption: "offline" };

    case NetInfoStateType.unknown:
      return {
        kind: "neutral",
        icon: "question_mark",
        caption: "unknown",
        dotted: true,
      };

    default:
      // No state yet: the first NetInfo event has not arrived.
      return {
        kind: "neutral",
        icon: "more_horiz",
        caption: "checking",
        dotted: true,
      };
  }
}
