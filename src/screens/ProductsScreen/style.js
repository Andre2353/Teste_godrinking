import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";

export const styles = StyleSheet.create({
    containerProductsScreen:{
        backgroundColor: colors.colorDarkPurple,
        gap: 40,
        paddingLeft: 20
    },
    imgLogo:{
        width: 140,
        height: 55
    },
    input:{
        width: 338,
        height: 40,
        backgroundColor: "rgba(222, 30, 236, 0.21)",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#DE1EEC",
        color:colors.colorWhite
    },
    conteinerinput:{
        flexDirection: "row",
        gap:10,
        alignItems:"center"
    },
    ourProduct:{
        gap:10,
    },
    textourProduct:{
        fontSize:40,
        fontWeight:"700",
        color:colors.colorWhite
    },
    textaltaluz:{
        fontSize:40,
        fontWeight:"700",
        color:colors.colorHotDrink
    },
    contenderproduct:{
        flexDirection:"row",
        flexWrap:"wrap",
        gap:10
    },
})