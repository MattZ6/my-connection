import {
  Column,
  Host,
  ModalBottomSheet,
  type ModalBottomSheetRef,
} from "@expo/ui/jetpack-compose";
import {
  fillMaxWidth,
  padding,
  verticalScroll,
} from "@expo/ui/jetpack-compose/modifiers";
import { useRef } from "react";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useTheme } from "@/hooks/use-theme";

import type { ConnectionDetails } from "../../utils/connection-details";

import { ComposeDetailsContent } from "./components/compose-details-content";

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
  const insets = useSafeAreaInsets();

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
    // The sheet opens in its own window, so the Host itself must not take any
    // space in the screen layout (otherwise it paints an empty block there).
    <Host colorScheme={resolvedTheme} style={styles.host}>
      <ModalBottomSheet
        ref={sheetRef}
        onDismissRequest={onClose}
        containerColor={colors.surface.elevated}
        contentColor={colors.content.base}
      >
        {/*
          Compose content: the sheet measures it and the column scrolls. The
          sheet draws behind the navigation bar, so the bottom inset keeps the
          last lines above it (and counts them in the scroll range).
        */}
        <Column
          modifiers={[
            fillMaxWidth(),
            verticalScroll(),
            padding(16, 0, 16, insets.bottom),
          ]}
        >
          <ComposeDetailsContent
            details={details}
            onAllowAccess={handleAllowAccess}
          />
        </Column>
      </ModalBottomSheet>
    </Host>
  );
}

const styles = StyleSheet.create({
  host: {
    position: "absolute",
    width: 0,
    height: 0,
  },
});
