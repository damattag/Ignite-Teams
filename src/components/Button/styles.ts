import theme from "@theme/index";
import { TouchableOpacity } from "react-native";
import { ButtonTypeStyleProps } from "src/@types/button";
import styled from "styled-components/native";

export interface ButtonProps {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity) <ButtonProps>`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  background-color: ${({ type }: ButtonProps) => type === 'PRIMARY' ? theme.color.green_700 : theme.color.red_dark};

  border-radius: 6px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${theme.font_size.md}px;
  font-family: ${theme.font_family.bold};
  color: ${theme.color.white};
`;