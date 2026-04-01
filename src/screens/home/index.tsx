import {
  type NetInfoState,
  NetInfoStateType,
  useNetInfo,
} from "@react-native-community/netinfo";
import { Stack } from "expo-router";
import { Platform, ScrollView } from "react-native";

import { useStyles } from "@/hooks/use-styles";
import { useTheme } from "@/hooks/use-theme";

import { ConnectionHero } from "./components/connection-hero";
import { ConnectionSection } from "./components/connection-section";
import { ConnectionSummary } from "./components/connection-summary";

import { getStyles } from "./styles";

const isIos = Platform.OS === "ios";

export function HomeScreen() {
  const { colors, fontFamily } = useTheme();

  return (
    <>
      <Stack.Screen.Title
        large={isIos}
        largeStyle={{
          fontFamily: fontFamily.medium,
          color: colors.text.toString(),
        }}
        style={{
          fontFamily: fontFamily.medium,
          color: colors.text.toString(),
        }}
      >
        Connection Health
      </Stack.Screen.Title>
      <Content />
    </>
  );
}

type Section = {
  title: string;
  fields: Field[];
};

type Field = {
  label: string;
  hint?: string;
  value: string;
};

function getSections(info: NetInfoState) {
  const sections: Section[] = [];

  switch (info.type) {
    case NetInfoStateType.bluetooth:
      sections.push({
        title: "Connection Properties",
        fields: [
          {
            label: "Expensive Connection",
            hint: "Either energy or monetary.",
            value: info.details.isConnectionExpensive ? "Yes" : "No",
          },
        ],
      });
      break;

    case NetInfoStateType.cellular:
      sections.push({
        title: "Cellular",
        fields: [
          {
            label: "Carrier",
            value: info.details.carrier ?? "",
          },
          {
            label: "Cellular Generation",
            value: info.details.cellularGeneration ?? "",
          },
        ],
      });

      sections.push({
        title: "Connection Properties",
        fields: [
          {
            label: "Expensive Connection",
            hint: "Either energy or monetary.",
            value: info.details.isConnectionExpensive ? "Yes" : "No",
          },
        ],
      });
      break;

    case NetInfoStateType.ethernet:
      sections.push({
        title: "IP Configuration",
        fields: [
          {
            label: "IP Address",
            hint: "Can be in IPv4 or IPv6 format.",
            value: info.details.ipAddress ?? "",
          },
          {
            label: "Subnet Mask",
            hint: "The subnet mask in IPv4 format.",
            value: info.details.subnet ?? "",
          },
        ],
      });

      sections.push({
        title: "Connection Properties",
        fields: [
          {
            label: "Expensive Connection",
            hint: "Either energy or monetary.",
            value: info.details.isConnectionExpensive ? "Yes" : "No",
          },
        ],
      });
      break;

    case NetInfoStateType.none:
      break;

    case NetInfoStateType.other:
      sections.push({
        title: "Connection Properties",
        fields: [
          {
            label: "Expensive Connection",
            hint: "Either energy or monetary.",
            value: info.details.isConnectionExpensive ? "Yes" : "No",
          },
        ],
      });
      break;

    case NetInfoStateType.unknown:
      break;

    case NetInfoStateType.vpn:
      sections.push({
        title: "Connection Properties",
        fields: [
          {
            label: "Expensive Connection",
            hint: "Either energy or monetary.",
            value: info.details.isConnectionExpensive ? "Yes" : "No",
          },
        ],
      });
      break;

    case NetInfoStateType.wifi:
      if (Platform.OS === "android") {
        sections.push({
          title: "Performance",
          fields: [
            {
              label: "Signal Strength",
              value: info.details.strength ? `${info.details.strength}%` : "",
            },
            {
              label: "Link Speed",
              value: info.details.linkSpeed
                ? `${info.details.linkSpeed} Mbps`
                : "",
            },
            {
              label: "Download",
              value: info.details.rxLinkSpeed
                ? `${info.details.rxLinkSpeed} Mbps`
                : "",
            },
            {
              label: "Upload",
              value: info.details.txLinkSpeed
                ? `${info.details.txLinkSpeed} Mbps`
                : "",
            },
          ],
        });
      }

      sections.push({
        title: "Network",
        fields: [
          {
            label: "SSID",
            value: info.details.ssid ?? "",
          },
          {
            label: "BSSID",
            value: info.details.bssid ?? "",
          },
          {
            label: "Frequency",
            value: info.details.frequency
              ? `${(info.details.frequency / 1000).toFixed(1)} GHz`
              : "",
          },
        ],
      });

      sections.push({
        title: "IP Configuration",
        fields: [
          {
            label: "IP Address",
            hint: "Can be in IPv4 or IPv6 format.",
            value: info.details.ipAddress ?? "",
          },
          {
            label: "Subnet Mask",
            hint: "The subnet mask in IPv4 format.",
            value: info.details.subnet ?? "",
          },
        ],
      });

      sections.push({
        title: "Connection Properties",
        fields: [
          {
            label: "Expensive Connection",
            hint: "Either energy or monetary.",
            value: info.details.isConnectionExpensive ? "Yes" : "No",
          },
        ],
      });
      break;

    case NetInfoStateType.wimax:
      sections.push({
        title: "Connection Properties",
        fields: [
          {
            label: "Expensive Connection",
            hint: "Either energy or monetary.",
            value: info.details.isConnectionExpensive ? "Yes" : "No",
          },
        ],
      });
      break;

    default:
      break;
  }

  return sections;
}

function Content() {
  const info = useNetInfo();
  const sections = getSections(info);
  const styles = useStyles(getStyles);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      showsVerticalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.scrollContainer}
    >
      <ConnectionHero info={info} />
      <ConnectionSummary info={info} />
      {sections.map((section) => (
        <ConnectionSection
          key={section.title}
          title={section.title}
          fields={section.fields}
        />
      ))}
    </ScrollView>
  );
}
