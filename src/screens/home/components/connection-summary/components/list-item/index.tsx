import {
  SectionItemContent,
  SectionItemHint,
  SectionItemLabel,
  SectionItemRoot,
  SectionItemTrailing,
  SectionItemValue,
} from "@/components/ui/section";

import { useStyles } from "@/hooks/use-styles";

import { getStyles } from "./styles";

type Props = {
  label: string;
  hint?: string;
  value: string;
};

export function ListItem({ label, hint, value }: Props) {
  const styles = useStyles(getStyles);

  return (
    <SectionItemRoot style={styles.container}>
      <SectionItemContent>
        <SectionItemLabel style={styles.label}>{label}</SectionItemLabel>
        {!!hint && <SectionItemHint>{hint}</SectionItemHint>}
      </SectionItemContent>
      <SectionItemTrailing>
        <SectionItemValue>{value}</SectionItemValue>
      </SectionItemTrailing>
    </SectionItemRoot>
  );
}
