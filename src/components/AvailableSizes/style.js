import { StyleSheet } from "react-native";
import { fonts } from "../../themes/fonts";
import { colors } from "../../themes/colors";

export const styles = StyleSheet.create({
    conteinerAvaibleSize:{
        gap:10,
        
    },
    textTItle:{
        fontSize:25,
        fontWeight:"700",
        fontFamily:fonts.fontTitle,
        color: colors.colorWhite
    },
    textHiglight:{
        color:colors.colorHotDrink
    }
})