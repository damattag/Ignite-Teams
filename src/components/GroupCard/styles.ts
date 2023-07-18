import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { UsersThree } from "phosphor-react-native";

import theme from "@theme/index";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;

  background-color: ${theme.color.gray_500};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;

  padding: 24px;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  font-size: ${theme.font_size.md}px;
  color: ${theme.color.gray_200};
  font-family: ${theme.font_family.regular};
`;

export const Icon = styled(UsersThree).attrs({
  size: 32,
  color: theme.color.green_700,
  weight: 'fill',
})`
  margin-right: 20px;
`;