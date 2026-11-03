import { StyleSheet, Text, View } from "react-native";

import { useStyles } from "@/hooks/use-styles";

import type { ThemeConfig } from "@/theme/types";

type Props = {
  label: string;
};

export function NewBadge({ label }: Props) {
  const styles = useStyles(getStyles);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    container: {
      paddingVertical: 2,
      paddingHorizontal: 8,
      borderRadius: theme.radii.full,
      backgroundColor: theme.colors.semantic.warningSurface,
    },
    label: {
      fontFamily: theme.fontFamily.medium,
      fontSize: 12,
      lineHeight: 16,
      color: theme.colors.semantic.warning,
    },
  });
}
