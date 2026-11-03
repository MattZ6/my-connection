import { SymbolView } from "expo-symbols";
import { Pressable, Text, View } from "react-native";

import { useHaptics } from "@/hooks/use-haptics";
import { useStyles } from "@/hooks/use-styles";

import { androidRippleConfig } from "@/theme/android-ripple";

import { getStyles } from "./styles";

export type StepState = "done" | "active" | "locked";

type Props = {
  index: number;
  state: StepState;
  title: string;
  description: string;
  actionTitle?: string;
  onAction?: () => void;
};

export function StepRow({
  index,
  state,
  title,
  description,
  actionTitle,
  onAction,
}: Props) {
  const styles = useStyles(getStyles);
  const { performTapFeedback } = useHaptics();

  const handleAction = () => {
    performTapFeedback();
    onAction?.();
  };

  return (
    <View style={[styles.container, state === "locked" && styles.locked]}>
      {state === "done" ? (
        <SymbolView
          name={{ android: "check_circle", ios: "checkmark.circle.fill" }}
          size={22}
          tintColor={styles.doneIcon.tintColor}
          style={styles.leading}
        />
      ) : (
        <View
          style={[
            styles.leading,
            styles.number,
            state === "active" ? styles.numberActive : styles.numberLocked,
          ]}
        >
          <Text
            style={[
              styles.numberText,
              state === "active"
                ? styles.numberTextActive
                : styles.numberTextLocked,
            ]}
          >
            {index}
          </Text>
        </View>
      )}

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>

      {state === "active" && !!actionTitle && !!onAction && (
        <Pressable
          onPress={handleAction}
          android_disableSound
          android_ripple={androidRippleConfig}
          accessibilityRole="button"
          style={styles.action}
        >
          <Text style={styles.actionText}>{actionTitle}</Text>
        </Pressable>
      )}
    </View>
  );
}
