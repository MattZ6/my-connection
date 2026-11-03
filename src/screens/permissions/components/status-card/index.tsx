import { SymbolView } from "expo-symbols";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";

import { useStyles } from "@/hooks/use-styles";

import type { ThemeConfig } from "@/theme/types";

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

function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
      padding: 16,
      borderRadius: theme.radii["7"],
      backgroundColor: theme.colors.surface.elevated,
    },
    visible: {
      color: theme.colors.semantic.success,
    },
    hidden: {
      color: theme.colors.semantic.caution,
    },
    content: {
      flex: 1,
      gap: 2,
    },
    title: {
      fontFamily: theme.fontFamily.medium,
      fontSize: 15,
      lineHeight: 20,
      color: theme.colors.content.base,
    },
    progress: {
      fontFamily: theme.fontFamily.mono.regular,
      fontSize: 12,
      lineHeight: 16,
      color: theme.colors.content.muted,
    },
  });
}
