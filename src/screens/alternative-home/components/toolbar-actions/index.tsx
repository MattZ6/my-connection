import { Stack, useRouter } from "expo-router";
import { SymbolView } from "expo-symbols";
import { Platform, Pressable, View } from "react-native";

import { useHaptics } from "@/hooks/use-haptics";
import { useStyles } from "@/hooks/use-styles";

import { androidRippleConfig } from "@/theme/android-ripple";

import { getStyles } from "./styles";

export function ToolbarActions() {
  const styles = useStyles(getStyles);
  const { performTapFeedback } = useHaptics();
  const router = useRouter();

  const handleNavigate = () => {
    performTapFeedback();
    router.navigate("/settings");
  };

  return (
    <Stack.Toolbar placement="right" asChild={Platform.OS === "android"}>
      {Platform.OS === "android" && (
        <View style={styles.androidButtonContainer}>
          <Pressable
            style={styles.androidButton}
            android_disableSound
            android_ripple={androidRippleConfig}
            hitSlop={{ right: 8, top: 16, left: 16, bottom: 16 }}
            onPress={handleNavigate}
          >
            <SymbolView
              name={{ android: "settings" }}
              tintColor={styles.icon.color}
            />
          </Pressable>
        </View>
      )}

      {Platform.OS === "ios" && (
        <Stack.Toolbar.Button onPress={handleNavigate}>
          <Stack.Toolbar.Icon sf="0.circle" />
        </Stack.Toolbar.Button>
      )}
    </Stack.Toolbar>
  );
}
