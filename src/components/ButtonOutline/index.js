import { Pressable, Text } from "react-native";

export const ButtonOutline = ({ title }) => {
  return (
    <Pressable>
      <Text>{title}</Text>
    </Pressable>
  );
}