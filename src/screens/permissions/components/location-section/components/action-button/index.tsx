import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Pressable } from "react-native";

import {
  SectionItemChevron,
  SectionItemContent,
  SectionItemLabel,
  SectionItemRoot,
  SectionItemTrailing,
} from "@/components/ui/section";

import type { LocationContextTypes } from "@/contexts/location/types";

import { useHaptics } from "@/hooks/use-haptics";

import { androidRippleConfig } from "@/theme/android-ripple";

import { LocationUtils } from "@/utils/location";

type Props = {
  permission: LocationContextTypes.Permission;
  precision: LocationContextTypes.Precision;
  canAskAgain: boolean;
  locationServicesEnabled: boolean;
  requestPermission: () => Promise<void>;
};

export function ActionButton({
  permission,
  precision,
  canAskAgain,
  locationServicesEnabled,
  requestPermission,
}: Props) {
  // TODO: add click lock
  const { performTapFeedback } = useHaptics();
  const { t } = useTranslation("translation", {
    keyPrefix: "permissions.sections.location.action",
  });

  const handlePress = useCallback(() => {
    performTapFeedback();

    if (permission === "undetermined" || permission === "denied") {
      if (canAskAgain) {
        requestPermission();
        return;
      }

      LocationUtils.openAppSettings();
      return;
    }

    if (precision !== "precise") {
      LocationUtils.openAppSettings();

      return;
    }

    if (!locationServicesEnabled) {
      LocationUtils.openDeviceLocationSettings();

      return;
    }
  }, [
    performTapFeedback,
    canAskAgain,
    locationServicesEnabled,
    permission,
    precision,
    requestPermission,
  ]);

  const text = useMemo(() => {
    if (permission === "undetermined") {
      return t("request_permission");
    }

    if (permission === "denied") {
      if (canAskAgain) {
        return t("request_permission");
      }

      return t("open_app_permission_settings");
    }

    if (precision !== "precise") {
      return t("open_app_permission_settings");
    }

    if (!locationServicesEnabled) {
      return t("open_location_settings");
    }

    return "";
  }, [t, permission, precision, canAskAgain, locationServicesEnabled]);

  if (
    permission === "granted" &&
    precision === "precise" &&
    locationServicesEnabled
  ) {
    return null;
  }

  return (
    <Pressable
      onPress={handlePress}
      android_disableSound
      android_ripple={androidRippleConfig}
    >
      <SectionItemRoot>
        <SectionItemContent>
          <SectionItemLabel>{text}</SectionItemLabel>
        </SectionItemContent>

        <SectionItemTrailing>
          <SectionItemChevron />
        </SectionItemTrailing>
      </SectionItemRoot>
    </Pressable>
  );
}
