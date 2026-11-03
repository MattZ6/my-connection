import type { NetInfoState } from "@react-native-community/netinfo";
import { useCallback, useEffect, useMemo, useState } from "react";

import {
  type ConnectionHint,
  getConnectionHints,
  type HintId,
} from "../utils/connection-hint";

/** Wait before showing a new hint, so it does not flicker with the signal. */
const SHOW_DELAY = 2000;

/**
 * Picks the single hint to show: the most important one that applies and was
 * not dismissed. Dismissed info hints stay hidden until the app restarts.
 */
export function useConnectionHint(netInfo: NetInfoState | null) {
  const [dismissed, setDismissed] = useState<ReadonlySet<HintId>>(new Set());
  const [visibleHint, setVisibleHint] = useState<ConnectionHint | null>(null);

  const candidate = useMemo(
    () =>
      getConnectionHints(netInfo).find((hint) => !dismissed.has(hint.id)) ??
      null,
    [netInfo, dismissed],
  );

  const candidateId = candidate?.id ?? null;
  const candidateParams = JSON.stringify(candidate?.params ?? null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: Only react to a different hint, not to a new object with the same content.
  useEffect(() => {
    if (!candidate) {
      setVisibleHint(null);
      return;
    }

    // Critical problems show right away; softer hints wait for the state to settle.
    if (candidate.severity === "critical") {
      setVisibleHint(candidate);
      return;
    }

    setVisibleHint(null);
    const timeout = setTimeout(() => setVisibleHint(candidate), SHOW_DELAY);

    return () => clearTimeout(timeout);
  }, [candidateId, candidateParams]);

  const dismiss = useCallback((id: HintId) => {
    setDismissed((current) => new Set(current).add(id));
  }, []);

  return { hint: visibleHint, dismiss };
}
