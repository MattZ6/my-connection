import {
  configure,
  NetInfoStateType,
  useNetInfo,
} from "@react-native-community/netinfo";
import { Stack } from "expo-router";
import { useTranslation } from "react-i18next";
import { Platform, ScrollView } from "react-native";

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

configure({ shouldFetchWiFiSSID: true });

function Content() {
  const info = useNetInfo();
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
        <ConnectionHero info={info} />

        <ConnectionSummary info={info} />

        {info.type === NetInfoStateType.cellular && (
          <CellularSection
            carrier={info.details.carrier}
            generation={info.details.cellularGeneration}
          />
        )}

        {info.type === NetInfoStateType.wifi && (
          <PerformanceSection
            strength={info.details.strength}
            speed={info.details.linkSpeed}
            download={info.details.rxLinkSpeed}
            upload={info.details.txLinkSpeed}
          />
        )}

        {info.type === NetInfoStateType.wifi && (
          <NetworkSection
            ssid={info.details.ssid}
            bssid={info.details.bssid || "-"}
            frequency={info.details.frequency || 0}
          />
        )}

        {(info.type === NetInfoStateType.wifi ||
          info.type === NetInfoStateType.ethernet) && (
          <IPConfigSection
            ipAddress={info.details.ipAddress}
            subnetMask={info.details.subnet}
          />
        )}

        {(info.type === NetInfoStateType.bluetooth ||
          info.type === NetInfoStateType.cellular ||
          info.type === NetInfoStateType.vpn ||
          info.type === NetInfoStateType.ethernet ||
          info.type === NetInfoStateType.other ||
          info.type === NetInfoStateType.wimax ||
          info.type === NetInfoStateType.wifi) && (
          <PropertiesSection
            isConnectionExpensive={info.details.isConnectionExpensive}
          />
        )}
      </ScrollView>
    </>
  );
}
