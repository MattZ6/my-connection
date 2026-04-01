import { SymbolView } from "expo-symbols";
import { useCallback } from "react";
import { Pressable, Text, View } from "react-native";

import { useStyles } from "@/hooks/use-styles";
import { useThemeMode } from "@/hooks/use-theme-mode";

import { HapticsService } from "@/services/device/haptics";

import { getStyles } from "./styles";

type ThemeValue = "system" | "light" | "dark";

type Option = {
  label: string;
  value: ThemeValue;
};

const options: Option[] = [
  {
    label: "System (recommended)",
    value: "system",
  },
  {
    label: "Light",
    value: "light",
  },
  {
    label: "Dark",
    value: "dark",
  },
] as const;

export function ThemeSelect() {
  const { theme, changeTheme } = useThemeMode();
  const styles = useStyles(getStyles);

  const handleSelectTheme = useCallback(
    (option: Option) => {
      HapticsService.performSelectFeedback();
      changeTheme(option.value);
    },
    [changeTheme],
  );

  return (
    <View style={styles.card}>
      {options.map((option) => (
        <Pressable key={option.value} onPress={() => handleSelectTheme(option)}>
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>{option.label}</Text>
            {theme === option.value && (
              <SymbolView
                name={{ android: "check", ios: "checkmark" }}
                size={20}
                tintColor={styles.icon.tintColor}
              />
            )}
          </View>
        </Pressable>
      ))}
    </View>
  );
}
