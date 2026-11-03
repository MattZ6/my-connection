import {
  NetInfoCellularGeneration,
  type NetInfoState,
  NetInfoStateType,
} from "@react-native-community/netinfo";

/**
 * Network states used to preview every variant of the home screen without
 * changing the device's real connection. Only available in development builds
 * (see `DevMockSwitcher`).
 */

type WifiDetails = {
  ssid: string | null;
  bssid: string | null;
  strength: number | null;
  ipAddress: string | null;
  subnet: string | null;
  frequency: number | null;
  linkSpeed: number | null;
  rxLinkSpeed: number | null;
  txLinkSpeed: number | null;
  isConnectionExpensive: boolean;
};

const wifiDetails: WifiDetails = {
  ssid: "Home Network 5G",
  bssid: "a4:2b:b0:1c:3e:90",
  strength: 78,
  ipAddress: "192.168.0.12",
  subnet: "255.255.255.0",
  frequency: 5180,
  linkSpeed: 433,
  rxLinkSpeed: 433,
  txLinkSpeed: 433,
  isConnectionExpensive: false,
};

function wifi(
  details: Partial<WifiDetails> = {},
  state: Partial<
    Pick<NetInfoState, "isConnected" | "isInternetReachable">
  > = {},
): NetInfoState {
  return {
    type: NetInfoStateType.wifi,
    isConnected: true,
    isInternetReachable: true,
    isWifiEnabled: true,
    ...state,
    details: { ...wifiDetails, ...details },
  } as NetInfoState;
}

function cellular(
  details: {
    carrier?: string | null;
    cellularGeneration?: NetInfoCellularGeneration | null;
  } = {},
  state: { isInternetReachable?: boolean | null; isWifiEnabled?: boolean } = {},
): NetInfoState {
  return {
    type: NetInfoStateType.cellular,
    isConnected: true,
    isInternetReachable: true,
    isWifiEnabled: true,
    ...state,
    details: {
      carrier: "Claro",
      cellularGeneration: NetInfoCellularGeneration["5g"],
      isConnectionExpensive: true,
      ...details,
    },
  } as NetInfoState;
}

function simple(
  type:
    | NetInfoStateType.ethernet
    | NetInfoStateType.vpn
    | NetInfoStateType.bluetooth
    | NetInfoStateType.other
    | NetInfoStateType.wimax,
  extra: Record<string, unknown> = {},
  isConnectionExpensive = false,
): NetInfoState {
  return {
    type,
    isConnected: true,
    isInternetReachable: true,
    isWifiEnabled: false,
    details: { isConnectionExpensive, ...extra },
  } as NetInfoState;
}

export const homeMocks = {
  wifi_excellent: wifi(),
  wifi_good: wifi({
    strength: 52,
    linkSpeed: 286,
    rxLinkSpeed: 286,
    txLinkSpeed: 172,
  }),
  wifi_fair: wifi({
    strength: 32,
    linkSpeed: 144,
    rxLinkSpeed: 144,
    txLinkSpeed: 72,
  }),
  wifi_weak_hidden_name: wifi({
    ssid: null,
    bssid: null,
    strength: 18,
    linkSpeed: 24,
    rxLinkSpeed: 24,
    txLinkSpeed: 12,
  }),
  wifi_no_internet: wifi(
    {
      ssid: "Office Guest",
      strength: 70,
      linkSpeed: 390,
      rxLinkSpeed: 390,
      txLinkSpeed: 390,
    },
    { isInternetReachable: false },
  ),
  wifi_checking_internet: wifi({}, { isInternetReachable: null }),
  wifi_slow_link: wifi({
    strength: 70,
    linkSpeed: 12,
    rxLinkSpeed: 12,
    txLinkSpeed: 6,
  }),
  wifi_2_4_ghz: wifi({
    ssid: "Home Network",
    frequency: 2412,
    strength: 82,
    linkSpeed: 72,
    rxLinkSpeed: 72,
    txLinkSpeed: 72,
  }),
  wifi_metered: wifi({ ssid: "Phone Hotspot", isConnectionExpensive: true }),
  wifi_no_link_speed: wifi({
    linkSpeed: null,
    rxLinkSpeed: null,
    txLinkSpeed: null,
  }),
  wifi_not_connected: {
    type: NetInfoStateType.none,
    isConnected: false,
    isInternetReachable: false,
    isWifiEnabled: true,
    details: null,
  } as NetInfoState,
  cellular_5g: cellular(),
  cellular_4g_no_carrier: cellular({
    carrier: null,
    cellularGeneration: NetInfoCellularGeneration["4g"],
  }),
  cellular_3g: cellular({
    cellularGeneration: NetInfoCellularGeneration["3g"],
  }),
  cellular_unknown_generation: cellular({ cellularGeneration: null }),
  cellular_no_internet: cellular(
    { cellularGeneration: NetInfoCellularGeneration["4g"] },
    { isInternetReachable: false },
  ),
  cellular_wifi_off: cellular({}, { isWifiEnabled: false }),
  ethernet: simple(NetInfoStateType.ethernet, {
    ipAddress: "192.168.0.20",
    subnet: "255.255.255.0",
  }),
  vpn: simple(NetInfoStateType.vpn),
  bluetooth: simple(NetInfoStateType.bluetooth, {}, true),
  other: simple(NetInfoStateType.other),
  wimax: simple(NetInfoStateType.wimax),
  unknown: {
    type: NetInfoStateType.unknown,
    isConnected: null,
    isInternetReachable: null,
    details: null,
  } as NetInfoState,
  offline: {
    type: NetInfoStateType.none,
    isConnected: false,
    isInternetReachable: false,
    isWifiEnabled: false,
    details: null,
  } as NetInfoState,
} satisfies Record<string, NetInfoState>;

export type HomeMockKey = keyof typeof homeMocks;

export const homeMockKeys = Object.keys(homeMocks) as HomeMockKey[];
