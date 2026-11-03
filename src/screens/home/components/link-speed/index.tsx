import { SymbolView } from "expo-symbols";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";

import { useStyles } from "@/hooks/use-styles";

import { getStyles } from "./styles";

type Props = {
  download: number | null;
  upload: number | null;
};

export function LinkSpeed({ download, upload }: Props) {
  const styles = useStyles(getStyles);
  const { t } = useTranslation("translation", {
    keyPrefix: "home.link_speed",
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("title")}</Text>

      <View style={styles.values}>
        <SpeedValue
          icon="arrow_downward"
          value={download}
          unit={t("unit")}
          accessibilityLabel={t("download")}
        />
        <SpeedValue
          icon="arrow_upward"
          value={upload}
          unit={t("unit")}
          accessibilityLabel={t("upload")}
        />
      </View>
    </View>
  );
}

type SpeedValueProps = {
  icon: "arrow_downward" | "arrow_upward";
  value: number | null;
  unit: string;
  accessibilityLabel: string;
};

function SpeedValue({
  icon,
  value,
  unit,
  accessibilityLabel,
}: SpeedValueProps) {
  const styles = useStyles(getStyles);

  return (
    <View
      style={styles.value}
      accessible
      accessibilityLabel={`${accessibilityLabel}: ${value ?? "—"} ${unit}`}
    >
      <SymbolView
        name={{ android: icon }}
        size={18}
        tintColor={styles.unit.color}
      />
      <Text style={styles.number}>{value ?? "—"}</Text>
      <Text style={styles.unit}>{unit}</Text>
    </View>
  );
}
