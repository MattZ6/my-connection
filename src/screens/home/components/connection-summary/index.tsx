import {
  type NetInfoState,
  NetInfoStateType,
} from "@react-native-community/netinfo";
import { View } from "react-native";
import { Section } from "@/components/ui/section";
import { Divider } from "./component/divider";
import { ListItem } from "./component/list-item";

type Props = {
  info: NetInfoState;
};

export function ConnectionSummary({ info }: Props) {
  const showWiFiEnabledSection =
    info.type === NetInfoStateType.wifi &&
    info.isWifiEnabled !== null &&
    info.isWifiEnabled !== undefined;

  return (
    <Section title="Summary">
      <View
        style={{
          gap: 16,
        }}
      >
        {showWiFiEnabledSection && (
          <>
            <ListItem
              label="Wi-Fi Connection"
              value={info.isWifiEnabled ? "Yes" : "No"}
              hint="Whether the device's Wi-Fi is on or off."
            />
            <Divider />
          </>
        )}

        <ListItem
          label="Connected"
          value={info.isConnected ? "Yes" : "No"}
          hint="If there is an active network connection."
        />

        <Divider />

        <ListItem
          label="Internet Availability"
          value={info.isInternetReachable ? "Yes" : "No"}
          hint="If the internet is reachable with the currently active network connection."
        />
      </View>
    </Section>
  );

  // return (
  //   <Column verticalArrangement={{ spacedBy: 16 }} modifiers={[paddingAll(24)]}>
  //     <Text
  //       color={Color.android.dynamic.onSurfaceVariant.toString()}
  //       style={{ typography: "labelLarge" }}
  //     >
  //       Summary
  //     </Text>

  //     <Column verticalArrangement={{ spacedBy: 20 }}>
  //       <Row modifiers={[fillMaxWidth()]}>
  //         <Column modifiers={[weight(1)]}>
  //           <Text
  //             color={Color.android.dynamic.onSurface.toString()}
  //             style={{ typography: "titleLarge" }}
  //           >
  //             Connected
  //           </Text>
  //           <Text
  //             color={Color.android.dynamic.onSurfaceVariant.toString()}
  //             style={{ typography: "bodyLarge" }}
  //           >
  //             If there is an active network connection.
  //           </Text>
  //         </Column>
  //         <Text
  //           color={Color.android.dynamic.onSurfaceVariant.toString()}
  //           style={{ typography: "bodyLarge" }}
  //         >
  //           {info.isConnected ? "Yes" : "No"}
  //         </Text>
  //       </Row>

  //       <Row modifiers={[fillMaxWidth()]}>
  //         <Column modifiers={[weight(1)]}>
  //           <Text
  //             color={Color.android.dynamic.onSurface.toString()}
  //             style={{ typography: "titleLarge" }}
  //           >
  //             Internet Availability
  //           </Text>
  //           <Text
  //             color={Color.android.dynamic.onSurfaceVariant.toString()}
  //             style={{ typography: "bodyLarge" }}
  //           >
  //             If the internet is reachable with the currently active network
  //             connection.
  //           </Text>
  //         </Column>
  //         <Text
  //           color={Color.android.dynamic.onSurfaceVariant.toString()}
  //           style={{ typography: "bodyLarge" }}
  //         >
  //           {info.isInternetReachable ? "Yes" : "No"}
  //         </Text>
  //       </Row>
  //     </Column>
  //   </Column>
  // );
}
