import { SymbolView } from "expo-symbols";
import { Pressable, Text, View } from "react-native";
import { useStyles } from "@/hooks/use-styles";
import { useThemeMode } from "@/hooks/use-theme-mode";
import { getStyles } from "./styles";

const options = [
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

  return (
    <View style={styles.card}>
      {options.map((option) => (
        <Pressable key={option.value} onPress={() => changeTheme(option.value)}>
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
