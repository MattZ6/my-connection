import { SymbolView } from "expo-symbols";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";

import { useStyles } from "@/hooks/use-styles";

import { getStyles } from "./styles";

export function PrivacyDisclaimer() {
  const styles = useStyles(getStyles);
  const { t } = useTranslation("translation", { keyPrefix: "settings" });

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <SymbolView
          size={24}
          name={{ android: "shield_locked", ios: "lock.shield" }}
          tintColor={styles.icon.tintColor}
        />
      </View>
      <Text style={styles.text}>{t("disclaimer.text")}</Text>
    </View>
  );
}
