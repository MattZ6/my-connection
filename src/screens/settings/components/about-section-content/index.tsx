import { Color } from "expo-router";
import { SymbolView } from "expo-symbols";
import { Platform, Pressable, Text, useColorScheme, View } from "react-native";
import { styles } from "./styles";

export function AboutSectionContent() {
  useColorScheme();

  return (
    <View style={styles.card}>
      <Pressable>
        <View style={styles.buttonContent}>
          <View style={styles.buttonIconContainer}>
            <SymbolView
              name={{ android: "info", ios: "info.circle" }}
              tintColor={Platform.select({
                android: Color.android.dynamic.primary,
                ios: Color.ios.label,
              })}
              size={20}
            />
          </View>

          <Text style={styles.buttonText}>About</Text>

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
              name={{ android: "apk_document", ios: "doc" }}
              tintColor={Platform.select({
                android: Color.android.dynamic.primary,
                ios: Color.ios.label,
              })}
              size={20}
            />
          </View>

          <Text style={styles.buttonText}>Licenses</Text>

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
