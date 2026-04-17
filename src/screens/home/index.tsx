import { NetInfoStateType } from "@react-native-community/netinfo";
import { Stack } from "expo-router";
import { useTranslation } from "react-i18next";
import { Platform, ScrollView } from "react-native";

import { useNetworkUpdates } from "@/hooks/use-network-updates";
import { useStyles } from "@/hooks/use-styles";
import { useTheme } from "@/hooks/use-theme";

import { CellularSection } from "./components/cellular-section";
import { ConnectionHero } from "./components/connection-hero";
import { ConnectionSummary } from "./components/connection-summary";
import { IPConfigSection } from "./components/ip-config-section";
import { NetworkSection } from "./components/network-section";
import { PerformanceSection } from "./components/performance-section";
import { PropertiesSection } from "./components/properties-section";
import { ToolbarActions } from "./components/toolbar-actions";

import { getStyles } from "./styles";

const isIos = Platform.OS === "ios";

export function HomeScreen() {
  const { colors, fontFamily } = useTheme();
  const { t } = useTranslation();

  return (
    <>
      <Stack.Screen.Title
        large={isIos}
        largeStyle={{
          fontFamily: fontFamily.bold,
          color: colors.content.base.toString(),
        }}
        style={{
          fontFamily: Platform.select({
            android: fontFamily.medium,
            ios: fontFamily.semiBold,
          }),
          color: colors.content.base.toString(),
        }}
      >
        {t("home.meta.title")}
      </Stack.Screen.Title>
      <Content />
    </>
  );
}

function Content() {
  const { netInfo } = useNetworkUpdates();
  const styles = useStyles(getStyles);

  return (
    <>
      <ToolbarActions />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        style={styles.container}
        contentContainerStyle={styles.scrollContainer}
      >
        {/* TODO: adicionar skeletons */}

        {!!netInfo && (
          <>
            <ConnectionHero info={netInfo} />

            <ConnectionSummary info={netInfo} />

            {netInfo.type === NetInfoStateType.cellular && (
              <CellularSection
                carrier={netInfo.details.carrier}
                generation={netInfo.details.cellularGeneration}
              />
            )}

            {netInfo.type === NetInfoStateType.wifi && (
              <PerformanceSection
                strength={netInfo.details.strength}
                speed={netInfo.details.linkSpeed}
                download={netInfo.details.rxLinkSpeed}
                upload={netInfo.details.txLinkSpeed}
              />
            )}

            {netInfo.type === NetInfoStateType.wifi && (
              <NetworkSection
                ssid={netInfo.details.ssid}
                bssid={netInfo.details.bssid || "-"}
                frequency={netInfo.details.frequency || 0}
              />
            )}

            {(netInfo.type === NetInfoStateType.wifi ||
              netInfo.type === NetInfoStateType.ethernet) && (
              <IPConfigSection
                ipAddress={netInfo.details.ipAddress}
                subnetMask={netInfo.details.subnet}
              />
            )}

            {(netInfo.type === NetInfoStateType.bluetooth ||
              netInfo.type === NetInfoStateType.cellular ||
              netInfo.type === NetInfoStateType.vpn ||
              netInfo.type === NetInfoStateType.ethernet ||
              netInfo.type === NetInfoStateType.other ||
              netInfo.type === NetInfoStateType.wimax ||
              netInfo.type === NetInfoStateType.wifi) && (
              <PropertiesSection
                isConnectionExpensive={netInfo.details.isConnectionExpensive}
              />
            )}
          </>
        )}
      </ScrollView>
    </>
  );
}
