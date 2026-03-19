import {
  Card,
  Column,
  Divider,
  Host,
  LazyColumn,
  LinearProgressIndicator,
  Row,
  Text,
} from "@expo/ui/jetpack-compose";
import {
  fillMaxSize,
  fillMaxWidth,
  paddingAll,
  weight,
} from "@expo/ui/jetpack-compose/modifiers";
import {
  type NetInfoState,
  NetInfoStateType,
  useNetInfo,
} from "@react-native-community/netinfo";
import { Color, Stack } from "expo-router";
import { SymbolView } from "expo-symbols";

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

type Field = {
  label: string;
  hint?: string;
  value: string;
};

function getFields(info: NetInfoState) {
  const fields: Field[] = [];

  switch (info.type) {
    case NetInfoStateType.bluetooth:
      fields.push({
        label: "Expensive Connection",
        hint: "Either energy or monetary.",
        value: info.details.isConnectionExpensive ? "Yes" : "No",
      });
      break;

    case NetInfoStateType.cellular:
      fields.push({
        label: "Carrier",
        value: info.details.carrier ?? "",
      });
      fields.push({
        label: "Cellular Generation",
        value: info.details.cellularGeneration ?? "",
      });
      fields.push({
        label: "Expensive Connection",
        hint: "Either energy or monetary.",
        value: info.details.isConnectionExpensive ? "Yes" : "No",
      });
      break;

    case NetInfoStateType.ethernet:
      fields.push({
        label: "Subnet Mask",
        hint: "The subnet mask in IPv4 format.",
        value: info.details.subnet ?? "",
      });
      fields.push({
        label: "IP Address",
        hint: "Can be in IPv4 or IPv6 format.",
        value: info.details.ipAddress ?? "",
      });
      fields.push({
        label: "Expensive Connection",
        hint: "Either energy or monetary.",
        value: info.details.isConnectionExpensive ? "Yes" : "No",
      });
      break;

    case NetInfoStateType.none:
      break;

    case NetInfoStateType.other:
      fields.push({
        label: "Expensive Connection",
        hint: "Either energy or monetary.",
        value: info.details.isConnectionExpensive ? "Yes" : "No",
      });
      break;

    case NetInfoStateType.unknown:
      break;

    case NetInfoStateType.vpn:
      fields.push({
        label: "Expensive Connection",
        hint: "Either energy or monetary.",
        value: info.details.isConnectionExpensive ? "Yes" : "No",
      });
      break;

    case NetInfoStateType.wifi:
      fields.push({
        label: "Frequency",
        value: info.details.frequency
          ? `${(info.details.frequency / 1000).toFixed(1)} GHz`
          : "",
      });
      fields.push({
        label: "Link Speed",
        value: info.details.linkSpeed ? `${info.details.linkSpeed} Mbps` : "",
      });
      fields.push({
        label: "Download Speed",
        value: info.details.rxLinkSpeed
          ? `${info.details.rxLinkSpeed} Mbps`
          : "",
      });
      fields.push({
        label: "Upload Speed",
        value: info.details.txLinkSpeed
          ? `${info.details.txLinkSpeed} Mbps`
          : "",
      });
      fields.push({
        label: "Subnet Mask",
        hint: "The subnet mask in IPv4 format.",
        value: info.details.subnet ?? "",
      });
      fields.push({
        label: "IP Address",
        hint: "Can be in IPv4 or IPv6 format.",
        value: info.details.ipAddress ?? "",
      });
      fields.push({
        label: "SSID",
        hint: "The SSID of the network",
        value: info.details.ssid ?? "",
      });
      fields.push({
        label: "BSSID",
        hint: "The BSSID of the network",
        value: info.details.bssid ?? "",
      });
      fields.push({
        label: "Signal Strength",
        value: info.details.strength ? `${info.details.strength}%` : "",
      });
      fields.push({
        label: "Expensive Connection",
        hint: "Either energy or monetary.",
        value: info.details.isConnectionExpensive ? "Yes" : "No",
      });
      break;

    case NetInfoStateType.wimax:
      fields.push({
        label: "Expensive Connection",
        hint: "Either energy or monetary.",
        value: info.details.isConnectionExpensive ? "Yes" : "No",
      });
      break;

    default:
      break;
  }

  return fields;
}

