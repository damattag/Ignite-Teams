import { Container, EmptyListText } from "./styles";

interface EmptyListProps {
  message: string;
}

export function EmptyList({ message }: EmptyListProps) {
  return (
    <Container>
      <EmptyListText>
        {message}
      </EmptyListText>
    </Container>
  )
}