import { View } from "react-native";

import { useStyles } from "@/hooks/use-styles";

import { getStyles } from "./styles";

export function Divider() {
  const styles = useStyles(getStyles);

  return <View style={styles.divider} />;
}
