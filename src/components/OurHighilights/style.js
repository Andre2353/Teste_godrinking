import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";
import { fonts } from "../../themes/fonts";

export const style = StyleSheet.create({
  container: {
    gap: 10,
  },
  titleWrapper: {
    fontSize: 25,
    fontWeight: "700",
    fontFamily: fonts.fontTitle,
  },
  textOHighlights: {
    color: colors.colorHotDrink,
  },
  ourHighlights: {
    color: colors.colorWhite,
  },
});