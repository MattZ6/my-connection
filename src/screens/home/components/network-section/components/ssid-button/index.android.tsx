import {
  Column,
  Host,
  type ModalBottomSheetRef,
  RNHostView,
  Row,
  Spacer,
  Surface,
  Text,
} from "@expo/ui/jetpack-compose";
import {
  fillMaxWidth,
  paddingAll,
  width,
} from "@expo/ui/jetpack-compose/modifiers";
import { refresh } from "@react-native-community/netinfo";
import { ActivityAction, startActivityAsync } from "expo-intent-launcher";
import * as ExpoLocation from "expo-location";
import { type AndroidSymbol, SymbolView } from "expo-symbols";
import { useCallback, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Linking } from "react-native";

import { useHaptics } from "@/hooks/use-haptics";
import { useTheme } from "@/hooks/use-theme";

import { LocationBottomSheet } from "./components/location-bottom-sheet";

type Props = {
  ssid: string | null;
};

type SheetInfoAction = {
  title: string;
  handler: () => Promise<void> | void;
};

type SheetInfo = {
  icon: AndroidSymbol;
  title: string;
  message: string;
  action: SheetInfoAction;
};

type SheetState = {
  isOpen: boolean;
  info?: SheetInfo;
};

export function SSIDButton({ ssid }: Props) {
  const sheetRef = useRef<ModalBottomSheetRef>(null);
  const [sheet, setSheet] = useState<SheetState>({ isOpen: false });
  const { resolvedTheme, colors, fontFamily, fontSizes } = useTheme();
  const { performTapFeedback } = useHaptics();
  const { t } = useTranslation("translation", {
    keyPrefix: "home.sections.network.fields.ssid",
  });

  const isEnabled = !ssid;

  const handleClose = useCallback(async () => {
    if (sheetRef.current) {
      await sheetRef.current.hide();
      setSheet((prev) => ({ ...prev, isOpen: false }));
    }
  }, []);

  const handleOpenAppSettings = useCallback(() => {
    performTapFeedback();
    Linking.openSettings();
    handleClose();
  }, [handleClose, performTapFeedback]);

  const handleOpenLocationSettings = useCallback(() => {
    performTapFeedback();
    startActivityAsync(ActivityAction.LOCATION_SOURCE_SETTINGS);
    handleClose();
  }, [handleClose, performTapFeedback]);

  const handleShowSSID = useCallback(async () => {
    performTapFeedback();

    try {
      const permission = await ExpoLocation.getForegroundPermissionsAsync();

      if (!permission.granted) {
        if (permission.canAskAgain) {
          setSheet({
            isOpen: true,
            info: {
              icon: "network_manage",
              title: t("action.handling.permission_request.title"),
              message: t("action.handling.permission_request.message"),
              action: {
                title: t("action.handling.permission_request.action.title"),
                handler: async () => {
                  performTapFeedback();

                  try {
                    const result =
                      await ExpoLocation.requestForegroundPermissionsAsync();

                    if (!result.granted) {
                      if (!permission.canAskAgain) {
                        setSheet({
                          isOpen: true,
                          info: {
                            icon: "wifi_lock",
                            title: t(
                              "action.handling.permission_blocked.title",
                            ),
                            message: t(
                              "action.handling.permission_blocked.message",
                            ),
                            action: {
                              title: t(
                                "action.handling.permission_blocked.action.title",
                              ),
                              handler: handleOpenAppSettings,
                            },
                          },
                        });
                      }
                      return;
                    }

                    const locationEnabled =
                      await ExpoLocation.hasServicesEnabledAsync();

                    if (!locationEnabled) {
                      setSheet({
                        isOpen: true,
                        info: {
                          icon: "wifi_off",
                          title: t("action.handling.location_off.title"),
                          message: t("action.handling.location_off.message"),
                          action: {
                            title: t(
                              "action.handling.location_off.action.title",
                            ),
                            handler: handleOpenLocationSettings,
                          },
                        },
                      });
                      return;
                    }

                    refresh();
                  } catch (error) {
                    console.log(error);
                  }
                },
              },
            },
          });
        } else {
          setSheet({
            isOpen: true,
            info: {
              icon: "wifi_lock",
              title: t("action.handling.permission_blocked.title"),
              message: t("action.handling.permission_blocked.message"),
              action: {
                title: t("action.handling.permission_blocked.action.title"),
                handler: handleOpenAppSettings,
              },
            },
          });
        }
        return;
      }

      const locationEnabled = await ExpoLocation.hasServicesEnabledAsync();

      if (!locationEnabled) {
        setSheet({
          isOpen: true,
          info: {
            icon: "wifi_off",
            title: t("action.handling.location_off.title"),
            message: t("action.handling.location_off.message"),
            action: {
              title: t("action.handling.location_off.action.title"),
              handler: handleOpenLocationSettings,
            },
          },
        });
        return;
      }

      refresh();
    } catch (error) {
      console.log(error);
    }
  }, [
    t,
    handleOpenAppSettings,
    handleOpenLocationSettings,
    performTapFeedback,
  ]);

  return (
    <Host matchContents={{ vertical: true }} colorScheme={resolvedTheme}>
      <Column modifiers={[fillMaxWidth()]}>
        <Surface
          color={colors.surface.elevated}
          contentColor={colors.content.base}
          onClick={handleShowSSID}
          modifiers={[fillMaxWidth()]}
          enabled={isEnabled}
        >
          <Row
            verticalAlignment="center"
            horizontalArrangement="spaceBetween"
            modifiers={[paddingAll(16)]}
          >
            <Text
              style={{
                fontFamily: fontFamily.medium,
                fontSize: fontSizes.body.fontSize,
                lineHeight: fontSizes.body.lineHeight,
              }}
            >
              {t("title")}
            </Text>

            <Spacer modifiers={[width(16)]} />

            {ssid ? (
              <Text
                color={colors.content.muted.toString()}
                style={{
                  fontFamily: fontFamily.regular,
                  fontSize: fontSizes.body.fontSize,
                  lineHeight: fontSizes.body.lineHeight,
                  textAlign: "right",
                }}
              >
                {ssid}
              </Text>
            ) : (
              <Row verticalAlignment="center" horizontalAlignment="end">
                <Text
                  color={colors.content.muted.toString()}
                  style={{
                    fontFamily: fontFamily.regular,
                    fontSize: fontSizes.body.fontSize,
                    lineHeight: fontSizes.body.lineHeight,
                    textAlign: "right",
                  }}
                >
                  {t("action.title")}
                </Text>

                <Spacer modifiers={[width(12)]} />

                <RNHostView matchContents>
                  <SymbolView
                    name={{ android: "lock" }}
                    size={20}
                    tintColor={colors.content.muted}
                  />
                </RNHostView>
              </Row>
            )}
          </Row>
        </Surface>
      </Column>

      <LocationBottomSheet
        ref={sheetRef}
        isOpen={sheet.isOpen}
        onCloseRequest={handleClose}
        icon={sheet.info?.icon}
        title={sheet.info?.title ?? ""}
        description={sheet.info?.message ?? ""}
        actionTitle={sheet.info?.action.title}
        onAction={sheet.info?.action.handler}
      />
    </Host>
  );
}
