import {
  type NetInfoState,
  NetInfoStateType,
} from "@react-native-community/netinfo";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";

import { useStyles } from "@/hooks/use-styles";
import { useTheme } from "@/hooks/use-theme";

import type { SignalTone } from "../../utils/signal-quality";
import { getToneColor } from "../../utils/tone-color";

import { getStyles } from "./styles";

type Props = {
  netInfo: NetInfoState | null;
};

type Status = {
  key: "reachable" | "unreachable" | "offline" | "checking";
  tone: SignalTone;
};

function getStatus(netInfo: NetInfoState | null): Status {
  if (!netInfo || netInfo.type === NetInfoStateType.unknown) {
    return { key: "checking", tone: "neutral" };
  }

  if (netInfo.type === NetInfoStateType.none) {
    return { key: "offline", tone: "danger" };
  }

  if (netInfo.isInternetReachable === null) {
    return { key: "checking", tone: "neutral" };
  }

  if (netInfo.isInternetReachable) {
    return { key: "reachable", tone: "success" };
  }

  return { key: "unreachable", tone: "danger" };
}

export function InternetStatus({ netInfo }: Props) {
  const theme = useTheme();
  const styles = useStyles(getStyles);
  const { t } = useTranslation("translation", {
    keyPrefix: "alternative_home.status",
  });

  const status = getStatus(netInfo);
  const color = getToneColor(theme, status.tone);

  return (
    <View style={styles.container} accessibilityRole="text">
      <View style={[styles.dot, { backgroundColor: color }]} />
      <Text
        style={[
          styles.label,
          // A healthy connection keeps the text neutral; only the dot is green.
          status.tone !== "success" && { color },
        ]}
      >
        {t(status.key)}
      </Text>
    </View>
  );
}
