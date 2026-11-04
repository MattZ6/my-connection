import { Text, View } from "react-native";

import { useStyles } from "@/hooks/use-styles";

import { getStyles } from "./styles";

type Props = {
  title: string;
  date: string;
  paragraphs: string[];
};

export function Header({ title, date, paragraphs }: Props) {
  const styles = useStyles(getStyles);

  return (
    <View style={styles.container}>
      <Text style={styles.date}>{date}</Text>

      <Text style={styles.title} accessibilityRole="header">
        {title}
      </Text>

      {paragraphs.map((paragraph, index) => (
        <Text key={index.toString()} style={styles.paragraph}>
          {paragraph}
        </Text>
      ))}
    </View>
  );
}
