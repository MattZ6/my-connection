import * as ExpoDevice from "expo-device";
import { Card } from "@/components/ui/card";
import { Section, SectionDivider, SectionItem } from "@/components/ui/section";

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
      <Card>
        <SectionItem label="Device Type" value={deviceType} />

        <SectionDivider />

        <SectionItem
          label="Manufacturer"
          value={ExpoDevice.manufacturer ?? ""}
        />

        <SectionDivider />

        <SectionItem label="Model" value={ExpoDevice.modelName ?? ""} />

        <SectionDivider />

        <SectionItem
          label="Year Class"
          value={String(ExpoDevice.deviceYearClass ?? "")}
        />

        {ExpoDevice.designName && (
          <>
            <SectionDivider />

            <SectionItem
              label="Android Design Name"
              value={ExpoDevice.designName}
            />
          </>
        )}

        {ExpoDevice.productName && (
          <>
            <SectionDivider />

            <SectionItem
              label="Android Product Name"
              value={ExpoDevice.productName}
            />
          </>
        )}
      </Card>
    </Section>
  );
}
