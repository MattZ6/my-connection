import { ActivityAction, startActivityAsync } from "expo-intent-launcher";
import { Linking, Platform } from "react-native";

export const LocationUtils = {
  openAppSettings: () => {
    Linking.openSettings();
  },

  openDeviceLocationSettings: () => {
    if (Platform.OS === "android") {
      startActivityAsync(ActivityAction.LOCATION_SOURCE_SETTINGS);
    } else if (Platform.OS === "ios") {
      throw new Error("Not implemented yet");
    }
  },
};
