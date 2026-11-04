import {
  Button,
  Column,
  HorizontalDivider,
  RNHostView,
  Row,
  Shape,
  Surface,
  Text,
} from "@expo/ui/jetpack-compose";
import {
  clickable,
  fillMaxWidth,
  padding,
  weight,
} from "@expo/ui/jetpack-compose/modifiers";
import { type AndroidSymbol, SymbolView } from "expo-symbols";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { type ColorValue, StyleSheet, View } from "react-native";

import { useTheme } from "@/hooks/use-theme";

import { useCopyToClipboard } from "../../../../hooks/use-copy-to-clipboard";
import type {
  ConnectionDetails,
  DetailRow,
  DetailValue,
} from "../../../../utils/connection-details";
import { CopyIcon } from "../../../copy-icon";

type Props = {
  details: ConnectionDetails;
  onAllowAccess: () => void;
};

/**
 * Native (Jetpack Compose) version of the details content, so the bottom
 * sheet measures and scrolls it by itself.
 */
export function ComposeDetailsContent({ details, onAllowAccess }: Props) {
  const { colors, fontFamily, radii } = useTheme();
  const { t } = useTranslation("translation", {
    keyPrefix: "home.details",
  });
  const { copiedKey, copy } = useCopyToClipboard<DetailRow["label"]>();

  const cardShape = Shape.RoundedCorner({
    cornerRadii: {
      topStart: radii[6],
      topEnd: radii[6],
      bottomStart: radii[6],
      bottomEnd: radii[6],
    },
  });

  return (
    <Column verticalArrangement={{ spacedBy: 20 }}>
      <Text
        color={colors.content.base.toString()}
        style={{
          fontFamily: fontFamily.semiBold,
          fontSize: 20,
          lineHeight: 28,
        }}
      >
        {t("title")}
      </Text>

      {details.groups.map((group, groupIndex) => (
        <Fragment key={group.title}>
          <Column verticalArrangement={{ spacedBy: 8 }}>
            <Text
              color={colors.content.muted.toString()}
              style={{
                fontFamily: fontFamily.mono.regular,
                fontSize: 11,
                lineHeight: 16,
                letterSpacing: 1,
              }}
            >
              {t(`sections.${group.title}`).toUpperCase()}
            </Text>

            <Surface
              color={colors.surface.base}
              shape={cardShape}
              modifiers={[fillMaxWidth()]}
            >
              <Column>
                {group.rows.map((row, index) => {
                  const { copyValue } = row;
                  const isCopied = copiedKey === row.label;

                  return (
                    <Fragment key={row.label}>
                      {index > 0 && (
                        <HorizontalDivider
                          thickness={StyleSheet.hairlineWidth}
                          color={colors.border.default}
                        />
                      )}
                      <Row
                        verticalAlignment="center"
                        horizontalArrangement={{ spacedBy: 8 }}
                        modifiers={[
                          fillMaxWidth(),
                          ...(copyValue
                            ? [clickable(() => copy(row.label, copyValue))]
                            : []),
                          padding(16, 14, 16, 14),
                        ]}
                      >
                        {/* The label turns into "Copied" for a moment. */}
                        <Text
                          color={(isCopied
                            ? colors.semantic.success
                            : colors.content.muted
                          ).toString()}
                          style={{
                            fontFamily: fontFamily.regular,
                            fontSize: 14,
                            lineHeight: 20,
                          }}
                          modifiers={[padding(0, 0, 8, 0)]}
                        >
                          {isCopied ? t("copied") : t(`fields.${row.label}`)}
                        </Text>
                        <Row
                          horizontalArrangement="end"
                          verticalAlignment="center"
                          modifiers={[weight(1)]}
                        >
                          <Value value={row.value} />
                        </Row>
                        {/* Outside the weighted row, so a long value never pushes it out. */}
                        {copyValue && (
                          <RNHostView matchContents>
                            <CopyIcon isCopied={isCopied} />
                          </RNHostView>
                        )}
                      </Row>
                    </Fragment>
                  );
                })}
              </Column>
            </Surface>
          </Column>

          {/* The hidden network note sits right below the Network group. */}
          {groupIndex === 0 && details.note === "hidden_network" && (
            <Surface
              color={colors.surface.elevated}
              shape={cardShape}
              border={{ width: 1, color: colors.border.default }}
              modifiers={[fillMaxWidth()]}
            >
              <Row
                horizontalArrangement={{ spacedBy: 12 }}
                modifiers={[padding(16, 16, 16, 16)]}
              >
                <SmallIcon
                  name="location_on"
                  color={colors.content.muted}
                  size={20}
                />
                <Column
                  verticalArrangement={{ spacedBy: 12 }}
                  modifiers={[weight(1)]}
                >
                  <Text
                    color={colors.content.muted.toString()}
                    style={{
                      fontFamily: fontFamily.regular,
                      fontSize: 13,
                      lineHeight: 18,
                    }}
                  >
                    {t("notes.hidden_network")}
                  </Text>
                  <Button
                    onClick={onAllowAccess}
                    colors={{
                      containerColor: colors.content.base,
                      contentColor: colors.surface.base,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: fontFamily.medium,
                        fontSize: 13,
                        lineHeight: 18,
                      }}
                    >
                      {t("notes.allow_access")}
                    </Text>
                  </Button>
                </Column>
              </Row>
            </Surface>
          )}
        </Fragment>
      ))}

      {details.note && details.note !== "hidden_network" && (
        <Text
          color={colors.content.muted.toString()}
          style={{
            fontFamily: fontFamily.regular,
            fontSize: 13,
            lineHeight: 18,
          }}
        >
          {t(`notes.${details.note}`)}
        </Text>
      )}
    </Column>
  );
}

