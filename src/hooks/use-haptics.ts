import { useCallback } from "react";
import { HapticsService } from "@/services/device/haptics";
import { usePreferences } from "./use-preferences";

export function useHaptics() {
  const { hapticsEnabled } = usePreferences();

  const performTapFeedback = useCallback(() => {
    if (!hapticsEnabled) {
      return;
    }

    HapticsService.performTapFeedback();
  }, [hapticsEnabled]);

  const performSelectFeedback = useCallback(() => {
    if (!hapticsEnabled) {
      return;
    }

    HapticsService.performSelectFeedback();
  }, [hapticsEnabled]);

  const performTabSelectedFeedback = useCallback(() => {
    if (!hapticsEnabled) {
      return;
    }

    HapticsService.performTabSelectedFeedback();
  }, [hapticsEnabled]);

  return {
    performTapFeedback,
    performSelectFeedback,
    performTabSelectedFeedback,
  };
}
