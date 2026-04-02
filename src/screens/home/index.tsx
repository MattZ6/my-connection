import {
  type NetInfoState,
  NetInfoStateType,
  useNetInfo,
} from "@react-native-community/netinfo";
import { Stack } from "expo-router";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

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
        {t("home.meta.title")}
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
  originalValue: string | number | boolean | null;
};

function getSections(info: NetInfoState) {
  const sections: Section[] = [];

  switch (info.type) {
    case NetInfoStateType.bluetooth:
      sections.push({
        title: "home.sections.properties.title",
        fields: [
          {
            label: "home.sections.properties.fields.expensive_connection.title",
            hint: "home.sections.properties.fields.expensive_connection.description",
            value: `home.sections.properties.fields.expensive_connection.value.${info.details.isConnectionExpensive}`,
            originalValue: info.details.isConnectionExpensive,
          },
        ],
      });
      break;

    case NetInfoStateType.cellular:
      sections.push({
        title: "home.sections.cellular.title",
        fields: [
          {
            label: "home.sections.cellular.fields.carrier.title",
            value: info.details.carrier ?? "-",
            originalValue: info.details.carrier,
          },
          {
            label: "home.sections.cellular.fields.generation.title",
            value: info.details.cellularGeneration ?? "-",
            originalValue: info.details.cellularGeneration,
          },
        ],
      });

      sections.push({
        title: "home.sections.properties.title",
        fields: [
          {
            label: "home.sections.properties.fields.expensive_connection.title",
            hint: "home.sections.properties.fields.expensive_connection.description",
            value: `home.sections.properties.fields.expensive_connection.value.${info.details.isConnectionExpensive}`,
            originalValue: info.details.isConnectionExpensive,
          },
        ],
      });
      break;

    case NetInfoStateType.ethernet:
      sections.push({
        title: "home.sections.ip.title",
        fields: [
          {
            label: "home.sections.ip.fields.ip.title",
            hint: "home.sections.ip.fields.ip.description",
            value: info.details.ipAddress ?? "-",
            originalValue: info.details.ipAddress,
          },
          {
            label: "home.sections.ip.fields.mask.title",
            hint: "home.sections.ip.fields.mask.description",
            value: info.details.subnet ?? "-",
            originalValue: info.details.subnet,
          },
        ],
      });

      sections.push({
        title: "home.sections.properties.title",
        fields: [
          {
            label: "home.sections.properties.fields.expensive_connection.title",
            hint: "home.sections.properties.fields.expensive_connection.description",
            value: `home.sections.properties.fields.expensive_connection.value.${info.details.isConnectionExpensive}`,
            originalValue: info.details.isConnectionExpensive,
          },
        ],
      });
      break;

    case NetInfoStateType.none:
      break;

    case NetInfoStateType.other:
      sections.push({
        title: "home.sections.properties.title",
        fields: [
          {
            label: "home.sections.properties.fields.expensive_connection.title",
            hint: "home.sections.properties.fields.expensive_connection.description",
            value: `home.sections.properties.fields.expensive_connection.value.${info.details.isConnectionExpensive}`,
            originalValue: info.details.isConnectionExpensive,
          },
        ],
      });
      break;

    case NetInfoStateType.unknown:
      break;

    case NetInfoStateType.vpn:
      sections.push({
        title: "home.sections.properties.title",
        fields: [
          {
            label: "home.sections.properties.fields.expensive_connection.title",
            hint: "home.sections.properties.fields.expensive_connection.description",
            value: `home.sections.properties.fields.expensive_connection.value.${info.details.isConnectionExpensive}`,
            originalValue: info.details.isConnectionExpensive,
          },
        ],
      });
      break;

    case NetInfoStateType.wifi:
      if (Platform.OS === "android") {
        sections.push({
          title: "home.sections.performance.title",
          fields: [
            {
              label: "home.sections.performance.fields.strength.title",
              value: "home.sections.performance.fields.strength.value",
              originalValue: info.details.strength ?? 0,
            },
            {
              label: "home.sections.performance.fields.speed.title",
              value: "home.sections.performance.fields.speed.value",
              originalValue: info.details.linkSpeed ?? 0,
            },
            {
              label: "home.sections.performance.fields.download.title",
              value: "home.sections.performance.fields.download.value",
              originalValue: info.details.rxLinkSpeed ?? 0,
            },
            {
              label: "home.sections.performance.fields.upload.title",
              value: "home.sections.performance.fields.upload.value",
              originalValue: info.details.txLinkSpeed ?? 0,
            },
          ],
        });
      }

      sections.push({
        title: "home.sections.network.title",
        fields: [
          {
            label: "home.sections.network.fields.ssid.title",
            value: info.details.ssid ?? "-",
            originalValue: info.details.ssid,
          },
          {
            label: "home.sections.network.fields.bssid.title",
            value: info.details.bssid ?? "-",
            originalValue: info.details.bssid,
          },
          {
            label: "home.sections.network.fields.frequency.title",
            value: "home.sections.network.fields.frequency.value",
            originalValue: parseFloat(
              ((info.details.frequency ?? 0) / 1000).toFixed(1),
            ),
          },
        ],
      });

      sections.push({
        title: "home.sections.ip.title",
        fields: [
          {
            label: "home.sections.ip.fields.ip.title",
            hint: "home.sections.ip.fields.ip.description",
            value: info.details.ipAddress ?? "-",
            originalValue: info.details.ipAddress,
          },
          {
            label: "home.sections.ip.fields.mask.title",
            hint: "home.sections.ip.fields.mask.description",
            value: info.details.subnet ?? "-",
            originalValue: info.details.subnet,
          },
        ],
      });

      sections.push({
        title: "home.sections.properties.title",
        fields: [
          {
            label: "home.sections.properties.fields.expensive_connection.title",
            hint: "home.sections.properties.fields.expensive_connection.description",
            value: `home.sections.properties.fields.expensive_connection.value.${info.details.isConnectionExpensive}`,
            originalValue: info.details.isConnectionExpensive,
          },
        ],
      });
      break;

    case NetInfoStateType.wimax:
      sections.push({
        title: "home.sections.properties.title",
        fields: [
          {
            label: "home.sections.properties.fields.expensive_connection.title",
            hint: "home.sections.properties.fields.expensive_connection.description",
            value: `home.sections.properties.fields.expensive_connection.value.${info.details.isConnectionExpensive}`,
            originalValue: info.details.isConnectionExpensive,
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
