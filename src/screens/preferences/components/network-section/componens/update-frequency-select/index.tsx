import { useTranslation } from "react-i18next";

import { SectionItem } from "@/components/ui/section";

import type { NetworkUpdatesContextTypes } from "@/contexts/network-updates/types";

type Props = {
  value: NetworkUpdatesContextTypes.UpdateFrequency;
  onChange: (value: NetworkUpdatesContextTypes.UpdateFrequency) => void;
};

export function UpdateFrequencySelect({ value }: Props) {
  const { t } = useTranslation("translation", {
    keyPrefix: "preferences.sections.network_updates.fields.frequency",
  });

  return <SectionItem label={t("title")} value={value} />;
}
