import { useTranslation } from "react-i18next";

import { Card } from "@/components/ui/card";

import { Section, SectionDivider, SectionItem } from "@/components/ui/section";

type Props = {
  carrier?: string | null;
  generation?: string | null;
};

export function CellularSection({ carrier, generation }: Props) {
  const { t } = useTranslation("translation", {
    keyPrefix: "home.sections.cellular",
  });

  return (
    <Section title={t("title")}>
      <Card>
        <SectionItem
          label={t("fields.carrier.title")}
          hint={t("fields.carrier.description")}
          value={carrier ?? "-"}
        />

        <SectionDivider />

        <SectionItem
          label={t("fields.generation.title")}
          hint={t("fields.generation.description")}
          value={generation ?? "-"}
        />
      </Card>
    </Section>
  );
}
