import { Color } from "expo-router";
import { Platform, View } from "react-native";

export function Divider() {
  return (
    <View
      style={{
        height: 1,
        backgroundColor: Platform.select({
          android: Color.android.dynamic.surfaceContainerHigh,
          ios: Color.ios.separator,
        }),
      }}
    ></View>
  );
}
