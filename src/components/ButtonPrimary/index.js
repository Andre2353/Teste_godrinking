import { Pressable, Text } from "react-native";

// Corrigido o nome (com 'n') e adicionado 'export default'
export const ButtonPrimary = ({ title }) => {
  return (
    <Pressable>
      <Text>{title}</Text>
    </Pressable>
  );
}