export default function HomePage() {
  const info = useNetInfo();

  if (!info) {
    return null;
  }

  return (
    <>
      <Stack.Screen.Title>My Connection</Stack.Screen.Title>

      <Host matchContents>
        <LazyColumn
          modifiers={[fillMaxSize()]}
          verticalArrangement={{ spacedBy: 40 }}
          contentPadding={{
            top: 24,
            bottom: 24,
            start: 24,
            end: 24,
          }}
        >
          <ConnectionQualityHero info={info} />

          <AboutConnectionSection info={info} />

          <Divider />

          <ConnectionDetailsSection info={info} />
        </LazyColumn>
      </Host>
    </>
  );
}

const iconMap = {
  [NetInfoStateType.bluetooth]: "bluetooth",
  [NetInfoStateType.cellular]: "signal_cellular_4_bar",
  [NetInfoStateType.ethernet]: "settings_ethernet",
  [NetInfoStateType.none]: "unknown_med",
  [NetInfoStateType.other]: "network_ping",
  [NetInfoStateType.unknown]: "error_outline",
  [NetInfoStateType.vpn]: "vpn_key",
  [NetInfoStateType.wifi]: "wifi",
  [NetInfoStateType.wimax]: "wifi",
} as const;

type ConnectionQualityHeroProps = {
  info: NetInfoState;
};

function ConnectionQualityHero({ info }: ConnectionQualityHeroProps) {
  return (
    <Card
      modifiers={[fillMaxWidth()]}
      colors={{
        containerColor: Color.android.dynamic.surfaceContainerHigh,
        contentColor: Color.android.dynamic.onSurface,
      }}
    >
      <Column
        verticalArrangement={{ spacedBy: 20 }}
        modifiers={[paddingAll(24)]}
      >
        <Row
          verticalAlignment="center"
          horizontalArrangement={{ spacedBy: 24 }}
          modifiers={[fillMaxWidth()]}
        >
          <SymbolView
            name={{ android: iconMap[info.type] }}
            tintColor={Color.android.dynamic.primary}
            size={40}
          />

          <Column>
            <Text style={{ typography: "headlineMedium" }}>
              {connectionType[info.type]}{" "}
              {info.isConnected ? "connected" : "disconnected"}
            </Text>

            {info.isInternetReachable !== undefined &&
              info.isInternetReachable !== null && (
                <Text
                  style={{ typography: "bodyLarge" }}
                  color={Color.android.dynamic.onSurfaceVariant.toString()}
                >
                  {info.isInternetReachable
                    ? "Internet available"
                    : "Internet unavailable"}
                </Text>
              )}
          </Column>
        </Row>

        {info.type === NetInfoStateType.cellular && (
          <Row horizontalArrangement={{ spacedBy: 24 }}>
            <SpeedStat label="Carrier" value={info.details.carrier ?? "-"} />
            <SpeedStat
              label="Generation"
              value={info.details.cellularGeneration ?? "-"}
            />
          </Row>
        )}

        {info.type === NetInfoStateType.wifi && (
          <>
            <LinearProgressIndicator
              progress={Number(info.details.strength ?? 0) / 100}
              modifiers={[fillMaxWidth()]}
            />

            <Row horizontalArrangement={{ spacedBy: 24 }}>
              <SpeedStat
                label="Speed"
                value={`${info.details.linkSpeed ?? "-"} Mbps`}
              />
              <SpeedStat
                label="Download"
                value={`${info.details.rxLinkSpeed ?? "-"} Mbps`}
              />
              <SpeedStat
                label="Upload"
                value={`${info.details.txLinkSpeed ?? "-"} Mbps`}
              />
            </Row>
          </>
        )}
      </Column>
    </Card>
  );
}

type SpeedStatProps = {
  label: string;
  value: string;
};

function SpeedStat({ label, value }: SpeedStatProps) {
  return (
    <Column modifiers={[weight(1)]}>
      <Text
        style={{ typography: "labelMedium" }}
        color={Color.android.dynamic.onSurfaceVariant.toString()}
      >
        {label}
      </Text>
      <Text
        style={{ typography: "titleLarge" }}
        color={Color.android.dynamic.onSurfaceVariant.toString()}
      >
        {value}
      </Text>
    </Column>
  );
}

type AboutConnectionSectionProps = {
  info: NetInfoState;
};

