import CheckIcon from "@expo/material-symbols/check.xml";
import ContentCopyIcon from "@expo/material-symbols/content_copy.xml";
import DataUsageIcon from "@expo/material-symbols/data_usage.xml";
import LocationOnIcon from "@expo/material-symbols/location_on.xml";
import LockIcon from "@expo/material-symbols/lock.xml";
import RemoveIcon from "@expo/material-symbols/remove.xml";
import {
  AnimatedVisibility,
  Box,
  Button,
  Column,
  EnterTransition,
  ExitTransition,
  HorizontalDivider,
  Icon,
  Row,
  Shape,
  Surface,
  Text,
} from "@expo/ui/jetpack-compose";
import {
  clickable,
  fillMaxWidth,
  padding,
  paddingAll,
  weight,
} from "@expo/ui/jetpack-compose/modifiers";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import type { ColorValue, ImageSourcePropType } from "react-native";

import { useTheme } from "@/hooks/use-theme";

import { useCopyToClipboard } from "../../../../hooks/use-copy-to-clipboard";
import type {
  ConnectionDetails,
  DetailRow,
  DetailValue,
} from "../../../../utils/connection-details";

type Props = {
  details: ConnectionDetails;
  onAllowAccess: () => void;
};

/**
 * Native (Jetpack Compose) version of the details content, so the bottom
 * sheet measures and scrolls it by itself.
 */
export function ComposeDetailsContent({ details, onAllowAccess }: Props) {
  const { colors, fontFamily, radii, fontSizes } = useTheme();
  const { t } = useTranslation("translation", {
    keyPrefix: "home.details",
  });
  const { isCopied: isRowCopied, copy } =
    useCopyToClipboard<DetailRow["label"]>();

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
          fontSize: fontSizes.title.fontSize,
          lineHeight: fontSizes.title.lineHeight,
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
                fontSize: fontSizes.label.fontSize,
                lineHeight: fontSizes.label.lineHeight,
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
                  const isCopied = isRowCopied(row.label);

                  return (
                    <Fragment key={row.label}>
                      {index > 0 && (
                        <HorizontalDivider
                          thickness={2}
                          color={colors.surface.elevated}
                        />
                      )}
                      <Row
                        verticalAlignment="center"
                        horizontalArrangement={{ spacedBy: 8 }}
                        modifiers={[
                          fillMaxWidth(),
                          // Always tappable; `copy` ignores taps while this
                          // row shows its "Copied" feedback.
                          ...(copyValue
                            ? [clickable(() => copy(row.label, copyValue))]
                            : []),
                          paddingAll(16),
                        ]}
                      >
                        <RowLabel
                          label={t(`fields.${row.label}`)}
                          copiedLabel={t("copied")}
                          isCopied={isCopied}
                        />
                        <Row
                          horizontalArrangement="end"
                          verticalAlignment="center"
                          modifiers={[weight(1)]}
                        >
                          <Value value={row.value} />
                        </Row>
                        {/* Outside the weighted row, so a long value never pushes it out. */}
                        {copyValue && <CopyIcon isCopied={isCopied} />}
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
                  source={LocationOnIcon}
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
                      fontSize: fontSizes.bodySmall.fontSize,
                      lineHeight: fontSizes.bodySmall.lineHeight,
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
                        fontSize: fontSizes.bodySmall.fontSize,
                        lineHeight: fontSizes.bodySmall.lineHeight,
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
            fontSize: fontSizes.bodySmall.fontSize,
            lineHeight: fontSizes.bodySmall.lineHeight,
          }}
        >
          {t(`notes.${details.note}`)}
        </Text>
      )}
    </Column>
  );
}

// Label and copy icon cross-fade with the same feel: fade + scale.
const LABEL_ENTER = EnterTransition.fadeIn().plus(
  EnterTransition.scaleIn({ initialScale: 0.8 }),
);
const LABEL_EXIT = ExitTransition.fadeOut().plus(
  ExitTransition.scaleOut({ targetScale: 0.8 }),
);

type RowLabelProps = {
  label: string;
  copiedLabel: string;
  isCopied: boolean;
};

