import { SettingsSection } from "@/components/ui/settings-section";

import { HighlightItem } from "../highlight-item";

type Props = {
  title: string;
  items: string[];
};

export function HighlightSection({ title, items }: Props) {
  return (
    <SettingsSection title={title} count={items.length}>
      {items.map((item, index) => (
        <HighlightItem key={index.toString()} text={item} />
      ))}
    </SettingsSection>
  );
}
