import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import theme from "@theme/index";

type FilterProps = {
  isActive?: boolean;
}

export const Container = styled(TouchableOpacity) <FilterProps>`
  ${({ isActive }: FilterProps) => isActive && css`
    border: 1px solid ${theme.color.green_700};
  `};

  border-radius: 4px;
  margin-right: 12px;

  height: 38px;
  width: 70px;

  align-items: center;
  justify-content: center;
`; 

export const Title = styled.Text`
  text-transform: uppercase;

  font-family: ${theme.font_family.bold};
  font-size: ${theme.font_size.sm}px;
  color: ${theme.color.white};
`;

