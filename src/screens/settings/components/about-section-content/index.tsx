import { Color, useNavigation } from "expo-router";
import { SymbolView } from "expo-symbols";
import { useCallback } from "react";
import { Platform, Pressable, Text, useColorScheme, View } from "react-native";

export function AboutSectionContent() {
  useColorScheme();
  const navigation = useNavigation();

  const handleNavigateToAboutPage = useCallback(
    () => navigation.navigate("about" as never), // TODO: fix type
    [navigation.navigate],
  );

  const handleNavigateToLicensesPage = useCallback(
    () => navigation.navigate("licenses" as never), // TODO: fix type
    [navigation.navigate],
  );

  return (
    <View
      style={{
        borderRadius: 16,
        backgroundColor: Platform.select({
          android: Color.android.dynamic.surfaceContainerLow,
          ios: Color.ios.secondarySystemBackground,
        }),
      }}
    >
      <Pressable onPress={handleNavigateToAboutPage}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 16,

            padding: 16,
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 36,
              height: 36,
              borderRadius: 8,
              backgroundColor: Platform.select({
                android: Color.android.dynamic.primaryInverse,
                ios: Color.ios.systemGray4,
              }),
            }}
          >
            <SymbolView
              name={{ android: "info", ios: "info.circle" }}
              tintColor={Platform.select({
                android: Color.android.dynamic.primary,
                ios: Color.ios.label,
              })}
              size={20}
            />
          </View>

          <Text
            style={{
              flex: 1,
              fontSize: 16,
              lineHeight: 24,
              color: Platform.select({
                android: Color.android.dynamic.onSurface,
                ios: Color.ios.label,
              }),
            }}
          >
            About
          </Text>

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

      <View
        style={{
          height: 1,
          marginHorizontal: 16,
          backgroundColor: Platform.select({
            android: Color.android.dynamic.surfaceContainerHigh,
            ios: Color.ios.separator,
          }),
        }}
      />

      <Pressable onPress={handleNavigateToLicensesPage}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 16,

            padding: 16,
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 36,
              height: 36,
              borderRadius: 8,
              backgroundColor: Platform.select({
                android: Color.android.dynamic.primaryInverse,
                ios: Color.ios.systemGray4,
              }),
            }}
          >
            <SymbolView
              name={{ android: "apk_document", ios: "doc" }}
              tintColor={Platform.select({
                android: Color.android.dynamic.primary,
                ios: Color.ios.label,
              })}
              size={20}
            />
          </View>

          <Text
            style={{
              flex: 1,
              fontSize: 16,
              lineHeight: 24,
              color: Platform.select({
                android: Color.android.dynamic.onSurface,
                ios: Color.ios.label,
              }),
            }}
          >
            Licenses
          </Text>

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
