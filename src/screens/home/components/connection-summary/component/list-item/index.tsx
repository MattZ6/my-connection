import { Color } from "expo-router";
import { Platform, Text, View } from "react-native";

type Props = {
  label: string;
  hint?: string;
  value: string;
};

export function ListItem({ label, hint, value }: Props) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
      }}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            lineHeight: 32,
            fontWeight: "500",
            color: Platform.select({
              android: Color.android.dynamic.onSurface,
              ios: Color.ios.label,
            }),
          }}
        >
          {label}
        </Text>
        {!!hint && (
          <Text
            style={{
              fontSize: 14,
              lineHeight: 20,
              color: Platform.select({
                android: Color.android.dynamic.onSurfaceVariant,
                ios: Color.ios.secondaryLabel,
              }),
            }}
          >
            {hint}
          </Text>
        )}
      </View>
      <Text
        style={{
          flexShrink: 0,
          fontSize: 16,
          lineHeight: 24,
          textAlign: "right",
          color: Platform.select({
            android: Color.android.dynamic.onSurfaceVariant,
            ios: Color.ios.secondaryLabel,
          }),
        }}
      >
        {value}
      </Text>
    </View>
  );
}
