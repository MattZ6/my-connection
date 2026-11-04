import * as ExpoClipboard from "expo-clipboard";
import { useCallback, useEffect, useRef, useState } from "react";

import { useHaptics } from "@/hooks/use-haptics";

/** How long the "Copied" feedback stays on screen. */
const COPIED_FEEDBACK_DURATION = 1500;

/**
 * Copies text to the clipboard (it never leaves the device) and remembers
 * which item was copied last, so that item can show the "Copied" feedback.
 */
export function useCopyToClipboard<Key extends string>() {
  const [copiedKey, setCopiedKey] = useState<Key | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  // Mirrors copiedKey without waiting for a render, so quick double taps are
  // ignored too.
  const lockedKeyRef = useRef<Key | null>(null);
  const { notifySuccess, notifyFailure } = useHaptics();

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const copy = useCallback(
    async (key: Key, text: string) => {
      // The item showing "Copied" ignores taps until the feedback ends.
      if (lockedKeyRef.current === key) {
        return;
      }

      lockedKeyRef.current = key;

      try {
        await ExpoClipboard.setStringAsync(text, {
          inputFormat: ExpoClipboard.StringFormat.PLAIN_TEXT,
        });
      } catch {
        lockedKeyRef.current = null;
        notifyFailure();
        return;
      }

      notifySuccess();
      setCopiedKey(key);

      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        lockedKeyRef.current = null;
        setCopiedKey(null);
      }, COPIED_FEEDBACK_DURATION);
    },
    [notifySuccess, notifyFailure],
  );

  return { copiedKey, copy };
}
