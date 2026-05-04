import { useTranslation } from "react-i18next";

import { Card } from "@/components/ui/card";
import { Section, SectionDivider, SectionItem } from "@/components/ui/section";

import { BSSIDButton } from "./components/bssid-button";
import { SSIDButton } from "./components/ssid-button";

type Props = {
  ssid: string | null;
  bssid: string | null;
  frequency: number;
};

export function NetworkSection({ ssid, bssid, frequency }: Props) {
  const { t } = useTranslation("translation", {
    keyPrefix: "home.sections.network",
  });

  const bssidValue = ssid ? bssid : null;

  return (
    <Section title={t("title")}>
      <Card>
        <SSIDButton ssid={ssid} />

        <SectionDivider />

        <BSSIDButton bssid={bssidValue} />

        <SectionDivider />

        <SectionItem
          label={t("fields.frequency.title")}
          value={t("fields.frequency.value", {
            count: Number((frequency / 1000).toFixed(1)),
          })}
        />
      </Card>
    </Section>
  );
}
