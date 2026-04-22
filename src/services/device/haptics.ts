import * as ExpoHaptics from "expo-haptics";
import { Platform } from "react-native";

export const HapticsService = {
  performTapFeedback: () => {
    ExpoHaptics.selectionAsync();
  },
  performSelectFeedback: () => {
    ExpoHaptics.selectionAsync();
  },
  performTabSelectedFeedback: () => {
    if (Platform.OS === "ios") {
      ExpoHaptics.impactAsync(ExpoHaptics.ImpactFeedbackStyle.Light);
    } else if (Platform.OS === "android") {
      ExpoHaptics.selectionAsync();
    }
  },
  performSuccessNotificationFeedback: () => {
    ExpoHaptics.notificationAsync(ExpoHaptics.NotificationFeedbackType.Success);
  },
  performFailureNotificationFeedback: () => {
    ExpoHaptics.notificationAsync(ExpoHaptics.NotificationFeedbackType.Error);
  },
};
