import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import { Section, SectionDivider, SectionItem } from "@/components/ui/section";

type Field = {
  label: string;
  hint?: string;
  value: string;
  originalValue: string | number | boolean | null;
};

type Props = {
  title: string;
  fields: Field[];
};

export function ConnectionSection({ title, fields }: Props) {
  const { t } = useTranslation();

  return (
    <Section title={t(title)}>
      <Card>
        {fields.map((field, index) => (
          <Fragment key={field.label}>
            {index > 0 && <SectionDivider />}

            <SectionItem
              label={t(field.label)}
              hint={field.hint ? t(field.hint) : undefined}
              value={t(field.value, { count: field.originalValue })}
            />
          </Fragment>
        ))}
      </Card>
    </Section>
  );
}
