import { Pressable, Text } from "react-native";
import { styles } from "./style";
// Corrigido o nome (com 'n') e adicionado 'export default'
export const ButtonPrimary = ({ title }) => {
  return (
    
    <Pressable style = {styles.btnPrimary} >
      <Text style={styles.textprimary}>{title}</Text>
    </Pressable>
  );
}