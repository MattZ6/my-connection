import {
  type NetInfoState,
  NetInfoStateType,
} from "@react-native-community/netinfo";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { Section } from "@/components/ui/section";
import { Divider } from "./components/divider";
import { ListItem } from "./components/list-item";

type Props = {
  info: NetInfoState;
};

export function ConnectionSummary({ info }: Props) {
  const { t } = useTranslation();

  const showWiFiEnabledSection =
    info.type === NetInfoStateType.wifi &&
    info.isWifiEnabled !== null &&
    info.isWifiEnabled !== undefined;

  return (
    <Section title={t("home.sections.summary.title")}>
      <View
        style={{
          gap: 16,
        }}
      >
        {showWiFiEnabledSection && (
          <>
            <ListItem
              label={t("home.sections.summary.fields.wifi_enabled.title")}
              value={t(
                `home.sections.summary.fields.wifi_enabled.value.${info.isWifiEnabled}`,
              )}
              hint={t("home.sections.summary.fields.wifi_enabled.description")}
            />

            <Divider />
          </>
        )}

        <ListItem
          label={t("home.sections.summary.fields.connected.title")}
          value={t(
            `home.sections.summary.fields.connected.value.${info.isConnected}`,
          )}
          hint={t("home.sections.summary.fields.connected.description")}
        />

        <Divider />

        <ListItem
          label={t("home.sections.summary.fields.internet_reachable.title")}
          value={t(
            `home.sections.summary.fields.internet_reachable.value.${info.isInternetReachable}`,
          )}
          hint={t(
            "home.sections.summary.fields.internet_reachable.description",
          )}
        />
      </View>
    </Section>
  );
}
