import { TextInputProps } from 'react-native';
import { Container } from './styles';
import { useTheme } from 'styled-components/native';

export function Input({ ...rest }: TextInputProps) {
  const { color } = useTheme();

  return (
    <Container
      placeholderTextColor={color.gray_300}
      {...rest}
    />
  );
}