function AboutConnectionSection({ info }: AboutConnectionSectionProps) {
  return (
    <Column verticalArrangement={{ spacedBy: 16 }}>
      <Text
        color={Color.android.dynamic.onSurfaceVariant.toString()}
        style={{ typography: "labelLarge" }}
      >
        Summary
      </Text>

      <Column verticalArrangement={{ spacedBy: 20 }}>
        {info.type === NetInfoStateType.wifi && (
          <Row modifiers={[fillMaxWidth()]}>
            <Column modifiers={[weight(1)]}>
              <Text
                color={Color.android.dynamic.onSurface.toString()}
                style={{ typography: "titleLarge" }}
              >
                Enabled
              </Text>
              <Text
                color={Color.android.dynamic.onSurfaceVariant.toString()}
                style={{ typography: "bodyLarge" }}
              >
                Whether the device's WiFi is on or off.
              </Text>
            </Column>
            <Text
              color={Color.android.dynamic.onSurfaceVariant.toString()}
              style={{ typography: "bodyLarge" }}
            >
              {info.isWifiEnabled ? "Yes" : "No"}
            </Text>
          </Row>
        )}

        <Row modifiers={[fillMaxWidth()]}>
          <Column modifiers={[weight(1)]}>
            <Text
              color={Color.android.dynamic.onSurface.toString()}
              style={{ typography: "titleLarge" }}
            >
              Connected
            </Text>
            <Text
              color={Color.android.dynamic.onSurfaceVariant.toString()}
              style={{ typography: "bodyLarge" }}
            >
              If there is an active network connection.
            </Text>
          </Column>
          <Text
            color={Color.android.dynamic.onSurfaceVariant.toString()}
            style={{ typography: "bodyLarge" }}
          >
            {info.isConnected ? "Yes" : "No"}
          </Text>
        </Row>

        <Row modifiers={[fillMaxWidth()]}>
          <Column modifiers={[weight(1)]}>
            <Text
              color={Color.android.dynamic.onSurface.toString()}
              style={{ typography: "titleLarge" }}
            >
              Internet Availability
            </Text>
            <Text
              color={Color.android.dynamic.onSurfaceVariant.toString()}
              style={{ typography: "bodyLarge" }}
            >
              If the internet is reachable with the currently active network
              connection.
            </Text>
          </Column>
          <Text
            color={Color.android.dynamic.onSurfaceVariant.toString()}
            style={{ typography: "bodyLarge" }}
          >
            {info.isInternetReachable ? "Yes" : "No"}
          </Text>
        </Row>
      </Column>
    </Column>
  );
}

type ConnectionDetailsSectionProps = {
  info: NetInfoState;
};

function getSectionTitle(type: NetInfoStateType) {
  switch (type) {
    case NetInfoStateType.bluetooth:
      return "Bluetooth";

    case NetInfoStateType.cellular:
      return "Cellular";

    case NetInfoStateType.ethernet:
      return "Network";

    case NetInfoStateType.none:
      break;

    case NetInfoStateType.other:
      return "Detailed info";

    case NetInfoStateType.unknown:
      break;

    case NetInfoStateType.vpn:
      return "VPN";

    case NetInfoStateType.wifi:
      return "Network";

    default:
      return "Detailed info";
  }
}

function ConnectionDetailsSection({ info }: ConnectionDetailsSectionProps) {
  const title = getSectionTitle(info.type);
  const fields = getFields(info);

  if (!fields.length) {
    return null;
  }

  return (
    <Column verticalArrangement={{ spacedBy: 16 }}>
      <Text
        color={Color.android.dynamic.onSurfaceVariant.toString()}
        style={{ typography: "labelLarge" }}
      >
        {title}
      </Text>

      <Column verticalArrangement={{ spacedBy: 20 }}>
        {fields.map((item) => (
          <Row key={item.label} modifiers={[fillMaxWidth()]}>
            <Column modifiers={[weight(1)]}>
              <Text
                color={Color.android.dynamic.onSurface.toString()}
                style={{ typography: "titleMedium" }}
              >
                {item.label}
              </Text>
              {item.hint && (
                <Text
                  color={Color.android.dynamic.onSurfaceVariant.toString()}
                  style={{ typography: "bodyMedium" }}
                >
                  {item.hint}
                </Text>
              )}
            </Column>
            <Text
              color={Color.android.dynamic.onSurfaceVariant.toString()}
              style={{ typography: "bodyLarge" }}
            >
              {item.value}
            </Text>
          </Row>
        ))}
      </Column>
    </Column>
  );
}
