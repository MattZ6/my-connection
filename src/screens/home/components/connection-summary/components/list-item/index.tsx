import { Text, View } from "react-native";
import { useStyles } from "@/hooks/use-styles";
import { getStyles } from "./styles";

type Props = {
  label: string;
  hint?: string;
  value: string;
};

export function ListItem({ label, hint, value }: Props) {
  const styles = useStyles(getStyles);

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
