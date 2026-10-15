import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";
export const style= StyleSheet.create({
    btnoutline:{
        borderWidth:2,
        borderColor:colors.colorRoyalBlue,
        borderRadius: 7.,
        width:380,
        paddingVertical: 10,
        gap:10,
        display:"flex"
    },
    txtbtnOutiline:{
        color:colors.colorCyan,

    fontSize:18,
    textAlign:"center"
    }
})