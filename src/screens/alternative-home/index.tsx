import { Host, ModalBottomSheet, Row } from "@expo/ui/jetpack-compose";
import {
  NetInfoCellularGeneration,
  type NetInfoState,
  NetInfoStateType,
} from "@react-native-community/netinfo";
import { Stack } from "expo-router";
import { type AndroidSymbol, type SFSymbol, SymbolView } from "expo-symbols";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ScrollView, Text, useWindowDimensions, View } from "react-native";
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { runOnJS } from "react-native-worklets";
import { useNetworkUpdates } from "@/hooks/use-network-updates";
import { useStyles } from "@/hooks/use-styles";
import { useTheme } from "@/hooks/use-theme";
import { AnimatedGauge } from "./components/animated-gauge";
import { ConnectionType } from "./components/connection-type-header";
import { ToolbarActions } from "./components/toolbar-actions";
import { getStyles } from "./styles";

export function AlternativeHomeScreen() {
  const safeInsets = useSafeAreaInsets();
  const styles = useStyles((config) => getStyles(config, safeInsets));

  const netInfo = mock.wifi;

  return (
    <>
      <Stack.Screen.Title asChild>
        <ConnectionType netInfo={netInfo} />
      </Stack.Screen.Title>

      <ToolbarActions />

      <View style={styles.container}>
        {/* <Xxx /> */}
        <Circle netInfo={netInfo} />
        <View
          style={{
            gap: 16,
          }}
        >
          <Network />
          <Summary />
        </View>
        <Tip />
        {/* <ShowMoreButton /> */}
      </View>
    </>
  );
}

const ICON_MAP: Record<
  NetInfoStateType,
  { ios: SFSymbol; android: AndroidSymbol }
> = {
  bluetooth: { ios: "cellularbars", android: "bluetooth" },
  cellular: { ios: "cellularbars", android: "4g_mobiledata" },
  ethernet: { ios: "wave.3.backward", android: "settings_ethernet" },
  none: { ios: "minus", android: "unknown_med" },
  other: { ios: "info.circle", android: "network_ping" },
  unknown: { ios: "questionmark", android: "error_outline" },
  vpn: { ios: "wifi", android: "vpn_key" },
  wifi: { ios: "wifi", android: "wifi" },
  wimax: { ios: "wifi", android: "wifi" },
};

const mock: Record<NetInfoStateType, NetInfoState> = {
  bluetooth: {
    type: NetInfoStateType.bluetooth,
    details: {
      isConnectionExpensive: false,
    },
    isConnected: true,
    isWifiEnabled: false,
    isInternetReachable: true,
  },
  cellular: {
    type: NetInfoStateType.cellular,
    isConnected: true,
    isInternetReachable: null,
    isWifiEnabled: false,
    details: {
      carrier: "Claro",
      cellularGeneration: null,
      isConnectionExpensive: true,
    },
  },
  ethernet: {
    type: NetInfoStateType.ethernet,
    details: {
      ipAddress: "0.0.0.0",
      subnet: "255.255.255.0",
      isConnectionExpensive: false,
    },
    isConnected: false,
    isInternetReachable: false,
    isWifiEnabled: true,
  },
  none: {
    type: NetInfoStateType.none,
    isConnected: false,
    isInternetReachable: false,
    isWifiEnabled: false,
    details: null,
  },
  other: {
    type: NetInfoStateType.other,
    isWifiEnabled: false,
    isInternetReachable: false,
    isConnected: false,
    details: {
      isConnectionExpensive: false,
    },
  },
  unknown: {
    type: NetInfoStateType.unknown,
    details: null,
    isConnected: null,
    isInternetReachable: null,
    isWifiEnabled: false,
  },
  vpn: {
    type: NetInfoStateType.vpn,
    isConnected: false,
    isInternetReachable: false,
    isWifiEnabled: false,
    details: {
      isConnectionExpensive: false,
    },
  },
  wimax: {
    type: NetInfoStateType.wimax,
    isConnected: false,
    isInternetReachable: true,
    isWifiEnabled: true,
    details: {
      isConnectionExpensive: false,
    },
  },
  wifi: {
    type: NetInfoStateType.wifi,
    details: {
      ssid: null,
      bssid: "00:00:00:00",
      frequency: 5.123,
      ipAddress: "0.0.0.0",
      linkSpeed: 100,
      rxLinkSpeed: 80,
      txLinkSpeed: 100,
      strength: 40,
      subnet: "255.255.255.0",
      isConnectionExpensive: false,
    },
    isConnected: true,
    isWifiEnabled: true,
    isInternetReachable: true,
  },
};