/** Row label that cross-fades into a green "Copied" for a moment. */
function RowLabel({ label, copiedLabel, isCopied }: RowLabelProps) {
  const { colors, fontFamily, fontSizes } = useTheme();

  const style = {
    fontFamily: fontFamily.regular,
    fontSize: fontSizes.body.fontSize,
    lineHeight: fontSizes.body.lineHeight,
  };

  return (
    <Box contentAlignment="centerStart" modifiers={[padding(0, 0, 8, 0)]}>
      <AnimatedVisibility
        visible={!isCopied}
        enterTransition={LABEL_ENTER}
        exitTransition={LABEL_EXIT}
      >
        <Text color={colors.content.muted.toString()} style={style}>
          {label}
        </Text>
      </AnimatedVisibility>
      <AnimatedVisibility
        visible={isCopied}
        enterTransition={LABEL_ENTER}
        exitTransition={LABEL_EXIT}
      >
        <Text color={colors.semantic.success.toString()} style={style}>
          {copiedLabel}
        </Text>
      </AnimatedVisibility>
    </Box>
  );
}

// The icon swap scales a bit more than the label, like the RN `CopyIcon`.
const ICON_ENTER = EnterTransition.fadeIn().plus(
  EnterTransition.scaleIn({ initialScale: 0.6 }),
);
const ICON_EXIT = ExitTransition.fadeOut().plus(
  ExitTransition.scaleOut({ targetScale: 0.6 }),
);

const COPY_ICON_SIZE = 16;

/** "Copy" icon that cross-fades into a green check once the value is copied. */
function CopyIcon({ isCopied }: { isCopied: boolean }) {
  const { colors } = useTheme();

  return (
    <Box contentAlignment="center">
      <AnimatedVisibility
        visible={!isCopied}
        enterTransition={ICON_ENTER}
        exitTransition={ICON_EXIT}
      >
        <SmallIcon
          source={ContentCopyIcon}
          color={colors.content.muted}
          size={COPY_ICON_SIZE}
        />
      </AnimatedVisibility>
      <AnimatedVisibility
        visible={isCopied}
        enterTransition={ICON_ENTER}
        exitTransition={ICON_EXIT}
      >
        <SmallIcon
          source={CheckIcon}
          color={colors.semantic.success}
          size={COPY_ICON_SIZE}
        />
      </AnimatedVisibility>
    </Box>
  );
}

function Value({ value }: { value: DetailValue }) {
  const { colors, fontFamily, fontSizes } = useTheme();
  const { t } = useTranslation("translation", {
    keyPrefix: "home",
  });

  const textStyle = {
    fontFamily: fontFamily.regular,
    fontSize: fontSizes.bodySmall.fontSize,
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
    icon: ImageSourcePropType,
    label: string,
    iconColor: NonNullable<ColorValue>,
    labelColor: NonNullable<ColorValue> = colors.content.base,
  ) => (
    <Row verticalAlignment="center" horizontalArrangement={{ spacedBy: 4 }}>
      <SmallIcon source={icon} color={iconColor} size={18} />
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
            fontSize: 15,
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
      return withIcon(
        LockIcon,
        t("details.values.hidden"),
        colors.content.muted,
      );

    case "metered":
      return value.value
        ? withIcon(
            DataUsageIcon,
            t("details.values.yes"),
            colors.semantic.caution,
            colors.semantic.caution,
          )
        : withIcon(RemoveIcon, t("details.values.no"), colors.content.muted);

    case "boolean":
      if (value.value === null) {
        return text(t("details.values.unknown"));
      }

      return value.value
        ? withIcon(
            CheckIcon,
            t("details.values.yes"),
            colors.semantic.success,
            colors.semantic.success,
          )
        : withIcon(RemoveIcon, t("details.values.no"), colors.content.muted);
  }
}

type SmallIconProps = {
  source: ImageSourcePropType;
  color: NonNullable<ColorValue>;
  size: number;
};

/**
 * A Material Symbol drawn by Compose itself. No React Native view is hosted
 * here on purpose: inside the sheet's own window an `RNHostView` handles its
 * own touches, so it would swallow taps meant for the row around it.
 */
function SmallIcon({ source, color, size }: SmallIconProps) {
  return <Icon source={source} tint={color} size={size} />;
}