function Value({ value }: { value: DetailValue }) {
  const { colors, fontFamily } = useTheme();
  const { t } = useTranslation("translation", {
    keyPrefix: "home",
  });

  const textStyle = {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "end" as const,
  };

  const text = (
    content: string,
    color: NonNullable<ColorValue> = colors.content.base,
  ) => (
    <Text color={color.toString()} style={textStyle}>
      {content}
    </Text>
  );

  const withIcon = (
    icon: AndroidSymbol,
    label: string,
    iconColor: NonNullable<ColorValue>,
    labelColor: NonNullable<ColorValue> = colors.content.base,
  ) => (
    <Row verticalAlignment="center" horizontalArrangement={{ spacedBy: 4 }}>
      <SmallIcon name={icon} color={iconColor} size={18} />
      {text(label, labelColor)}
    </Row>
  );

  switch (value.kind) {
    case "mono":
      return (
        <Text
          color={colors.content.base.toString()}
          style={{
            ...textStyle,
            fontFamily: fontFamily.mono.regular,
            fontSize: 13,
          }}
        >
          {value.text}
        </Text>
      );

    case "text":
      return text(value.text);

    case "translated":
      return text(t(value.key, value.params));

    case "hidden":
      return withIcon("lock", t("details.values.hidden"), colors.content.muted);

    case "metered":
      return value.value
        ? withIcon(
            "data_usage",
            t("details.values.yes"),
            colors.semantic.caution,
            colors.semantic.caution,
          )
        : withIcon("remove", t("details.values.no"), colors.content.muted);

    case "boolean":
      if (value.value === null) {
        return text(t("details.values.unknown"));
      }

      return value.value
        ? withIcon(
            "check",
            t("details.values.yes"),
            colors.semantic.success,
            colors.semantic.success,
          )
        : withIcon("remove", t("details.values.no"), colors.content.muted);
  }
}

type SmallIconProps = {
  name: AndroidSymbol;
  color: NonNullable<ColorValue>;
  size: number;
};

/** A Material Symbol hosted from RN, centered in a fixed square box. */
function SmallIcon({ name, color, size }: SmallIconProps) {
  return (
    <RNHostView matchContents>
      <View
        style={{
          width: size,
          height: size,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SymbolView name={{ android: name }} size={size} tintColor={color} />
      </View>
    </RNHostView>
  );
}
