import { useCallback, useRef, useState } from "react";
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

import { useNetworkUpdates } from "@/hooks/use-network-updates";

const DELAY_IN_MS = 1000;
const FAST_ANIMATION_DURATION_IN_MS = 200;

function delay(durationInMs: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, durationInMs);
  });
}

type Input = {
  onBefore?: () => void;
  onSuccess?: () => void;
  onFailure?: () => void;
};

export function useAnimatedNetworkUpdates({
  onBefore,
  onSuccess,
  onFailure,
}: Input) {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const isRefreshingRef = useRef(false);

  const { refresh } = useNetworkUpdates();

  const rotation = useSharedValue(0);
  const opacity = useSharedValue(1);

  const handleRefresh = useCallback(async () => {
    if (isRefreshingRef.current) {
      return;
    }

    if (onBefore) {
      onBefore();
    }

    isRefreshingRef.current = true;
    setIsRefreshing(true);

    const start = Date.now();

    opacity.value = withTiming(0.6, {
      duration: FAST_ANIMATION_DURATION_IN_MS,
    });
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 500,
        easing: Easing.linear,
      }),
      -1,
      false,
    );

    try {
      await delay(DELAY_IN_MS);
      await refresh();

      if (onSuccess) {
        onSuccess();
      }
    } catch {
      if (onFailure) {
        onFailure();
      }
    } finally {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, DELAY_IN_MS - elapsed);

      await delay(remaining);

      rotation.value = withTiming(0, {
        duration: FAST_ANIMATION_DURATION_IN_MS,
      });
      opacity.value = withTiming(1, {
        duration: FAST_ANIMATION_DURATION_IN_MS,
      });

      isRefreshingRef.current = false;
      setIsRefreshing(false);
    }
  }, [opacity, rotation, refresh, onBefore, onFailure, onSuccess]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [
      {
        rotate: `${rotation.value}deg`,
      },
    ],
  }));

  return {
    isRefreshing,
    refresh: handleRefresh,
    animatedStyle,
  };
}
