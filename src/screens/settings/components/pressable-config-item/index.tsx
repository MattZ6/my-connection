import { type AndroidSymbol, type SFSymbol, SymbolView } from "expo-symbols";
import {
  type GestureResponderEvent,
  Platform,
  Pressable,
  Text,
  View,
} from "react-native";

import { useStyles } from "@/hooks/use-styles";

import { HapticsService } from "@/services/device/haptics";

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
    <Pressable onPressIn={HapticsService.performTapFeedback} onPress={onPress}>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <SymbolView
            name={icon}
            tintColor={styles.icon.tintColor}
            size={Platform.select({
              ios: 20,
              android: 24,
            })}
          />
        </View>

        <Text style={styles.text}>{label}</Text>

        <SymbolView
          name={{ android: "chevron_right", ios: "chevron.right" }}
          tintColor={styles.chevron.tintColor}
          size={Platform.select({
            ios: 12,
            android: 24,
          })}
        />
      </View>
    </Pressable>
  );
}
