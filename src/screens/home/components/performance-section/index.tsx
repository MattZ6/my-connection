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
          value={formatMbps(speed)}
        />

        <SectionDivider />

        <SectionItem
          label={t("fields.download.title")}
          value={formatMbps(download)}
        />

        <SectionDivider />

        <SectionItem
          label={t("fields.upload.title")}
          value={formatMbps(upload)}
        />
      </Card>
    </Section>
  );
}

function formatMbps(value?: number | string | null) {
  const parsedValue = String(value || "").trim();

  if (!parsedValue) {
    return "-";
  }

  return `${parsedValue} Mbps`;
}
