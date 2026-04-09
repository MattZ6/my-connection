import { useTranslation } from "react-i18next";

import { Card } from "@/components/ui/card";

import { Section, SectionDivider, SectionItem } from "@/components/ui/section";

type Props = {
  ipAddress?: string | null;
  subnetMask?: string | null;
};

export function IPConfigSection({ ipAddress, subnetMask }: Props) {
  const { t } = useTranslation("translation", {
    keyPrefix: "home.sections.ip",
  });

  return (
    <Section title={t("title")}>
      <Card>
        <SectionItem
          label={t("fields.ip.title")}
          hint={t("fields.ip.description")}
          value={ipAddress ?? "-"}
        />

        <SectionDivider />

        <SectionItem
          label={t("fields.mask.title")}
          hint={t("fields.mask.description")}
          value={subnetMask ?? "-"}
        />
      </Card>
    </Section>
  );
}
