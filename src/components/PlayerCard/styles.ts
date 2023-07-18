import theme from "@theme/index";
import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
  width: 100%;
  height: 56px;

  background-color: ${theme.color.gray_500};
  border-radius: 6px;


  flex-direction: row;
  align-items: center;

  margin-bottom: 16px;
`;

export const Name = styled.Text`
  flex: 1;
  ${() => css`
    font-family: ${theme.font_family.regular};
    font-size: ${theme.font_size.md}px;
    color: ${theme.color.gray_200};
  `};
`;

export const Icon = styled(MaterialIcons).attrs({
  size: 24,
  color: theme.color.gray_200,
})`
  margin-right: 4px;
  margin-left: 16px;
`;  