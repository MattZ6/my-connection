import { type AndroidSymbol, SymbolView } from "expo-symbols";
import { Text, View } from "react-native";

import { useStyles } from "@/hooks/use-styles";

import { getStyles } from "./styles";

type Props = {
  icon: AndroidSymbol;
  label: string;
  /** Renders the label in the monospace font (e.g. IP addresses). */
  mono?: boolean;
};

export function InfoPill({ icon, label, mono = false }: Props) {
  const styles = useStyles(getStyles);

  return (
    <View style={styles.container}>
      <SymbolView
        name={{ android: icon }}
        size={18}
        tintColor={styles.label.color}
      />
      <Text style={[styles.label, mono && styles.mono]}>{label}</Text>
    </View>
  );
}
