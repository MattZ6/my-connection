import * as ExpoClipboard from "expo-clipboard";
import { SymbolView } from "expo-symbols";
import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ActivityIndicator, Pressable, StyleSheet, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import {
  SectionItemContent,
  SectionItemLabel,
  SectionItemRoot,
  SectionItemTrailing,
  SectionItemValue,
} from "@/components/ui/section";

import { useHaptics } from "@/hooks/use-haptics";
import { useTheme } from "@/hooks/use-theme";

import { androidRippleConfig } from "@/theme/android-ripple";

function waitAsync(durationInMS: number) {
  return new Promise((resolve) => setTimeout(resolve, durationInMS));
}

const MIN_COPY_DURATION = 600;
const SUCCESSFUL_COPY_FEEDBACK_DURATION = 1500;

const ANIMATION_DURATION = 200;

enum CopyState {
  idle = 0,
  copying = 1,
  copied = 2,
}

type Props = {
  bssid: string | null;
};

export function BSSIDButton({ bssid }: Props) {
  const progress = useSharedValue(0);
  const isClickLockedRef = useRef(false);
  const [copyState, setCopyState] = useState<CopyState>(CopyState.idle);
  const { colors } = useTheme();
  const { performTapFeedback, notifySuccess, notifyFailure } = useHaptics();
  const { t } = useTranslation("translation", {
    keyPrefix: "home.sections.network.fields.bssid",
  });

  const handleCopy = useCallback(async () => {
    if (isClickLockedRef.current || !bssid) {
      return;
    }

    performTapFeedback();

    isClickLockedRef.current = true;
    setCopyState(CopyState.copying);

    try {
      await Promise.all([
        ExpoClipboard.setStringAsync(bssid, {
          inputFormat: ExpoClipboard.StringFormat.PLAIN_TEXT,
        }),
        waitAsync(MIN_COPY_DURATION),
      ]);

      notifySuccess();
      setCopyState(CopyState.copied);
    } catch (_error) {
      notifyFailure();
      setCopyState(CopyState.idle);
    } finally {
      isClickLockedRef.current = false;
    }
  }, [performTapFeedback, notifySuccess, notifyFailure, bssid]);

  useEffect(() => {
    let timeoutId: number;

    if (copyState === CopyState.copied) {
      timeoutId = setTimeout(() => {
        setCopyState(CopyState.idle);
        isClickLockedRef.current = false;
      }, SUCCESSFUL_COPY_FEEDBACK_DURATION);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [copyState]);

  useEffect(() => {
    progress.value = withTiming(copyState, {
      duration: ANIMATION_DURATION,
    });
  }, [copyState, progress]);

  const iddleIconAnimatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      progress.value,
      [CopyState.idle, CopyState.copying, CopyState.copied],
      [1, 0, 0],
    );
    const scale = interpolate(
      progress.value,
      [CopyState.idle, CopyState.copying],
      [1, 0.95],
    );

    return {
      opacity,
      transform: [{ scale }],
    };
  });

  const loadingAnimatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      progress.value,
      [CopyState.idle, CopyState.copying, CopyState.copied],
      [0, 1, 0],
    );

    const scale = interpolate(
      progress.value,
      [CopyState.copying, CopyState.copied],
      [0.95, 1],
    );

    return {
      opacity,
      transform: [{ scale }],
    };
  });

  const successIconAnimatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      progress.value,
      [CopyState.copying, CopyState.copied],
      [0, 1],
    );

    const scale = interpolate(
      progress.value,
      [CopyState.copying, CopyState.copied],
      [0.95, 1],
    );

    return {
      opacity,
      transform: [{ scale }],
    };
  });

  return (
    <Pressable
      onPress={handleCopy}
      android_disableSound
      android_ripple={androidRippleConfig}
      disabled={copyState !== CopyState.idle || !bssid}
    >
      <SectionItemRoot>
        <SectionItemContent>
          <SectionItemLabel>{t("title")}</SectionItemLabel>
        </SectionItemContent>

        <SectionItemTrailing>
          <SectionItemValue>{bssid || "-"}</SectionItemValue>
          {bssid && (
            <View style={{ width: 20, height: 20 }}>
              <Animated.View
                style={[StyleSheet.absoluteFill, iddleIconAnimatedStyle]}
              >
                <SymbolView
                  name={{ android: "content_copy" }}
                  size={20}
                  tintColor={colors.content.muted}
                />
              </Animated.View>

              <Animated.View
                style={[StyleSheet.absoluteFill, loadingAnimatedStyle]}
              >
                <ActivityIndicator size={20} color={colors.content.muted} />
              </Animated.View>

              <Animated.View
                style={[StyleSheet.absoluteFill, successIconAnimatedStyle]}
              >
                <SymbolView
                  name={{ android: "check_circle" }}
                  size={20}
                  tintColor={colors.content.muted}
                />
              </Animated.View>
            </View>
          )}
        </SectionItemTrailing>
      </SectionItemRoot>
    </Pressable>
  );
}
