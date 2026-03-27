import {
  type NetInfoState,
  NetInfoStateType,
} from "@react-native-community/netinfo";
import { View } from "react-native";
import { Section } from "@/components/ui/section";
import { Divider } from "./components/divider";
import { ListItem } from "./components/list-item";

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
              label="Wi-Fi Enabled"
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
          label="Internet Available"
          value={info.isInternetReachable ? "Yes" : "No"}
          hint="If the internet is reachable with the currently active network connection."
        />
      </View>
    </Section>
  );
}
