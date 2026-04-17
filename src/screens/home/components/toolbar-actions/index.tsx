import { Stack } from "expo-router";
import { SymbolView } from "expo-symbols";
import { useCallback } from "react";
import { Platform, Pressable, View } from "react-native";

import { useHaptics } from "@/hooks/use-haptics";
import { useNetworkUpdates } from "@/hooks/use-network-updates";
import { useStyles } from "@/hooks/use-styles";

import { androidRippleConfig } from "@/theme/android-ripple";

import { getStyles } from "./styles";

export function ToolbarActions() {
  const styles = useStyles(getStyles);
  const { performTapFeedback } = useHaptics();
  const { refresh } = useNetworkUpdates();

  const handleRefresh = useCallback(async () => {
    performTapFeedback();

    try {
      await refresh();
    } catch (_error) {
      // Falha
    }
  }, [performTapFeedback, refresh]);

  return (
    <Stack.Toolbar placement="right" asChild={Platform.OS === "android"}>
      {Platform.OS === "android" && (
        <View style={styles.androidButtonContainer}>
          <Pressable
            style={styles.androidButton}
            android_disableSound
            android_ripple={androidRippleConfig}
            hitSlop={{ right: 8, top: 16, left: 16, bottom: 16 }}
            onPress={handleRefresh}
          >
            <SymbolView
              name={{ android: "refresh" }}
              tintColor={styles.icon.color}
            />
          </Pressable>
        </View>
      )}

      {Platform.OS === "ios" && (
        <Stack.Toolbar.Button onPress={handleRefresh}>
          <Stack.Toolbar.Icon sf="arrow.clockwise" />
        </Stack.Toolbar.Button>
      )}
    </Stack.Toolbar>
  );
}