type SignalQuality = {
  label: string;
  level: number;
};

function getSignalQuality(strength: number | null): SignalQuality {
  if (strength === null) {
    return {
      label: "No signal",
      level: 0,
    };
  }

  if (strength < 20) {
    return {
      label: "Weak",
      level: 1,
    };
  }

  if (strength < 40) {
    return {
      label: "Fair",
      level: 2,
    };
  }

  if (strength < 65) {
    return {
      label: "Good",
      level: 3,
    };
  }

  return {
    label: "Excellent",
    level: 4,
  };
}
type CircleProps = {
  netInfo: NetInfoState | null;
};

function Circle({ netInfo }: CircleProps) {
  const { width } = useWindowDimensions();
  const theme = useTheme();
  // const { netInfo } = useNetworkUpdates();

  const size = Math.ceil(width / 3) * 2;

  let strength = 0;

  if (netInfo?.type === NetInfoStateType.wifi) {
    strength = netInfo?.details?.strength ?? 0;
  }

  const quality = getSignalQuality(strength);

  return (
    <AnimatedGauge
      value={strength}
      size={size}
      strokeWidth={7}
      trackColor={theme.colors.border.default.toString()}
      progressColor={theme.colors.content.base.toString()}
      styles={{
        alignSelf: "center",
      }}
    >
      <View
        style={{
          flex: 1,
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontFamily: theme.fontFamily.mono.regular,
            fontSize: 48,
            color: theme.colors.content.base,
          }}
        >
          {strength}%
        </Text>

        <QualityLabel quality={quality} />
        {/* <Text
          style={{
            fontFamily: theme.fontFamily.regular,
            color: theme.colors.content.muted,
            fontSize: theme.fontSizes.bodySmall.fontSize,
            lineHeight: theme.fontSizes.bodySmall.lineHeight,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}
        >
          {quality.label}
        </Text> */}
      </View>
    </AnimatedGauge>
  );
}

type QualityLabelProps = {
  quality: SignalQuality;
};

type QualityData = {
  current: SignalQuality;
  next: SignalQuality;
};

const ANIMATION_DURATION = 1000;
const ANIMATION_OFFSET = 8;

