import { SymbolView } from "expo-symbols";
import type { ReactNode } from "react";
import {
  Platform,
  Text,
  type TextProps,
  View,
  type ViewProps,
} from "react-native";
import { useStyles } from "@/hooks/use-styles";
import { useTheme } from "@/hooks/use-theme";
import {
  type Direction,
  getSectionDividerStyles,
  getSectionItemStyles,
  getSectionStyles,
} from "./styles";

type Props = {
  title?: string;
  children: ReactNode;
};

export function Section({ title, children }: Props) {
  const styles = useStyles(getSectionStyles);

  return (
    <View style={styles.container}>
      {!!title && <Text style={styles.title}>{title}</Text>}
      {children}
    </View>
  );
}

type SectionItemRootProps = Pick<ViewProps, "style"> & {
  direction?: Direction;
  children: ReactNode;
};

export function SectionItemRoot({
  direction = "row",
  style,
  ...props
}: SectionItemRootProps) {
  const styles = useStyles((theme) => getSectionItemStyles(theme, direction));

  return <View style={[styles.container, style]} {...props} />;
}

type SectionItemLeadingProps = Pick<ViewProps, "style"> & {
  direction?: Direction;
  children: ReactNode;
};

export function SectionItemLeading({
  direction = "row",
  style,
  ...props
}: SectionItemLeadingProps) {
  const styles = useStyles((theme) => getSectionItemStyles(theme, direction));

  return <View style={[styles.leading, style]} {...props} />;
}

type SectionItemContentProps = {
  direction?: Direction;
  children: ReactNode;
};

export function SectionItemContent({
  direction = "row",
  ...props
}: SectionItemContentProps) {
  const styles = useStyles((theme) => getSectionItemStyles(theme, direction));

  return <View style={styles.content} {...props} />;
}

type SectionItemLabelProps = Pick<TextProps, "style"> & {
  direction?: Direction;
  children: string;
};

export function SectionItemLabel({
  direction = "row",
  style,
  ...props
}: SectionItemLabelProps) {
  const styles = useStyles((theme) => getSectionItemStyles(theme, direction));

  return <Text style={[styles.label, style]} {...props} />;
}

type SectionItemHintProps = Pick<TextProps, "style"> & {
  direction?: Direction;
  children: string;
};

export function SectionItemHint({
  direction = "row",
  style,
  ...props
}: SectionItemHintProps) {
  const styles = useStyles((theme) => getSectionItemStyles(theme, direction));

  return <Text style={[styles.hint, style]} {...props} />;
}

type SectionItemTrailingProps = {
  direction?: Direction;
  children: ReactNode;
};

export function SectionItemTrailing({
  direction = "row",
  ...props
}: SectionItemTrailingProps) {
  const styles = useStyles((theme) => getSectionItemStyles(theme, direction));

  return <View style={styles.trailing} {...props} />;
}

type SectionItemValueProps = Pick<TextProps, "style"> & {
  direction?: Direction;
  children: string;
};

export function SectionItemValue({
  direction = "row",
  style,
  ...props
}: SectionItemValueProps) {
  const styles = useStyles((theme) => getSectionItemStyles(theme, direction));

  return <Text style={[styles.value, style]} {...props} />;
}

export function SectionItemChevron() {
  const { colors } = useTheme();

  return (
    <SymbolView
      name={{ android: "chevron_right", ios: "chevron.right" }}
      tintColor={colors.content.muted}
      size={Platform.select({
        ios: 12,
        android: 24,
      })}
    />
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
  return (
    <SectionItemRoot direction={direction}>
      <SectionItemContent direction={direction}>
        <SectionItemLabel direction={direction}>{label}</SectionItemLabel>
        {!!hint && (
          <SectionItemHint direction={direction}>{hint}</SectionItemHint>
        )}
      </SectionItemContent>
      <SectionItemValue direction={direction}>{value}</SectionItemValue>
    </SectionItemRoot>
  );
}

type SectionDividerProps = {
  horizontalMargin?: boolean;
};

export function SectionDivider({
  horizontalMargin = true,
}: SectionDividerProps) {
  const styles = useStyles(getSectionDividerStyles);

  return (
    <View
      style={[styles.divider, horizontalMargin ? styles.withMargin : null]}
    />
  );
}
