import { ActivityAction, startActivityAsync } from "expo-intent-launcher";
import { Linking, Platform } from "react-native";

/** Shortcuts to the system screens where the user can fix their connection. */
export const NetworkSettingsUtils = {
  openWifiSettings: () => {
    if (Platform.OS === "android") {
      startActivityAsync(ActivityAction.WIFI_SETTINGS);
      return;
    }

    Linking.openSettings();
  },

  openNetworkSettings: () => {
    if (Platform.OS === "android") {
      startActivityAsync(ActivityAction.WIRELESS_SETTINGS);
      return;
    }

    Linking.openSettings();
  },
};
