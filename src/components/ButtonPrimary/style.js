import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";
import { fonts } from "../../themes/fonts";
export const styles = StyleSheet.create ({
    btnPrimary: {
        backgroundColor:colors.colorHotDrink,
        paddingVertical: 10,
        width:380,
        borderRadius:7,
        gap:12,
        display:"flex"

    },
    textprimary : {
            textAlign: "center",
            fontSize:28,
            color:colors.colorWhite,
            fontFamily:fonts.fontTitle,
            borderColor:colors.colorgray
    }
})

