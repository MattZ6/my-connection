import { useTranslation } from "react-i18next";

import { SectionItem } from "@/components/ui/section";

type Props = {
  value: boolean;
  onToggle: (value: boolean) => void;
};

export function AutomaticUpdatesToggle({ value }: Props) {
  const { t } = useTranslation("translation", {
    keyPrefix: "preferences.sections.network_updates.fields.automatic_updates",
  });

  return (
    <SectionItem
      label={t("title")}
      hint={t("description")}
      value={value ? "On" : "Off"}
    />
  );
}
