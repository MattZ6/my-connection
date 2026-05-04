import { Stack } from "expo-router";
import { SymbolView } from "expo-symbols";
import { Platform, Pressable, View } from "react-native";
import Animated from "react-native-reanimated";

import { useAnimatedNetworkUpdates } from "@/hooks/use-animated-network-updates";
import { useHaptics } from "@/hooks/use-haptics";
import { useStyles } from "@/hooks/use-styles";

import { androidRippleConfig } from "@/theme/android-ripple";

import { getStyles } from "./styles";

export function ToolbarActions() {
  const styles = useStyles(getStyles);
  const { performTapFeedback, notifySuccess, notifyFailure } = useHaptics();

  const { isRefreshing, refresh, animatedStyle } = useAnimatedNetworkUpdates({
    onBefore: performTapFeedback,
    onSuccess: notifySuccess,
    onFailure: notifyFailure,
  });

  return (
    <Stack.Toolbar placement="right" asChild={Platform.OS === "android"}>
      {Platform.OS === "android" && (
        <View style={styles.androidButtonContainer}>
          <Pressable
            style={styles.androidButton}
            android_disableSound
            android_ripple={androidRippleConfig}
            hitSlop={{ right: 8, top: 16, left: 16, bottom: 16 }}
            onPress={refresh}
            disabled={isRefreshing}
          >
            <Animated.View style={animatedStyle}>
              <SymbolView
                name={{ android: "refresh" }}
                tintColor={styles.icon.color}
              />
            </Animated.View>
          </Pressable>
        </View>
      )}

      {Platform.OS === "ios" && (
        <Stack.Toolbar.Button onPress={refresh} disabled={isRefreshing}>
          <Stack.Toolbar.Icon sf="arrow.clockwise" />
        </Stack.Toolbar.Button>
      )}
    </Stack.Toolbar>
  );
}
