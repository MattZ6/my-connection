import { Color } from "expo-router";
import { Platform, Text, View } from "react-native";

type Props = {
  label: string;
  value: string;
};

export function SpeedStat({ label, value }: Props) {
  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          fontSize: 12,
          lineHeight: 20,
          textTransform: "uppercase",
          letterSpacing: 1,
          color: Platform.select({
            android: Color.android.dynamic.onSurfaceVariant,
            ios: Color.ios.secondaryLabel,
          }),
        }}
      >
        {label}
      </Text>
      <Text
        style={{
          fontSize: 20,
          lineHeight: 32,
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

  //   return (
  //     <Column modifiers={[weight(1)]}>
  //       <Text
  //         style={{ typography: "labelMedium" }}
  //         color={Color.android.dynamic.onSurfaceVariant.toString()}
  //       >
  //         {label}
  //       </Text>
  //       <Text
  //         style={{ typography: "titleLarge" }}
  //         color={Color.android.dynamic.onSurfaceVariant.toString()}
  //       >
  //         {value}
  //       </Text>
  //     </Column>
  //   );
}
