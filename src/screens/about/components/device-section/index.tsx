import * as ExpoDevice from "expo-device";
import { useTranslation } from "react-i18next";

import { Card } from "@/components/ui/card";
import { Section, SectionDivider, SectionItem } from "@/components/ui/section";

export function DeviceSection() {
  const { t } = useTranslation();

  return (
    <Section title={t("about.sections.device.title")}>
      <Card>
        <SectionItem
          label={t("about.sections.device.fields.type.title")}
          value={t(
            `about.sections.device.fields.type.value.${ExpoDevice.deviceType}`,
          )}
        />

        <SectionDivider />

        <SectionItem
          label={t("about.sections.device.fields.manufacturer.title")}
          value={ExpoDevice.manufacturer ?? "-"}
        />

        <SectionDivider />

        <SectionItem
          label={t("about.sections.device.fields.model.title")}
          value={ExpoDevice.modelName ?? "-"}
        />

        <SectionDivider />

        <SectionItem
          label={t("about.sections.device.fields.year.title")}
          value={String(ExpoDevice.deviceYearClass ?? "-")}
        />

        {ExpoDevice.designName && (
          <>
            <SectionDivider />

            <SectionItem
              label={t(
                "about.sections.device.fields.android_design_name.title",
              )}
              value={ExpoDevice.designName}
            />
          </>
        )}

        {ExpoDevice.productName && (
          <>
            <SectionDivider />

            <SectionItem
              label={t(
                "about.sections.device.fields.android_product_name.title",
              )}
              value={ExpoDevice.productName}
            />
          </>
        )}
      </Card>
    </Section>
  );
}
