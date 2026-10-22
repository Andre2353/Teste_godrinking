import { View, Image, Text } from "react-native";
import{useFonts}from 'expo-font'
import Logo from "../../assets/image/logo.png"

import { OurOffers } from '../../components/OurOffers';
import { styles } from "./style";
import { AvailableSizes } from "../../components/AvailableSizes";
import { OurHighlights } from "../../components/OurHighilights";


export const Homescreen = () => {
     useFonts({
   Oswald: require('../../assets/fonts/Oswald-VariableFont_wght.ttf')
  })
    return(
        <View style ={styles.conteinerHomesecreen}>
            <Image style={styles.logoHome}source={Logo}/>
            <OurOffers/>
            <AvailableSizes/>
            <OurHighlights/>
          
        </View>
    )
}