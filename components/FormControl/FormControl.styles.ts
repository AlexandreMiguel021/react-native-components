import { StyleSheet } from "react-native";
import { theme } from "@theme";

const { colors, fontSizes } = theme;

export const styles = StyleSheet.create({
  insideInputLabel: {
    position: "absolute",
    zIndex: 1,
    left: 14,
    top: 8,
  },
  errorMessage: {
    color: colors.red[500],
    fontSize: fontSizes.sm,
    left: 2,
    marginTop: 2,
  },
});
