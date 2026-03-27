import { type AndroidSymbol, type SFSymbol, SymbolView } from "expo-symbols";
import {
  type GestureResponderEvent,
  Platform,
  Pressable,
  Text,
  View,
} from "react-native";

import { useStyles } from "@/hooks/use-styles";

import { getStyles } from "./styles";

type Props = {
  label: string;
  icon: {
    ios: SFSymbol;
    android: AndroidSymbol;
  };
  onPress: ((event: GestureResponderEvent) => void) | null | undefined;
};

export function PressableConfigItem({ label, icon, onPress }: Props) {
  const styles = useStyles(getStyles);

  return (
    <Pressable onPress={onPress}>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <SymbolView
            name={icon}
            tintColor={styles.icon.tintColor}
            // tintColor={Platform.select({
            //   android: Color.android.dynamic.primary,
            //   ios: Color.ios.label,
            // })}
            size={20}
          />
        </View>

        <Text style={styles.text}>{label}</Text>

        <SymbolView
          name={{ android: "chevron_right", ios: "chevron.right" }}
          // tintColor={Platform.select({
          //   android: Color.android.dynamic.outlineVariant,
          //   ios: Color.ios.placeholderText,
          // })}
          tintColor={styles.chevron.tintColor}
          size={Platform.select({
            ios: 14,
            android: 24,
          })}
        />
      </View>
    </Pressable>
  );
}
