import theme from '@theme/index';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin: 32px 0;
`;

export const Title = styled.Text`
  text-align: center;

  font-size: ${theme.font_size.xl}px;
  font-family: ${theme.font_family.bold};
  color: ${theme.color.white};
`;

export const SubTitle = styled.Text`
  text-align: center;

  font-size: ${theme.font_size.lg}px;
  font-family: ${theme.font_family.regular};
  color: ${theme.color.gray_300};
`;