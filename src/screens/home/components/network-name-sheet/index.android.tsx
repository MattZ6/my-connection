import { Host, type ModalBottomSheetRef } from "@expo/ui/jetpack-compose";
import type { Ref } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";

import { LocationBottomSheet } from "@/components/location-bottom-sheet";
import { useTheme } from "@/hooks/use-theme";

import type { NetworkNameSheet as SheetData } from "../../hooks/use-network-name-request";

type Props = {
  ref: Ref<ModalBottomSheetRef>;
  sheet: SheetData | null;
  onClose: () => void;
};

export function NetworkNameSheet({ ref, sheet, onClose }: Props) {
  const { resolvedTheme } = useTheme();
  const { t } = useTranslation("translation", {
    keyPrefix: "home.network_name",
  });

  if (!sheet) {
    return null;
  }

  return (
    // The sheet opens in its own window; the Host must not take layout space.
    <Host colorScheme={resolvedTheme} style={styles.host}>
      <LocationBottomSheet
        ref={ref}
        isOpen
        icon={sheet.icon}
        title={sheet.title}
        description={sheet.message}
        actionTitle={sheet.actionTitle}
        onAction={sheet.onAction}
        onCloseRequest={onClose}
        dismissTitle={t("dismiss")}
        footnote={t("footnote")}
      />
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
