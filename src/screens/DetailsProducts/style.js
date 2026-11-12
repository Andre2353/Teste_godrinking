import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";

export const styles = StyleSheet.create({
    featureproduct:{
        backgroundColor: colors.colorDarkPurple,
        flexDirection:"row",
        gap:45,
        justifyContent:"flex-end",
        alignItems:"center",
        paddingRight:25,
        paddingVertical:25,                         
    },
    imgProduct:{
        gap:20
    }
})