function QualityLabel({ quality }: QualityLabelProps) {
  const theme = useTheme();

  const [qualityData, setQualityData] = useState<QualityData>({
    current: quality,
    next: quality,
  });

  // TODO: tentar com estados diferentes
  const previousProgress = useSharedValue(1);

  const progress = useSharedValue(1);
  const direction = useSharedValue(1);

  const finishTransition = useCallback(() => {
    console.log("TERMINOU DE ANIMAR");
    // TODO: quando terminar de animar, alterar os estados.
    // Quando os estados alterarem com o valor de next -> current, exibir o
    setQualityData((state) => ({
      current: state.next,
      next: state.next,
    }));
  }, []);

  // useEffect(() => {
  //   if (qualityData.current.level === qualityData.next.level) {
  //     console.log('AGORA FAZ A PARADA')
  //   }
  // }, [qualityData])

  useEffect(() => {
    if (quality.level === qualityData.current.level) {
      return;
    }

    direction.value = quality.level > qualityData.current.level ? 1 : -1;

    setQualityData((state) => ({
      current: state.current,
      next: quality,
    }));

    progress.value = 0;

    progress.value = withTiming(
      1,
      {
        duration: ANIMATION_DURATION,
        easing: Easing.out(Easing.cubic),
      },
      (finished) => {
        if (finished) {
          runOnJS(finishTransition)();
        }
      },
    );
  }, [
    quality,
    qualityData.current.level,
    direction,
    progress,
    finishTransition,
  ]);

  const currentAnimatedStyles = useAnimatedStyle(() => ({
    opacity: interpolate(progress.value, [0, 1], [1, 0]),
    transform: [
      {
        translateY: interpolate(
          progress.value,
          [0, 1],
          [0, direction.value * -ANIMATION_OFFSET],
        ),
      },
    ],
  }));

  const nextAnimatedStyles = useAnimatedStyle(() => ({
    opacity: interpolate(progress.value, [0, 1], [0, 1]),
    transform: [
      {
        translateY: interpolate(
          progress.value,
          [0, 1],
          [direction.value * ANIMATION_OFFSET, 0],
        ),
      },
    ],
  }));

  return (
    <View
      style={{
        height: theme.fontSizes.bodySmall.lineHeight,
        width: 80,
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Animated.Text
        style={[
          {
            position: "absolute" as const,
            fontFamily: theme.fontFamily.regular,
            color: theme.colors.content.muted,
            fontSize: theme.fontSizes.bodySmall.fontSize,
            lineHeight: theme.fontSizes.bodySmall.lineHeight,
            letterSpacing: 1,
            textTransform: "uppercase" as const,
          },
          currentAnimatedStyles,
        ]}
      >
        {qualityData.current.label}
      </Animated.Text>

      <Animated.Text
        style={[
          {
            position: "absolute" as const,
            fontFamily: theme.fontFamily.regular,
            color: theme.colors.content.muted,
            fontSize: theme.fontSizes.bodySmall.fontSize,
            lineHeight: theme.fontSizes.bodySmall.lineHeight,
            letterSpacing: 1,
            textTransform: "uppercase" as const,
          },
          nextAnimatedStyles,
        ]}
      >
        {qualityData.next.label}
      </Animated.Text>
    </View>
  );
}

// function QualityLabel({ quality }: QualityLabelProps) {
//   const theme = useTheme();

//   const [qualityData, setQualityData] = useState<{
//     current: QualityData;
//     next: QualityData;
//   }>({
//     current: quality,
//     next: quality,
//   });

//   const currentTranslateY = useSharedValue(0);
//   const nextTranslateY = useSharedValue(ANIMATION_OFFSET);

//   const currentOpacity = useSharedValue(1);
//   const nextOpacity = useSharedValue(0);

//   const finishTransition = useCallback((direction: number) => {
//     setQualityData((state) => ({
//       current: state.next,
//       next: state.next,
//     }));

//     // The current slot is now showing the new value.
//     // Reset the other slot outside the visible area,
//     // ready for the next transition.
//     currentTranslateY.value = 0;
//     currentOpacity.value = 1;

//     nextTranslateY.value = direction * ANIMATION_OFFSET;
//     nextOpacity.value = 0;
//   }, [currentOpacity,
//     // Reset the other slot outside the visible area,
//     // ready for the next transition.
//     currentTranslateY, nextOpacity, nextTranslateY]);

//   useEffect(() => {
//     if (quality.level === qualityData.current.level) {
//       return;
//     }

//     const direction =
//       quality.level > qualityData.current.level ? 1 : -1;

//     setQualityData((state) => ({
//       current: state.current,
//       next: quality,
//     }));

//     // Make sure the incoming slot starts outside the visible area.
//     nextTranslateY.value = direction * ANIMATION_OFFSET;
//     nextOpacity.value = 0;

//     currentTranslateY.value = 0;
//     currentOpacity.value = 1;

//     currentTranslateY.value = withTiming(
//       direction * -ANIMATION_OFFSET,
//       {
//         duration: ANIMATION_DURATION,
//         easing: Easing.out(Easing.cubic),
//       },
//     );

//     currentOpacity.value = withTiming(0, {
//       duration: ANIMATION_DURATION,
//       easing: Easing.out(Easing.cubic),
//     });

//     nextTranslateY.value = withTiming(
//       0,
//       {
//         duration: ANIMATION_DURATION,
//         easing: Easing.out(Easing.cubic),
//       },
//       (finished) => {
//         if (finished) {
//           runOnJS(finishTransition)(direction);
//         }
//       },
//     );

//     nextOpacity.value = withTiming(1, {
//       duration: ANIMATION_DURATION,
//       easing: Easing.out(Easing.cubic),
//     });
//   }, [
//     quality,
//     qualityData.current.level,
//     currentTranslateY,
//     nextTranslateY,
//     currentOpacity,
//     nextOpacity,
//     finishTransition,
//   ]);

//   const currentAnimatedStyles = useAnimatedStyle(() => ({
//     opacity: currentOpacity.value,
//     transform: [
//       {
//         translateY: currentTranslateY.value,
//       },
//     ],
//   }));

//   const nextAnimatedStyles = useAnimatedStyle(() => ({
//     opacity: nextOpacity.value,
//     transform: [
//       {
//         translateY: nextTranslateY.value,
//       },
//     ],
//   }));

//   const labelStyle = {
//     position: "absolute" as const,
//     fontFamily: theme.fontFamily.regular,
//     color: theme.colors.content.muted,
//     fontSize: theme.fontSizes.bodySmall.fontSize,
//     lineHeight: theme.fontSizes.bodySmall.lineHeight,
//     letterSpacing: 1,
//     textTransform: "uppercase" as const,
//   };

//   return (
//     <View
//       style={{
//         height: theme.fontSizes.bodySmall.lineHeight,
//         width: 80,
//         alignItems: "center",
//         justifyContent: "center",
//         overflow: "hidden",
//       }}
//     >
//       <Animated.Text
//         style={[
//           labelStyle,
//           currentAnimatedStyles,
//         ]}
//       >
//         {qualityData.current.label}
//       </Animated.Text>

//       <Animated.Text
//         style={[
//           labelStyle,
//           nextAnimatedStyles,
//         ]}
//       >
//         {qualityData.next.label}
//       </Animated.Text>
//     </View>
//   );
// }

function Network() {
  const theme = useTheme();
  const { netInfo } = useNetworkUpdates();

  const isReachable = netInfo?.isInternetReachable ?? false;

  return (
    <View
      style={{
        paddingHorizontal: 16,
        gap: 8,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
        }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 10,
            height: 10,
            borderRadius: 10,
            // backgroundColor: theme.colors.content.base,
            backgroundColor: theme.colors.semantic.success,
          }}
        />
        <Text
          style={{
            fontFamily: theme.fontFamily.regular,
            fontSize: theme.fontSizes.body.fontSize,
            lineHeight: theme.fontSizes.body.lineHeight,
            // color: theme.colors.content.muted,
            color: theme.colors.semantic.success,
            textAlign: "center",
          }}
        >
          {isReachable ? "Internet reachable" : "Internet not reachable"}
        </Text>
      </View>
    </View>
  );
}

function Summary() {
  const theme = useTheme();

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
        }}
      >
        <SymbolView
          tintColor={theme.colors.content.muted}
          name={{
            android: "arrow_circle_down",
          }}
        />
        <Text
          style={{
            fontFamily: theme.fontFamily.regular,
            fontSize: theme.fontSizes.subtitle.fontSize,
            lineHeight: theme.fontSizes.subtitle.lineHeight,
            color: theme.colors.content.base,
          }}
        >
          70
        </Text>
        <Text
          style={{
            fontFamily: theme.fontFamily.regular,
            fontSize: theme.fontSizes.body.fontSize,
            lineHeight: theme.fontSizes.body.lineHeight,
            color: theme.colors.content.muted,
          }}
        >
          Mbps
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
        }}
      >
        <SymbolView
          tintColor={theme.colors.content.muted}
          name={{
            android: "arrow_circle_up",
          }}
        />
        <Text
          style={{
            fontFamily: theme.fontFamily.regular,
            fontSize: theme.fontSizes.subtitle.fontSize,
            lineHeight: theme.fontSizes.subtitle.lineHeight,
            color: theme.colors.content.base,
          }}
        >
          84
        </Text>
        <Text
          style={{
            fontFamily: theme.fontFamily.regular,
            fontSize: theme.fontSizes.body.fontSize,
            lineHeight: theme.fontSizes.body.lineHeight,
            color: theme.colors.content.muted,
          }}
        >
          Mbps
        </Text>
      </View>
    </View>
  );
}

