import { NetInfoStateType } from "@react-native-community/netinfo";
import { Stack } from "expo-router";
import { useMemo, useState } from "react";
import { ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useNetworkUpdates } from "@/hooks/use-network-updates";
import { useStyles } from "@/hooks/use-styles";

import { ConnectionDetailsSheet } from "./components/connection-details-sheet";
import { ConnectionExtras } from "./components/connection-extras";
import { ConnectionGauge } from "./components/connection-gauge";
import { ConnectionTypeHeader } from "./components/connection-type-header";
import { DetailsButton } from "./components/details-button";
import { HintCard } from "./components/hint-card";
import { InternetStatus } from "./components/internet-status";
import { NetworkNameSheet } from "./components/network-name-sheet";
import { ToolbarActions } from "./components/toolbar-actions";
import { useConnectionHint } from "./hooks/use-connection-hint";
import { useNetworkNameRequest } from "./hooks/use-network-name-request";
import { getStyles } from "./styles";
import { getConnectionDetails } from "./utils/connection-details";

export function HomeScreen() {
  const safeInsets = useSafeAreaInsets();
  const styles = useStyles((config) => getStyles(config, safeInsets));

  const { netInfo } = useNetworkUpdates();
  const { hint, dismiss } = useConnectionHint(netInfo);
  const networkName = useNetworkNameRequest();
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const details = useMemo(() => getConnectionDetails(netInfo), [netInfo]);

  // Offline and unknown states have nothing to detail.
  const hasDetails =
    !!details &&
    netInfo?.type !== NetInfoStateType.none &&
    netInfo?.type !== NetInfoStateType.unknown;

  return (
    <>
      <Stack.Screen.Title asChild>
        <ConnectionTypeHeader
          netInfo={netInfo}
          onShowNetworkName={networkName.request}
        />
      </Stack.Screen.Title>

      <ToolbarActions />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.overview}>
          <ConnectionGauge netInfo={netInfo} />

          <View style={styles.status}>
            <InternetStatus netInfo={netInfo} />
            <ConnectionExtras netInfo={netInfo} />
          </View>
        </View>

        <View style={styles.footer}>
          {hint && (
            <HintCard
              key={hint.id}
              hint={hint}
              onDismiss={() => dismiss(hint.id)}
            />
          )}

          {hasDetails && (
            <DetailsButton onPress={() => setIsDetailsOpen(true)} />
          )}
        </View>
      </ScrollView>

      <ConnectionDetailsSheet
        isOpen={isDetailsOpen && hasDetails}
        details={details}
        onClose={() => setIsDetailsOpen(false)}
        onAllowAccess={networkName.request}
      />

      <NetworkNameSheet
        ref={networkName.sheetRef}
        sheet={networkName.sheet}
        onClose={networkName.close}
      />
    </>
  );
}
