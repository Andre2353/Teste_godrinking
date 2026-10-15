import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";

export const styles = StyleSheet.create({
    cardSize:{
        borderWidth:2,
        borderColor:"#c531d0",
        borderRadius:11,
        paddingVertical:10,
        paddingHorizontal:15,
        width:75,
        height:80,
        alignItems:"center"
    },
    
    productImage:{
        width:18,
        height:40
    },
    textAmout:{
        color:colors.colorWhite,
        fontWeight:"700"
    },
    textmesure:{
        color:colors.colorHotDrink
    }
    
})
