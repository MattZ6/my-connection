import { useTranslation } from "react-i18next";
import { SectionItem } from "@/components/ui/section";

type Props = {
  ssid: string | null;
};

export function SSIDButton({ ssid }: Props) {
  const { t } = useTranslation("translation", {
    keyPrefix: "home.sections.network",
  });

  return <SectionItem label={t("fields.ssid.title")} value={ssid || "-"} />;
}
