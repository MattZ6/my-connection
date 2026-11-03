import { Modal, Pressable, ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useTheme } from "@/hooks/use-theme";

import type { ConnectionDetails } from "../../utils/connection-details";

import { DetailsContent } from "./components/details-content";

type Props = {
  isOpen: boolean;
  details: ConnectionDetails | null;
  onClose: () => void;
  onAllowAccess: () => void;
};

/** Fallback for platforms without the Jetpack Compose bottom sheet. */
export function ConnectionDetailsSheet({
  isOpen,
  details,
  onClose,
  onAllowAccess,
}: Props) {
  const { colors, radii } = useTheme();
  const insets = useSafeAreaInsets();

  if (!details) {
    return null;
  }

  return (
    <Modal
      visible={isOpen}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <Pressable style={styles.backdrop} onPress={onClose} />
      <View
        style={[
          styles.sheet,
          {
            backgroundColor: colors.surface.elevated,
            borderTopLeftRadius: radii[7] + 10,
            borderTopRightRadius: radii[7] + 10,
            paddingBottom: insets.bottom,
          },
        ]}
      >
        <ScrollView contentContainerStyle={styles.content}>
          <DetailsContent
            details={details}
            onAllowAccess={() => {
              onClose();
              onAllowAccess();
            }}
          />
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  sheet: {
    maxHeight: "85%",
  },
  content: {
    paddingTop: 24,
  },
});
