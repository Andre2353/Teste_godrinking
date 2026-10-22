import { View, Text, ScrollView } from "react-native"
import { CardSize } from "../CardSizes"
import Lata from "../../assets/image/Latinha.png"
import Garrafa from "../../assets/image/garrafa_nova.png"
import { styles } from "./style"

export const AvailableSizes = () => {
    return (
        <View style={styles.conteinerAvaibleSize}>
            <Text style={styles.textTItle}>
                Tamanhos <Text style={styles.textHiglight}>Disponiveis</Text>
            </Text>
            
            <ScrollView 
                horizontal
                contentContainerStyle={{ gap: 12 }} 
            >
                <CardSize image={Lata} amount="269" measure="ml"/>
                <CardSize image={Lata} amount="350" measure="ml"/>
                <CardSize image={Lata} amount="429" measure="ml"/>
                <CardSize image={Garrafa} amount="1" measure="L"/>
                <CardSize image={Garrafa} amount="1,5" measure="L"/>
                <CardSize image={Lata} amount="3" measure="L"/>
                <CardSize image={Lata} amount="9" measure="L"/>
            </ScrollView>
        </View>
    )
}