import { View, Text, ScrollView, Image } from "react-native";
import card_verde from "../../assets/image/card_Verde.png";
import card_Roxo from "../../assets/image/card_Roxo.png";
import card_Amarelo from "../../assets/image/card_Amarelo.png";
import { styles } from "./style";

export const OurOffers = () => {
    return (
        <View style = {styles.conteinerouroffers}>
            <Text style={styles.textOurOffers}>
                Nossas <Text style={styles.texto02}>Ofertas</Text>
            </Text>

            <ScrollView style={styles.scroll} horizontal>
                <Image source={card_verde} />
                <Image source={card_Roxo} />
                <Image source={card_Amarelo} />
            </ScrollView>
            
        </View>
    );
};