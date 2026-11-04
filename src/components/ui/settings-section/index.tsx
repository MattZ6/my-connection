import { Children, Fragment, isValidElement, type ReactNode } from "react";
import { Text, View } from "react-native";

import { useStyles } from "@/hooks/use-styles";

import { getStyles } from "./styles";

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
      {!!title && (
        <View style={styles.header}>
          <Text style={styles.title} accessibilityRole="header">
            {title}
          </Text>

          {count !== undefined && <Text style={styles.count}>{count}</Text>}
        </View>
      )}

      <View style={styles.card}>
        {items.map((item, index) => (
          <Fragment key={item.key ?? index}>
            {index > 0 && <View style={styles.divider} />}
            {item}
          </Fragment>
        ))}
      </View>

      {footer}
    </View>
  );
}
