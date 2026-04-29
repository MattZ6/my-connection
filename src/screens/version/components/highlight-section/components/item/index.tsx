import { Text, View } from "react-native";

import { useStyles } from "@/hooks/use-styles";

import { getStyles } from "./styles";

type Props = {
  text: string;
};

export function Item({ text }: Props) {
  const styles = useStyles(getStyles);

  return (
    <View style={styles.container}>
      <View style={styles.listIndicatorContainer}>
        <View style={styles.listIndicator} />
      </View>

      <View style={styles.content}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
}
