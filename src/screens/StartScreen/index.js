import { View, Image, Text } from "react-native";

// Importações diretas (sem chaves se forem 'export default')
import {ButtonPrimary} from "../../components/ButtonPrimary";
import {ButtonOutline} from "../../components/ButtonOutline";
import logo from "../../assets/logo.png";
import { styles } from "./style";
//import{useFonts}from 'expo-font'

export const StartScreen = () => {
 
  // useFonts({
  // //  Oswald: require('../../assets/fonts/Oswald-VariableFont_wght.ttf')
  // })
  return (

    <View style = {styles.containerStartScreen}> 
      <Image source={logo} />
    
      <Text style ={styles.textStartScreen}>
        Seu app para comprar energéticos de forma rápida, prática e segura.
        Encontre suas marcas favoritas e receba onde estiver.
      </Text>

      <ButtonPrimary title="Entrar" />
      <ButtonOutline title="Cadastrar" />
    </View>
  );
};