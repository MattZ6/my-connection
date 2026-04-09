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

  const strengthValue = Number(String(strength || "").trim() || 0);
  const speedValue = Number(String(speed || "").trim() || 0);
  const downloadValue = Number(String(download || "").trim() || 0);
  const uploadValue = Number(String(upload || "").trim() || 0);

  return (
    <Section title={t("title")}>
      <Card>
        <SectionItem
          label={t("fields.strength.title")}
          value={t("fields.strength.value", { count: strengthValue })}
        />

        <SectionDivider />

        <SectionItem
          label={t("fields.speed.title")}
          value={t("fields.speed.value", { count: speedValue })}
        />

        <SectionDivider />

        <SectionItem
          label={t("fields.download.title")}
          value={t("fields.download.value", { count: downloadValue })}
        />

        <SectionDivider />

        <SectionItem
          label={t("fields.upload.title")}
          value={t("fields.upload.value", { count: uploadValue })}
        />
      </Card>
    </Section>
  );
}
