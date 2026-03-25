import { Color } from "expo-router";
import type { ReactNode } from "react";
import { Platform, Text as RNText, View } from "react-native";

type Props = {
  title: string;
  children: ReactNode;
};

export function Section({ title, children }: Props) {
  return (
    <View
      style={{
        flexDirection: "column",
        gap: 12,
      }}
    >
      <RNText
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
        {title}
      </RNText>
      {children}
    </View>
  );
}
