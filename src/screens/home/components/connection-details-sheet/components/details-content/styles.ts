import { StyleSheet } from "react-native";

import type { ThemeConfig } from "@/theme/types";

export function getStyles(theme: ThemeConfig) {
  return StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      paddingBottom: 24,
      gap: 20,
    },
    title: {
      fontFamily: theme.fontFamily.semiBold,
      fontSize: 20,
      lineHeight: 28,
      color: theme.colors.content.base,
    },
    group: {
      gap: 8,
    },
    groupTitle: {
      fontFamily: theme.fontFamily.mono.regular,
      fontSize: 11,
      lineHeight: 16,
      letterSpacing: 1,
      textTransform: "uppercase",
      color: theme.colors.content.muted,
    },
    card: {
      borderRadius: theme.radii[6],
      backgroundColor: theme.colors.surface.base,
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16,
      minHeight: 48,
      paddingHorizontal: 16,
      paddingVertical: 12,
    },
    rowDivider: {
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: theme.colors.border.default,
    },
    rowLabel: {
      flexShrink: 0,
      fontFamily: theme.fontFamily.regular,
      fontSize: 14,
      lineHeight: 20,
      color: theme.colors.content.muted,
    },
    value: {
      flexShrink: 1,
      textAlign: "right",
      fontFamily: theme.fontFamily.regular,
      fontSize: 14,
      lineHeight: 20,
      color: theme.colors.content.base,
    },
    mono: {
      fontFamily: theme.fontFamily.mono.regular,
      fontSize: 13,
    },
    iconValue: {
      flexDirection: "row",
      alignItems: "center",
      gap: 4,
    },
    note: {
      fontFamily: theme.fontFamily.regular,
      fontSize: 13,
      lineHeight: 18,
      color: theme.colors.content.muted,
    },
    hiddenNote: {
      flexDirection: "row",
      gap: 12,
      padding: 16,
      borderRadius: theme.radii[6],
      borderWidth: 1,
      borderColor: theme.colors.border.default,
    },
    hiddenNoteContent: {
      flex: 1,
      gap: 12,
      alignItems: "flex-start",
    },
    hiddenNoteText: {
      fontFamily: theme.fontFamily.regular,
      fontSize: 13,
      lineHeight: 18,
      color: theme.colors.content.muted,
    },
    allowContainer: {
      borderRadius: theme.radii.full,
      overflow: "hidden",
    },
    allowButton: {
      height: 36,
      paddingHorizontal: 14,
      justifyContent: "center",
      borderRadius: theme.radii.full,
      backgroundColor: theme.colors.content.base,
    },
    allowLabel: {
      fontFamily: theme.fontFamily.medium,
      fontSize: 13,
      lineHeight: 18,
      color: theme.colors.surface.base,
    },
  });
}