function Tip() {
  const theme = useTheme();
  const safeInsets = useSafeAreaInsets();

  return (
    <View
      style={{
        padding: 16,
        borderRadius: theme.radii[7],
        borderWidth: 1,
        borderColor: theme.colors.border.default,
        // backgroundColor: theme.colors.surface.elevated,
        // elevation: 1,
        // marginHorizontal: 16,
        // position: "absolute",
        // bottom: 16 + safeInsets.bottom,
      }}
    >
      <Text
        style={{
          fontFamily: theme.fontFamily.medium,
          fontSize: theme.fontSizes.body.fontSize,
          lineHeight: theme.fontSizes.body.lineHeight,
          color: theme.colors.content.base,
        }}
      >
        Good connection
      </Text>
      <Text
        style={{
          fontFamily: theme.fontFamily.medium,
          fontSize: theme.fontSizes.bodySmall.fontSize,
          lineHeight: theme.fontSizes.bodySmall.lineHeight,
          color: theme.colors.content.muted,
        }}
      >
        Your signal and link speed look good.
      </Text>
    </View>
  );
}

// function ShowMoreButton() {
//   return (
//     <Host>
//       <ModalBottomSheet onDismissRequest={console.log}>
//         <Row />
//       </ModalBottomSheet>
//     </Host>
//   );
// }
