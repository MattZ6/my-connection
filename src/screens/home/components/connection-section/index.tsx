import { Color } from "expo-router";
import { Fragment } from "react";
import { Platform, View } from "react-native";

import { Section } from "@/components/ui/section";

import { Divider } from "./components/divider";
import { ListItem } from "./components/list-item";

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
      <View
        style={{
          borderRadius: 16,
          backgroundColor: Platform.select({
            android: Color.android.dynamic.surfaceContainerLow,
            ios: Color.ios.secondarySystemBackground,
          }),
        }}
      >
        {fields.map((field, index) => (
          <Fragment key={field.label}>
            {index > 0 && <Divider />}

            <ListItem
              label={field.label}
              hint={field.hint}
              value={field.value}
            />
          </Fragment>
        ))}
      </View>
    </Section>
  );
}
