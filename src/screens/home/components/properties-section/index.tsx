import { useTranslation } from "react-i18next";

import { Card } from "@/components/ui/card";

import { Section, SectionItem } from "@/components/ui/section";

type Props = {
  isConnectionExpensive?: boolean;
};

export function PropertiesSection({ isConnectionExpensive }: Props) {
  const { t } = useTranslation("translation", {
    keyPrefix: "home.sections.properties",
  });

  return (
    <Section title={t("title")}>
      <Card>
        <SectionItem
          label={t("fields.expensive_connection.title")}
          hint={t("fields.expensive_connection.description")}
          value={t(
            `fields.expensive_connection.value.${isConnectionExpensive}`,
          )}
        />
      </Card>
    </Section>
  );
}
