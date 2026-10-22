import { ScrollView, Text, View } from "react-native";
import { CardProduct } from "../CardProduct";
import Tnt_roxo from "../../assets/image/Latinha.png";
import { style } from "./style";

export const OurHighlights = () => {
  return (
    <View style={style.container}>
      
      <Text style={style.titleWrapper}>
        <Text style={style.ourHighlights}>Nossos </Text>
        <Text style={style.textOHighlights}>Destaques</Text>
      </Text>

     
        <CardProduct 
          image={Tnt_roxo} 
          title="Tnt roxo" 
          description="nosso sabor conta com...."
        />
      
    </View>
  );
};