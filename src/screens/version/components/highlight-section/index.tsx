import { View } from "react-native";

import { Card } from "@/components/ui/card";
import { SectionDivider } from "@/components/ui/section";

import { useStyles } from "@/hooks/use-styles";

import { Header } from "./components/header";
import { Item } from "./components/item";

import { getStyles } from "./styles";

type Highlight = {
  type: string;
  title: string;
  items: string[];
};

type Props = {
  section: Highlight;
};

export function HighlightSection({ section }: Props) {
  const styles = useStyles(getStyles);

  return (
    <Card style={styles.card}>
      <Header title={section.title} type={section.type} />

      <SectionDivider horizontalMargin={false} />

      <View style={styles.list}>
        {section.items.map((paragraph, index) => (
          <Item key={index.toString()} text={paragraph} />
        ))}
      </View>
    </Card>
  );
}
