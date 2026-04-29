import { type AndroidSymbol, type SFSymbol, SymbolView } from "expo-symbols";
import { Text, View } from "react-native";

import { useStyles } from "@/hooks/use-styles";

import { getStyles } from "./styles";

type Icon = {
  ios?: SFSymbol;
  android: AndroidSymbol;
};

type IconMap = Record<string, Icon>;

const iconMap: IconMap = {
  features: {
    android: "celebration",
  },
  fixes: {
    android: "bug_report",
  },
  improvements: {
    android: "arrow_warm_up",
  },
  infrastructure: {
    android: "backup",
  },
};

type Props = {
  type: string;
  title: string;
};

export function Header({ title, type }: Props) {
  const styles = useStyles(getStyles);

  const iconConfig = iconMap[type];

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <SymbolView
          name={iconConfig}
          size={20}
          tintColor={styles.icon.tintColor}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}
