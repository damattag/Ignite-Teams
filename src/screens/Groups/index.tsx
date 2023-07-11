import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';

import { Container } from './styles';

export function Groups() {
  return (
    <Container>
      <Header />
      <Highlight title="Grupos" subtitle="Aqui você pode ver todos os grupos que você participa." />
    </Container>
  );
}
