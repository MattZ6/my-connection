import { Color } from "expo-router";
import { Text as RNText, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function AboutPage() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: Color.android.material.surface }}
      showsVerticalScrollIndicator={false}
      stickyHeaderIndices={[0]}
      contentContainerStyle={{
        paddingBottom: 24,
      }}
    >
      <View
        style={{
          marginTop: 48,
          paddingTop: insets.top + 16,
          paddingHorizontal: 24,
          paddingBottom: 16,
          backgroundColor: Color.android.material.surface,
        }}
      >
        <RNText
          style={{
            fontSize: 36,
            lineHeight: 48,
            color: Color.android.material.onSurface.toString(),
          }}
        >
          Settings
        </RNText>
      </View>

      <View>
        <Text
          style={{
            color: Color.android.material.onSurfaceVariant,
            fontSize: 12,
          }}
        >
          About
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <Text
            style={{
              color: Color.android.material.onSurfaceVariant,
              fontSize: 14,
            }}
          >
            App
          </Text>
          <Text
            style={{
              color: Color.android.material.onSurface,
              fontSize: 14,
            }}
          >
            com.example
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <Text
            style={{
              color: Color.android.material.onSurfaceVariant,
              fontSize: 14,
            }}
          >
            Name
          </Text>
          <Text
            style={{
              color: Color.android.material.onSurface,
              fontSize: 14,
            }}
          >
            App name
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
