import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { ButtonTypeStyleProps } from "src/@types/button";
import theme from "@theme/index";

interface ButtonIconProps {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;
  
  justify-content: center;
  align-items: center;
  
  margin-left: 12px;
`;


export const Icon = styled(MaterialIcons).attrs(({type}: ButtonIconProps) => ({
  size: 24,
  color: type === 'PRIMARY' ? theme.color.green_700 : theme.color.red,
}))``;