import { Image, Text, View } from "react-native";

import { useStyles } from "@/hooks/use-styles";

import { getStyles } from "./styles";

type Props = {
  imageUrl: string;
  name: string;
  licenses: string;
  version: string;
};

export function LicenseItem({ imageUrl, name, licenses, version }: Props) {
  const styles = useStyles(getStyles);

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} alt="" />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.version}>{version}</Text>
        </View>

        <Text style={styles.licenses}>{licenses}</Text>
      </View>
    </View>
  );
}
