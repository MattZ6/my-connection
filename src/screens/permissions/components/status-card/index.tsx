import { SymbolView } from "expo-symbols";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";

import { useStyles } from "@/hooks/use-styles";

import { getStyles } from "./styles";

type Props = {
  done: number;
  total: number;
};

export function StatusCard({ done, total }: Props) {
  const styles = useStyles(getStyles);
  const { t } = useTranslation("translation", {
    keyPrefix: "permissions.status",
  });

  const visible = done === total;

  return (
    <View
      style={styles.container}
      accessible
      accessibilityLabel={`${visible ? t("visible") : t("hidden")}. ${t("progress", { done, total })}`}
    >
      <SymbolView
        name={{
          android: visible ? "wifi" : "wifi_lock",
          ios: visible ? "wifi" : "lock",
        }}
        size={24}
        tintColor={visible ? styles.visible.color : styles.hidden.color}
      />

      <View style={styles.content}>
        <Text style={styles.title}>{visible ? t("visible") : t("hidden")}</Text>
        <Text style={styles.progress}>{t("progress", { done, total })}</Text>
      </View>
    </View>
  );
}
