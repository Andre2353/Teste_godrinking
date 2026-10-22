import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./style";

export const CardProduct = ({ image, title, description }) => {
    return (
        <View style={styles.cardContainer}>
            <Image source={image} style={styles.imgProduct} />
            <View>
                <Text style={styles.titleProduct}>{title}</Text>
                <Text style={styles.descriptionProduct}>{description}</Text>
            </View>


            <Pressable>
                <Text>Saiba mais</Text>
            </Pressable>
        </View>
    );
};