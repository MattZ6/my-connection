import {
  type NetInfoState,
  NetInfoStateType,
} from "@react-native-community/netinfo";
import { useTranslation } from "react-i18next";

import { getLinkSpeeds } from "../../utils/format";
import { InfoPill } from "../info-pill";
import { LinkSpeed } from "../link-speed";

type Props = {
  netInfo: NetInfoState | null;
};

/** The one extra piece of information each connection type shows under the status. */
export function ConnectionExtras({ netInfo }: Props) {
  const { t } = useTranslation("translation", {
    keyPrefix: "alternative_home.pills",
  });

  switch (netInfo?.type) {
    case NetInfoStateType.wifi: {
      const speeds = getLinkSpeeds(netInfo.details);

      if (!speeds) {
        return null;
      }

      return <LinkSpeed download={speeds.download} upload={speeds.upload} />;
    }

    case NetInfoStateType.cellular:
      if (!netInfo.details.isConnectionExpensive) {
        return null;
      }

      return <InfoPill icon="data_usage" label={t("metered")} />;

    case NetInfoStateType.ethernet:
      if (!netInfo.details.ipAddress) {
        return null;
      }

      return <InfoPill icon="lan" label={netInfo.details.ipAddress} mono />;

    case NetInfoStateType.vpn:
      return <InfoPill icon="info" label={t("vpn")} />;

    default:
      return null;
  }
}
