import * as ExpoDevice from "expo-device";
import { Card } from "@/components/ui/card";
import { Section, SectionDivider, SectionItem } from "@/components/ui/section";

export function OSSection() {
  return (
    <Section title="Operational System">
      <Card>
        <SectionItem label="Name" value={ExpoDevice.osName ?? ""} />

        <SectionDivider />

        <SectionItem label="Version" value={ExpoDevice.osVersion ?? ""} />

        <SectionDivider />

        <SectionItem label="Build ID" value={ExpoDevice.osBuildId ?? ""} />

        <SectionDivider />

        <SectionItem
          label="Internal Build ID"
          value={ExpoDevice.osInternalBuildId ?? ""}
        />

        {ExpoDevice.platformApiLevel && (
          <>
            <SectionDivider />

            <SectionItem
              label="Android API Level"
              value={String(ExpoDevice.platformApiLevel)}
            />
          </>
        )}

        {ExpoDevice.osBuildFingerprint && (
          <>
            <SectionDivider />

            <SectionItem
              label="Android Build Fingerprint"
              value={ExpoDevice.osBuildFingerprint}
              direction="column"
            />
          </>
        )}
      </Card>
    </Section>
  );
}
