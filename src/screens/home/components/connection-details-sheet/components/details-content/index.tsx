import { SymbolView } from "expo-symbols";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { type ColorValue, Pressable, Text, View } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

import { useStyles } from "@/hooks/use-styles";
import { useTheme } from "@/hooks/use-theme";

import { androidRippleConfig } from "@/theme/android-ripple";

import { useCopyToClipboard } from "../../../../hooks/use-copy-to-clipboard";
import type {
  ConnectionDetails,
  DetailRow,
  DetailValue,
} from "../../../../utils/connection-details";
import { CopyIcon } from "../../../copy-icon";

import { getStyles } from "./styles";

const LABEL_ENTERING = FadeIn.duration(200);
const LABEL_EXITING = FadeOut.duration(200);

type Props = {
  details: ConnectionDetails;
  onAllowAccess: () => void;
};

export function DetailsContent({ details, onAllowAccess }: Props) {
  const styles = useStyles(getStyles);
  const { t } = useTranslation("translation", {
    keyPrefix: "home.details",
  });
  const { copiedKey, copy } = useCopyToClipboard<DetailRow["label"]>();

  return (
    <View style={styles.container}>
      <Text style={styles.title} accessibilityRole="header">
        {t("title")}
      </Text>

      {details.groups.map((group, groupIndex) => (
        <Fragment key={group.title}>
          <View style={styles.group}>
            <Text style={styles.groupTitle}>
              {t(`sections.${group.title}`)}
            </Text>

            <View style={styles.card}>
              {group.rows.map((row, index) => {
                const { copyValue } = row;
                const isCopied = copiedKey === row.label;

                return (
                  <Pressable
                    key={row.label}
                    // No taps while the "Copied" feedback is showing.
                    disabled={!copyValue || isCopied}
                    onPress={() => copyValue && copy(row.label, copyValue)}
                    android_ripple={androidRippleConfig}
                    style={[
                      styles.row,
                      index < group.rows.length - 1 && styles.rowDivider,
                    ]}
                  >
                    {/* The label cross-fades into "Copied" for a moment. */}
                    <Animated.Text
                      key={isCopied ? "copied" : "label"}
                      entering={LABEL_ENTERING}
                      exiting={LABEL_EXITING}
                      style={[
                        styles.rowLabel,
                        isCopied && styles.rowLabelCopied,
                      ]}
                    >
                      {isCopied ? t("copied") : t(`fields.${row.label}`)}
                    </Animated.Text>
                    <View style={styles.rowTrailing}>
                      <Value value={row.value} />
                      {copyValue && <CopyIcon isCopied={isCopied} />}
                    </View>
                  </Pressable>
                );
              })}
            </View>
          </View>

          {/* The hidden network note sits right below the Network group. */}
          {groupIndex === 0 && details.note === "hidden_network" && (
            <HiddenNetworkNote onAllowAccess={onAllowAccess} />
          )}
        </Fragment>
      ))}

      {details.note && details.note !== "hidden_network" && (
        <Text style={styles.note}>{t(`notes.${details.note}`)}</Text>
      )}
    </View>
  );
}

function Value({ value }: { value: DetailValue }) {
  const theme = useTheme();
  const styles = useStyles(getStyles);
  const { t } = useTranslation("translation", {
    keyPrefix: "home",
  });

  switch (value.kind) {
    case "mono":
      return <Text style={[styles.value, styles.mono]}>{value.text}</Text>;

    case "text":
      return <Text style={styles.value}>{value.text}</Text>;

    case "translated":
      return <Text style={styles.value}>{t(value.key, value.params)}</Text>;

    case "hidden":
      return (
        <IconValue
          icon="lock"
          iconColor={theme.colors.content.muted}
          label={t("details.values.hidden")}
        />
      );

    case "metered":
      return value.value ? (
        <IconValue
          icon="data_usage"
          iconColor={theme.colors.semantic.caution}
          label={t("details.values.yes")}
          labelColor={theme.colors.semantic.caution}
        />
      ) : (
        <IconValue
          icon="remove"
          iconColor={theme.colors.content.muted}
          label={t("details.values.no")}
        />
      );

    case "boolean":
      if (value.value === null) {
        return <Text style={styles.value}>{t("details.values.unknown")}</Text>;
      }

      return value.value ? (
        <IconValue
          icon="check"
          iconColor={theme.colors.semantic.success}
          label={t("details.values.yes")}
          labelColor={theme.colors.semantic.success}
        />
      ) : (
        <IconValue
          icon="remove"
          iconColor={theme.colors.content.muted}
          label={t("details.values.no")}
        />
      );
  }
}

type IconValueProps = {
  icon: "lock" | "data_usage" | "remove" | "check";
  iconColor: ColorValue;
  label: string;
  labelColor?: ColorValue;
};

function IconValue({ icon, iconColor, label, labelColor }: IconValueProps) {
  const styles = useStyles(getStyles);

  return (
    <View style={styles.iconValue}>
      <SymbolView name={{ android: icon }} size={18} tintColor={iconColor} />
      <Text style={[styles.value, labelColor ? { color: labelColor } : null]}>
        {label}
      </Text>
    </View>
  );
}

function HiddenNetworkNote({ onAllowAccess }: { onAllowAccess: () => void }) {
  const theme = useTheme();
  const styles = useStyles(getStyles);
  const { t } = useTranslation("translation", {
    keyPrefix: "home.details.notes",
  });

  return (
    <View style={styles.hiddenNote}>
      <SymbolView
        name={{ android: "location_on" }}
        size={20}
        tintColor={theme.colors.content.muted}
      />
      <View style={styles.hiddenNoteContent}>
        <Text style={styles.hiddenNoteText}>{t("hidden_network")}</Text>
        <View style={styles.allowContainer}>
          <Pressable
            style={styles.allowButton}
            android_ripple={androidRippleConfig}
            onPress={onAllowAccess}
            accessibilityRole="button"
          >
            <Text style={styles.allowLabel}>{t("allow_access")}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
