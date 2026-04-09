import {
  Button,
  Column,
  ModalBottomSheet,
  type ModalBottomSheetRef,
  RNHostView,
  Shape,
  Surface,
  Text,
} from "@expo/ui/jetpack-compose";
import {
  fillMaxWidth,
  padding,
  size,
} from "@expo/ui/jetpack-compose/modifiers";
import { type AndroidSymbol, SymbolView } from "expo-symbols";
import type { Ref } from "react";

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
            <Column horizontalAlignment="center" verticalArrangement="center">
              <RNHostView matchContents modifiers={[size(72, 72)]}>
                <SymbolView
                  name={{ android: icon }}
                  tintColor={colors.content.muted}
                  size={44}
                />
              </RNHostView>
            </Column>
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
      </Column>
    </ModalBottomSheet>
  );
}
