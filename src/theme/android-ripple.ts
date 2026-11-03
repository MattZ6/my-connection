import type { NativeColorValue } from "react-native";

type AndroidRipple = {
  color?: NativeColorValue | string;
  borderless?: boolean;
  radius?: number;
  foreground?: boolean;
  alpha?: number;
};

export const androidRippleConfig: AndroidRipple = {
  foreground: true,
  color: "#0000001A",
};
