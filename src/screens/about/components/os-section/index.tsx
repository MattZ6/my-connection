import * as ExpoDevice from "expo-device";
import { Color } from "expo-router";
import { Platform, Text, View } from "react-native";

import { Section } from "@/components/ui/section";

export function OSSection() {
  return (
    <Section title="Operational System">
      <View
        style={{
          borderRadius: 16,
          backgroundColor: Platform.select({
            android: Color.android.dynamic.surfaceContainerLow,
            ios: Color.ios.secondarySystemBackground,
          }),
        }}
      >
        <Item label="Name" value={ExpoDevice.osName ?? ""} />

        <Divider />

        <Item label="Version" value={ExpoDevice.osVersion ?? ""} />

        <Divider />

        <Item label="Build ID" value={ExpoDevice.osBuildId ?? ""} />

        <Divider />

        <Item
          label="Internal Build ID"
          value={ExpoDevice.osInternalBuildId ?? ""}
        />

        {ExpoDevice.platformApiLevel && (
          <>
            <Divider />

            <Item
              label="Android API Level"
              value={String(ExpoDevice.platformApiLevel)}
            />
          </>
        )}

        {ExpoDevice.osBuildFingerprint && (
          <>
            <Divider />

            <Item
              label="Android Build Fingerprint"
              value={ExpoDevice.osBuildFingerprint}
              direction="column"
            />
          </>
        )}
      </View>
    </Section>
  );
}

function Divider() {
  return (
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
  );
}

type ItemProps = {
  label: string;
  value: string;
  direction?: "row" | "column";
};

function Item({ label, value, direction = "row" }: ItemProps) {
  return (
    <View
      style={{
        flexDirection: direction,
        alignItems: direction === "row" ? "center" : undefined,
        gap: direction === "row" ? 16 : 8,
        paddingHorizontal: 16,
        paddingVertical: 16,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          lineHeight: 24,
          fontWeight: "500",
          color: Platform.select({
            android: Color.android.dynamic.onSurface,
            ios: Color.ios.label,
          }),
        }}
      >
        {label}
      </Text>
      <Text
        style={{
          flex: direction === "row" ? 1 : undefined,
          fontSize: 16,
          lineHeight: 24,
          textAlign: direction === "row" ? "right" : undefined,
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
