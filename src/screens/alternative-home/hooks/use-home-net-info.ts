import type { NetInfoState } from "@react-native-community/netinfo";
import { useCallback, useState } from "react";

import { useNetworkUpdates } from "@/hooks/use-network-updates";

import { type HomeMockKey, homeMockKeys, homeMocks } from "../mocks";

/** Mocks are only offered in development builds. */
export const areHomeMocksEnabled = __DEV__;

/**
 * Returns the network state the home screen should render: the real one, or a
 * mock picked with the development switcher.
 */
export function useHomeNetInfo() {
  const { netInfo: liveNetInfo } = useNetworkUpdates();
  const [mockKey, setMockKey] = useState<HomeMockKey | null>(null);

  const cycleMock = useCallback((direction: 1 | -1) => {
    setMockKey((current) => {
      // Order: live → first mock → … → last mock → live.
      const index = current === null ? -1 : homeMockKeys.indexOf(current);
      const next = index + direction;

      if (next < 0 && current === null) {
        return homeMockKeys[homeMockKeys.length - 1];
      }

      if (next < 0 || next >= homeMockKeys.length) {
        return null;
      }

      return homeMockKeys[next];
    });
  }, []);

  const netInfo: NetInfoState | null =
    areHomeMocksEnabled && mockKey ? homeMocks[mockKey] : liveNetInfo;

  return { netInfo, mockKey, cycleMock };
}
