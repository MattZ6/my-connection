import { theme } from "@/theme";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function Header() {
  const insets = useSafeAreaInsets()

  return (
    <View style={[styles.header, { paddingTop: 16 + insets.top }]} >
      <Text style={styles.text}>Esse é meu app</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    padding: 16,

    borderBottomWidth: 1,
    borderBottomColor: '#ededed',
  },
  text: {
    fontFamily: theme.fonts.family.medium,
    fontSize: theme.fonts.size.heading.lg,
  }
})
