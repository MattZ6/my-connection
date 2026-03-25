import * as ExpoDevice from "expo-device";
import { Color } from "expo-router";
import { Platform, Text, View } from "react-native";

import { Section } from "@/components/ui/section";

const DEVICE_TYPE_MAP = {
  [ExpoDevice.DeviceType.DESKTOP]: "Desktop",
  [ExpoDevice.DeviceType.PHONE]: "Phone",
  [ExpoDevice.DeviceType.TABLET]: "Tablet",
  [ExpoDevice.DeviceType.TV]: "TV",
  [ExpoDevice.DeviceType.UNKNOWN]: "Unkown",
};

export function DeviceSection() {
  const deviceType =
    DEVICE_TYPE_MAP[ExpoDevice.deviceType ?? ExpoDevice.DeviceType.UNKNOWN] ??
    "???";

  return (
    <Section title="Device">
      <View
        style={{
          borderRadius: 16,
          backgroundColor: Platform.select({
            android: Color.android.dynamic.surfaceContainerLow,
            ios: Color.ios.secondarySystemBackground,
          }),
        }}
      >
        <Item label="Device Type" value={deviceType} />

        <Divider />

        <Item label="Manufacturer" value={ExpoDevice.manufacturer ?? ""} />

        <Divider />

        <Item label="Model" value={ExpoDevice.modelName ?? ""} />

        <Divider />

        <Item
          label="Year Class"
          value={String(ExpoDevice.deviceYearClass ?? "")}
        />

        {ExpoDevice.designName && (
          <>
            <Divider />

            <Item label="Android Design Name" value={ExpoDevice.designName} />
          </>
        )}

        {ExpoDevice.productName && (
          <>
            <Divider />

            <Item label="Android Product Name" value={ExpoDevice.productName} />
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
};

function Item({ label, value }: ItemProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
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
          flex: 1,
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
