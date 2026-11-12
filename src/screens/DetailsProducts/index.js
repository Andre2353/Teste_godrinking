import { View,Text,Image } from "react-native"
import Imageproduct from "../../assets/images/product1.png"
import cardproduct from "../../assets/images/cardproduct.png"
import { styles } from "./style"

export const DetailsProducts = () =>{
    return(
        <View>
            <View style ={styles.featureproduct}>
               <Image source={Imageproduct}/>
               <View>
                <Image source={cardproduct} style = {styles.imgProduct}/>
                <Image source={cardproduct} style = {styles.imgProduct}/>
                <Image source={cardproduct} style = {styles.imgProduct}/>
                <Image source={cardproduct} style = {styles.imgProduct}/>
                </View> 
            </View>
            <View>
                <Text>269 ml</Text>
            </View>
        </View>
    )
}