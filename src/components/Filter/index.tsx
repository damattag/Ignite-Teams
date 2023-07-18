import { Container } from "@components/Loading/styles";
import { TouchableOpacityProps } from "react-native";
import { Title } from "./styles";

interface FilterProps extends TouchableOpacityProps {
  title: string;
  isActive?: boolean;
}

export function Filter({ title, isActive = false, ...rest }: FilterProps) {
  return (
    <Container {...rest} isActive={isActive}>
      <Title>
        {title}
      </Title>
    </Container>
  );
}