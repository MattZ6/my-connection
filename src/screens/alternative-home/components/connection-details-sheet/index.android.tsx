import {
  Host,
  ModalBottomSheet,
  type ModalBottomSheetRef,
  RNHostView,
} from "@expo/ui/jetpack-compose";
import { useRef } from "react";
import { ScrollView } from "react-native";

import { useTheme } from "@/hooks/use-theme";

import type { ConnectionDetails } from "../../utils/connection-details";

import { DetailsContent } from "./components/details-content";

type Props = {
  isOpen: boolean;
  details: ConnectionDetails | null;
  onClose: () => void;
  /** Starts the "Show network name" flow from the hidden network note. */
  onAllowAccess: () => void;
};

export function ConnectionDetailsSheet({
  isOpen,
  details,
  onClose,
  onAllowAccess,
}: Props) {
  const sheetRef = useRef<ModalBottomSheetRef>(null);
  const { resolvedTheme, colors } = useTheme();

  if (!isOpen || !details) {
    return null;
  }

  const handleAllowAccess = async () => {
    // Close this sheet first so the permission sheet does not stack on top.
    await sheetRef.current?.hide();
    onClose();
    onAllowAccess();
  };

  return (
    <Host matchContents colorScheme={resolvedTheme}>
      <ModalBottomSheet
        ref={sheetRef}
        onDismissRequest={onClose}
        containerColor={colors.surface.elevated}
        contentColor={colors.content.base}
      >
        <RNHostView matchContents={{ vertical: true }}>
          <ScrollView bounces={false}>
            <DetailsContent
              details={details}
              onAllowAccess={handleAllowAccess}
            />
          </ScrollView>
        </RNHostView>
      </ModalBottomSheet>
    </Host>
  );
}
