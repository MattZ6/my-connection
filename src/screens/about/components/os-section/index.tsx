import * as ExpoDevice from "expo-device";
import { useTranslation } from "react-i18next";

import { Card } from "@/components/ui/card";
import { Section, SectionDivider, SectionItem } from "@/components/ui/section";

export function OSSection() {
  const { t } = useTranslation();

  return (
    <Section title={t("about.sections.os.title")}>
      <Card>
        <SectionItem
          label={t("about.sections.os.fields.name.title")}
          value={ExpoDevice.osName ?? "-"}
        />

        <SectionDivider />

        <SectionItem
          label={t("about.sections.os.fields.version.title")}
          value={ExpoDevice.osVersion ?? "-"}
        />

        <SectionDivider />

        <SectionItem
          label={t("about.sections.os.fields.build_id.title")}
          value={ExpoDevice.osBuildId ?? "-"}
        />

        <SectionDivider />

        <SectionItem
          label={t("about.sections.os.fields.internal_build_id.title")}
          value={ExpoDevice.osInternalBuildId ?? "-"}
        />

        {ExpoDevice.platformApiLevel && (
          <>
            <SectionDivider />

            <SectionItem
              label={t("about.sections.os.fields.android_api.title")}
              value={String(ExpoDevice.platformApiLevel)}
            />
          </>
        )}

        {ExpoDevice.osBuildFingerprint && (
          <>
            <SectionDivider />

            <SectionItem
              label={t(
                "about.sections.os.fields.android_build_fingerprint.title",
              )}
              value={ExpoDevice.osBuildFingerprint}
              direction="column"
            />
          </>
        )}
      </Card>
    </Section>
  );
}
