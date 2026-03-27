import { Fragment } from "react";

import { Card } from "@/components/ui/card";
import { Section, SectionDivider, SectionItem } from "@/components/ui/section";

type Field = {
  label: string;
  hint?: string;
  value: string;
};

type Props = {
  title: string;
  fields: Field[];
};

export function ConnectionSection({ title, fields }: Props) {
  return (
    <Section title={title}>
      <Card>
        {fields.map((field, index) => (
          <Fragment key={field.label}>
            {index > 0 && <SectionDivider />}

            <SectionItem
              label={field.label}
              hint={field.hint}
              value={field.value}
            />
          </Fragment>
        ))}
      </Card>
    </Section>
  );
}
