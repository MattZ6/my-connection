import type { ReactNode } from "react";
import { Text, View } from "react-native";

import { useStyles } from "@/hooks/use-styles";

import {
  type Direction,
  getSectionDividerStyles,
  getSectionItemStyles,
  getSectionStyles,
} from "./styles";

type Props = {
  title: string;
  children: ReactNode;
};

export function Section({ title, children }: Props) {
  const styles = useStyles(getSectionStyles);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
}

type SectionItemProps = {
  label: string;
  hint?: string;
  value: string;
  direction?: Direction;
};

export function SectionItem({
  label,
  hint,
  value,
  direction = "row",
}: SectionItemProps) {
  const styles = useStyles((theme) => getSectionItemStyles(theme, direction));

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.label}>{label}</Text>
        {!!hint && <Text style={styles.hint}>{hint}</Text>}
      </View>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

export function SectionDivider() {
  const styles = useStyles(getSectionDividerStyles);

  return <View style={styles.divider} />;
}
