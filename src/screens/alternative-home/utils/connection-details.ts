import {
  type NetInfoState,
  NetInfoStateType,
} from "@react-native-community/netinfo";

import { formatFrequency, getLinkSpeeds } from "./format";

export type DetailValue =
  | { kind: "text"; text: string }
  | { kind: "mono"; text: string }
  | { kind: "boolean"; value: boolean | null }
  /** Metered connections are highlighted, since they cost data. */
  | { kind: "metered"; value: boolean }
  /** Hidden by Android until location access is granted. */
  | { kind: "hidden" }
  | { kind: "translated"; key: string; params?: Record<string, string> };

export type DetailRow = {
  label:
    | "ssid"
    | "bssid"
    | "frequency"
    | "strength"
    | "link_speed"
    | "ip_address"
    | "subnet"
    | "carrier"
    | "generation"
    | "connection_type"
    | "metered"
    | "internet"
    | "wifi_enabled";
  value: DetailValue;
};

export type DetailGroup = {
  title: "network" | "signal" | "ip" | "mobile" | "properties";
  rows: DetailRow[];
};

export type ConnectionDetails = {
  groups: DetailGroup[];
  note?: "hidden_network" | "cellular" | "vpn" | "bluetooth" | "other";
};

const EMPTY: DetailValue = {
  kind: "translated",
  key: "details.values.unknown",
};

function mono(text: string | null | undefined): DetailValue {
  return text ? { kind: "mono", text } : EMPTY;
}

function propertiesGroup(
  netInfo: NetInfoState,
  isConnectionExpensive: boolean,
  options: { includeType: boolean },
): DetailGroup {
  const rows: DetailRow[] = [];

  if (options.includeType) {
    rows.push({
      label: "connection_type",
      value: { kind: "translated", key: `header.type.${netInfo.type}` },
    });
  }

  rows.push(
    {
      label: "metered",
      value: { kind: "metered", value: isConnectionExpensive },
    },
    {
      label: "internet",
      value: { kind: "boolean", value: netInfo.isInternetReachable },
    },
  );

  if (options.includeType && "isWifiEnabled" in netInfo) {
    rows.push({
      label: "wifi_enabled",
      value: { kind: "boolean", value: netInfo.isWifiEnabled ?? null },
    });
  }

  return { title: "properties", rows };
}

/**
 * Describes what the "Connection details" sheet shows for each connection
 * type. Only fields Android actually reports for that type are listed.
 * Returns null when there is nothing to show (offline / unknown).
 */
export function getConnectionDetails(
  netInfo: NetInfoState | null,
): ConnectionDetails | null {
  switch (netInfo?.type) {
    case NetInfoStateType.wifi: {
      const { details } = netInfo;
      const isHidden = !details.ssid;
      const speeds = getLinkSpeeds(details);

      const signalRows: DetailRow[] = [];

      if (details.strength !== null) {
        signalRows.push({
          label: "strength",
          value: {
            kind: "translated",
            key: "details.values.strength",
            params: { value: String(details.strength) },
          },
        });
      }

      if (speeds) {
        signalRows.push({
          label: "link_speed",
          value: {
            kind: "translated",
            key: "details.values.link_speed",
            params: {
              download: String(speeds.download ?? "—"),
              upload: String(speeds.upload ?? "—"),
            },
          },
        });
      }

      const groups: DetailGroup[] = [
        {
          title: "network",
          rows: [
            {
              label: "ssid",
              value: isHidden
                ? { kind: "hidden" }
                : { kind: "text", text: details.ssid ?? "" },
            },
            {
              label: "bssid",
              value: isHidden ? { kind: "hidden" } : mono(details.bssid),
            },
            {
              label: "frequency",
              value:
                details.frequency !== null
                  ? {
                      kind: "translated",
                      key: "details.values.frequency",
                      params: { value: formatFrequency(details.frequency) },
                    }
                  : EMPTY,
            },
          ],
        },
      ];

      if (signalRows.length > 0) {
        groups.push({ title: "signal", rows: signalRows });
      }

      groups.push(
        {
          title: "ip",
          rows: [
            { label: "ip_address", value: mono(details.ipAddress) },
            { label: "subnet", value: mono(details.subnet) },
          ],
        },
        propertiesGroup(netInfo, details.isConnectionExpensive, {
          includeType: false,
        }),
      );

      return { groups, note: isHidden ? "hidden_network" : undefined };
    }

    case NetInfoStateType.cellular: {
      const { carrier, cellularGeneration, isConnectionExpensive } =
        netInfo.details;

      return {
        groups: [
          {
            title: "mobile",
            rows: [
              {
                label: "carrier",
                value: carrier ? { kind: "text", text: carrier } : EMPTY,
              },
              {
                label: "generation",
                value: cellularGeneration
                  ? { kind: "mono", text: cellularGeneration.toUpperCase() }
                  : EMPTY,
              },
            ],
          },
          propertiesGroup(netInfo, isConnectionExpensive, {
            includeType: true,
          }),
        ],
        note: "cellular",
      };
    }

    case NetInfoStateType.ethernet: {
      const { ipAddress, subnet, isConnectionExpensive } = netInfo.details;

      return {
        groups: [
          {
            title: "ip",
            rows: [
              { label: "ip_address", value: mono(ipAddress) },
              { label: "subnet", value: mono(subnet) },
            ],
          },
          propertiesGroup(netInfo, isConnectionExpensive, {
            includeType: true,
          }),
        ],
      };
    }

    case NetInfoStateType.vpn:
    case NetInfoStateType.bluetooth:
    case NetInfoStateType.other:
    case NetInfoStateType.wimax: {
      const note: ConnectionDetails["note"] =
        netInfo.type === NetInfoStateType.vpn
          ? "vpn"
          : netInfo.type === NetInfoStateType.bluetooth
            ? "bluetooth"
            : "other";

      return {
        groups: [
          propertiesGroup(netInfo, netInfo.details.isConnectionExpensive, {
            includeType: true,
          }),
        ],
        note,
      };
    }

    default:
      return null;
  }
}
