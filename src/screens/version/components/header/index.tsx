import { Text, View } from "react-native";

import { useStyles } from "@/hooks/use-styles";

import { getStyles } from "./styles";

type Props = {
  title: string;
  date: string;
  description?: string;
};

export function Header({ title, date, description }: Props) {
  const styles = useStyles(getStyles);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>

      {description && <Text style={styles.description}>{description}</Text>}
    </View>
  );
}
