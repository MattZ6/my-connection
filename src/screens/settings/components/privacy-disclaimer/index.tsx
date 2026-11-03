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
      <SymbolView
        size={20}
        name={{ android: "shield", ios: "lock.shield" }}
        tintColor={styles.icon.tintColor}
      />
      <Text style={styles.text}>{t("disclaimer.text")}</Text>
    </View>
  );
}
