import { Host, Switch as JCSwitch } from "@expo/ui/jetpack-compose";
import { useTheme } from "@/hooks/use-theme";

type Props = {
  value: boolean;
  enabled?: boolean;
};

/**
 * On: solid track in the content color with a thumb in the surface color.
 * Off: dark track with a thin border and a muted thumb.
 */
export function Switch({ value, enabled = true }: Props) {
  const { colors, resolvedTheme } = useTheme();

  return (
    <Host matchContents colorScheme={resolvedTheme}>
      <JCSwitch
        value={value}
        enabled={enabled}
        colors={{
          checkedBorderColor: colors.content.base,
          checkedTrackColor: colors.content.base,
          checkedThumbColor: colors.surface.base,
          checkedIconColor: colors.content.base,

          uncheckedBorderColor: colors.border.default,
          uncheckedTrackColor: colors.surface.base,
          uncheckedThumbColor: colors.content.muted,
          uncheckedIconColor: colors.surface.base,

          disabledCheckedBorderColor: colors.border.default,
          disabledCheckedTrackColor: colors.border.default,
          disabledCheckedThumbColor: colors.surface.base,
          disabledCheckedIconColor: colors.border.default,

          disabledUncheckedBorderColor: colors.border.default,
          disabledUncheckedTrackColor: colors.surface.base,
          disabledUncheckedThumbColor: colors.border.default,
          disabledUncheckedIconColor: colors.surface.base,
        }}
      />
    </Host>
  );
}
