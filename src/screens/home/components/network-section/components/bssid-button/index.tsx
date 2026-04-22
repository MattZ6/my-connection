import * as ExpoClipboard from "expo-clipboard";
import { SymbolView } from "expo-symbols";
import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ActivityIndicator, Pressable } from "react-native";

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

type CopyState = "idle" | "copied" | "copying";

type Props = {
  bssid: string;
};

export function BSSIDButton({ bssid }: Props) {
  const isClickLockedRef = useRef(false);
  const [copyState, setCopyState] = useState<CopyState>("idle");
  const { colors } = useTheme();
  const { performTapFeedback, notifySuccess, notifyFailure } = useHaptics();
  const { t } = useTranslation("translation", {
    keyPrefix: "home.sections.network.fields.bssid",
  });

  const handleCopy = useCallback(async () => {
    if (isClickLockedRef.current) {
      return;
    }

    performTapFeedback();

    isClickLockedRef.current = true;
    setCopyState("copying");

    try {
      await Promise.all([
        ExpoClipboard.setStringAsync(bssid, {
          inputFormat: ExpoClipboard.StringFormat.PLAIN_TEXT,
        }),
        waitAsync(MIN_COPY_DURATION),
      ]);

      notifySuccess();
      setCopyState("copied");
    } catch (_error) {
      notifyFailure();
      setCopyState("idle");
    } finally {
      isClickLockedRef.current = false;
    }
  }, [performTapFeedback, notifySuccess, notifyFailure, bssid]);

  useEffect(() => {
    let timeoutId: number;

    if (copyState === "copied") {
      timeoutId = setTimeout(() => {
        setCopyState("idle");
        isClickLockedRef.current = false;
      }, SUCCESSFUL_COPY_FEEDBACK_DURATION);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [copyState]);

  return (
    <Pressable
      onPress={handleCopy}
      android_disableSound
      android_ripple={androidRippleConfig}
      disabled={copyState !== "idle"}
    >
      <SectionItemRoot>
        <SectionItemContent>
          <SectionItemLabel>{t("title")}</SectionItemLabel>
        </SectionItemContent>

        <SectionItemTrailing>
          <SectionItemValue>{bssid}</SectionItemValue>
          {copyState === "copying" ? (
            <ActivityIndicator size={20} color={colors.content.muted} />
          ) : (
            <SymbolView
              name={{
                android:
                  copyState === "copied" ? "check_circle" : "content_copy",
              }}
              size={20}
              tintColor={colors.content.muted}
            />
          )}
        </SectionItemTrailing>
      </SectionItemRoot>
    </Pressable>
  );
}
