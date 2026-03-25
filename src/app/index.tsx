import {
  type NetInfoState,
  NetInfoStateType,
  useNetInfo,
} from "@react-native-community/netinfo";
import { Stack } from "expo-router";
import { Fragment } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { theme } from "@/theme";

const connectionType = {
  [NetInfoStateType.bluetooth]: "Bluetooth",
  [NetInfoStateType.cellular]: "Cellular",
  [NetInfoStateType.ethernet]: "Ethernet",
  [NetInfoStateType.none]: "None",
  [NetInfoStateType.other]: "Other",
  [NetInfoStateType.unknown]: "Unkwon",
  [NetInfoStateType.vpn]: "VPN",
  [NetInfoStateType.wifi]: "Wi-Fi",
  [NetInfoStateType.wimax]: "WiMax",
};

function getFields(info: NetInfoState) {
  if (info.type === NetInfoStateType.cellular) {
    return [
      {
        label: "Carrier",
        value: info.details.carrier,
      },
      {
        label: "Speed",
        value: info.details.cellularGeneration,
      },
    ];
  }

  if (info.type === NetInfoStateType.ethernet) {
    return [
      {
        label: "IP Address",
        value: info.details.ipAddress,
      },
      {
        label: "Subnet Mask",
        value: info.details.subnet,
      },
    ];
  }

  if (info.type === NetInfoStateType.wifi) {
    return [
      {
        label: "Is connectin expensive?",
        value: info.details.isConnectionExpensive ? "Yes" : "No",
      },
      {
        label: "Frequency",
        value: info.details.frequency ? `${info.details.frequency} GHz` : "n/a",
      },
      {
        label: "IP Address",
        value: info.details.ipAddress,
      },
      {
        label: "Subnet Mask",
        value: info.details.subnet,
      },
      {
        label: "BSSID",
        value: info.details.bssid,
      },
      {
        label: "SSID",
        value: info.details.ssid,
      },
      {
        label: "Strength",
        value: info.details.strength ? `${info.details.strength}%` : "n/a",
      },
      {
        label: "Speed",
        value: info.details.linkSpeed
          ? `${info.details.linkSpeed} Mbps`
          : "n/a",
      },
      {
        label: "Download speed",
        value: info.details.rxLinkSpeed
          ? `${info.details.rxLinkSpeed} Mbps`
          : "n/a",
      },
      {
        label: "Upload speed",
        value: info.details.txLinkSpeed
          ? `${info.details.txLinkSpeed} Mbps`
          : "n/a",
      },
    ];
  }

  return [];
}

export default function HomePage() {
  const insets = useSafeAreaInsets();
  const info = useNetInfo();

  if (!info) {
    return null;
  }

  const extraFields = getFields(info);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      alwaysBounceVertical
      scrollIndicatorInsets={{ bottom: insets.bottom }}
      style={styles.container}
      contentContainerStyle={[
        styles.scrollContainer,
        // { paddingBottom: styles.scrollContainer.padding + insets.bottom },
      ]}
    >
      <Stack.Screen.Title large>My Connection</Stack.Screen.Title>

      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.title}>Connection</Text>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Type</Text>
          <Text style={styles.value}>{connectionType[info.type]}</Text>
        </View>

        {typeof info.isWifiEnabled !== "undefined" && (
          <>
            <View style={styles.divider} />

            <View style={styles.field}>
              <Text style={styles.label}>Is Wi-Fi enabled?</Text>
              <Text style={styles.value}>
                {info.isWifiEnabled ? "Yes" : "No"}
              </Text>
            </View>
          </>
        )}

        <View style={styles.divider} />

        <View style={styles.field}>
          <Text style={styles.label}>Is connected?</Text>
          <Text style={styles.value}>{info.isConnected ? "Yes" : "No"}</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.field}>
          <Text style={styles.label}>Is internet reachable?</Text>
          <Text style={styles.value}>
            {info.isInternetReachable ? "Yes" : "No"}
          </Text>
        </View>
      </View>

      {!!extraFields.length && (
        <View style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.title}>Connection details</Text>
          </View>

          {extraFields.map((field, index) => (
            <Fragment key={field.label}>
              <View style={styles.field}>
                <Text style={styles.label}>{field.label}</Text>
                <Text style={styles.value}>{field.value}</Text>
              </View>

              {!!(index < extraFields.length - 1) && (
                <View style={styles.divider} />
              )}
            </Fragment>
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 16,

    gap: 24,
  },
  card: {
    borderWidth: 1,
    borderColor: theme.colors.mauve6,
    borderRadius: theme.radii.lg,

    backgroundColor: theme.colors.mauve2,
  },
  header: {
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  title: {
    fontFamily: theme.fonts.family.medium,
    fontSize: theme.fonts.size.body.md,
    color: theme.colors.mauve12,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.mauve6,
  },
  field: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,

    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  label: {
    fontFamily: theme.fonts.family.regular,
    fontSize: theme.fonts.size.body.md,
    color: theme.colors.mauve11,
  },
  value: {
    fontFamily: theme.fonts.family.regular,
    fontSize: theme.fonts.size.body.md,
    color: theme.colors.mauve12,
  },
});
