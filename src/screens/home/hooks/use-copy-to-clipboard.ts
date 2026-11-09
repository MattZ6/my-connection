import * as ExpoClipboard from "expo-clipboard";
import { useCallback, useEffect, useRef, useState } from "react";

import { useHaptics } from "@/hooks/use-haptics";

/** How long the "Copied" feedback stays on screen. */
const COPIED_FEEDBACK_DURATION = 1500;

/**
 * Copies text to the clipboard (it never leaves the device) and tracks the
 * "Copied" feedback per item: each item runs its own timer, so copying one
 * item never cuts short the feedback of another.
 */
export function useCopyToClipboard<Key extends string>() {
  const [copiedKeys, setCopiedKeys] = useState<ReadonlySet<Key>>(
    () => new Set(),
  );
  const timeoutsRef = useRef(new Map<Key, ReturnType<typeof setTimeout>>());
  // Mirrors copiedKeys without waiting for a render, so quick double taps are
  // ignored too.
  const lockedKeysRef = useRef(new Set<Key>());
  const { notifySuccess, notifyFailure } = useHaptics();

  useEffect(() => {
    const timeouts = timeoutsRef.current;

    return () => {
      for (const timeout of timeouts.values()) {
        clearTimeout(timeout);
      }
    };
  }, []);

  const copy = useCallback(
    async (key: Key, text: string) => {
      // An item showing "Copied" ignores taps until its feedback ends.
      if (lockedKeysRef.current.has(key)) {
        return;
      }

      lockedKeysRef.current.add(key);

      try {
        await ExpoClipboard.setStringAsync(text, {
          inputFormat: ExpoClipboard.StringFormat.PLAIN_TEXT,
        });
      } catch {
        lockedKeysRef.current.delete(key);
        notifyFailure();
        return;
      }

      notifySuccess();
      setCopiedKeys((keys) => new Set(keys).add(key));

      timeoutsRef.current.set(
        key,
        setTimeout(() => {
          timeoutsRef.current.delete(key);
          lockedKeysRef.current.delete(key);
          setCopiedKeys((keys) => {
            const next = new Set(keys);
            next.delete(key);
            return next;
          });
        }, COPIED_FEEDBACK_DURATION),
      );
    },
    [notifySuccess, notifyFailure],
  );

  const isCopied = useCallback((key: Key) => copiedKeys.has(key), [copiedKeys]);

  return { isCopied, copy };
}
