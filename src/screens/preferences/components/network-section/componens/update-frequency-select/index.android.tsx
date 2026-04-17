import {
  Column,
  DropdownMenu,
  DropdownMenuItem,
  Host,
  RNHostView,
  Row,
  Spacer,
  Surface,
  Text,
} from "@expo/ui/jetpack-compose";
import { paddingAll, weight, width } from "@expo/ui/jetpack-compose/modifiers";
import { SymbolView } from "expo-symbols";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import type { NetworkUpdatesContextTypes } from "@/contexts/network-updates/types";
import { useHaptics } from "@/hooks/use-haptics";
import { useTheme } from "@/hooks/use-theme";

type Props = {
  value: NetworkUpdatesContextTypes.UpdateFrequency;
  onChange: (value: NetworkUpdatesContextTypes.UpdateFrequency) => void;
};

const OPTIONS: NetworkUpdatesContextTypes.UpdateFrequency[] = [
  "15s",
  "30s",
  "60s",
];

export function UpdateFrequencySelect({ value, onChange }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { performTapFeedback, performSelectFeedback } = useHaptics();
  const { fontFamily, fontSizes, colors, resolvedTheme } = useTheme();
  const { t } = useTranslation("translation", {
    keyPrefix: "preferences.sections.network_updates.fields.frequency",
  });

  const text = String(value);

  const handleOpenMenu = useCallback(() => {
    performTapFeedback();
    setIsExpanded(true);
  }, [performTapFeedback]);

  const handleCloseMenu = useCallback(() => {
    setIsExpanded(false);
  }, []);

  const handleSelect = useCallback(
    (value: NetworkUpdatesContextTypes.UpdateFrequency) => {
      performSelectFeedback();
      setIsExpanded(false);
      onChange(value);
    },
    [performSelectFeedback, onChange],
  );

  return (
    <Host matchContents={{ vertical: true }} colorScheme={resolvedTheme}>
      <Surface onClick={handleOpenMenu} color="transparent">
        <Row
          horizontalArrangement="spaceBetween"
          verticalAlignment="center"
          modifiers={[paddingAll(16)]}
        >
          <Column modifiers={[weight(1)]}>
            <Text
              style={{
                fontFamily: fontFamily.medium,
                fontSize: fontSizes.body.fontSize,
                lineHeight: fontSizes.body.lineHeight,
              }}
              color={colors.content.base.toString()}
            >
              {t("title")}
            </Text>
          </Column>

          <Spacer modifiers={[width(16)]} />

          <Text
            style={{
              fontFamily: fontFamily.regular,
              fontSize: fontSizes.body.fontSize,
              lineHeight: fontSizes.body.lineHeight,
            }}
            color={colors.content.muted.toString()}
          >
            {text}
          </Text>

          <Spacer modifiers={[width(8)]} />

          <DropdownMenu
            expanded={isExpanded}
            onDismissRequest={handleCloseMenu}
            color={colors.surface.base}
          >
            <DropdownMenu.Trigger>
              <RNHostView matchContents>
                <SymbolView
                  name={{ android: "keyboard_arrow_down" }}
                  size={24}
                  tintColor={colors.content.muted}
                />
              </RNHostView>
            </DropdownMenu.Trigger>

            <DropdownMenu.Items>
              {OPTIONS.map((option) => (
                <DropdownMenuItem
                  key={option}
                  elementColors={{
                    textColor: colors.content.base,
                    disabledTextColor: colors.content.muted,
                  }}
                  onClick={() => handleSelect(option)}
                >
                  <DropdownMenuItem.Text>
                    <Text
                      style={{
                        fontFamily: fontFamily.medium,
                        fontSize: fontSizes.body.fontSize,
                        lineHeight: fontSizes.body.lineHeight,
                      }}
                    >
                      {option}
                    </Text>
                  </DropdownMenuItem.Text>
                  <DropdownMenuItem.TrailingIcon>
                    {option === value && (
                      <RNHostView matchContents>
                        <SymbolView
                          name={{ android: "check" }}
                          size={24}
                          tintColor={colors.brandContent.base}
                        />
                      </RNHostView>
                    )}
                  </DropdownMenuItem.TrailingIcon>
                </DropdownMenuItem>
              ))}
            </DropdownMenu.Items>
          </DropdownMenu>
        </Row>
      </Surface>
    </Host>
  );
}
