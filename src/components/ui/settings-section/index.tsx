import { Children, Fragment, isValidElement, type ReactNode } from "react";
import { Text, View } from "react-native";

import { useStyles } from "@/hooks/use-styles";

import { getStyles } from "./styles";

type HeaderProps = {
  /** Section label above the card. */
  title: string;
  /** Number shown next to the title, such as how many items the card has. */
  count?: number;
};

/** The mono label above a section card. */
export function SettingsSectionHeader({ title, count }: HeaderProps) {
  const styles = useStyles(getStyles);

  return (
    <View style={styles.header}>
      <Text style={styles.title} accessibilityRole="header">
        {title}
      </Text>

      {count !== undefined && <Text style={styles.count}>{count}</Text>}
    </View>
  );
}

type ItemProps = {
  index: number;
  /** How many items the card has, so the last one gets the bottom corners. */
  total: number;
  children: ReactNode;
};

/**
 * One row of a section card rendered by a list, where each row is its own
 * cell. Together with `SettingsSectionDivider` it looks like `SettingsSection`.
 */
export function SettingsSectionItem({ index, total, children }: ItemProps) {
  const styles = useStyles(getStyles);

  return (
    <View
      style={[
        styles.item,
        index === 0 && styles.firstItem,
        index === total - 1 && styles.lastItem,
      ]}
    >
      {children}
    </View>
  );
}

/** The gap between two rows of a section card. */
export function SettingsSectionDivider() {
  const styles = useStyles(getStyles);

  return <View style={styles.divider} />;
}

type Props = {
  /** Section label above the card; leave it out for a card on its own. */
  title?: string;
  /** Number shown next to the title, such as how many items the card has. */
  count?: number;
  children: ReactNode;
  /** Content shown right below the card, such as an action button. */
  footer?: ReactNode;
};

export function SettingsSection({ title, count, children, footer }: Props) {
  const styles = useStyles(getStyles);

  const items = Children.toArray(children).filter(isValidElement);

  return (
    <View style={styles.container}>
      {!!title && <SettingsSectionHeader title={title} count={count} />}

      <View style={styles.card}>
        {items.map((item, index) => (
          <Fragment key={item.key ?? index}>
            {index > 0 && <SettingsSectionDivider />}
            {item}
          </Fragment>
        ))}
      </View>

      {footer}
    </View>
  );
}
