import {
  Host,
  ModalBottomSheet,
  type ModalBottomSheetRef,
  RNHostView,
} from "@expo/ui/jetpack-compose";
import { fillMaxWidth, height } from "@expo/ui/jetpack-compose/modifiers";
import { useRef, useState } from "react";
import { ScrollView, StyleSheet, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

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
  const insets = useSafeAreaInsets();
  const window = useWindowDimensions();
  const [contentHeight, setContentHeight] = useState<number | null>(null);

  // The Compose sheet does not scroll RN content by itself, so the hosted view
  // gets an explicit height: the content's own height, capped so long lists
  // (Wi-Fi) scroll inside the sheet instead of overflowing the screen.
  const maxHeight = Math.round(window.height * 0.8);
  const hostHeight = Math.min(contentHeight ?? maxHeight, maxHeight);

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
        <RNHostView modifiers={[fillMaxWidth(), height(hostHeight)]}>
          <ScrollView
            bounces={false}
            contentContainerStyle={{ paddingBottom: insets.bottom }}
            onContentSizeChange={(_, contentSizeHeight) =>
              setContentHeight(Math.ceil(contentSizeHeight))
            }
          >
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

const styles = StyleSheet.create({
  host: {
    position: "absolute",
    width: 0,
    height: 0,
  },
});
