import type { ReactNode } from "react";
import { Text as RNText, View } from "react-native";
import { styles } from "./styles";

type Props = {
  title: string;
  children: ReactNode;
};

export function Section({ title, children }: Props) {
  return (
    <View style={styles.container}>
      <RNText style={styles.title}>{title}</RNText>
      {children}
    </View>
  );
}
