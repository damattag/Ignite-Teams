import theme from "@theme/index";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${theme.color.gray_600};
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs({
  size: "large",
  color: theme.color.green_700,
})``;

