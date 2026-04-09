import { useTranslation } from "react-i18next";

import { Card } from "@/components/ui/card";

import { Section, SectionDivider, SectionItem } from "@/components/ui/section";

type Props = {
  strength?: number | null;
  speed?: number | null;
  download?: number | null;
  upload?: number | null;
};

export function PerformanceSection({
  strength,
  speed,
  download,
  upload,
}: Props) {
  const { t } = useTranslation("translation", {
    keyPrefix: "home.sections.performance",
  });

  return (
    <Section title={t("title")}>
      <Card>
        <SectionItem
          label={t("fields.strength.title")}
          value={t("fields.strength.value", { count: strength || 0 })}
        />

        <SectionDivider />

        <SectionItem
          label={t("fields.speed.title")}
          value={t("fields.speed.value", { count: speed || 0 })}
        />

        <SectionDivider />

        <SectionItem
          label={t("fields.download.title")}
          value={t("fields.download.value", { count: download || 0 })}
        />

        <SectionDivider />

        <SectionItem
          label={t("fields.upload.title")}
          value={t("fields.upload.value", { count: upload || 0 })}
        />
      </Card>
    </Section>
  );
}
