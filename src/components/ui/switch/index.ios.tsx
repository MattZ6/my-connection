import { Host, Toggle as SUIToggle } from "@expo/ui/swift-ui";
import { useTheme } from "@/hooks/use-theme";

type Props = {
  value: boolean;
};

export function Switch({ value }: Props) {
  const { resolvedTheme } = useTheme();

  return (
    <Host matchContents colorScheme={resolvedTheme}>
      <SUIToggle isOn={value} />
    </Host>
  );
}
