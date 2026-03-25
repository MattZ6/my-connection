import { Color } from "expo-router";
import { SymbolView } from "expo-symbols";
import { Platform, Pressable, Text, useColorScheme, View } from "react-native";
import { styles } from "./styles";

export function PreferencesSectionContent() {
  useColorScheme();

  return (
    <View style={styles.card}>
      <Pressable>
        <View style={styles.buttonContent}>
          <View style={styles.buttonIconContainer}>
            <SymbolView
              name={{ android: "palette", ios: "paintbrush" }}
              tintColor={Platform.select({
                android: Color.android.dynamic.primary,
                ios: Color.ios.label,
              })}
              size={Platform.select({
                ios: 20,
                android: 20,
              })}
            />
          </View>

          <Text style={styles.buttonText}>Appearance</Text>

          <SymbolView
            name={{ android: "chevron_right", ios: "chevron.right" }}
            tintColor={Platform.select({
              android: Color.android.dynamic.outlineVariant,
              ios: Color.ios.placeholderText,
            })}
            size={Platform.select({
              ios: 14,
              android: 24,
            })}
          />
        </View>
      </Pressable>

      <View style={styles.divider} />

      <Pressable>
        <View style={styles.buttonContent}>
          <View style={styles.buttonIconContainer}>
            <SymbolView
              name={{ android: "language", ios: "translate" }}
              tintColor={Platform.select({
                android: Color.android.dynamic.primary,
                ios: Color.ios.label,
              })}
              size={Platform.select({
                ios: 20,
                android: 20,
              })}
            />
          </View>

          <Text style={styles.buttonText}>Language</Text>

          <SymbolView
            name={{ android: "chevron_right", ios: "chevron.right" }}
            tintColor={Platform.select({
              android: Color.android.dynamic.outlineVariant,
              ios: Color.ios.placeholderText,
            })}
            size={Platform.select({
              ios: 14,
              android: 24,
            })}
          />
        </View>
      </Pressable>
    </View>
  );
}
