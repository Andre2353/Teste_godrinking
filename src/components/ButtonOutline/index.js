import { Pressable, Text } from "react-native";
import { style } from "./style";

export const ButtonOutline = ({ title }) => {
  return (
    <Pressable style = {style.btnoutline}>
      <Text style ={style.txtbtnOutiline}>{title}</Text>
    </Pressable>
  );
}