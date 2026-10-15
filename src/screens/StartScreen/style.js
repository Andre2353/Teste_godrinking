import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";
import { fonts } from "../../themes/fonts";

 
 export const styles = StyleSheet.create({
     containerStartScreen:{
        backgroundColor:colors.colorDarkPurple,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flex:1,
        gap:40
        
        
     },
     textStartScreen :{
        fontFamily:fonts.fontBody,
        width:380,
        fontSize:25,
        color:colors.colorgray,
        textAlign:"center"
     }
 })