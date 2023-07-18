import styled from "styled-components";
import { TextInput } from "react-native";
import { css } from "styled-components/native";

export const Container = styled(TextInput)`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  ${({ theme }) => css`
    background-color: ${theme.color.gray_700};
    color: ${theme.color.white};

    font-family: ${theme.font_family.regular};
    font-size: ${theme.font_size.md}px;
  `}


  border-radius: 6px;
  padding: 16px;
`;