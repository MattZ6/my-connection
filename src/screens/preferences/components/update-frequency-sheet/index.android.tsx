import {
  Column,
  HorizontalDivider,
  Host,
  ModalBottomSheet,
  type ModalBottomSheetRef,
  RNHostView,
  Row,
  Shape,
  Spacer,
  Surface,
  Text,
} from "@expo/ui/jetpack-compose";
import {
  fillMaxWidth,
  padding,
  weight,
  width,
} from "@expo/ui/jetpack-compose/modifiers";
import { SymbolView } from "expo-symbols";
import { Fragment, useCallback, useRef } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import type { NetworkUpdatesContextTypes } from "@/contexts/network-updates/types";

import { useHaptics } from "@/hooks/use-haptics";
import { useTheme } from "@/hooks/use-theme";

import {
  DEFAULT_UPDATE_FREQUENCY,
  UPDATE_FREQUENCY_OPTIONS,
  type UpdateFrequencySheetProps,
} from "./types";

type Frequency = NetworkUpdatesContextTypes.UpdateFrequency;

export function UpdateFrequencySheet({
  isOpen,
  value,
  onSelect,
  onClose,
}: UpdateFrequencySheetProps) {
  const sheetRef = useRef<ModalBottomSheetRef>(null);
  const { resolvedTheme, colors, fontFamily, radii, fontSizes } = useTheme();
  const insets = useSafeAreaInsets();
  const { performSelectFeedback } = useHaptics();
  const { t } = useTranslation("translation", {
    keyPrefix: "preferences.frequency_sheet",
  });

  const handleSelect = useCallback(
    async (option: Frequency) => {
      performSelectFeedback();
      onSelect(option);
      await sheetRef.current?.hide();
      onClose();
    },
    [onClose, onSelect, performSelectFeedback],
  );

  if (!isOpen) {
    return null;
  }

  const cardShape = Shape.RoundedCorner({
    cornerRadii: {
      topStart: radii[6],
      topEnd: radii[6],
      bottomStart: radii[6],
      bottomEnd: radii[6],
    },
  });

  const chipShape = Shape.RoundedCorner({
    cornerRadii: {
      topStart: radii[5],
      topEnd: radii[5],
      bottomStart: radii[5],
      bottomEnd: radii[5],
    },
  });

  return (
    // The sheet opens in its own window, so the Host must not take layout space.
    <Host colorScheme={resolvedTheme} style={styles.host}>
      <ModalBottomSheet
        ref={sheetRef}
        onDismissRequest={onClose}
        containerColor={colors.surface.elevated}
        contentColor={colors.content.base}
      >
        <Column
          verticalArrangement={{ spacedBy: 16 }}
          modifiers={[fillMaxWidth(), padding(16, 0, 16, 24 + insets.bottom)]}
        >
          <Column
            verticalArrangement={{ spacedBy: 4 }}
            modifiers={[padding(4, 0, 4, 0)]}
          >
            <Text
              color={colors.content.base.toString()}
              style={{
                fontFamily: fontFamily.semiBold,
                fontSize: fontSizes.title.fontSize,
                lineHeight: fontSizes.title.fontSize,
              }}
            >
              {t("title")}
            </Text>
            <Text
              color={colors.content.muted.toString()}
              style={{
                fontFamily: fontFamily.regular,
                fontSize: fontSizes.bodySmall.fontSize,
                lineHeight: fontSizes.bodySmall.lineHeight,
              }}
            >
              {t("description")}
            </Text>
          </Column>

          <Surface
            color={colors.surface.base}
            shape={cardShape}
            modifiers={[fillMaxWidth()]}
          >
            <Column>
              {UPDATE_FREQUENCY_OPTIONS.map((option, index) => (
                <Fragment key={option}>
                  {index > 0 && (
                    <HorizontalDivider
                      thickness={2}
                      color={colors.surface.elevated}
                    />
                  )}

                  <Surface
                    color="transparent"
                    selected={option === value}
                    onClick={() => handleSelect(option)}
                    modifiers={[fillMaxWidth()]}
                  >
                    <Row
                      verticalAlignment="center"
                      modifiers={[fillMaxWidth(), padding(16, 14, 16, 14)]}
                    >
                      <Column
                        verticalArrangement={{ spacedBy: 2 }}
                        modifiers={[weight(1)]}
                      >
                        <Row
                          verticalAlignment="center"
                          horizontalArrangement={{ spacedBy: 8 }}
                        >
                          <Text
                            color={colors.content.base.toString()}
                            style={{
                              fontFamily: fontFamily.mono.regular,
                              fontSize: 15,
                              lineHeight: 20,
                            }}
                          >
                            {option}
                          </Text>

                          {option === DEFAULT_UPDATE_FREQUENCY && (
                            <Surface
                              color={colors.surface.elevated}
                              shape={chipShape}
                            >
                              <Text
                                color={colors.content.muted.toString()}
                                style={{
                                  fontFamily: fontFamily.regular,
                                  fontSize: 11,
                                  lineHeight: 16,
                                }}
                                modifiers={[padding(8, 1, 8, 1)]}
                              >
                                {t("default")}
                              </Text>
                            </Surface>
                          )}
                        </Row>

                        <Text
                          color={colors.content.muted.toString()}
                          style={{
                            fontFamily: fontFamily.regular,
                            fontSize: 13,
                            lineHeight: 18,
                          }}
                        >
                          {t(`options.${option}`)}
                        </Text>
                      </Column>

                      <Spacer modifiers={[width(16)]} />

                      {option === value ? (
                        <RNHostView matchContents>
                          <SymbolView
                            name={{ android: "check" }}
                            size={22}
                            tintColor={colors.content.base}
                          />
                        </RNHostView>
                      ) : (
                        <Spacer modifiers={[width(22)]} />
                      )}
                    </Row>
                  </Surface>
                </Fragment>
              ))}
            </Column>
          </Surface>
        </Column>
      </ModalBottomSheet>
    </Host>
  );
}

const styles = StyleSheet.create({
  host: {
    position: "absolute",
    width: 0,
    height: 0,
  },
});
