import { useTranslation } from "react-i18next";
import { Text } from "react-native";
import type { LocationContextTypes } from "@/contexts/location/types";
import { useStyles } from "@/hooks/use-styles";
import { getStyles } from "./styles";

type Props = {
  permission: LocationContextTypes.Permission;
  precision: LocationContextTypes.Precision;
  canAskAgain: boolean;
  locationServicesEnabled: boolean;
};

export function Hint({
  permission,
  precision,
  canAskAgain,
  locationServicesEnabled,
}: Props) {
  const { t } = useTranslation("translation", {
    keyPrefix: "permissions.sections.location.disclaimer",
  });
  const styles = useStyles(getStyles);

  if (permission === "undetermined") {
    return <Text style={styles.text}>{t("permission_undetermined")}</Text>;
  }

  if (permission === "denied") {
    if (canAskAgain) {
      return (
        <Text style={styles.text}>{t("permission_denied_can_ask_again")}</Text>
      );
    }

    return <Text style={styles.text}>{t("permission_denied")}</Text>;
  }

  if (precision !== "precise") {
    return <Text style={styles.text}>{t("invalid_precision")}</Text>;
  }

  if (!locationServicesEnabled) {
    return <Text style={styles.text}>{t("location_disabled")}</Text>;
  }

  return <Text style={styles.text}>{t("all_right")}</Text>;
}
