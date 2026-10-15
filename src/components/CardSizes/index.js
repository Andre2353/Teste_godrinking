import { View, Text, Image } from "react-native"
import { styles } from "./style"

export const CardSize = ({ image, amount, measure }) => {
  return (
    <View style={styles.cardSize}>
        <Image style={styles.productImage} source={image} />

        <Text style={styles.textAmout}>{amount}<Text style={styles.textmesure}>{measure}</Text></Text>
    </View>
  )
}