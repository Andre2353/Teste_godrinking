import { Image,Text, ScrollView, TextInput, View } from "react-native"
import logo from '../../assets/images/logo.png'
import filterIcon from '../../assets/images/filterIcon.png'
import {styles } from "./style"
import { CardProduct } from "../../components/CardProduct"
import lata from "../../assets/images/imageProduct.png"

export const ProductsScreen = () =>{
    return(
        <ScrollView contentContainerStyle={styles.containerProductsScreen}>

            <Image source={logo}/>            

            <View>
                <TextInput style={styles.input}/>
                <Image source={filterIcon}/>
            </View>
            <View style ={styles.ourProduct}>
            <View>
                <Text style={styles.textourProduct}>Nossos</Text>
                <Text style={styles.textaltaluz}>Produltos</Text>
            </View>
            <View style = {styles.contenderproduct}>
                <CardProduct image={lata} title="TNT" description="O Sabor Original de TNT Energy. Uma bebida refrescane com sabor doce e totalmente brasileiro"/>
                <CardProduct image={lata} title="TNT" description="O Sabor Original de TNT Energy. Uma bebida refrescane com sabor doce e totalmente brasileiro"/>
                <CardProduct image={lata} title="TNT" description="O Sabor Original de TNT Energy. Uma bebida refrescane com sabor doce e totalmente brasileiro"/>
                <CardProduct image={lata} title="TNT" description="O Sabor Original de TNT Energy. Uma bebida refrescane com sabor doce e totalmente brasileiro"/>
                <CardProduct image={lata} title="TNT" description="O Sabor Original de TNT Energy. Uma bebida refrescane com sabor doce e totalmente brasileiro"/>
                <CardProduct image={lata} title="TNT" description="O Sabor Original de TNT Energy. Uma bebida refrescane com sabor doce e totalmente brasileiro"/>
                <CardProduct image={lata} title="TNT" description="O Sabor Original de TNT Energy. Uma bebida refrescane com sabor doce e totalmente brasileiro"/>
                <CardProduct image={lata} title="TNT" description="O Sabor Original de TNT Energy. Uma bebida refrescane com sabor doce e totalmente brasileiro"/>
                <CardProduct image={lata} title="TNT" description="O Sabor Original de TNT Energy. Uma bebida refrescane com sabor doce e totalmente brasileiro"/>
                <CardProduct image={lata} title="TNT" description="O Sabor Original de TNT Energy. Uma bebida refrescane com sabor doce e totalmente brasileiro"/>
                <CardProduct image={lata} title="TNT" description="O Sabor Original de TNT Energy. Uma bebida refrescane com sabor doce e totalmente brasileiro"/>
            </View>
            </View>

        </ScrollView>
    )
}