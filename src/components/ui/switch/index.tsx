import { Host, Switch as JCSwitch } from "@expo/ui/jetpack-compose";
import { useTheme } from "@/hooks/use-theme";

type Props = {
  value: boolean;
};

export function Switch({ value }: Props) {
  const { colors, resolvedTheme } = useTheme();

  return (
    <Host matchContents colorScheme={resolvedTheme}>
      <JCSwitch
        value={value}
        colors={{
          checkedBorderColor: colors.brandSurface.elevated,
          checkedTrackColor: colors.brandSurface.elevated,
          checkedThumbColor: colors.brandContent.base,
          checkedIconColor: colors.brandContent.base,

          uncheckedBorderColor: colors.brandSurface.base,
          uncheckedTrackColor: colors.brandSurface.base,
          uncheckedThumbColor: colors.brandContent.base,
          uncheckedIconColor: colors.brandContent.base,

          disabledCheckedBorderColor: colors.border.default,
          disabledCheckedTrackColor: colors.surface.elevated,
          disabledCheckedThumbColor: colors.border.default,
          disabledCheckedIconColor: colors.border.default,

          disabledUncheckedBorderColor: colors.border.default,
          disabledUncheckedTrackColor: colors.surface.elevated,
          disabledUncheckedThumbColor: colors.border.default,
          disabledUncheckedIconColor: colors.border.default,
        }}
      />
    </Host>
  );
}
