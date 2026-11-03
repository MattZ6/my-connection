import { Children, Fragment, isValidElement, type ReactNode } from "react";
import { Text, View } from "react-native";

import { useStyles } from "@/hooks/use-styles";

import { getStyles } from "./styles";

type Props = {
  title: string;
  children: ReactNode;
  /** Content shown right below the card, such as an action button. */
  footer?: ReactNode;
};

export function SettingsSection({ title, children, footer }: Props) {
  const styles = useStyles(getStyles);

  const items = Children.toArray(children).filter(isValidElement);

  return (
    <View style={styles.container}>
      <Text style={styles.title} accessibilityRole="header">
        {title}
      </Text>

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
