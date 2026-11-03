import type { ModalBottomSheetRef } from "@expo/ui/jetpack-compose";
import type { Ref } from "react";

import type { NetworkNameSheet as SheetData } from "../../hooks/use-network-name-request";

type Props = {
  ref: Ref<ModalBottomSheetRef>;
  sheet: SheetData | null;
  onClose: () => void;
};

/** The SSID permission flow only exists on Android. */
export function NetworkNameSheet(_props: Props) {
  return null;
}
