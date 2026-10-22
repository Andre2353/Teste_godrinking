import { StyleSheet } from "react-native";
import { fonts } from "../../themes/fonts";
import { colors } from "../../themes/colors";

export const styles = StyleSheet.create({
  cardContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderColor:colors.colorbliantepink,
    borderWidth: 2,
    borderRadius: 13,
    backgroundColor:"#270053",
    width:185,
    alignItems:"center",
    gap:10
  },
  imgProduct: {
    width: 50,
    height: 110,
  },
  titleProduct: {
    fontSize: 24,
    fontWeight: "400",
    fontFamily: fonts.fontTitle,
    color: colors.colorWhite,
    alignSelf:"flex-start"
  },
  descriptionProduct: {
    fontSize: 15,
    fontWeight: "400",
    fontFamily: fonts.fontBody,
    color: colors.colorWhite,
  },
  btnlearmore:{
    width:155,
    paddingVertical:5,
    borderRadius:5
  },
  txtbtn:{
    fontSize:15,
    color:colors.colorWhite,
    fontFamily:fonts.fontBody,
    textAlign:"center"
  }
});