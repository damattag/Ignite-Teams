import theme from "@theme/index";
import styled from "styled-components/native";
import { UsersThree } from "phosphor-react-native"

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.color.gray_600};
  padding: 24px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Icon = styled(UsersThree).attrs({
  color: theme.color.green_700,
  size: 56,
})`
  align-self: center;
`;