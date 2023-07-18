import theme from "@theme/index";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${theme.color.gray_600};

  padding: 24px;
`;

export const Form = styled.View`
  width: 100%;
  background-color: ${theme.color.gray_700};

  flex-direction: row;
  justify-content: space-between;

  border-radius: 6px;
`;

export const HeaderList = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  margin: 32px 0 12px;
`;

export const NumberOfPlayers = styled.Text`
  ${() => css`
    color: ${theme.color.gray_200};
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.sm}px;
  `};
`;
