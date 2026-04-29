import { Text } from "react-native";

import { useStyles } from "@/hooks/use-styles";

import { getStyles } from "./styles";

type Props = {
  text: string;
};

export function Paragraph({ text }: Props) {
  const styles = useStyles(getStyles);

  return <Text style={styles.paragraph}>{text}</Text>;
}
