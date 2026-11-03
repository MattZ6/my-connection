import {
  Button,
  Column,
  ModalBottomSheet,
  type ModalBottomSheetRef,
  RNHostView,
  Row,
  Shape,
  Surface,
  Text,
  TextButton,
} from "@expo/ui/jetpack-compose";
import {
  fillMaxWidth,
  padding,
  size,
} from "@expo/ui/jetpack-compose/modifiers";
import { type AndroidSymbol, SymbolView } from "expo-symbols";
import type { Ref } from "react";
import { StyleSheet, View } from "react-native";

import { useTheme } from "@/hooks/use-theme";

type Props = {
  ref: Ref<ModalBottomSheetRef>;
  isOpen: boolean;
  icon?: AndroidSymbol;
  title: string;
  description: string;
  onCloseRequest: () => void;
  actionTitle?: string;
  onAction?: () => void;
  dismissTitle?: string;
  footnote?: string;
};

export function LocationBottomSheet({
  ref,
  isOpen,
  icon,
  title,
  description,
  actionTitle,
  onAction,
  onCloseRequest,
  dismissTitle,
  footnote,
}: Props) {
  const { colors, fontSizes, fontFamily, radii } = useTheme();

  if (!isOpen) {
    return null;
  }

  return (
    <ModalBottomSheet
      ref={ref}
      onDismissRequest={onCloseRequest}
      containerColor={colors.surface.elevated}
      contentColor={colors.content.base}
    >
      <Column
        modifiers={[padding(24, 16, 24, 32)]}
        horizontalAlignment="center"
        verticalArrangement={{ spacedBy: 32 }}
      >
        {icon && (
          <Surface
            modifiers={[size(72, 72)]}
            border={{ width: 1, color: colors.border.default }}
            color={colors.surface.elevated}
            shape={Shape.RoundedCorner({
              cornerRadii: {
                topStart: radii["6"],
                topEnd: radii["6"],
                bottomStart: radii["6"],
                bottomEnd: radii["6"],
              },
            })}
          >
            {/* The RN view fills the whole surface and centers the symbol. */}
            <RNHostView matchContents>
              <View style={styles.iconBox}>
                <SymbolView
                  name={{ android: icon }}
                  tintColor={colors.content.muted}
                  size={40}
                />
              </View>
            </RNHostView>
          </Surface>
        )}

        <Column
          horizontalAlignment="center"
          verticalArrangement={{ spacedBy: 16 }}
        >
          <Text
            style={{
              fontFamily: fontFamily.medium,
              fontSize: fontSizes.title.fontSize,
              lineHeight: fontSizes.title.lineHeight,
              textAlign: "center",
            }}
            color={colors.content.base.toString()}
          >
            {title}
          </Text>
          <Text
            style={{
              fontFamily: fontFamily.regular,
              fontSize: fontSizes.body.fontSize,
              lineHeight: fontSizes.body.lineHeight,
              textAlign: "center",
            }}
            color={colors.content.muted.toString()}
          >
            {description}
          </Text>
        </Column>

        {(onAction || dismissTitle) && (
          // Both actions live in one block, closer to each other than to the
          // rest of the sheet.
          <Column
            modifiers={[fillMaxWidth()]}
            verticalArrangement={{ spacedBy: 4 }}
          >
            {onAction && actionTitle && (
              <Button
                modifiers={[fillMaxWidth()]}
                contentPadding={{ bottom: 16, top: 16 }}
                colors={{
                  containerColor: colors.brandContent.base,
                  contentColor: colors.brandSurface.base,
                }}
                onClick={onAction}
              >
                <Text
                  style={{
                    fontFamily: fontFamily.medium,
                    fontSize: fontSizes.body.fontSize,
                    lineHeight: fontSizes.body.lineHeight,
                  }}
                >
                  {actionTitle}
                </Text>
              </Button>
            )}

            {dismissTitle && (
              <TextButton
                modifiers={[fillMaxWidth()]}
                contentPadding={{ bottom: 16, top: 16 }}
                colors={{ contentColor: colors.content.base }}
                onClick={onCloseRequest}
              >
                <Text
                  style={{
                    fontFamily: fontFamily.medium,
                    fontSize: fontSizes.body.fontSize,
                    lineHeight: fontSizes.body.lineHeight,
                  }}
                >
                  {dismissTitle}
                </Text>
              </TextButton>
            )}
          </Column>
        )}

        {footnote && (
          <Row
            verticalAlignment="center"
            horizontalArrangement={{ spacedBy: 6 }}
          >
            <RNHostView matchContents>
              <SymbolView
                name={{ android: "shield" }}
                tintColor={colors.content.muted}
                size={16}
              />
            </RNHostView>
            <Text
              style={{
                fontFamily: fontFamily.regular,
                fontSize: fontSizes.label.fontSize,
                lineHeight: fontSizes.label.lineHeight,
              }}
              color={colors.content.muted.toString()}
            >
              {footnote}
            </Text>
          </Row>
        )}
      </Column>
    </ModalBottomSheet>
  );
}

const styles = StyleSheet.create({
  iconBox: {
    width: 72,
    height: 72,
    alignItems: "center",
    justifyContent: "center",
  },
});
