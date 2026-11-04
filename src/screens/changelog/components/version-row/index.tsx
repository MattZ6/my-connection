import { SymbolView } from "expo-symbols";
import { Pressable, Text } from "react-native";

import { useStyles } from "@/hooks/use-styles";

import { androidRippleConfig } from "@/theme/android-ripple";

import { getStyles } from "./styles";

type Props = {
  version: string;
  title: string;
  onPress: () => void;
};

export function VersionRow({ version, title, onPress }: Props) {
  const styles = useStyles(getStyles);

  return (
    <Pressable
      android_disableSound
      android_ripple={androidRippleConfig}
      accessibilityRole="button"
      accessibilityLabel={`${version}, ${title}`}
      onPress={onPress}
      style={styles.container}
    >
      <Text style={styles.version}>{version}</Text>

      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>

      <SymbolView
        name={{ android: "chevron_right", ios: "chevron.right" }}
        size={20}
        tintColor={styles.chevron.tintColor}
      />
    </Pressable>
  );
}
